'use client'

import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Helper to set auth cookie that server can read
function setAuthCookie(session: { access_token: string; refresh_token: string }) {
  const cookieValue = JSON.stringify({
    access_token: session.access_token,
    refresh_token: session.refresh_token,
  })
  const expires = new Date()
  expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days
  document.cookie = `sb-oiekbwdggfjihihdmzsa-auth-token=${encodeURIComponent(cookieValue)}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`
}

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const supabase = getSupabaseBrowserClient()

    // Check for errors in URL params
    const errorParam = searchParams.get('error')
    const errorDesc = searchParams.get('error_description')

    if (errorParam) {
      setError(errorDesc || errorParam)
      return
    }

    // For implicit flow, Supabase automatically handles the hash fragment
    // via detectSessionInUrl: true when the client initializes.
    // We just need to listen for the auth state change.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session) {
        // Set cookie for server-side auth
        setAuthCookie(session)
        router.replace('/portal/dashboard')
      }
    })

    // Check if session already exists (auth may have completed before listener was set up)
    const checkExistingSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        // Set cookie for server-side auth
        setAuthCookie(session)
        router.replace('/portal/dashboard')
      } else {
        // Check for hash fragment - if present, wait for Supabase to process
        if (window.location.hash && window.location.hash.includes('access_token')) {
          // Supabase should be processing this, wait a bit
          setTimeout(async () => {
            const { data: { session: retrySession } } = await supabase.auth.getSession()
            if (retrySession) {
              setAuthCookie(retrySession)
              router.replace('/portal/dashboard')
            } else {
              setError('Failed to complete authentication. Please try again.')
            }
          }, 2000)
        } else if (!window.location.hash) {
          // No hash fragment and no session - something went wrong
          setError('No authentication data found. Please try again.')
        }
      }
    }

    // Small delay to let Supabase process the URL hash
    setTimeout(checkExistingSession, 500)

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
