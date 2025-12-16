'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Invoice {
  id: string
  number: string
  date: string
  dueDate: string
  status: string
  total: number
  amountDue: number
  daysOverdue: number
}

interface Project {
  id: string
  name: string
  status: string
  hoursLogged: number
  estimate: number
  totalInvoiced: number
}

interface ClientData {
  client: {
    id: string
    name: string
    company_name: string | null
  }
  invoices: Invoice[]
  projects: Project[]
  summary: {
    totalOutstanding: number
    overdueAmount: number
    overdueCount: number
    activeCount: number
    totalHoursLogged: number
  }
}

const DEMO_DATA: ClientData = {
  client: {
    id: 'demo',
    name: 'Demo User',
    company_name: 'Acme Corp',
  },
  invoices: [
    {
      id: '1',
      number: 'INV-001',
      date: '2024-01-15',
      dueDate: '2024-02-15',
      status: 'AUTHORISED',
      total: 5000,
      amountDue: 5000,
      daysOverdue: 0,
    },
    {
      id: '2',
      number: 'INV-002',
      date: '2024-01-01',
      dueDate: '2024-01-31',
      status: 'PAID',
      total: 3500,
      amountDue: 0,
      daysOverdue: 0,
    },
  ],
  projects: [
    {
      id: '1',
      name: 'Website Redesign',
      status: 'INPROGRESS',
      hoursLogged: 24.5,
      estimate: 10000,
      totalInvoiced: 5000,
    },
    {
      id: '2',
      name: 'Mobile App',
      status: 'INPROGRESS',
      hoursLogged: 12,
      estimate: 15000,
      totalInvoiced: 0,
    },
  ],
  summary: {
    totalOutstanding: 5000,
    overdueAmount: 0,
    overdueCount: 0,
    activeCount: 2,
    totalHoursLogged: 36.5,
  },
}

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'

  const [data, setData] = useState<ClientData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isDemo) {
      setData(DEMO_DATA)
      setLoading(false)
      return
    }

    async function fetchData() {
      try {
        const res = await fetch('/api/client-portal/xero/me')
        if (!res.ok) {
          if (res.status === 404) {
            setError('not-a-client')
          } else if (res.status === 401) {
            setError('unauthorized')
          } else {
            setError('failed')
          }
          return
        }
        const result = await res.json()
        setData(result)
      } catch (e) {
        setError('failed')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [isDemo])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (error === 'unauthorized') {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-medium text-gray-900">Please Log In</h2>
        <p className="mb-4 text-gray-600">You need to be logged in to access the client portal.</p>
        <Link
          href="/portal/login"
          className="inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Go to Login
        </Link>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <Link
            href="/portal/dashboard?demo=true"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try Demo Mode
          </Link>
        </div>
      </div>
    )
  }

  if (error === 'not-a-client') {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-medium text-gray-900">Access Restricted</h2>
        <p className="mb-4 text-gray-600">
          Your account is not associated with a client profile in Xero. If you believe this is an error, please contact us.
        </p>
        <a
          href="mailto:donny@makebttr.com"
          className="inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Contact Support
        </a>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <Link
            href="/portal/dashboard?demo=true"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try Demo Mode
          </Link>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-medium text-gray-900">Something went wrong</h2>
        <p className="mb-4 text-gray-600">Please try again later.</p>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <Link
            href="/portal/dashboard?demo=true"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try Demo Mode
          </Link>
        </div>
      </div>
    )
  }

  const activeProjects = data.projects?.filter(p => p.status === 'INPROGRESS') || []
  const outstandingInvoices = data.invoices?.filter(inv =>
    inv.status === 'AUTHORISED' || inv.status === 'SUBMITTED'
  ) || []

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-medium text-gray-900">
          Welcome back{data.client.company_name ? `, ${data.client.company_name}` : ''}
        </h1>
        <p className="mt-1 text-gray-600">Here's an overview of your projects and invoices.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Active Projects</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {data.summary.activeCount}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Hours Logged</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {data.summary.totalHoursLogged.toFixed(1)}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Outstanding</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            ${data.summary.totalOutstanding.toLocaleString()}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Overdue</div>
          <div className={`mt-1 text-3xl font-semibold ${data.summary.overdueAmount > 0 ? 'text-red-600' : 'text-green-600'}`}>
            ${data.summary.overdueAmount.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Active Projects */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Active Projects</h2>
          <Link
            href={isDemo ? '/portal/projects?demo=true' : '/portal/projects'}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            View all
          </Link>
        </div>
        {activeProjects.length === 0 ? (
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <p className="text-gray-500">No active projects</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {activeProjects.slice(0, 4).map((project) => (
              <div key={project.id} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Hours:</span>{' '}
                    <span className="font-medium">{project.hoursLogged}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Invoiced:</span>{' '}
                    <span className="font-medium">${project.totalInvoiced.toLocaleString()}</span>
                  </div>
                </div>
                {project.estimate > 0 && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Budget</span>
                      <span>${project.totalInvoiced.toLocaleString()} / ${project.estimate.toLocaleString()}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-[#D2A62C]"
                        style={{
                          width: `${Math.min((project.totalInvoiced / project.estimate) * 100, 100)}%`
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Outstanding Invoices */}
      {outstandingInvoices.length > 0 && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Outstanding Invoices</h2>
            <Link
              href={isDemo ? '/portal/invoices?demo=true' : '/portal/invoices'}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              View all
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Due Date
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
                {outstandingInvoices.slice(0, 5).map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {invoice.number}
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
                        <span className="inline-flex rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                          Awaiting payment
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-gray-900">
                      ${invoice.amountDue.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
