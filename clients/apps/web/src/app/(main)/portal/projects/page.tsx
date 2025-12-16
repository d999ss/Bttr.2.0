'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Project {
  id: string
  name: string
  status: string
  hoursLogged: number
  hoursToBeInvoiced: number
  estimate: number
  totalInvoiced: number
  totalTaskAmount: number
  deadlineUtc: string | null
}

const statusColors: Record<string, string> = {
  INPROGRESS: 'bg-green-50 text-green-700',
  CLOSED: 'bg-gray-100 text-gray-700',
  PENDING: 'bg-yellow-50 text-yellow-700',
}

const statusLabels: Record<string, string> = {
  INPROGRESS: 'In Progress',
  CLOSED: 'Completed',
  PENDING: 'Pending',
}

const DEMO_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'INPROGRESS',
    hoursLogged: 24.5,
    hoursToBeInvoiced: 8.5,
    estimate: 10000,
    totalInvoiced: 5000,
    totalTaskAmount: 3675,
    deadlineUtc: '2024-03-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    status: 'INPROGRESS',
    hoursLogged: 48,
    hoursToBeInvoiced: 16,
    estimate: 25000,
    totalInvoiced: 10000,
    totalTaskAmount: 7200,
    deadlineUtc: '2024-04-15T00:00:00Z',
  },
  {
    id: '3',
    name: 'Brand Identity',
    status: 'CLOSED',
    hoursLogged: 32,
    hoursToBeInvoiced: 0,
    estimate: 8000,
    totalInvoiced: 8000,
    totalTaskAmount: 4800,
    deadlineUtc: null,
  },
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (isDemo) {
      setProjects(DEMO_PROJECTS)
      setLoading(false)
      return
    }

    async function fetchProjects() {
      try {
        const res = await fetch('/api/client-portal/xero/projects')
        if (!res.ok) throw new Error()
        const data = await res.json()
        setProjects(data.projects || [])
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
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
        <h2 className="mb-2 text-xl font-medium text-gray-900">Unable to load projects</h2>
        <p className="text-gray-600">Please try again later.</p>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <Link
            href="/portal/projects?demo=true"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try Demo Mode
          </Link>
        </div>
      </div>
    )
  }

  const activeProjects = projects.filter(p => p.status === 'INPROGRESS')
  const completedProjects = projects.filter(p => p.status === 'CLOSED')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium text-gray-900">Projects</h1>
        <p className="mt-1 text-gray-600">Your projects and their progress.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Active</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">{activeProjects.length}</div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Total Hours</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">
            {projects.reduce((sum, p) => sum + p.hoursLogged, 0).toFixed(1)}
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Uninvoiced Hours</div>
          <div className="mt-1 text-2xl font-semibold text-[#D2A62C]">
            {projects.reduce((sum, p) => sum + p.hoursToBeInvoiced, 0).toFixed(1)}
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Total Invoiced</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">
            ${projects.reduce((sum, p) => sum + p.totalInvoiced, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Active Projects */}
      {activeProjects.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-medium text-gray-900">Active Projects</h2>
          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[project.status] || 'bg-gray-100 text-gray-700'}`}>
                        {statusLabels[project.status] || project.status}
                      </span>
                    </div>
                    {project.deadlineUtc && (
                      <p className="mt-1 text-sm text-gray-500">
                        Deadline: {new Date(project.deadlineUtc).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-4">
                  <div>
                    <div className="text-sm text-gray-500">Hours Logged</div>
                    <div className="font-semibold text-gray-900">{project.hoursLogged}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">To Invoice</div>
                    <div className="font-semibold text-[#D2A62C]">{project.hoursToBeInvoiced} hrs</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Invoiced</div>
                    <div className="font-semibold text-gray-900">${project.totalInvoiced.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Budget</div>
                    <div className="font-semibold text-gray-900">${project.estimate.toLocaleString()}</div>
                  </div>
                </div>

                {project.estimate > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Budget Progress</span>
                      <span>{Math.round((project.totalInvoiced / project.estimate) * 100)}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full rounded-full ${
                          project.totalInvoiced / project.estimate > 0.9 ? 'bg-red-500' :
                          project.totalInvoiced / project.estimate > 0.75 ? 'bg-yellow-500' : 'bg-[#D2A62C]'
                        }`}
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
        </div>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-medium text-gray-900">Completed Projects</h2>
          <div className="space-y-4">
            {completedProjects.map((project) => (
              <div key={project.id} className="rounded-lg bg-white p-6 shadow-sm opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-gray-900">{project.name}</h3>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                      Completed
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {project.hoursLogged} hrs | ${project.totalInvoiced.toLocaleString()} invoiced
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects.length === 0 && (
        <div className="rounded-lg bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">No projects yet</p>
        </div>
      )}
    </div>
  )
}
