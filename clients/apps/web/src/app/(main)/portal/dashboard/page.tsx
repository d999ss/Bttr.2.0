'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Project {
  id: string
  name: string
  status: string
  vercel_preview_url: string | null
  vercel_production_url: string | null
  figma_link: string | null
}

interface HoursBalance {
  purchased_hours: number
  used_hours: number
  hourly_rate: number | null
}

interface ClientData {
  id: string
  name: string
  company_name: string | null
  projects: Project[]
  hours_balances: HoursBalance[]
}

const DEMO_DATA: ClientData = {
  id: 'demo',
  name: 'Demo User',
  company_name: 'Acme Corp',
  projects: [
    {
      id: '1',
      name: 'Website Redesign',
      status: 'active',
      vercel_preview_url: 'https://preview.example.com',
      vercel_production_url: 'https://example.com',
      figma_link: 'https://figma.com/file/example',
    },
    {
      id: '2',
      name: 'Mobile App',
      status: 'active',
      vercel_preview_url: 'https://app-preview.example.com',
      vercel_production_url: null,
      figma_link: 'https://figma.com/file/app',
    },
  ],
  hours_balances: [
    {
      purchased_hours: 40,
      used_hours: 12.5,
      hourly_rate: 150,
    },
  ],
}

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'

  const [client, setClient] = useState<ClientData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isDemo) {
      setClient(DEMO_DATA)
      setLoading(false)
      return
    }

    async function fetchData() {
      try {
        const res = await fetch('/api/client-portal/me')
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
        const data = await res.json()
        setClient(data)
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
          href="/"
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
          Your account is not associated with a client profile. If you believe this is an error, please contact us.
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

  if (error || !client) {
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

  const hoursBalance = client.hours_balances?.[0]
  const remainingHours = hoursBalance
    ? hoursBalance.purchased_hours - hoursBalance.used_hours
    : 0
  const activeProjects = client.projects?.filter(p => p.status === 'active') || []

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-medium text-gray-900">
          Welcome back{client.company_name ? `, ${client.company_name}` : ''}
        </h1>
        <p className="mt-1 text-gray-600">Here's an overview of your projects and hours.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Active Projects</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {activeProjects.length}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Hours Remaining</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {remainingHours.toFixed(1)}
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Hours Used</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {(hoursBalance?.used_hours || 0).toFixed(1)}
          </div>
        </div>
      </div>

      {/* Active Projects */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Active Projects</h2>
          <Link
            href="/portal/projects"
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.vercel_production_url && (
                    <a
                      href={project.vercel_production_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100"
                    >
                      Production
                    </a>
                  )}
                  {project.vercel_preview_url && (
                    <a
                      href={project.vercel_preview_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100"
                    >
                      Preview
                    </a>
                  )}
                  {project.figma_link && (
                    <a
                      href={project.figma_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 hover:bg-purple-100"
                    >
                      Figma
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hours Summary */}
      {hoursBalance && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Hours Balance</h2>
            <Link
              href="/portal/hours"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              View details
            </Link>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {hoursBalance.used_hours.toFixed(1)} of {hoursBalance.purchased_hours.toFixed(1)} hours used
                </span>
                <span className="font-medium text-gray-900">
                  {((hoursBalance.used_hours / hoursBalance.purchased_hours) * 100 || 0).toFixed(0)}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#D2A62C]"
                  style={{
                    width: `${Math.min((hoursBalance.used_hours / hoursBalance.purchased_hours) * 100, 100) || 0}%`
                  }}
                />
              </div>
            </div>
            {hoursBalance.hourly_rate && (
              <p className="text-sm text-gray-500">
                Rate: ${hoursBalance.hourly_rate}/hour
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
