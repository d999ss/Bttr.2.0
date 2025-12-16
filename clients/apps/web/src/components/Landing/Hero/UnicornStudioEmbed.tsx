'use client'

import { useEffect, useRef, useState } from 'react'

interface UnicornStudioEmbedProps {
  projectId: string
  className?: string
  fallbackClassName?: string
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
  fallbackClassName = 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
}: UnicornStudioEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)
  const [hasError, setHasError] = useState(false)

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
            window.UnicornStudio.init().catch(() => {
              setHasError(true)
            })
            initializedRef.current = true
          }
        }
        script.onerror = () => {
          setHasError(true)
        }
        document.body.appendChild(script)
      } else if (window.UnicornStudio) {
        window.UnicornStudio.init().catch(() => {
          setHasError(true)
        })
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

  // Show fallback gradient if there's an error loading the animation
  if (hasError) {
    return (
      <div
        className={`${className} ${fallbackClassName}`}
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
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
      }}
    />
  )
}
