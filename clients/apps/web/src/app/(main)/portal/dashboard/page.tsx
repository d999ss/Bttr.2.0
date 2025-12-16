'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

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
  active: { label: 'Active', color: 'dark:bg-polar-800 dark:text-polar-50 bg-gray-100 text-gray-900', dot: 'bg-emerald-500' },
  completed: { label: 'Completed', color: 'dark:bg-polar-800 dark:text-polar-50 bg-gray-100 text-gray-900', dot: 'bg-blue-500' },
  paused: { label: 'Paused', color: 'dark:bg-polar-800 dark:text-polar-50 bg-gray-100 text-gray-900', dot: 'bg-yellow-500' },
  archived: { label: 'Archived', color: 'dark:bg-polar-800 dark:text-polar-50 bg-gray-100 text-gray-900', dot: 'bg-gray-400' },
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

export default function DashboardPage() {
  const router = useRouter()
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
          } else {
            // Not a registered client - redirect to onboarding
            router.push('/portal/onboarding')
            return
          }
        } catch {
          // Not a registered client - redirect to onboarding
          router.push('/portal/onboarding')
          return
        }

        setUser({ email: authUser.email, clientData })
      } catch {
        // Not authenticated
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C] dark:border-gray-700" />
          <p className="dark:text-polar-500 text-sm text-gray-500">Loading your dashboard...</p>
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
        transition={{ duration: 1 }}
      >
        <div className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 text-center transition-transform hover:translate-y-[-4px]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl leading-normal dark:text-white">Welcome to the Client Portal</h2>
            <p className="dark:text-polar-500 text-gray-500">Sign in to access your projects, track hours, and view invoices.</p>
          </div>
          <Link
            href="/portal/login"
            className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
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
      className="flex flex-col gap-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="flex flex-col gap-y-2" variants={itemVariants}>
        <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">
          {greeting}{clientData?.company_name ? `, ${clientData.company_name}` : clientData?.name ? `, ${clientData.name}` : ''}
        </h1>
        <p className="dark:text-polar-500 text-lg text-gray-500">
          {clientData ? "Here's an overview of your projects and hours." : `Signed in as ${user.email}`}
        </p>
      </motion.div>

      {/* Stats Grid */}
      {clientData ? (
        <>
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
            {/* Active Projects */}
            <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight dark:text-white">{activeProjects.length}</div>
                <div className="dark:text-polar-500 text-sm text-gray-500">Active Projects</div>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight dark:text-white">{completedProjects.length}</div>
                <div className="dark:text-polar-500 text-sm text-gray-500">Completed</div>
              </div>
            </div>

            {/* Hours Used */}
            <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2A62C]/10">
                <svg className="h-6 w-6 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight dark:text-white">{hoursBalance?.used_hours || 0}</div>
                <div className="dark:text-polar-500 text-sm text-gray-500">Hours Used</div>
              </div>
            </div>

            {/* Hours Remaining */}
            <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
              <div className={twMerge('flex h-12 w-12 items-center justify-center rounded-xl', remainingHours <= 5 ? 'bg-red-500/10' : 'bg-purple-500/10')}>
                <svg className={twMerge('h-6 w-6', remainingHours <= 5 ? 'text-red-500' : 'text-purple-500')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <div className={twMerge('text-3xl font-bold tracking-tight', remainingHours <= 5 ? 'text-red-500' : 'dark:text-white')}>
                  {remainingHours}
                </div>
                <div className="dark:text-polar-500 text-sm text-gray-500">Hours Remaining</div>
              </div>
            </div>
          </motion.div>

          {/* Hours Progress */}
          {hoursBalance && hoursBalance.purchased_hours > 0 && (
            <motion.div className="dark:bg-polar-900 flex flex-col gap-y-6 rounded-2xl bg-white p-8" variants={itemVariants}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-xl dark:text-white">Hours Balance</h3>
                  <p className="dark:text-polar-500 text-gray-500">
                    {hoursBalance.used_hours} of {hoursBalance.purchased_hours} hours used
                  </p>
                </div>
                <Link
                  href="/portal/hours"
                  className="dark:text-polar-500 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white"
                >
                  View Details →
                </Link>
              </div>
              <div className="dark:bg-polar-800 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className={twMerge(
                    'h-full rounded-full',
                    hoursPercentUsed > 90 ? 'bg-red-500' :
                    hoursPercentUsed > 75 ? 'bg-yellow-500' : 'bg-[#D2A62C]'
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(hoursPercentUsed, 100)}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <div className="dark:text-polar-500 flex justify-between text-sm text-gray-500">
                <span>{Math.round(hoursPercentUsed)}% used</span>
                <span>{remainingHours} hours remaining</span>
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
          {allProjects.length > 0 && (
            <motion.div className="flex flex-col gap-y-6" variants={itemVariants}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Your Projects</h2>
                <Link
                  href="/portal/projects"
                  className="dark:text-polar-500 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white"
                >
                  View All →
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {allProjects.slice(0, 6).map((project, index) => {
                  const status = statusConfig[project.status] || statusConfig.active
                  return (
                    <motion.div
                      key={project.id}
                      className="dark:bg-polar-900 group flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className={twMerge('inline-flex items-center gap-x-2 rounded-lg px-3 py-1.5 text-xs font-medium', status.color)}>
                          <span className={twMerge('h-2 w-2 rounded-full', status.dot)} />
                          {status.label}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-lg dark:text-white">
                          {project.name}
                        </h3>
                        {project.description && (
                          <p className="dark:text-polar-500 line-clamp-2 text-sm text-gray-500">
                            {project.description}
                          </p>
                        )}
                      </div>

                      {/* Quick Links */}
                      {(project.vercel_preview_url || project.vercel_production_url || project.figma_link) && (
                        <div className="flex flex-wrap gap-2">
                          {project.vercel_production_url && (
                            <a
                              href={project.vercel_production_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dark:bg-polar-800 dark:border-polar-700 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-50 px-3 py-1.5 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-polar-700"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              <span className="dark:text-polar-50 text-gray-900">Live Site</span>
                            </a>
                          )}
                          {project.vercel_preview_url && (
                            <a
                              href={project.vercel_preview_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dark:bg-polar-800 dark:border-polar-700 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-50 px-3 py-1.5 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-polar-700"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span className="dark:text-polar-50 text-gray-900">Preview</span>
                            </a>
                          )}
                          {project.figma_link && (
                            <a
                              href={project.figma_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dark:bg-polar-800 dark:border-polar-700 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-50 px-3 py-1.5 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-polar-700"
                            >
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                              </svg>
                              <span className="dark:text-polar-50 text-gray-900">Figma</span>
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
              className="dark:border-polar-800 flex flex-col items-center gap-y-4 rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center"
              variants={itemVariants}
            >
              <div className="dark:bg-polar-800 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <svg className="dark:text-polar-500 h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg dark:text-white">No projects yet</h3>
                <p className="dark:text-polar-500 text-gray-500">Your projects will appear here once we get started.</p>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        /* Not a registered client yet */
        <motion.div
          className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 md:p-12"
          variants={itemVariants}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/20">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="flex max-w-xl flex-col gap-y-2 text-center">
            <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Welcome to Bttr</h2>
            <p className="dark:text-polar-500 text-lg text-gray-500">
              Your account has been created successfully. Once your project is set up,
              you'll be able to track progress, view hours, and access all your project resources here.
            </p>
          </div>
          <a
            href="mailto:donny@makebttr.com?subject=New Project Inquiry"
            className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
          >
            Start a Project
          </a>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div className="grid gap-4 md:grid-cols-3" variants={itemVariants}>
        <Link
          href="/portal/hours"
          className="dark:bg-polar-900 group flex items-center gap-x-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <svg className="h-6 w-6 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="dark:text-white">Hours & Time</h3>
            <p className="dark:text-polar-500 text-sm text-gray-500">Track your hours balance</p>
          </div>
        </Link>

        <Link
          href="/portal/invoices"
          className="dark:bg-polar-900 group flex items-center gap-x-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
            <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="dark:text-white">Invoices</h3>
            <p className="dark:text-polar-500 text-sm text-gray-500">View billing history</p>
          </div>
        </Link>

        <a
          href="mailto:donny@makebttr.com"
          className="dark:bg-polar-900 group flex items-center gap-x-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="dark:text-white">Get Support</h3>
            <p className="dark:text-polar-500 text-sm text-gray-500">Questions? Let's chat</p>
          </div>
        </a>
      </motion.div>
    </motion.div>
  )
}
