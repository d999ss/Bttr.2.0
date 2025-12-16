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
  github_link: string | null
  notion_link: string | null
  created_at: string
}

const milestones = [
  { id: 'discovery', label: 'Discovery', description: 'Requirements & research' },
  { id: 'design', label: 'Design', description: 'UX & visual design' },
  { id: 'development', label: 'Development', description: 'Building & testing' },
  { id: 'launch', label: 'Launch', description: 'Deployment & handoff' },
]

function getMilestoneProgress(status: Project['status']): number {
  switch (status) {
    case 'active': return 2 // In development
    case 'completed': return 4 // All done
    case 'paused': return 1 // Discovery done
    case 'archived': return 4 // Complete
    default: return 0
  }
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
  const progress = getMilestoneProgress(project.status)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 1 }}
      className="dark:bg-polar-900 group flex flex-col gap-y-5 rounded-2xl bg-white p-6 transition-transform hover:translate-y-[-4px]"
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

      {/* Milestone Progress */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {milestones.map((milestone, i) => (
            <div key={milestone.id} className="flex flex-col items-center gap-1">
              <div
                className={twMerge(
                  'flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium transition-colors',
                  i < progress
                    ? 'bg-emerald-500 text-white'
                    : i === progress
                    ? 'bg-[#D2A62C] text-white'
                    : 'dark:bg-polar-800 dark:text-polar-500 bg-gray-100 text-gray-400'
                )}
              >
                {i < progress ? (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={twMerge(
                'text-[10px]',
                i <= progress ? 'dark:text-polar-300 text-gray-700' : 'dark:text-polar-600 text-gray-400'
              )}>
                {milestone.label}
              </span>
            </div>
          ))}
        </div>
        <div className="relative h-1 w-full">
          <div className="dark:bg-polar-800 absolute inset-0 rounded-full bg-gray-100" />
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${(progress / milestones.length) * 100}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>

      {/* Quick Links */}
      {(project.vercel_preview_url || project.vercel_production_url || project.figma_link || project.github_link || project.notion_link) && (
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
              <span className="dark:text-polar-50 text-gray-900">Live</span>
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
          {project.notion_link && (
            <a
              href={project.notion_link}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-polar-800 dark:border-polar-700 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-50 px-3 py-1.5 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-polar-700"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.62c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.187zM2.71.967l13.167-.933c1.635-.14 2.055-.047 3.08.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.681 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.62c0-.839.374-1.54 1.593-1.653z" />
              </svg>
              <span className="dark:text-polar-50 text-gray-900">Docs</span>
            </a>
          )}
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-polar-800 dark:border-polar-700 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-50 px-3 py-1.5 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-polar-700"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="dark:text-polar-50 text-gray-900">Code</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
