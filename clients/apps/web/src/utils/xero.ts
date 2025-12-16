/**
 * Xero API Integration for Client Portal
 * Fetches projects, invoices, and time entries for clients
 * Tokens are stored in Supabase for serverless compatibility
 */

import { supabase } from './supabase'

const XERO_CLIENT_ID = process.env.XERO_CLIENT_ID
const XERO_CLIENT_SECRET = process.env.XERO_CLIENT_SECRET
const XERO_TENANT_ID = process.env.XERO_TENANT_ID

interface XeroTokens {
  access_token: string
  refresh_token: string
  expires_at: string
}

// Get tokens from Supabase
async function getStoredTokens(): Promise<XeroTokens | null> {
  try {
    const { data, error } = await supabase
      .from('xero_tokens')
      .select('*')
      .eq('id', 'default')
      .single()

    if (error || !data) {
      console.log('No stored Xero tokens found')
      return null
    }

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: data.expires_at
    }
  } catch (error) {
    console.error('Error fetching Xero tokens:', error)
    return null
  }
}

// Store tokens in Supabase
async function storeTokens(tokens: XeroTokens): Promise<void> {
  try {
    const { error } = await supabase
      .from('xero_tokens')
      .upsert({
        id: 'default',
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_at: tokens.expires_at,
        updated_at: new Date().toISOString()
      })

    if (error) {
      console.error('Error storing Xero tokens:', error)
    }
  } catch (error) {
    console.error('Error storing Xero tokens:', error)
  }
}

async function refreshXeroToken(): Promise<string> {
  const tokens = await getStoredTokens()

  if (!tokens) {
    throw new Error('Xero tokens not found. Please run initial OAuth setup.')
  }

  const expiresAt = tokens.expires_at ? new Date(tokens.expires_at) : new Date(0)
  const now = new Date()

  // Refresh if expired or expiring in next 5 minutes
  const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000)

  if (fiveMinutesFromNow >= expiresAt) {
    console.log('Xero token expired or expiring soon, refreshing...')

    if (!XERO_CLIENT_ID || !XERO_CLIENT_SECRET) {
      throw new Error('Xero credentials not configured')
    }

    const response = await fetch('https://identity.xero.com/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${XERO_CLIENT_ID}:${XERO_CLIENT_SECRET}`).toString('base64')
      },
      body: `grant_type=refresh_token&refresh_token=${tokens.refresh_token}`
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Token refresh failed:', errorText)
      throw new Error(`Token refresh failed: ${response.status}`)
    }

    const newTokens = await response.json()
    const updatedTokens: XeroTokens = {
      access_token: newTokens.access_token,
      refresh_token: newTokens.refresh_token,
      expires_at: new Date(Date.now() + (newTokens.expires_in * 1000)).toISOString()
    }

    await storeTokens(updatedTokens)
    console.log('Xero token refreshed successfully')

    return updatedTokens.access_token
  }

  return tokens.access_token
}

async function xeroApiCall(endpoint: string): Promise<any> {
  const accessToken = await refreshXeroToken()

  const response = await fetch(`https://api.xero.com/api.xro/2.0/${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Xero-Tenant-Id': XERO_TENANT_ID!,
      'Accept': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Xero API failed: ${response.status} - ${endpoint}`)
  }

  return response.json()
}

async function xeroProjectsApiCall(endpoint: string): Promise<any> {
  const accessToken = await refreshXeroToken()

  const response = await fetch(`https://api.xero.com/projects.xro/2.0/${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Xero-Tenant-Id': XERO_TENANT_ID!,
      'Accept': 'application/json'
    }
  })

  if (!response.ok) {
    console.log(`Projects API returned ${response.status} for ${endpoint}`)
    return null
  }

  return response.json()
}

// Get Xero contact by email
export async function getContactByEmail(email: string) {
  try {
    const data = await xeroApiCall(`Contacts?where=EmailAddress="${email}"`)
    const contacts = data.Contacts || []
    return contacts[0] || null
  } catch (error) {
    console.error('Error fetching contact:', error)
    return null
  }
}

// Get all contacts (for admin to link clients)
export async function getAllContacts() {
  try {
    const data = await xeroApiCall('Contacts?order=Name')
    return data.Contacts || []
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return []
  }
}

// Get invoices for a specific contact
export async function getInvoicesForContact(contactId: string) {
  try {
    const data = await xeroApiCall(`Invoices?where=Contact.ContactID=guid("${contactId}")&order=Date DESC`)
    const invoices = data.Invoices || []

    const today = new Date()

    return invoices.map((inv: any) => {
      const dueDate = inv.DueDateString ? new Date(inv.DueDateString) : null
      const daysOverdue = dueDate ? Math.floor((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)) : 0

      return {
        id: inv.InvoiceID,
        number: inv.InvoiceNumber,
        reference: inv.Reference,
        date: inv.DateString,
        dueDate: inv.DueDateString,
        status: inv.Status,
        total: inv.Total || 0,
        amountDue: inv.AmountDue || 0,
        amountPaid: inv.AmountPaid || 0,
        currencyCode: inv.CurrencyCode,
        daysOverdue: Math.max(0, daysOverdue),
        type: inv.Type,
        url: inv.Url
      }
    })
  } catch (error) {
    console.error('Error fetching invoices:', error)
    return []
  }
}

// Get projects for a specific contact
export async function getProjectsForContact(contactId: string) {
  try {
    const data = await xeroProjectsApiCall(`projects?contactId=${contactId}`)
    if (!data) return []

    const projects = data.items || []

    return projects.map((p: any) => ({
      id: p.projectId,
      name: p.name,
      status: p.status,
      deadlineUtc: p.deadlineUtc,
      estimate: p.estimate?.amount || 0,
      chargeType: p.estimate?.chargeType,
      totalTaskAmount: p.totalTaskAmount?.amount || 0,
      totalExpenseAmount: p.totalExpenseAmount?.amount || 0,
      totalInvoiced: p.totalInvoicedAmount?.amount || 0,
      minutesLogged: p.minutesLogged || 0,
      hoursLogged: Math.round((p.minutesLogged || 0) / 60 * 10) / 10,
      minutesToBeInvoiced: p.minutesToBeInvoiced || 0,
      hoursToBeInvoiced: Math.round((p.minutesToBeInvoiced || 0) / 60 * 10) / 10
    }))
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Get time entries for a specific project
export async function getTimeEntriesForProject(projectId: string) {
  try {
    const data = await xeroProjectsApiCall(`projects/${projectId}/time`)
    if (!data) return []

    const entries = data.items || []

    return entries.map((t: any) => ({
      id: t.timeEntryId,
      userId: t.userId,
      userName: t.userName,
      taskId: t.taskId,
      taskName: t.task?.name,
      dateUtc: t.dateUtc,
      duration: t.duration,
      hours: Math.round((t.duration || 0) / 60 * 10) / 10,
      description: t.description,
      status: t.status
    }))
  } catch (error) {
    console.error('Error fetching time entries:', error)
    return []
  }
}

// Get all projects (for matching to clients)
export async function getAllProjects() {
  try {
    const data = await xeroProjectsApiCall('projects')
    if (!data) return []

    return (data.items || []).map((p: any) => ({
      id: p.projectId,
      name: p.name,
      contactId: p.contactId,
      contactName: p.contactName,
      status: p.status,
      estimate: p.estimate?.amount || 0,
      hoursLogged: Math.round((p.minutesLogged || 0) / 60 * 10) / 10,
      totalInvoiced: p.totalInvoicedAmount?.amount || 0
    }))
  } catch (error) {
    console.error('Error fetching all projects:', error)
    return []
  }
}

// Calculate client summary from invoices
export function calculateInvoiceSummary(invoices: any[]) {
  const outstanding = invoices.filter(inv =>
    inv.type === 'ACCREC' && (inv.status === 'AUTHORISED' || inv.status === 'SUBMITTED')
  )
  const paid = invoices.filter(inv => inv.type === 'ACCREC' && inv.status === 'PAID')
  const overdue = outstanding.filter(inv => inv.daysOverdue > 0)

  return {
    totalOutstanding: Math.round(outstanding.reduce((sum, inv) => sum + inv.amountDue, 0) * 100) / 100,
    totalPaid: Math.round(paid.reduce((sum, inv) => sum + inv.total, 0) * 100) / 100,
    overdueAmount: Math.round(overdue.reduce((sum, inv) => sum + inv.amountDue, 0) * 100) / 100,
    overdueCount: overdue.length,
    invoiceCount: outstanding.length
  }
}

// Calculate project summary
export function calculateProjectSummary(projects: any[]) {
  const active = projects.filter(p => p.status === 'INPROGRESS')

  return {
    activeCount: active.length,
    totalHoursLogged: Math.round(projects.reduce((sum, p) => sum + p.hoursLogged, 0) * 10) / 10,
    totalHoursToInvoice: Math.round(projects.reduce((sum, p) => sum + p.hoursToBeInvoiced, 0) * 10) / 10,
    totalEstimate: Math.round(projects.reduce((sum, p) => sum + p.estimate, 0) * 100) / 100,
    totalInvoiced: Math.round(projects.reduce((sum, p) => sum + p.totalInvoiced, 0) * 100) / 100
  }
}

// Seed initial tokens from environment (for first-time setup)
export async function seedXeroTokens(tokens: XeroTokens): Promise<void> {
  await storeTokens(tokens)
  console.log('Xero tokens seeded to Supabase')
}
