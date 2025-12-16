'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Invoice {
  id: string
  number: string
  reference: string | null
  date: string
  dueDate: string
  status: string
  total: number
  amountDue: number
  amountPaid: number
  daysOverdue: number
}

const statusColors: Record<string, string> = {
  PAID: 'bg-green-100 text-green-800',
  AUTHORISED: 'bg-yellow-100 text-yellow-800',
  SUBMITTED: 'bg-blue-100 text-blue-800',
  DRAFT: 'bg-gray-100 text-gray-800',
  VOIDED: 'bg-red-100 text-red-800',
}

const statusLabels: Record<string, string> = {
  PAID: 'Paid',
  AUTHORISED: 'Awaiting Payment',
  SUBMITTED: 'Submitted',
  DRAFT: 'Draft',
  VOIDED: 'Voided',
}

const DEMO_INVOICES: Invoice[] = [
  {
    id: '1',
    number: 'INV-001',
    reference: 'Website Redesign - Phase 1',
    date: '2024-01-15',
    dueDate: '2024-02-15',
    status: 'AUTHORISED',
    total: 5000,
    amountDue: 5000,
    amountPaid: 0,
    daysOverdue: 0,
  },
  {
    id: '2',
    number: 'INV-002',
    reference: 'Mobile App - Initial Deposit',
    date: '2024-01-20',
    dueDate: '2024-02-20',
    status: 'AUTHORISED',
    total: 7500,
    amountDue: 7500,
    amountPaid: 0,
    daysOverdue: 0,
  },
  {
    id: '3',
    number: 'INV-003',
    reference: 'Brand Identity Project',
    date: '2024-01-01',
    dueDate: '2024-01-31',
    status: 'PAID',
    total: 8000,
    amountDue: 0,
    amountPaid: 8000,
    daysOverdue: 0,
  },
  {
    id: '4',
    number: 'INV-004',
    reference: 'Consulting - December',
    date: '2023-12-15',
    dueDate: '2024-01-15',
    status: 'PAID',
    total: 3500,
    amountDue: 0,
    amountPaid: 3500,
    daysOverdue: 0,
  },
]

export default function InvoicesPage() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'

  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (isDemo) {
      setInvoices(DEMO_INVOICES)
      setLoading(false)
      return
    }

    async function fetchInvoices() {
      try {
        const res = await fetch('/api/client-portal/xero/invoices')
        if (!res.ok) throw new Error()
        const data = await res.json()
        setInvoices(data.invoices || [])
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchInvoices()
  }, [isDemo])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-medium text-gray-900">Unable to load invoices</h2>
        <p className="text-gray-600">Please try again later.</p>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <Link
            href="/portal/invoices?demo=true"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try Demo Mode
          </Link>
        </div>
      </div>
    )
  }

  const outstanding = invoices.filter(inv =>
    inv.status === 'AUTHORISED' || inv.status === 'SUBMITTED'
  )
  const paid = invoices.filter(inv => inv.status === 'PAID')
  const overdue = outstanding.filter(inv => inv.daysOverdue > 0)

  const totalOutstanding = outstanding.reduce((sum, inv) => sum + inv.amountDue, 0)
  const totalOverdue = overdue.reduce((sum, inv) => sum + inv.amountDue, 0)
  const totalPaid = paid.reduce((sum, inv) => sum + inv.total, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium text-gray-900">Invoices</h1>
        <p className="mt-1 text-gray-600">View and track your invoices.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Outstanding</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">
            ${totalOutstanding.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">{outstanding.length} invoices</div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Overdue</div>
          <div className={`mt-1 text-2xl font-semibold ${totalOverdue > 0 ? 'text-red-600' : 'text-green-600'}`}>
            ${totalOverdue.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">{overdue.length} invoices</div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Paid (All Time)</div>
          <div className="mt-1 text-2xl font-semibold text-green-600">
            ${totalPaid.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">{paid.length} invoices</div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Total Invoices</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">{invoices.length}</div>
        </div>
      </div>

      {/* Outstanding Invoices */}
      {outstanding.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-medium text-gray-900">Outstanding</h2>
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount Due
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {outstanding.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{invoice.number}</div>
                      {invoice.reference && (
                        <div className="text-sm text-gray-500">{invoice.reference}</div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {new Date(invoice.date).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : '-'}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {invoice.daysOverdue > 0 ? (
                        <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                          {invoice.daysOverdue} days overdue
                        </span>
                      ) : (
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[invoice.status] || 'bg-gray-100 text-gray-800'}`}>
                          {statusLabels[invoice.status] || invoice.status}
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-gray-900">
                      ${invoice.amountDue.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Paid Invoices */}
      {paid.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-medium text-gray-900">Paid</h2>
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {paid.slice(0, 10).map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{invoice.number}</div>
                      {invoice.reference && (
                        <div className="text-sm text-gray-500">{invoice.reference}</div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {new Date(invoice.date).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Paid
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-gray-900">
                      ${invoice.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {invoices.length === 0 && (
        <div className="rounded-lg bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">No invoices yet</p>
        </div>
      )}

      {/* Payment Info */}
      {outstanding.length > 0 && (
        <div className="rounded-lg border border-[#D2A62C]/30 bg-[#D2A62C]/5 p-6">
          <h3 className="font-medium text-gray-900">Need to make a payment?</h3>
          <p className="mt-1 text-sm text-gray-600">
            Contact us to arrange payment or request a payment link.
          </p>
          <a
            href="mailto:donny@makebttr.com?subject=Payment Inquiry"
            className="mt-3 inline-block rounded-lg bg-[#D2A62C] px-4 py-2 text-sm font-medium text-white hover:bg-[#b8922a]"
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  )
}
