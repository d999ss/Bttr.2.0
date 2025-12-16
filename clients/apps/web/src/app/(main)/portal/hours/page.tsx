'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { twMerge } from 'tailwind-merge'

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

const changeTypeConfig: Record<string, { label: string; color: string; bg: string; icon: string }> = {
  purchased: { label: 'Hours Added', color: 'text-emerald-500', bg: 'bg-emerald-500/10', icon: '+' },
  used: { label: 'Hours Used', color: 'text-red-500', bg: 'bg-red-500/10', icon: '-' },
  adjustment: { label: 'Adjustment', color: 'text-blue-500', bg: 'bg-blue-500/10', icon: '±' },
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
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export default function HoursPage() {
  const [balance, setBalance] = useState<HoursBalance | null>(null)
  const [log, setLog] = useState<HoursLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = getSupabaseBrowserClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          setError('not-authenticated')
          setLoading(false)
          return
        }

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
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C] dark:border-gray-700" />
          <p className="dark:text-polar-500 text-sm text-gray-500">Loading your hours...</p>
        </div>
      </div>
    )
  }

  if (error === 'not-authenticated') {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl leading-normal dark:text-white">Sign In Required</h2>
            <p className="dark:text-polar-500 text-gray-500">Sign in to view your hours balance and activity.</p>
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

  if (error === 'not-a-client') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-12"
      >
        <motion.div className="flex flex-col gap-y-2" variants={itemVariants}>
          <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Hours Balance</h1>
          <p className="dark:text-polar-500 text-lg text-gray-500">Track your time and materials usage.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/20">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex max-w-xl flex-col gap-y-2 text-center">
            <h2 className="text-2xl leading-normal tracking-tight dark:text-white">No Hours Package Yet</h2>
            <p className="dark:text-polar-500 text-lg text-gray-500">
              Once you have an active project with us, your hours balance will appear here.
            </p>
          </div>
          <Link
            href="/portal/dashboard"
            className="dark:bg-polar-800 dark:border-polar-700 rounded-full border border-transparent bg-gray-100 px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-polar-700"
          >
            Back to Dashboard
          </Link>
        </motion.div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="dark:bg-polar-900 flex flex-col items-center gap-y-4 rounded-2xl bg-white p-8 text-center"
      >
        <h2 className="text-xl leading-normal dark:text-white">Unable to load hours</h2>
        <p className="dark:text-polar-500 text-gray-500">Please try again later.</p>
        <Link
          href="/portal/dashboard"
          className="dark:text-polar-500 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white"
        >
          Back to Dashboard →
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
      className="flex flex-col gap-y-12"
    >
      {/* Header */}
      <motion.div className="flex flex-col gap-y-2" variants={itemVariants}>
        <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Hours Balance</h1>
        <p className="dark:text-polar-500 text-lg text-gray-500">Track your time and materials usage.</p>
      </motion.div>

      {/* Balance Cards */}
      <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
        <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight dark:text-white">
              {(balance?.purchased_hours || 0).toFixed(1)}
            </div>
            <div className="dark:text-polar-500 text-sm text-gray-500">Hours Purchased</div>
          </div>
        </div>

        <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <svg className="h-6 w-6 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight dark:text-white">
              {(balance?.used_hours || 0).toFixed(1)}
            </div>
            <div className="dark:text-polar-500 text-sm text-gray-500">Hours Used</div>
          </div>
        </div>

        <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
          <div className={twMerge('flex h-12 w-12 items-center justify-center rounded-xl', remainingHours <= 5 ? 'bg-red-500/10' : 'bg-purple-500/10')}>
            <svg className={twMerge('h-6 w-6', remainingHours <= 5 ? 'text-red-500' : 'text-purple-500')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div>
            <div className={twMerge('text-3xl font-bold tracking-tight', remainingHours <= 5 ? 'text-red-500' : 'dark:text-white')}>
              {remainingHours.toFixed(1)}
            </div>
            <div className="dark:text-polar-500 text-sm text-gray-500">Hours Remaining</div>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      {balance && balance.purchased_hours > 0 && (
        <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col gap-y-6 rounded-2xl bg-white p-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl dark:text-white">Usage Progress</h3>
              <p className="dark:text-polar-500 text-gray-500">
                {balance.used_hours.toFixed(1)} of {balance.purchased_hours.toFixed(1)} hours used
              </p>
            </div>
            <span className="text-3xl font-bold dark:text-white">{Math.round(usagePercent)}%</span>
          </div>
          <div className="dark:bg-polar-800 h-4 w-full overflow-hidden rounded-full bg-gray-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(usagePercent, 100)}%` }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              className={twMerge(
                'h-full rounded-full',
                usagePercent > 90 ? 'bg-red-500' :
                usagePercent > 75 ? 'bg-yellow-500' : 'bg-[#D2A62C]'
              )}
            />
          </div>
          <div className="dark:text-polar-500 flex flex-wrap gap-6 text-sm text-gray-500">
            {balance.hourly_rate && (
              <div className="flex items-center gap-2">
                <span>Hourly Rate:</span>
                <span className="font-semibold dark:text-white">${balance.hourly_rate}</span>
              </div>
            )}
            {balance.notes && (
              <div className="flex items-center gap-2">
                <span>Package:</span>
                <span className="font-medium dark:text-polar-300">{balance.notes}</span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Low Hours Warning */}
      {remainingHours > 0 && remainingHours <= 10 && (
        <motion.div variants={itemVariants} className="dark:border-polar-700 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-500/20 dark:bg-yellow-500/10">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-500/20">
              <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                <h3 className="text-lg text-yellow-900 dark:text-yellow-200">Low Hours Balance</h3>
                <p className="text-sm text-yellow-800/80 dark:text-yellow-300/80">
                  You have {remainingHours.toFixed(1)} hours remaining. Consider purchasing more hours to avoid interruption.
                </p>
              </div>
              <a
                href="mailto:donny@makebttr.com?subject=Purchase More Hours"
                className="inline-flex w-fit items-center rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-900 transition hover:bg-yellow-500/30 dark:text-yellow-200"
              >
                Purchase More Hours
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Activity Log */}
      <motion.div className="flex flex-col gap-y-6" variants={itemVariants}>
        <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Activity Log</h2>
        {log.length === 0 ? (
          <div className="dark:border-polar-800 flex flex-col items-center gap-y-4 rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
            <div className="dark:bg-polar-800 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <svg className="dark:text-polar-500 h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg dark:text-white">No activity yet</h3>
              <p className="dark:text-polar-500 text-gray-500">Your hours activity will appear here.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-y-3">
            {log.map((entry, index) => {
              const config = changeTypeConfig[entry.change_type] || changeTypeConfig.adjustment
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="dark:bg-polar-900 flex items-center gap-4 rounded-2xl bg-white p-4 transition-transform hover:translate-y-[-2px]"
                >
                  <div className={twMerge('flex h-10 w-10 items-center justify-center rounded-xl', config.bg)}>
                    <span className={twMerge('text-lg font-bold', config.color)}>{config.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={twMerge('text-sm font-medium', config.color)}>{config.label}</span>
                      <span className="dark:text-polar-600 text-xs text-gray-400">•</span>
                      <span className="dark:text-polar-500 text-xs text-gray-500">
                        {new Date(entry.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="dark:text-polar-500 text-sm text-gray-500 truncate">
                      {entry.description || 'No description'}
                    </p>
                  </div>
                  <div className={twMerge('text-lg font-bold', config.color)}>
                    {entry.change_type === 'used' ? '-' : '+'}{entry.hours_amount.toFixed(1)}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </motion.div>

      {/* Need More Hours CTA */}
      <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col gap-4 rounded-2xl bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-xl dark:text-white">Need more hours?</h3>
          <p className="dark:text-polar-500 text-gray-500">
            Contact us to top up your hours balance or discuss a retainer package.
          </p>
        </div>
        <a
          href="mailto:donny@makebttr.com?subject=Purchase More Hours"
          className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black whitespace-nowrap"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  )
}
