'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { motion } from 'framer-motion'

interface Project {
  id: string
  name: string
  description: string | null
  status: 'active' | 'completed' | 'paused' | 'archived'
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
  email: string
  company_name: string | null
  projects: Project[]
  hours_balances: HoursBalance[]
}

interface UserInfo {
  email: string
  clientData: ClientData | null
}

const statusConfig = {
  active: { label: 'Active', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', dot: 'bg-green-500' },
  completed: { label: 'Completed', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', dot: 'bg-blue-500' },
  paused: { label: 'Paused', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', dot: 'bg-yellow-500' },
  archived: { label: 'Archived', color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400', dot: 'bg-gray-400' },
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

export default function DashboardPage() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      try {
        const supabase = getSupabaseBrowserClient()
        const { data: { user: authUser } } = await supabase.auth.getUser()

        if (!authUser?.email) {
          setLoading(false)
          return
        }

        // Try to fetch client data
        let clientData: ClientData | null = null
        try {
          const res = await fetch('/api/client-portal/me')
          if (res.ok) {
            clientData = await res.json()
          }
        } catch {
          // Not a registered client yet
        }

        setUser({ email: authUser.email, clientData })
      } catch {
        // Not authenticated
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-[#D2A62C]" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <motion.div
        className="mx-auto max-w-md py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Welcome to the Client Portal</h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400">Sign in to access your projects, track hours, and view invoices.</p>
          <Link
            href="/portal/login"
            className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a]"
          >
            Sign In with Google
          </Link>
        </div>
      </motion.div>
    )
  }

  const { clientData } = user
  const hoursBalance = clientData?.hours_balances?.[0]
  const remainingHours = hoursBalance ? hoursBalance.purchased_hours - hoursBalance.used_hours : 0
  const hoursPercentUsed = hoursBalance && hoursBalance.purchased_hours > 0
    ? (hoursBalance.used_hours / hoursBalance.purchased_hours) * 100
    : 0

  const activeProjects = clientData?.projects?.filter(p => p.status === 'active') || []
  const completedProjects = clientData?.projects?.filter(p => p.status === 'completed') || []
  const allProjects = clientData?.projects || []

  // Get greeting based on time of day
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="flex flex-col gap-1" variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-3xl">
          {greeting}{clientData?.company_name ? `, ${clientData.company_name}` : clientData?.name ? `, ${clientData.name}` : ''}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {clientData ? "Here's an overview of your projects and hours." : `Signed in as ${user.email}`}
        </p>
      </motion.div>

      {/* Stats Grid */}
      {clientData ? (
        <>
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
            {/* Active Projects */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                  <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{activeProjects.length}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Active Projects</div>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{completedProjects.length}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
              </div>
            </div>

            {/* Hours Used */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D2A62C]/10">
                  <svg className="h-5 w-5 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{hoursBalance?.used_hours || 0}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Hours Used</div>
              </div>
            </div>

            {/* Hours Remaining */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${remainingHours <= 5 ? 'bg-red-100 dark:bg-red-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                  <svg className={`h-5 w-5 ${remainingHours <= 5 ? 'text-red-600 dark:text-red-400' : 'text-purple-600 dark:text-purple-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div className={`text-3xl font-bold tracking-tight ${remainingHours <= 5 ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                  {remainingHours}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Hours Remaining</div>
              </div>
            </div>
          </motion.div>

          {/* Hours Progress */}
          {hoursBalance && hoursBalance.purchased_hours > 0 && (
            <motion.div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900" variants={itemVariants}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-900 dark:text-white">Hours Balance</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {hoursBalance.used_hours} of {hoursBalance.purchased_hours} hours used
                  </p>
                </div>
                <Link
                  href="/portal/hours"
                  className="text-sm font-medium text-[#D2A62C] hover:underline"
                >
                  View Details
                </Link>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <motion.div
                  className={`h-full rounded-full ${
                    hoursPercentUsed > 90 ? 'bg-red-500' :
                    hoursPercentUsed > 75 ? 'bg-yellow-500' : 'bg-[#D2A62C]'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(hoursPercentUsed, 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{Math.round(hoursPercentUsed)}% used</span>
                <span>{remainingHours} hours remaining</span>
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
          {allProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Your Projects</h2>
                <Link
                  href="/portal/projects"
                  className="text-sm font-medium text-[#D2A62C] hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {allProjects.slice(0, 6).map((project, index) => {
                  const status = statusConfig[project.status] || statusConfig.active
                  return (
                    <motion.div
                      key={project.id}
                      className="group rounded-2xl bg-white p-6 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="mb-3 flex items-start justify-between">
                        <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.color}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                          {status.label}
                        </div>
                      </div>
                      <h3 className="font-semibold tracking-tight text-gray-900 group-hover:text-[#D2A62C] dark:text-white">
                        {project.name}
                      </h3>
                      {project.description && (
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                          {project.description}
                        </p>
                      )}

                      {/* Quick Links */}
                      {(project.vercel_preview_url || project.vercel_production_url || project.figma_link) && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.vercel_production_url && (
                            <a
                              href={project.vercel_production_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              Live Site
                            </a>
                          )}
                          {project.vercel_preview_url && (
                            <a
                              href={project.vercel_preview_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Preview
                            </a>
                          )}
                          {project.figma_link && (
                            <a
                              href={project.figma_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                              </svg>
                              Figma
                            </a>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Empty State for Projects */}
          {allProjects.length === 0 && (
            <motion.div
              className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900"
              variants={itemVariants}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">No projects yet</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">Your projects will appear here once we get started.</p>
            </motion.div>
          )}
        </>
      ) : (
        /* Not a registered client yet */
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-[#D2A62C]/5 to-[#D2A62C]/10 p-8"
          variants={itemVariants}
        >
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/20">
              <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Welcome to Bttr</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Your account has been created successfully. Once your project is set up,
              you'll be able to track progress, view hours, and access all your project resources here.
            </p>
            <div className="mt-6">
              <a
                href="mailto:donny@makebttr.com?subject=New Project Inquiry"
                className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a]"
              >
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div className="grid gap-4 sm:grid-cols-3" variants={itemVariants}>
        <Link
          href="/portal/hours"
          className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2A62C]/10 transition group-hover:bg-[#D2A62C]/20">
            <svg className="h-6 w-6 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold tracking-tight text-gray-900 group-hover:text-[#D2A62C] dark:text-white">Hours & Time</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your hours balance</p>
          </div>
        </Link>

        <Link
          href="/portal/invoices"
          className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-200 dark:bg-blue-900/30 dark:group-hover:bg-blue-900/50">
            <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">Invoices</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">View billing history</p>
          </div>
        </Link>

        <a
          href="mailto:donny@makebttr.com"
          className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-transform hover:translate-y-[-4px] dark:bg-gray-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition group-hover:bg-green-200 dark:bg-green-900/30 dark:group-hover:bg-green-900/50">
            <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold tracking-tight text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">Get Support</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Questions? Let's chat</p>
          </div>
        </a>
      </motion.div>
    </motion.div>
  )
}
