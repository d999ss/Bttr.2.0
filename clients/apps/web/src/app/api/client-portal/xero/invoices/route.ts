import { getPortalUser } from '@/utils/portal-auth'
import { NextResponse } from 'next/server'
import {
  getContactByEmail,
  getInvoicesForContact,
  calculateInvoiceSummary
} from '@/utils/xero'

export async function GET() {
  try {
    const user = await getPortalUser()

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

    // Fetch invoices
    const invoices = await getInvoicesForContact(contact.ContactID)

    // Filter to only receivables (invoices TO the client, not FROM)
    const receivables = invoices.filter((inv: any) => inv.type === 'ACCREC')

    // Separate by status
    const outstanding = receivables.filter((inv: any) =>
      inv.status === 'AUTHORISED' || inv.status === 'SUBMITTED'
    )
    const paid = receivables.filter((inv: any) => inv.status === 'PAID')
    const overdue = outstanding.filter((inv: any) => inv.daysOverdue > 0)

    const summary = calculateInvoiceSummary(invoices)

    return NextResponse.json({
      invoices: receivables,
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
