'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

interface UserProfile {
  id: string
  name: string
  email: string
  company_name: string | null
  phone: string | null
  avatarUrl: string | null
}

export default function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    phone: '',
  })

  useEffect(() => {
    async function loadProfile() {
      try {
        const supabase = getSupabaseBrowserClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          router.push('/portal/login')
          return
        }

        const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture || null

        // Try to get client data
        const res = await fetch('/api/client-portal/me')
        if (res.ok) {
          const clientData = await res.json()
          setProfile({
            id: clientData.id,
            name: clientData.name,
            email: user.email || '',
            company_name: clientData.company_name,
            phone: clientData.phone || null,
            avatarUrl,
          })
          setFormData({
            name: clientData.name || '',
            company_name: clientData.company_name || '',
            phone: clientData.phone || '',
          })
        } else {
          // Not a registered client yet
          setProfile({
            id: '',
            name: user.user_metadata?.full_name || '',
            email: user.email || '',
            company_name: null,
            phone: null,
            avatarUrl,
          })
          setFormData({
            name: user.user_metadata?.full_name || '',
            company_name: '',
            phone: '',
          })
        }
      } catch {
        router.push('/portal/login')
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [router])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.name) return

    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/client-portal/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        const data = await res.json()
        setProfile(prev => prev ? { ...prev, ...data.client } : null)
        setMessage({ type: 'success', text: 'Profile updated successfully' })
      } else {
        const data = await res.json()
        setMessage({ type: 'error', text: data.error || 'Failed to update profile' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong' })
    } finally {
      setSaving(false)
    }
  }

  async function handleLogout() {
    setLoggingOut(true)
    try {
      const supabase = getSupabaseBrowserClient()
      await supabase.auth.signOut()
      // Clear the auth cookie
      document.cookie = 'sb-oiekbwdggfjihihdmzsa-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      router.push('/portal/login')
    } catch {
      setLoggingOut(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C] dark:border-gray-700" />
          <p className="dark:text-polar-500 text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-y-12"
    >
      {/* Header */}
      <motion.div className="flex flex-col gap-y-2" variants={itemVariants}>
        <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Profile</h1>
        <p className="dark:text-polar-500 text-lg text-gray-500">Manage your account settings.</p>
      </motion.div>

      {/* Profile Card */}
      <motion.div variants={itemVariants} className="dark:bg-polar-900 rounded-2xl bg-white p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4">
            {profile?.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-24 w-24 rounded-full object-cover ring-4 ring-gray-100 dark:ring-polar-800"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#D2A62C] text-3xl font-medium text-white ring-4 ring-gray-100 dark:ring-polar-800">
                {(profile?.name || profile?.email || '?').charAt(0).toUpperCase()}
              </div>
            )}
            <p className="dark:text-polar-500 text-sm text-gray-500">{profile?.email}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="flex flex-1 flex-col gap-6">
            {message.text && (
              <div className={`rounded-xl p-4 text-sm ${
                message.type === 'success'
                  ? 'bg-emerald-500/10 text-emerald-500'
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {message.text}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="dark:border-polar-700 dark:bg-polar-800 dark:text-white w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company_name}
                onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                className="dark:border-polar-700 dark:bg-polar-800 dark:text-white w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="dark:border-polar-700 dark:bg-polar-800 dark:text-white w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={saving || !formData.name}
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div variants={itemVariants} className="dark:bg-polar-900 rounded-2xl bg-white p-8">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl dark:text-white">Sign Out</h3>
            <p className="dark:text-polar-500 mt-1 text-gray-500">
              Sign out of your account on this device.
            </p>
          </div>
          <div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="rounded-full border border-red-200 bg-red-50 px-6 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50 dark:border-red-900 dark:bg-red-950 dark:text-red-400 dark:hover:bg-red-900"
            >
              {loggingOut ? 'Signing out...' : 'Sign Out'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
