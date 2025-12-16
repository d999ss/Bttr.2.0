'use client'

import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'

export default function OnboardingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    phone: '',
  })

  useEffect(() => {
    async function checkAuth() {
      const supabase = getSupabaseBrowserClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/portal/login')
        return
      }

      setUserEmail(user.email || '')

      // Pre-fill name from Google if available
      if (user.user_metadata?.full_name) {
        setFormData(prev => ({ ...prev, name: user.user_metadata.full_name }))
      }

      // Check if already registered
      const res = await fetch('/api/client-portal/me')
      if (res.ok) {
        // Already a client, go to dashboard
        router.push('/portal/dashboard')
        return
      }

      setLoading(false)
    }
    checkAuth()
  }, [router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.name) return

    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/client-portal/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          email: userEmail,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Registration failed')
        setSubmitting(false)
        return
      }

      router.push('/portal/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="dark:bg-polar-950 flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C] dark:border-gray-700" />
          <p className="dark:text-polar-500 text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dark:bg-polar-950 flex min-h-screen w-full grow items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="dark:bg-polar-900 flex w-full max-w-lg flex-col gap-8 rounded-2xl bg-white p-8 md:p-12"
      >
        <div className="flex flex-col gap-y-6">
          <BttrLogotype variant="icon" size={48} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl leading-normal tracking-tight dark:text-white md:text-3xl">
              Welcome to Bttr
            </h1>
            <p className="dark:text-polar-500 text-gray-500">
              Tell us a bit about yourself to set up your client portal.
            </p>
          </div>
        </div>

        {error && (
          <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Smith"
              className="dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
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
              placeholder="Acme Inc."
              className="dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
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
              placeholder="+1 (555) 123-4567"
              className="dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="dark:border-polar-700 dark:bg-polar-800/50 dark:text-polar-400 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
              {userEmail}
            </div>
            <p className="dark:text-polar-500 text-xs text-gray-400">
              This is the email you signed in with and cannot be changed.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting || !formData.name}
            className="mt-2 w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            {submitting ? 'Creating your account...' : 'Continue to Portal'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
