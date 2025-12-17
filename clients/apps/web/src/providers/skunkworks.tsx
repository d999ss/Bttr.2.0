'use client'

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react'

interface SkunkworksContextType {
  isSkunkworks: boolean
  toggleSkunkworks: () => void
  enableSkunkworks: () => void
  disableSkunkworks: () => void
}

const SkunkworksContext = createContext<SkunkworksContextType | undefined>(undefined)

const STORAGE_KEY = 'bttr-skunkworks-theme'

export function SkunkworksProvider({ children }: { children: ReactNode }) {
  const [isSkunkworks, setIsSkunkworks] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setIsSkunkworks(true)
      document.documentElement.setAttribute('data-theme', 'skunkworks')
    }
  }, [])

  // Update DOM when theme changes
  useEffect(() => {
    if (!mounted) return

    if (isSkunkworks) {
      document.documentElement.setAttribute('data-theme', 'skunkworks')
      localStorage.setItem(STORAGE_KEY, 'true')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem(STORAGE_KEY, 'false')
    }
  }, [isSkunkworks, mounted])

  const toggleSkunkworks = useCallback(() => {
    setIsSkunkworks(prev => !prev)
  }, [])

  const enableSkunkworks = useCallback(() => {
    setIsSkunkworks(true)
  }, [])

  const disableSkunkworks = useCallback(() => {
    setIsSkunkworks(false)
  }, [])

  return (
    <SkunkworksContext.Provider
      value={{
        isSkunkworks,
        toggleSkunkworks,
        enableSkunkworks,
        disableSkunkworks,
      }}
    >
      {children}
    </SkunkworksContext.Provider>
  )
}

export function useSkunkworks() {
  const context = useContext(SkunkworksContext)
  if (context === undefined) {
    throw new Error('useSkunkworks must be used within a SkunkworksProvider')
  }
  return context
}

// Theme toggle component for footer
export function SkunkworksToggle() {
  const { isSkunkworks, toggleSkunkworks } = useSkunkworks()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleSkunkworks}
      className="sk-theme-toggle"
      aria-label={isSkunkworks ? 'Disable Skunkworks theme' : 'Enable Skunkworks theme'}
    >
      <span className="sk-theme-toggle-indicator" />
      <span>{isSkunkworks ? 'Exit Skunkworks' : 'Skunkworks'}</span>
    </button>
  )
}
