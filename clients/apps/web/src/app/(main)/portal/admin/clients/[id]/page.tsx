'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

interface Project {
  id: string
  name: string
  description: string | null
  status: string
  vercel_preview_url: string | null
  vercel_production_url: string | null
  figma_link: string | null
}

interface HoursBalance {
  id: string
  purchased_hours: number
  used_hours: number
  hourly_rate: number | null
  notes: string | null
}

interface HoursLog {
  id: string
  change_type: string
  hours_amount: number
  description: string | null
  logged_by: string | null
  created_at: string
}

interface Milestone {
  id: string
  type: 'project' | 'payment'
  title: string
  description: string | null
  due_date: string | null
  completed_at: string | null
  amount: number | null
  sort_order: number
  project_id: string | null
  projects: { id: string; name: string } | null
}

interface FileRecord {
  id: string
  filename: string
  file_size: number
  mime_type: string | null
  description: string | null
  uploaded_by: 'admin' | 'client'
  uploader_email: string
  created_at: string
  projects: { id: string; name: string } | null
}

interface Client {
  id: string
  name: string
  email: string
  company_name: string | null
  is_active: boolean
  invite_token: string | null
  invite_sent_at: string | null
  invite_accepted_at: string | null
  projects: Project[]
  hours_balances: HoursBalance[]
  hours_log: HoursLog[]
}

export default function ClientDetailPage() {
  const params = useParams()
  const router = useRouter()
  const clientId = params.id as string

  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  // Edit client form
  const [editingClient, setEditingClient] = useState(false)
  const [clientForm, setClientForm] = useState({
    name: '',
    email: '',
    company_name: '',
    is_active: true,
  })

  // Add project form
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    status: 'active',
    vercel_preview_url: '',
    vercel_production_url: '',
    figma_link: '',
  })

  // Add hours form
  const [showHoursForm, setShowHoursForm] = useState(false)
  const [hoursForm, setHoursForm] = useState({
    change_type: 'purchased',
    hours_amount: '',
    description: '',
  })

  // Rate form
  const [editingRate, setEditingRate] = useState(false)
  const [rateForm, setRateForm] = useState({
    hourly_rate: '',
    notes: '',
  })

  const [submitting, setSubmitting] = useState(false)

  // Invite state
  const [sendingInvite, setSendingInvite] = useState(false)
  const [inviteMessage, setInviteMessage] = useState('')

  // Milestones state
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [showMilestoneForm, setShowMilestoneForm] = useState(false)
  const [milestoneForm, setMilestoneForm] = useState({
    type: 'project' as 'project' | 'payment',
    title: '',
    description: '',
    due_date: '',
    amount: '',
    project_id: '',
  })

  // Files state
  const [files, setFiles] = useState<FileRecord[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    async function init() {
      const checkRes = await fetch('/api/client-portal/admin/check')
      const checkData = await checkRes.json()
      if (!checkData.isAdmin) {
        router.push('/portal/dashboard')
        return
      }
      setIsAdmin(true)
      fetchClient()
      fetchMilestones()
      fetchFiles()
    }
    init()
  }, [router, clientId])

  async function fetchFiles() {
    try {
      const res = await fetch(`/api/client-portal/files?client_id=${clientId}`)
      if (res.ok) {
        const data = await res.json()
        setFiles(data.files || [])
      }
    } catch (error) {
      console.error('Failed to fetch files:', error)
    }
  }

  async function fetchMilestones() {
    try {
      const res = await fetch(`/api/client-portal/admin/milestones?client_id=${clientId}`)
      if (res.ok) {
        const data = await res.json()
        setMilestones(data.milestones || [])
      }
    } catch (error) {
      console.error('Failed to fetch milestones:', error)
    }
  }

  async function fetchClient() {
    try {
      const res = await fetch(`/api/client-portal/admin/clients/${clientId}`)
      if (res.ok) {
        const data = await res.json()
        setClient(data.client)
        setClientForm({
          name: data.client.name,
          email: data.client.email,
          company_name: data.client.company_name || '',
          is_active: data.client.is_active,
        })
        const balance = data.client.hours_balances?.[0]
        if (balance) {
          setRateForm({
            hourly_rate: balance.hourly_rate?.toString() || '',
            notes: balance.notes || '',
          })
        }
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleUpdateClient(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(`/api/client-portal/admin/clients/${clientId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientForm),
      })
      if (res.ok) {
        setEditingClient(false)
        fetchClient()
      }
    } finally {
      setSubmitting(false)
    }
  }

  async function handleAddProject(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/client-portal/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          ...projectForm,
        }),
      })
      if (res.ok) {
        setProjectForm({
          name: '',
          description: '',
          status: 'active',
          vercel_preview_url: '',
          vercel_production_url: '',
          figma_link: '',
        })
        setShowProjectForm(false)
        fetchClient()
      }
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDeleteProject(projectId: string) {
    if (!confirm('Delete this project?')) return
    await fetch(`/api/client-portal/admin/projects/${projectId}`, { method: 'DELETE' })
    fetchClient()
  }

  async function handleAddHours(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/client-portal/admin/hours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          change_type: hoursForm.change_type,
          hours_amount: parseFloat(hoursForm.hours_amount),
          description: hoursForm.description,
        }),
      })
      if (res.ok) {
        setHoursForm({ change_type: 'purchased', hours_amount: '', description: '' })
        setShowHoursForm(false)
        fetchClient()
      }
    } finally {
      setSubmitting(false)
    }
  }

  async function handleUpdateRate(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/client-portal/admin/hours', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          hourly_rate: rateForm.hourly_rate ? parseFloat(rateForm.hourly_rate) : null,
          notes: rateForm.notes,
        }),
      })
      if (res.ok) {
        setEditingRate(false)
        fetchClient()
      }
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDeleteClient() {
    if (!confirm('Delete this client? This cannot be undone.')) return
    await fetch(`/api/client-portal/admin/clients/${clientId}`, { method: 'DELETE' })
    router.push('/portal/admin')
  }

  async function handleSendInvite() {
    setSendingInvite(true)
    setInviteMessage('')
    try {
      const res = await fetch('/api/client-portal/admin/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: clientId }),
      })
      const data = await res.json()
      if (res.ok) {
        setInviteMessage(data.message || 'Invite sent!')
        fetchClient() // Refresh to show updated invite status
      } else {
        setInviteMessage(data.error || 'Failed to send invite')
      }
    } catch {
      setInviteMessage('Failed to send invite')
    } finally {
      setSendingInvite(false)
    }
  }

  async function handleAddMilestone(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/client-portal/admin/milestones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          type: milestoneForm.type,
          title: milestoneForm.title,
          description: milestoneForm.description || null,
          due_date: milestoneForm.due_date || null,
          amount: milestoneForm.type === 'payment' && milestoneForm.amount ? parseFloat(milestoneForm.amount) : null,
          project_id: milestoneForm.project_id || null,
          sort_order: milestones.length,
        }),
      })
      if (res.ok) {
        setMilestoneForm({ type: 'project', title: '', description: '', due_date: '', amount: '', project_id: '' })
        setShowMilestoneForm(false)
        fetchMilestones()
      }
    } finally {
      setSubmitting(false)
    }
  }

  async function handleToggleMilestone(milestone: Milestone) {
    const res = await fetch('/api/client-portal/admin/milestones', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: milestone.id,
        completed_at: milestone.completed_at ? null : new Date().toISOString(),
      }),
    })
    if (res.ok) {
      fetchMilestones()
    }
  }

  async function handleDeleteMilestone(milestoneId: string) {
    if (!confirm('Delete this milestone?')) return
    await fetch(`/api/client-portal/admin/milestones?id=${milestoneId}`, { method: 'DELETE' })
    fetchMilestones()
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('client_id', clientId)

      const res = await fetch('/api/client-portal/files', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        fetchFiles()
      }
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  async function handleDeleteFile(fileId: string) {
    if (!confirm('Delete this file?')) return
    await fetch(`/api/client-portal/files?id=${fileId}`, { method: 'DELETE' })
    fetchFiles()
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  if (!isAdmin || loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!client) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-medium text-gray-900">Client not found</h2>
      </div>
    )
  }

  const balance = client.hours_balances?.[0]
  const remaining = balance ? balance.purchased_hours - balance.used_hours : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/portal/admin" className="text-gray-500 hover:text-gray-900">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-gray-900">{client.name}</h1>
          {client.company_name && <p className="text-gray-500">{client.company_name}</p>}
        </div>
        <button
          onClick={handleDeleteClient}
          className="rounded-lg border border-red-300 bg-white px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>

      {/* Client Info */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Client Info</h2>
          <button
            onClick={() => setEditingClient(!editingClient)}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {editingClient ? 'Cancel' : 'Edit'}
          </button>
        </div>
        {editingClient ? (
          <form onSubmit={handleUpdateClient} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={clientForm.name}
                  onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={clientForm.email}
                  onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  value={clientForm.company_name}
                  onChange={(e) => setClientForm({ ...clientForm, company_name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  checked={clientForm.is_active}
                  onChange={(e) => setClientForm({ ...clientForm, is_active: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label className="text-sm text-gray-700">Active</label>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {submitting ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        ) : (
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <span className="text-gray-500">Email:</span> {client.email}
            </div>
            <div>
              <span className="text-gray-500">Status:</span>{' '}
              {client.is_active ? 'Active' : 'Inactive'}
            </div>
          </div>
        )}
      </div>

      {/* Portal Access */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Portal Access</h2>
        </div>

        <div className="space-y-4">
          {client.invite_accepted_at ? (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Portal Active</div>
                <div className="text-sm text-gray-500">
                  Joined {new Date(client.invite_accepted_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          ) : client.invite_sent_at ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Invite Pending</div>
                  <div className="text-sm text-gray-500">
                    Sent {new Date(client.invite_sent_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <button
                onClick={handleSendInvite}
                disabled={sendingInvite}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                {sendingInvite ? 'Sending...' : 'Resend Invite'}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">No Portal Access</div>
                  <div className="text-sm text-gray-500">
                    Send an invite to grant portal access
                  </div>
                </div>
              </div>
              <button
                onClick={handleSendInvite}
                disabled={sendingInvite}
                className="rounded-lg bg-[#D2A62C] px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
              >
                {sendingInvite ? 'Sending...' : 'Send Invite'}
              </button>
            </div>
          )}

          {inviteMessage && (
            <div className={`rounded-lg p-3 text-sm ${
              inviteMessage.includes('sent') || inviteMessage.includes('Invite')
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-red-50 text-red-700'
            }`}>
              {inviteMessage}
            </div>
          )}
        </div>
      </div>

      {/* Hours Balance */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Hours Balance</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setEditingRate(!editingRate)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {editingRate ? 'Cancel' : 'Edit Rate'}
            </button>
            <button
              onClick={() => setShowHoursForm(!showHoursForm)}
              className="rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium text-white hover:bg-gray-800"
            >
              {showHoursForm ? 'Cancel' : 'Log Hours'}
            </button>
          </div>
        </div>

        <div className="mb-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="text-sm text-gray-500">Purchased</div>
            <div className="text-2xl font-semibold text-gray-900">
              {(balance?.purchased_hours || 0).toFixed(1)} hrs
            </div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="text-sm text-gray-500">Used</div>
            <div className="text-2xl font-semibold text-gray-900">
              {(balance?.used_hours || 0).toFixed(1)} hrs
            </div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <div className="text-sm text-gray-500">Remaining</div>
            <div className={`text-2xl font-semibold ${remaining < 5 ? 'text-red-600' : 'text-green-600'}`}>
              {remaining.toFixed(1)} hrs
            </div>
          </div>
        </div>

        {editingRate && (
          <form onSubmit={handleUpdateRate} className="mb-4 rounded-lg border border-gray-200 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={rateForm.hourly_rate}
                  onChange={(e) => setRateForm({ ...rateForm, hourly_rate: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <input
                  type="text"
                  value={rateForm.notes}
                  onChange={(e) => setRateForm({ ...rateForm, notes: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Save Rate
            </button>
          </form>
        )}

        {showHoursForm && (
          <form onSubmit={handleAddHours} className="mb-4 rounded-lg border border-gray-200 p-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  value={hoursForm.change_type}
                  onChange={(e) => setHoursForm({ ...hoursForm, change_type: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="purchased">Add Purchased Hours</option>
                  <option value="used">Log Used Hours</option>
                  <option value="adjustment">Adjustment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hours</label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={hoursForm.hours_amount}
                  onChange={(e) => setHoursForm({ ...hoursForm, hours_amount: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  value={hoursForm.description}
                  onChange={(e) => setHoursForm({ ...hoursForm, description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Log Hours
            </button>
          </form>
        )}

        {balance?.hourly_rate && (
          <p className="text-sm text-gray-500">Rate: ${balance.hourly_rate}/hr</p>
        )}
        {balance?.notes && <p className="text-sm text-gray-500">{balance.notes}</p>}

        {client.hours_log && client.hours_log.length > 0 && (
          <div className="mt-4">
            <h3 className="mb-2 text-sm font-medium text-gray-700">Recent Activity</h3>
            <div className="max-h-48 overflow-y-auto">
              <table className="min-w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {client.hours_log.slice(0, 10).map((entry) => (
                    <tr key={entry.id}>
                      <td className="py-2 text-gray-500">
                        {new Date(entry.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-2 capitalize">{entry.change_type}</td>
                      <td className="py-2 font-medium">
                        {entry.change_type === 'used' ? '-' : '+'}
                        {entry.hours_amount}
                      </td>
                      <td className="py-2 text-gray-500">{entry.description || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Projects ({client.projects?.length || 0})
          </h2>
          <button
            onClick={() => setShowProjectForm(!showProjectForm)}
            className="rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium text-white hover:bg-gray-800"
          >
            {showProjectForm ? 'Cancel' : 'Add Project'}
          </button>
        </div>

        {showProjectForm && (
          <form onSubmit={handleAddProject} className="mb-4 rounded-lg border border-gray-200 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  required
                  value={projectForm.name}
                  onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={projectForm.status}
                  onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vercel Production URL</label>
                <input
                  type="url"
                  value={projectForm.vercel_production_url}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, vercel_production_url: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vercel Preview URL</label>
                <input
                  type="url"
                  value={projectForm.vercel_preview_url}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, vercel_preview_url: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Figma Link</label>
                <input
                  type="url"
                  value={projectForm.figma_link}
                  onChange={(e) => setProjectForm({ ...projectForm, figma_link: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Add Project
            </button>
          </form>
        )}

        {!client.projects || client.projects.length === 0 ? (
          <p className="text-gray-500">No projects yet</p>
        ) : (
          <div className="space-y-3">
            {client.projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{project.name}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                        project.status === 'active'
                          ? 'bg-green-50 text-green-700'
                          : project.status === 'paused'
                            ? 'bg-yellow-50 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.description && (
                    <p className="mt-1 text-sm text-gray-500">{project.description}</p>
                  )}
                  <div className="mt-2 flex gap-2">
                    {project.vercel_production_url && (
                      <a
                        href={project.vercel_production_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Production
                      </a>
                    )}
                    {project.vercel_preview_url && (
                      <a
                        href={project.vercel_preview_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Preview
                      </a>
                    )}
                    {project.figma_link && (
                      <a
                        href={project.figma_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-600 hover:underline"
                      >
                        Figma
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Milestones */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Milestones ({milestones.length})
          </h2>
          <button
            onClick={() => setShowMilestoneForm(!showMilestoneForm)}
            className="rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium text-white hover:bg-gray-800"
          >
            {showMilestoneForm ? 'Cancel' : 'Add Milestone'}
          </button>
        </div>

        {showMilestoneForm && (
          <form onSubmit={handleAddMilestone} className="mb-4 rounded-lg border border-gray-200 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Type *</label>
                <select
                  value={milestoneForm.type}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, type: e.target.value as 'project' | 'payment' })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="project">Project Milestone</option>
                  <option value="payment">Payment Gate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Title *</label>
                <input
                  type="text"
                  required
                  value={milestoneForm.title}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, title: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="e.g., Design Review"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  value={milestoneForm.due_date}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, due_date: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              {milestoneForm.type === 'payment' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={milestoneForm.amount}
                    onChange={(e) => setMilestoneForm({ ...milestoneForm, amount: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    placeholder="5000"
                  />
                </div>
              )}
              <div className={milestoneForm.type === 'payment' ? '' : 'sm:col-span-2'}>
                <label className="block text-sm font-medium text-gray-700">Project (optional)</label>
                <select
                  value={milestoneForm.project_id}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, project_id: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="">No specific project</option>
                  {client.projects?.map((project) => (
                    <option key={project.id} value={project.id}>{project.name}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  value={milestoneForm.description}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Brief description..."
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Add Milestone
            </button>
          </form>
        )}

        {milestones.length === 0 ? (
          <p className="text-gray-500">No milestones yet</p>
        ) : (
          <div className="space-y-2">
            {milestones.map((milestone) => {
              const isOverdue = !milestone.completed_at && milestone.due_date && new Date(milestone.due_date) < new Date()
              return (
                <div
                  key={milestone.id}
                  className={`flex items-center justify-between rounded-lg border p-3 ${
                    milestone.completed_at
                      ? 'border-emerald-200 bg-emerald-50'
                      : isOverdue
                        ? 'border-red-200 bg-red-50'
                        : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleMilestone(milestone)}
                      className={`flex h-5 w-5 items-center justify-center rounded border ${
                        milestone.completed_at
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {milestone.completed_at && (
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${milestone.completed_at ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {milestone.title}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          milestone.type === 'payment'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {milestone.type === 'payment' ? 'Payment' : 'Milestone'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        {milestone.due_date && (
                          <span className={isOverdue ? 'text-red-600 font-medium' : ''}>
                            Due: {new Date(milestone.due_date).toLocaleDateString()}
                          </span>
                        )}
                        {milestone.amount && (
                          <span className="font-medium text-gray-700">${milestone.amount.toLocaleString()}</span>
                        )}
                        {milestone.projects && (
                          <span>• {milestone.projects.name}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteMilestone(milestone.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Files */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Files ({files.length})
          </h2>
          <div>
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="admin-file-upload"
              disabled={uploading}
            />
            <label
              htmlFor="admin-file-upload"
              className={`cursor-pointer rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium text-white hover:bg-gray-800 ${
                uploading ? 'opacity-50 cursor-wait' : ''
              }`}
            >
              {uploading ? 'Uploading...' : 'Upload File'}
            </label>
          </div>
        </div>

        {files.length === 0 ? (
          <p className="text-gray-500">No files yet</p>
        ) : (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{file.filename}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        file.uploaded_by === 'admin'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {file.uploaded_by === 'admin' ? 'Admin' : 'Client'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{formatFileSize(file.file_size)}</span>
                      <span>•</span>
                      <span>{new Date(file.created_at).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{file.uploader_email}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteFile(file.id)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
