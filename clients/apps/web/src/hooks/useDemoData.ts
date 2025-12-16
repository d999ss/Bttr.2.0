'use client'

import { useState, useEffect, useCallback } from 'react'

export interface DemoProject {
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

export interface DemoHoursBalance {
  purchased_hours: number
  used_hours: number
  hourly_rate: number | null
}

export interface DemoHoursLog {
  id: string
  hours: number
  description: string
  project_id: string | null
  created_at: string
}

export interface DemoData {
  enabled: boolean
  company_name: string
  projects: DemoProject[]
  hours_balance: DemoHoursBalance
  hours_log: DemoHoursLog[]
}

const DEMO_STORAGE_KEY = 'bttr_demo_data'

const defaultDemoData: DemoData = {
  enabled: true,
  company_name: 'Acme Corp',
  projects: [
    {
      id: 'demo-1',
      name: 'Brand Refresh & Website Redesign',
      description: 'Complete visual identity overhaul and responsive website redesign with modern design system.',
      status: 'active',
      vercel_preview_url: 'https://preview.vercel.app',
      vercel_production_url: null,
      figma_link: 'https://figma.com',
      github_link: null,
      notion_link: 'https://notion.so',
      created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'demo-2',
      name: 'Mobile App MVP',
      description: 'iOS and Android app development for customer engagement platform.',
      status: 'active',
      vercel_preview_url: null,
      vercel_production_url: null,
      figma_link: 'https://figma.com',
      github_link: 'https://github.com',
      notion_link: null,
      created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'demo-3',
      name: 'E-commerce Platform',
      description: 'Custom Shopify integration with inventory management and analytics dashboard.',
      status: 'completed',
      vercel_preview_url: null,
      vercel_production_url: 'https://example.com',
      figma_link: 'https://figma.com',
      github_link: null,
      notion_link: null,
      created_at: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ],
  hours_balance: {
    purchased_hours: 100,
    used_hours: 67,
    hourly_rate: 175,
  },
  hours_log: [
    {
      id: 'log-1',
      hours: 8,
      description: 'Homepage design iterations and stakeholder feedback',
      project_id: 'demo-1',
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-2',
      hours: 4,
      description: 'Mobile navigation prototype',
      project_id: 'demo-2',
      created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-3',
      hours: 6,
      description: 'Design system documentation',
      project_id: 'demo-1',
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-4',
      hours: 12,
      description: 'User research and competitive analysis',
      project_id: 'demo-1',
      created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-5',
      hours: 5,
      description: 'API integration planning',
      project_id: 'demo-2',
      created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ],
}

export function useDemoData() {
  const [demoData, setDemoData] = useState<DemoData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load demo data from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DEMO_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setDemoData(parsed)
      } else {
        // Initialize with default demo data
        localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(defaultDemoData))
        setDemoData(defaultDemoData)
      }
    } catch {
      // If parsing fails, reset to defaults
      localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(defaultDemoData))
      setDemoData(defaultDemoData)
    }
    setIsLoading(false)
  }, [])

  const clearDemoData = useCallback(() => {
    const clearedData: DemoData = {
      enabled: false,
      company_name: '',
      projects: [],
      hours_balance: { purchased_hours: 0, used_hours: 0, hourly_rate: null },
      hours_log: [],
    }
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(clearedData))
    setDemoData(clearedData)
  }, [])

  const resetDemoData = useCallback(() => {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(defaultDemoData))
    setDemoData(defaultDemoData)
  }, [])

  const isDemoEnabled = demoData?.enabled ?? false

  return {
    demoData,
    isDemoEnabled,
    isLoading,
    clearDemoData,
    resetDemoData,
  }
}
