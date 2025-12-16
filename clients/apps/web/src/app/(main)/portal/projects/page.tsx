'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { twMerge } from 'tailwind-merge'

interface Project {
  id: string
  name: string
  description: string | null
  status: 'active' | 'completed' | 'paused' | 'archived'
  vercel_preview_url: string | null
  vercel_production_url: string | null
  figma_link: string | null
  created_at: string
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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
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

        const res = await fetch('/api/client-portal/projects')
        if (res.status === 404) {
          setError('not-a-client')
          setLoading(false)
          return
        }
        if (!res.ok) throw new Error()

        const data = await res.json()
        setProjects(data.projects || [])
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
          <p className="dark:text-polar-500 text-sm text-gray-500">Loading your projects...</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl leading-normal dark:text-white">Sign In Required</h2>
            <p className="dark:text-polar-500 text-gray-500">Sign in to view your projects.</p>
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
          <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Projects</h1>
          <p className="dark:text-polar-500 text-lg text-gray-500">Your projects and their progress.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/20">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="flex max-w-xl flex-col gap-y-2 text-center">
            <h2 className="text-2xl leading-normal tracking-tight dark:text-white">No Projects Yet</h2>
            <p className="dark:text-polar-500 text-lg text-gray-500">
              Once you start a project with us, it will appear here with all your resources.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:donny@makebttr.com?subject=New Project Inquiry"
              className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
            >
              Start a Project
            </a>
            <Link
              href="/portal/dashboard"
              className="dark:bg-polar-800 dark:border-polar-700 rounded-full border border-transparent bg-gray-100 px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-polar-700"
            >
              Back to Dashboard
            </Link>
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
        transition={{ duration: 1 }}
        className="dark:bg-polar-900 flex flex-col items-center gap-y-4 rounded-2xl bg-white p-8 text-center"
      >
        <h2 className="text-xl leading-normal dark:text-white">Unable to load projects</h2>
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

  const activeProjects = projects.filter(p => p.status === 'active')
  const completedProjects = projects.filter(p => p.status === 'completed')
  const pausedProjects = projects.filter(p => p.status === 'paused')

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-y-12"
    >
      {/* Header */}
      <motion.div className="flex flex-col gap-y-2" variants={itemVariants}>
        <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Projects</h1>
        <p className="dark:text-polar-500 text-lg text-gray-500">Your projects and their progress.</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
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

        <div className="dark:bg-polar-900 flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <svg className="h-6 w-6 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <div className="text-3xl font-bold tracking-tight dark:text-white">{projects.length}</div>
            <div className="dark:text-polar-500 text-sm text-gray-500">Total Projects</div>
          </div>
        </div>
      </motion.div>

      {/* Active Projects */}
      {activeProjects.length > 0 && (
        <motion.div className="flex flex-col gap-y-6" variants={itemVariants}>
          <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Active Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {activeProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Paused Projects */}
      {pausedProjects.length > 0 && (
        <motion.div className="flex flex-col gap-y-6" variants={itemVariants}>
          <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Paused Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pausedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <motion.div className="flex flex-col gap-y-6" variants={itemVariants}>
          <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Completed Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {completedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {projects.length === 0 && (
        <motion.div variants={itemVariants} className="dark:border-polar-800 flex flex-col items-center gap-y-4 rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
          <div className="dark:bg-polar-800 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
            <svg className="dark:text-polar-500 h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg dark:text-white">No projects yet</h3>
            <p className="dark:text-polar-500 text-gray-500">Your projects will appear here once we get started.</p>
          </div>
          <a
            href="mailto:donny@makebttr.com?subject=New Project Inquiry"
            className="dark:hover:bg-polar-50 mt-2 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
          >
            Start a Project
          </a>
        </motion.div>
      )}

      {/* Start New Project CTA */}
      {projects.length > 0 && (
        <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col gap-4 rounded-2xl bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-xl dark:text-white">Ready to start a new project?</h3>
            <p className="dark:text-polar-500 text-gray-500">
              Let's discuss your next idea and bring it to life.
            </p>
          </div>
          <a
            href="mailto:donny@makebttr.com?subject=New Project Inquiry"
            className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black whitespace-nowrap"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status] || statusConfig.active

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 1 }}
      className="dark:bg-polar-900 group flex flex-col gap-y-4 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]"
    >
      <div className="flex items-start justify-between">
        <div className={twMerge('inline-flex items-center gap-x-2 rounded-lg px-3 py-1.5 text-xs font-medium', status.color)}>
          <span className={twMerge('h-2 w-2 rounded-full', status.dot)} />
          {status.label}
        </div>
        {project.created_at && (
          <span className="dark:text-polar-500 text-xs text-gray-500">
            {new Date(project.created_at).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric'
            })}
          </span>
        )}
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
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
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
}
