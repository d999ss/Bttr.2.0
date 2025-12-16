'use client'

import { useEffect, useRef } from 'react'

interface UnicornStudioEmbedProps {
  projectId: string
  className?: string
}

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => Promise<void>
      destroy: () => void
    }
  }
}

export const UnicornStudioEmbed = ({
  projectId,
  className,
}: UnicornStudioEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return

    const loadUnicornStudio = async () => {
      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src*="unicornStudio"]',
      )

      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://cdn.unicorn.studio/v1.4.0/unicornStudio.umd.js'
        script.async = true
        script.onload = () => {
          if (window.UnicornStudio) {
            window.UnicornStudio.init()
            initializedRef.current = true
          }
        }
        document.body.appendChild(script)
      } else if (window.UnicornStudio) {
        window.UnicornStudio.init()
        initializedRef.current = true
      }
    }

    loadUnicornStudio()

    return () => {
      if (window.UnicornStudio && initializedRef.current) {
        window.UnicornStudio.destroy()
        initializedRef.current = false
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  )
}
