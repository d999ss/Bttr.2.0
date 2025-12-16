'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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

const priorityOptions = [
  { value: 'low', label: 'Low', description: 'General questions or minor issues' },
  { value: 'medium', label: 'Medium', description: 'Issues affecting work but not blocking' },
  { value: 'high', label: 'High', description: 'Blocking issues that need quick attention' },
  { value: 'urgent', label: 'Urgent', description: 'Critical issues requiring immediate response' },
]

const categoryOptions = [
  { value: 'bug', label: 'Bug Report', icon: '🐛' },
  { value: 'feature', label: 'Feature Request', icon: '✨' },
  { value: 'question', label: 'Question', icon: '❓' },
  { value: 'billing', label: 'Billing', icon: '💳' },
  { value: 'other', label: 'Other', icon: '📝' },
]

export default function SupportPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    category: 'question',
    priority: 'medium',
    subject: '',
    description: '',
    project: '',
  })

  useEffect(() => {
    async function checkAuth() {
      try {
        const supabase = getSupabaseBrowserClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          setLoading(false)
          return
        }

        setIsAuthenticated(true)
        setClientEmail(user.email || '')

        // Get client info
        const res = await fetch('/api/client-portal/me')
        if (res.ok) {
          const data = await res.json()
          setClientName(data.name || '')
        }
      } catch {
        // Not authenticated
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.subject || !formData.description) return

    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/client-portal/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          client_name: clientName,
          client_email: clientEmail,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to submit ticket')
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
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

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md py-16"
      >
        <div className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 text-center transition-transform hover:translate-y-[-4px]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl leading-normal dark:text-white">Sign In Required</h2>
            <p className="dark:text-polar-500 text-gray-500">Sign in to submit a support ticket.</p>
          </div>
          <Link
            href="/portal/login"
            className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    )
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-lg py-16"
      >
        <div className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 text-center md:p-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <svg className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Ticket Submitted</h2>
            <p className="dark:text-polar-500 text-lg text-gray-500">
              We've received your ticket and will get back to you as soon as possible.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  category: 'question',
                  priority: 'medium',
                  subject: '',
                  description: '',
                  project: '',
                })
              }}
              className="dark:border-polar-700 dark:hover:bg-polar-800 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium transition hover:bg-gray-50 dark:text-white"
            >
              Submit Another
            </button>
            <Link
              href="/portal/dashboard"
              className="dark:hover:bg-polar-50 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </motion.div>
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
        <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Submit a Ticket</h1>
        <p className="dark:text-polar-500 text-lg text-gray-500">
          Need help? We're here for you. Describe your issue and we'll get back to you quickly.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div variants={itemVariants}>
        <form onSubmit={handleSubmit} className="dark:bg-polar-900 flex flex-col gap-y-8 rounded-2xl bg-white p-8 md:p-12">
          {error && (
            <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-500">
              {error}
            </div>
          )}

          {/* Category Selection */}
          <div className="flex flex-col gap-y-3">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              What type of request is this?
            </label>
            <div className="flex flex-wrap gap-3">
              {categoryOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: option.value })}
                  className={`flex items-center gap-x-2 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    formData.category === option.value
                      ? 'bg-[#D2A62C] text-white'
                      : 'dark:bg-polar-800 dark:hover:bg-polar-700 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:text-gray-300'
                  }`}
                >
                  <span>{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Priority Selection */}
          <div className="flex flex-col gap-y-3">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              Priority Level
            </label>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {priorityOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, priority: option.value })}
                  className={`flex flex-col gap-y-1 rounded-xl p-4 text-left transition ${
                    formData.priority === option.value
                      ? 'dark:bg-polar-700 bg-gray-900 text-white dark:text-white'
                      : 'dark:bg-polar-800 dark:hover:bg-polar-700 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <span className={`font-medium ${formData.priority === option.value ? 'text-white' : 'dark:text-white text-gray-900'}`}>
                    {option.label}
                  </span>
                  <span className={`text-xs ${formData.priority === option.value ? 'text-gray-300' : 'dark:text-polar-500 text-gray-500'}`}>
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-y-2">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Brief summary of your issue"
              className="dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-y-2">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Please provide as much detail as possible..."
              rows={6}
              className="dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
            />
          </div>

          {/* Project (optional) */}
          <div className="flex flex-col gap-y-2">
            <label className="dark:text-polar-300 text-sm font-medium text-gray-700">
              Related Project <span className="dark:text-polar-500 text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              placeholder="Which project is this related to?"
              className="dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-4">
            <Link
              href="/portal/dashboard"
              className="dark:text-polar-500 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white"
            >
              ← Back to Dashboard
            </Link>
            <button
              type="submit"
              disabled={submitting || !formData.subject || !formData.description}
              className="dark:hover:bg-polar-50 rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 disabled:opacity-50 dark:bg-white dark:text-black"
            >
              {submitting ? 'Submitting...' : 'Submit Ticket'}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Alternative Contact */}
      <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col gap-4 rounded-2xl bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-xl dark:text-white">Prefer email?</h3>
          <p className="dark:text-polar-500 text-gray-500">
            You can also reach us directly at donny@makebttr.com
          </p>
        </div>
        <a
          href="mailto:donny@makebttr.com"
          className="dark:border-polar-700 dark:hover:bg-polar-800 rounded-full border border-gray-200 px-6 py-3 text-center text-sm font-medium transition hover:bg-gray-50 dark:text-white"
        >
          Send Email
        </a>
      </motion.div>
    </motion.div>
  )
}
