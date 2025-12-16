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

    // Call GodMode server to get invoices
    const response = await fetch(
      `${GODMODE_URL}/api/xero/client/invoices?email=${encodeURIComponent(user.email)}`,
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
    const invoices = data.invoices || []

    // Separate by status
    const outstanding = invoices.filter((inv: any) =>
      inv.status === 'AUTHORISED' || inv.status === 'SUBMITTED'
    )
    const paid = invoices.filter((inv: any) => inv.status === 'PAID')
    const overdue = outstanding.filter((inv: any) => inv.daysOverdue > 0)

    // Calculate summary
    const summary = {
      totalOutstanding: outstanding.reduce((sum: number, inv: any) => sum + (inv.amountDue || 0), 0),
      overdueAmount: overdue.reduce((sum: number, inv: any) => sum + (inv.amountDue || 0), 0),
      overdueCount: overdue.length,
      totalPaid: paid.reduce((sum: number, inv: any) => sum + (inv.total || 0), 0),
      paidCount: paid.length
    }

    return NextResponse.json({
      invoices,
      outstanding,
      paid: paid.slice(0, 10), // Last 10 paid
      overdue,
      summary
    })
  } catch (error) {
    console.error('Xero invoices error:', error)
    return NextResponse.json({
      error: 'Failed to fetch invoices',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
