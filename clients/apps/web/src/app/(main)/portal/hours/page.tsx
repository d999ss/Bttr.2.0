'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'

interface HoursBalance {
  purchased_hours: number
  used_hours: number
  hourly_rate: number | null
  notes: string | null
}

interface HoursLog {
  id: string
  change_type: 'purchased' | 'used' | 'adjustment'
  hours_amount: number
  description: string | null
  logged_by: string | null
  created_at: string
}

const changeTypeConfig: Record<string, { label: string; color: string; darkColor: string; bg: string; darkBg: string; icon: string }> = {
  purchased: { label: 'Hours Added', color: 'text-green-600', darkColor: 'dark:text-green-400', bg: 'bg-green-100', darkBg: 'dark:bg-green-900/30', icon: '+' },
  used: { label: 'Hours Used', color: 'text-red-600', darkColor: 'dark:text-red-400', bg: 'bg-red-100', darkBg: 'dark:bg-red-900/30', icon: '-' },
  adjustment: { label: 'Adjustment', color: 'text-blue-600', darkColor: 'dark:text-blue-400', bg: 'bg-blue-100', darkBg: 'dark:bg-blue-900/30', icon: '±' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HoursPage() {
  const [balance, setBalance] = useState<HoursBalance | null>(null)
  const [log, setLog] = useState<HoursLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        // Check authentication
        const supabase = getSupabaseBrowserClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          setError('not-authenticated')
          setLoading(false)
          return
        }

        setIsAuthenticated(true)

        // Fetch hours data
        const res = await fetch('/api/client-portal/hours')
        if (res.status === 404) {
          setError('not-a-client')
          setLoading(false)
          return
        }
        if (!res.ok) throw new Error()

        const data = await res.json()
        setBalance(data.balance)
        setLog(data.log || [])
      } catch {
        setError('failed')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 dark:border-gray-700 border-t-[#D2A62C]" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading your hours...</p>
        </div>
      </div>
    )
  }

  if (error === 'not-authenticated') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-md py-16"
      >
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Sign In Required</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">Sign in to view your hours balance and activity.</p>
          <Link
            href="/portal/login"
            className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a]"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    )
  }

  if (error === 'not-a-client') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Hours Balance</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Track your time and materials usage.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-br from-[#D2A62C]/5 to-[#D2A62C]/10 dark:from-[#D2A62C]/10 dark:to-[#D2A62C]/5 p-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/20">
              <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">No Hours Package Yet</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Once you have an active project with us, your hours balance will appear here.
            </p>
            <div className="mt-6">
              <Link
                href="/portal/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 transition hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white dark:bg-gray-800 p-8 text-center shadow-sm"
      >
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Unable to load hours</h2>
        <p className="text-gray-600 dark:text-gray-400">Please try again later.</p>
        <Link
          href="/portal/dashboard"
          className="mt-6 inline-block text-sm font-medium text-[#D2A62C] hover:underline"
        >
          Back to Dashboard
        </Link>
      </motion.div>
    )
  }

  const remainingHours = balance ? balance.purchased_hours - balance.used_hours : 0
  const usagePercent = balance && balance.purchased_hours > 0
    ? (balance.used_hours / balance.purchased_hours) * 100
    : 0

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Hours Balance</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Track your time and materials usage.</p>
      </motion.div>

      {/* Balance Cards */}
      <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm transition-transform hover:translate-y-[-4px]">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
              <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {(balance?.purchased_hours || 0).toFixed(1)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Hours Purchased</div>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm transition-transform hover:translate-y-[-4px]">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D2A62C]/10">
              <svg className="h-5 w-5 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {(balance?.used_hours || 0).toFixed(1)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Hours Used</div>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm transition-transform hover:translate-y-[-4px]">
          <div className="flex items-center justify-between">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${remainingHours <= 5 ? 'bg-red-100 dark:bg-red-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
              <svg className={`h-5 w-5 ${remainingHours <= 5 ? 'text-red-600 dark:text-red-400' : 'text-purple-600 dark:text-purple-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className={`text-3xl font-bold ${remainingHours <= 5 ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
              {remainingHours.toFixed(1)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Hours Remaining</div>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      {balance && balance.purchased_hours > 0 && (
        <motion.div variants={itemVariants} className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold tracking-tight text-gray-900 dark:text-white">Usage Progress</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {balance.used_hours.toFixed(1)} of {balance.purchased_hours.toFixed(1)} hours used
              </p>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{Math.round(usagePercent)}%</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(usagePercent, 100)}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className={`h-full rounded-full ${
                usagePercent > 90 ? 'bg-red-500' :
                usagePercent > 75 ? 'bg-yellow-500' : 'bg-[#D2A62C]'
              }`}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {balance.hourly_rate && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400">Hourly Rate:</span>
                <span className="font-semibold text-gray-900 dark:text-white">${balance.hourly_rate}</span>
              </div>
            )}
            {balance.notes && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400">Package:</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{balance.notes}</span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Low Hours Warning */}
      {remainingHours > 0 && remainingHours <= 10 && (
        <motion.div variants={itemVariants} className="rounded-2xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900/50">
              <svg className="h-5 w-5 text-yellow-600 dark:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight text-yellow-800 dark:text-yellow-200">Low Hours Balance</h3>
              <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                You have {remainingHours.toFixed(1)} hours remaining. Consider purchasing more hours to avoid interruption.
              </p>
              <a
                href="mailto:donny@makebttr.com?subject=Purchase More Hours"
                className="mt-3 inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/50 px-4 py-2 text-sm font-medium text-yellow-800 dark:text-yellow-200 transition hover:bg-yellow-200 dark:hover:bg-yellow-900/70"
              >
                Purchase More Hours
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Activity Log */}
      <motion.div variants={itemVariants}>
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Activity Log</h2>
        {log.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <svg className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">No activity yet</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Your hours activity will appear here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {log.map((entry, index) => {
              const config = changeTypeConfig[entry.change_type] || changeTypeConfig.adjustment
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-sm transition-transform hover:translate-y-[-2px]"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${config.bg} ${config.darkBg}`}>
                    <span className={`text-lg font-bold ${config.color} ${config.darkColor}`}>{config.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${config.color} ${config.darkColor}`}>{config.label}</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(entry.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {entry.description || 'No description'}
                    </p>
                  </div>
                  <div className={`text-lg font-bold ${config.color} ${config.darkColor}`}>
                    {entry.change_type === 'used' ? '-' : '+'}{entry.hours_amount.toFixed(1)}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </motion.div>

      {/* Need More Hours CTA */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold tracking-tight">Need more hours?</h3>
            <p className="mt-1 text-sm text-gray-300">
              Contact us to top up your hours balance or discuss a retainer package.
            </p>
          </div>
          <a
            href="mailto:donny@makebttr.com?subject=Purchase More Hours"
            className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a] whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
