'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'

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
  active: { label: 'Active', color: 'bg-green-500/10 text-green-400 ring-1 ring-green-500/20', dot: 'bg-green-400' },
  completed: { label: 'Completed', color: 'bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20', dot: 'bg-blue-400' },
  paused: { label: 'Paused', color: 'bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20', dot: 'bg-yellow-400' },
  archived: { label: 'Archived', color: 'bg-gray-500/10 text-gray-400 ring-1 ring-gray-500/20', dot: 'bg-gray-400' },
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
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-700 border-t-[#D2A62C]" />
          <p className="text-sm text-gray-400">Loading your projects...</p>
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
        <div className="rounded-2xl bg-gray-900 p-8 text-center ring-1 ring-gray-800">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-white">Sign In Required</h2>
          <p className="mb-6 text-gray-400">Sign in to view your projects.</p>
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
          <h1 className="text-2xl font-semibold tracking-tight text-white">Projects</h1>
          <p className="mt-1 text-gray-400">Your projects and their progress.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-br from-[#D2A62C]/10 to-[#D2A62C]/5 p-8 ring-1 ring-[#D2A62C]/20">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/20">
              <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-white">No Projects Yet</h2>
            <p className="mt-2 text-gray-400">
              Once you start a project with us, it will appear here with all your resources.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:donny@makebttr.com?subject=New Project Inquiry"
                className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a]"
              >
                Start a Project
              </a>
              <Link
                href="/portal/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 text-sm font-medium text-gray-200 ring-1 ring-gray-700 transition hover:bg-gray-700"
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
        className="rounded-2xl bg-gray-900 p-8 text-center ring-1 ring-gray-800"
      >
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-white">Unable to load projects</h2>
        <p className="text-gray-400">Please try again later.</p>
        <Link
          href="/portal/dashboard"
          className="mt-6 inline-block text-sm font-medium text-[#D2A62C] hover:underline"
        >
          Back to Dashboard
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
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight text-white">Projects</h1>
        <p className="mt-1 text-gray-400">Your projects and their progress.</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-gray-900 p-6 ring-1 ring-gray-800 transition-transform hover:translate-y-[-4px]">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
              <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-white">{activeProjects.length}</div>
            <div className="text-sm text-gray-400">Active Projects</div>
          </div>
        </div>

        <div className="rounded-2xl bg-gray-900 p-6 ring-1 ring-gray-800 transition-transform hover:translate-y-[-4px]">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
              <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-white">{completedProjects.length}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
        </div>

        <div className="rounded-2xl bg-gray-900 p-6 ring-1 ring-gray-800 transition-transform hover:translate-y-[-4px]">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D2A62C]/10">
              <svg className="h-5 w-5 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-white">{projects.length}</div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </div>
        </div>
      </motion.div>

      {/* Active Projects */}
      {activeProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-white">Active Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {activeProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Paused Projects */}
      {pausedProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-white">Paused Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pausedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-white">Completed Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {completedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {projects.length === 0 && (
        <motion.div variants={itemVariants} className="rounded-2xl border-2 border-dashed border-gray-800 bg-gray-900/50 p-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
            <svg className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-white">No projects yet</h3>
          <p className="mt-1 text-gray-400">Your projects will appear here once we get started.</p>
          <a
            href="mailto:donny@makebttr.com?subject=New Project Inquiry"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a]"
          >
            Start a Project
          </a>
        </motion.div>
      )}

      {/* Start New Project CTA */}
      {projects.length > 0 && (
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 p-6 ring-1 ring-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold tracking-tight text-white">Ready to start a new project?</h3>
              <p className="mt-1 text-sm text-gray-400">
                Let's discuss your next idea and bring it to life.
              </p>
            </div>
            <a
              href="mailto:donny@makebttr.com?subject=New Project Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a] whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
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
      transition={{ delay: index * 0.05 }}
      className="group rounded-2xl bg-gray-900 p-6 ring-1 ring-gray-800 transition-all hover:ring-gray-700 hover:translate-y-[-4px]"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.color}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </div>
        {project.created_at && (
          <span className="text-xs text-gray-500">
            {new Date(project.created_at).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric'
            })}
          </span>
        )}
      </div>

      <h3 className="font-semibold tracking-tight text-white group-hover:text-[#D2A62C]">
        {project.name}
      </h3>
      {project.description && (
        <p className="mt-2 line-clamp-2 text-sm text-gray-400">
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
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 ring-1 ring-gray-700 transition hover:bg-gray-700 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 ring-1 ring-gray-700 transition hover:bg-gray-700 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 ring-1 ring-gray-700 transition hover:bg-gray-700 hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
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
}
