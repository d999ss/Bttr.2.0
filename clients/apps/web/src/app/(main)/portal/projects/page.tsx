'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Project {
  id: string
  name: string
  description: string | null
  status: string
  vercel_preview_url: string | null
  vercel_production_url: string | null
  figma_link: string | null
  created_at: string
}

const statusColors: Record<string, string> = {
  active: 'bg-green-50 text-green-700',
  completed: 'bg-gray-100 text-gray-700',
  paused: 'bg-yellow-50 text-yellow-700',
  archived: 'bg-gray-100 text-gray-500',
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/client-portal/projects')
        if (!res.ok) throw new Error()
        const data = await res.json()
        setProjects(data.projects || [])
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-medium text-gray-900">Unable to load projects</h2>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-gray-900">Projects</h1>
        <p className="mt-1 text-gray-600">All your projects and their resources.</p>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-lg bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">No projects yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${statusColors[project.status] || 'bg-gray-100 text-gray-700'}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.description && (
                    <p className="mt-1 text-gray-600">{project.description}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.vercel_production_url && (
                  <a
                    href={project.vercel_production_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Production Site
                  </a>
                )}
                {project.vercel_preview_url && (
                  <a
                    href={project.vercel_preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Preview Site
                  </a>
                )}
                {project.figma_link && (
                  <a
                    href={project.figma_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    Figma Design
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
