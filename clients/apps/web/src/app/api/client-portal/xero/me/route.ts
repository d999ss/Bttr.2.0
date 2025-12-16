import { getAuthenticatedUser } from '@/utils/user'
import { NextResponse } from 'next/server'
import {
  getContactByEmail,
  getInvoicesForContact,
  getProjectsForContact,
  calculateInvoiceSummary,
  calculateProjectSummary
} from '@/utils/xero'

export async function GET() {
  try {
    const user = await getAuthenticatedUser()

    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find Xero contact by email
    const contact = await getContactByEmail(user.email)

    if (!contact) {
      return NextResponse.json({
        error: 'not-a-client',
        message: 'No Xero contact found for this email'
      }, { status: 404 })
    }

    // Fetch invoices and projects in parallel
    const [invoices, projects] = await Promise.all([
      getInvoicesForContact(contact.ContactID),
      getProjectsForContact(contact.ContactID)
    ])

    // Calculate summaries
    const invoiceSummary = calculateInvoiceSummary(invoices)
    const projectSummary = calculateProjectSummary(projects)

    return NextResponse.json({
      client: {
        id: contact.ContactID,
        name: contact.Name,
        email: contact.EmailAddress,
        company_name: contact.Name,
        firstName: contact.FirstName,
        lastName: contact.LastName
      },
      invoices: invoices.filter((inv: any) => inv.type === 'ACCREC').slice(0, 20),
      projects: projects,
      summary: {
        ...invoiceSummary,
        ...projectSummary
      }
    })
  } catch (error) {
    console.error('Xero client portal error:', error)
    return NextResponse.json({
      error: 'Failed to fetch data from Xero',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
