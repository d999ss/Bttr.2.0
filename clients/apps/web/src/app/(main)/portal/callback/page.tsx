'use client'

import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

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
  const processed = useRef(false)

  useEffect(() => {
    // Prevent double processing
    if (processed.current) return
    processed.current = true

    const handleCallback = async () => {
      const supabase = getSupabaseBrowserClient()

      // Check for errors in URL params
      const errorParam = searchParams.get('error')
      const errorDesc = searchParams.get('error_description')

      if (errorParam) {
        setError(errorDesc || errorParam)
        return
      }

      // Check for PKCE code in URL (query param)
      const code = searchParams.get('code')
      if (code) {
        try {
          const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
          if (exchangeError) {
            setError(`Code exchange failed: ${exchangeError.message}`)
            return
          }
          if (data.session) {
            setAuthCookie(data.session)
            router.replace('/portal/dashboard')
            return
          }
        } catch (err) {
          setError(`Exchange exception: ${err instanceof Error ? err.message : 'Unknown error'}`)
          return
        }
      }

      // Check for hash fragment (implicit flow fallback)
      if (window.location.hash && window.location.hash.includes('access_token')) {
        await new Promise(resolve => setTimeout(resolve, 1000))

        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          setAuthCookie(session)
          router.replace('/portal/dashboard')
          return
        }
      }

      // Final check for existing session
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setAuthCookie(session)
        router.replace('/portal/dashboard')
        return
      }

      // No session found
      setError('No authentication data found. Please try again.')
    }

    handleCallback()
  }, [router, searchParams])

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="rounded-xl bg-red-500/10 p-6 text-center max-w-lg">
          <h2 className="mb-2 text-lg font-medium text-red-600">Authentication Failed</h2>
          <p className="text-sm text-red-500 mb-4">{error}</p>
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
