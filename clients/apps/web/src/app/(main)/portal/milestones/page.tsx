'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface Milestone {
  id: string
  type: 'project' | 'payment'
  title: string
  description: string | null
  due_date: string | null
  completed_at: string | null
  amount: number | null
  projects: { id: string; name: string } | null
}

interface MilestonesData {
  milestones: Milestone[]
  projectMilestones: Milestone[]
  paymentGates: Milestone[]
  summary: {
    total: number
    completed: number
    pending: number
    overdue: number
  }
}

export default function MilestonesPage() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'
  const [data, setData] = useState<MilestonesData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'all' | 'project' | 'payment'>('all')

  useEffect(() => {
    if (isDemo) {
      // Demo data
      setData({
        milestones: [
          { id: '1', type: 'project', title: 'Design Review', description: 'Review and approve final designs', due_date: '2024-02-15', completed_at: '2024-02-14T10:00:00Z', amount: null, projects: { id: 'p1', name: 'Website Redesign' } },
          { id: '2', type: 'payment', title: 'Project Deposit', description: '50% upfront payment', due_date: '2024-02-01', completed_at: '2024-02-01T09:00:00Z', amount: 5000, projects: { id: 'p1', name: 'Website Redesign' } },
          { id: '3', type: 'project', title: 'Development Complete', description: 'All features implemented and tested', due_date: '2024-03-15', completed_at: null, amount: null, projects: { id: 'p1', name: 'Website Redesign' } },
          { id: '4', type: 'payment', title: 'Final Payment', description: 'Remaining 50% on completion', due_date: '2024-03-20', completed_at: null, amount: 5000, projects: { id: 'p1', name: 'Website Redesign' } },
          { id: '5', type: 'project', title: 'Launch', description: 'Site goes live', due_date: '2024-03-25', completed_at: null, amount: null, projects: { id: 'p1', name: 'Website Redesign' } },
        ],
        projectMilestones: [],
        paymentGates: [],
        summary: { total: 5, completed: 2, pending: 3, overdue: 0 }
      })
      setLoading(false)
      return
    }

    async function fetchMilestones() {
      try {
        const res = await fetch('/api/client-portal/milestones')
        if (res.ok) {
          const json = await res.json()
          setData(json)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchMilestones()
  }, [isDemo])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C]" />
      </div>
    )
  }

  const filteredMilestones = data?.milestones.filter(m => {
    if (activeTab === 'all') return true
    return m.type === activeTab
  }) || []

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const isOverdue = (milestone: Milestone) => {
    if (milestone.completed_at || !milestone.due_date) return false
    return new Date(milestone.due_date) < new Date()
  }

  const getStatusColor = (milestone: Milestone) => {
    if (milestone.completed_at) return 'bg-emerald-500'
    if (isOverdue(milestone)) return 'bg-red-500'
    return 'bg-gray-300 dark:bg-polar-600'
  }

  const getStatusText = (milestone: Milestone) => {
    if (milestone.completed_at) return 'Completed'
    if (isOverdue(milestone)) return 'Overdue'
    return 'Pending'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Milestones</h1>
        <p className="mt-1 text-gray-600 dark:text-polar-400">Track project progress and payment gates.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-white dark:bg-polar-800 p-4 shadow-sm">
          <div className="text-sm text-gray-500 dark:text-polar-400">Total</div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{data?.summary.total || 0}</div>
        </div>
        <div className="rounded-lg bg-white dark:bg-polar-800 p-4 shadow-sm">
          <div className="text-sm text-gray-500 dark:text-polar-400">Completed</div>
          <div className="text-2xl font-semibold text-emerald-600">{data?.summary.completed || 0}</div>
        </div>
        <div className="rounded-lg bg-white dark:bg-polar-800 p-4 shadow-sm">
          <div className="text-sm text-gray-500 dark:text-polar-400">Pending</div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{data?.summary.pending || 0}</div>
        </div>
        <div className="rounded-lg bg-white dark:bg-polar-800 p-4 shadow-sm">
          <div className="text-sm text-gray-500 dark:text-polar-400">Overdue</div>
          <div className="text-2xl font-semibold text-red-600">{data?.summary.overdue || 0}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {(['all', 'project', 'payment'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-polar-800 dark:text-polar-300 dark:hover:bg-polar-700'
            }`}
          >
            {tab === 'all' ? 'All' : tab === 'project' ? 'Project Milestones' : 'Payment Gates'}
          </button>
        ))}
      </div>

      {/* Milestones List */}
      <div className="rounded-lg bg-white dark:bg-polar-800 shadow-sm">
        {filteredMilestones.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-polar-400">
            No milestones yet
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-polar-700">
            {filteredMilestones.map((milestone, index) => (
              <div key={milestone.id} className="flex items-start gap-4 p-4">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className={`h-3 w-3 rounded-full ${getStatusColor(milestone)}`} />
                  {index < filteredMilestones.length - 1 && (
                    <div className="mt-1 h-full w-px bg-gray-200 dark:bg-polar-700" style={{ minHeight: '40px' }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{milestone.title}</h3>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          milestone.type === 'payment'
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {milestone.type === 'payment' ? 'Payment' : 'Milestone'}
                        </span>
                      </div>
                      {milestone.description && (
                        <p className="mt-1 text-sm text-gray-500 dark:text-polar-400">{milestone.description}</p>
                      )}
                      {milestone.projects && (
                        <p className="mt-1 text-xs text-gray-400 dark:text-polar-500">
                          Project: {milestone.projects.name}
                        </p>
                      )}
                    </div>

                    <div className="text-right">
                      {milestone.amount && (
                        <div className="font-semibold text-gray-900 dark:text-white">
                          ${milestone.amount.toLocaleString()}
                        </div>
                      )}
                      {milestone.due_date && (
                        <div className={`text-sm ${isOverdue(milestone) ? 'text-red-500' : 'text-gray-500 dark:text-polar-400'}`}>
                          {formatDate(milestone.due_date)}
                        </div>
                      )}
                      <div className={`mt-1 text-xs font-medium ${
                        milestone.completed_at ? 'text-emerald-600' : isOverdue(milestone) ? 'text-red-500' : 'text-gray-400 dark:text-polar-500'
                      }`}>
                        {getStatusText(milestone)}
                        {milestone.completed_at && (
                          <span className="ml-1">({formatDate(milestone.completed_at)})</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
