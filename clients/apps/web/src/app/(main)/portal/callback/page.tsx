'use client'

import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Debug: log URL info
    console.log('Callback page loaded')
    console.log('URL:', window.location.href)
    console.log('Hash:', window.location.hash)
    console.log('Search:', window.location.search)

    // Check if there's an error in the URL (from OAuth provider)
    const errorParam = searchParams.get('error')
    const errorDescription = searchParams.get('error_description')

    // Also check hash for errors (implicit flow puts params in hash)
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const hashError = hashParams.get('error')
    const hashErrorDesc = hashParams.get('error_description')

    if (errorParam || hashError) {
      setError(errorDescription || hashErrorDesc || errorParam || hashError || 'Unknown error')
      return
    }

    const supabase = getSupabaseBrowserClient()

    // With implicit flow, tokens are in the URL hash
    // detectSessionInUrl: true will auto-process them
    // Listen for the auth state change
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state change:', event, session?.user?.email)

      if (session) {
        const next = searchParams.get('next') || '/portal/dashboard'
        router.replace(next)
      }
    })

    // Check if we already have a session (might have been set from URL hash)
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      console.log('Initial getSession:', session?.user?.email, error)

      if (session) {
        const next = searchParams.get('next') || '/portal/dashboard'
        router.replace(next)
      } else {
        // No session after a moment - show error with more details
        setTimeout(() => {
          supabase.auth.getSession().then(({ data: { session: s }, error: e }) => {
            console.log('Delayed getSession:', s?.user?.email, e)
            if (!s) {
              // Check what we have in the URL
              const hasCode = searchParams.get('code')
              const hasHash = window.location.hash.includes('access_token')
              setError(`No session. Code in URL: ${!!hasCode}, Token in hash: ${hasHash}`)
            }
          })
        }, 3000)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, searchParams])

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="rounded-xl bg-red-500/10 p-6 text-center">
          <h2 className="mb-2 text-lg font-medium text-red-600">Authentication Failed</h2>
          <p className="text-sm text-red-500">{error}</p>
          <button
            onClick={() => router.push('/portal/login')}
            className="mt-4 rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            Back to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 mx-auto" />
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  )
}
