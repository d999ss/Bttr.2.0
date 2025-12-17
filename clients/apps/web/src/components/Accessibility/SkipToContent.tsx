'use client'

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[9999] -translate-y-16 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    >
      Skip to main content
    </a>
  )
}
