'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Client {
  id: string
  name: string
  email: string
  company_name: string | null
  is_active: boolean
  created_at: string
  projects: { id: string; name: string; status: string }[]
  hours_balances: { purchased_hours: number; used_hours: number }[]
}

export default function AdminPage() {
  const router = useRouter()
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    async function checkAdmin() {
      const res = await fetch('/api/client-portal/admin/check')
      const data = await res.json()
      if (!data.isAdmin) {
        router.push('/portal/dashboard')
        return
      }
      setIsAdmin(true)
      fetchClients()
    }
    checkAdmin()
  }, [router])

  async function fetchClients() {
    try {
      const res = await fetch('/api/client-portal/admin/clients')
      if (res.ok) {
        const data = await res.json()
        setClients(data.clients || [])
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleAddClient(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/client-portal/admin/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormData({ name: '', email: '', company_name: '' })
        setShowAddForm(false)
        fetchClients()
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (!isAdmin || loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Admin</h1>
          <p className="mt-1 text-gray-600">Manage clients, projects, and hours.</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Add Client
        </button>
      </div>

      {showAddForm && (
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Add New Client</h2>
          <form onSubmit={handleAddClient} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
              >
                {submitting ? 'Adding...' : 'Add Client'}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="rounded-lg bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium text-gray-900">Clients ({clients.length})</h2>
        </div>
        {clients.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No clients yet</div>
        ) : (
          <div className="divide-y divide-gray-200">
            {clients.map((client) => {
              const hours = client.hours_balances?.[0]
              const remaining = hours ? hours.purchased_hours - hours.used_hours : 0
              const activeProjects = client.projects?.filter((p) => p.status === 'active').length || 0

              return (
                <Link
                  key={client.id}
                  href={`/portal/admin/clients/${client.id}`}
                  className="flex items-center justify-between p-6 hover:bg-gray-50"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{client.name}</span>
                      {client.company_name && (
                        <span className="text-gray-500">({client.company_name})</span>
                      )}
                      {!client.is_active && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                          Inactive
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">{client.email}</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">{activeProjects}</div>
                      <div className="text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${remaining < 5 ? 'text-red-600' : 'text-gray-900'}`}>
                        {remaining.toFixed(1)}
                      </div>
                      <div className="text-gray-500">Hours</div>
                    </div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
