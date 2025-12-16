import { getAuthenticatedUser } from '@/utils/user'
import { NextResponse } from 'next/server'

// GodMode server handles Xero token refresh
const GODMODE_URL = process.env.GODMODE_URL || 'http://localhost:3001'

export async function GET() {
  try {
    const user = await getAuthenticatedUser()

    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Call GodMode server to get client data
    const response = await fetch(
      `${GODMODE_URL}/api/xero/client/data?email=${encodeURIComponent(user.email)}`,
      {
        headers: { 'Accept': 'application/json' },
        cache: 'no-store'
      }
    )

    if (response.status === 404) {
      return NextResponse.json({
        error: 'not-a-client',
        message: 'No Xero contact found for this email'
      }, { status: 404 })
    }

    if (!response.ok) {
      throw new Error(`GodMode API error: ${response.status}`)
    }

    const data = await response.json()

    // Transform to expected format
    return NextResponse.json({
      client: {
        id: data.contact?.id,
        name: data.contact?.name,
        email: data.contact?.email,
        company_name: data.contact?.company
      },
      invoices: data.invoices || [],
      projects: data.projects || [],
      summary: data.summary || {
        totalOutstanding: 0,
        overdueAmount: 0,
        overdueCount: 0,
        activeCount: 0,
        totalHoursLogged: 0
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
