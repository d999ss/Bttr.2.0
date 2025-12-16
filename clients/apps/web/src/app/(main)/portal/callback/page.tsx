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
  const [debug, setDebug] = useState<string>('')
  const processed = useRef(false)

  useEffect(() => {
    // Prevent double processing
    if (processed.current) return
    processed.current = true

    const handleCallback = async () => {
      const supabase = getSupabaseBrowserClient()

      // Debug info
      const debugInfo = {
        href: window.location.href,
        hash: window.location.hash,
        search: window.location.search,
        code: searchParams.get('code'),
        error: searchParams.get('error'),
      }
      setDebug(JSON.stringify(debugInfo, null, 2))
      console.log('Callback debug:', debugInfo)

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
        console.log('Found code, attempting exchange...')
        try {
          const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
          if (exchangeError) {
            console.error('Code exchange error:', exchangeError)
            setError(`Code exchange failed: ${exchangeError.message}`)
            return
          }
          if (data.session) {
            console.log('Session created successfully')
            setAuthCookie(data.session)
            router.replace('/portal/dashboard')
            return
          }
        } catch (err) {
          console.error('Exchange exception:', err)
          setError(`Exchange exception: ${err instanceof Error ? err.message : 'Unknown error'}`)
          return
        }
      }

      // Check for hash fragment (implicit flow)
      if (window.location.hash && window.location.hash.includes('access_token')) {
        console.log('Found hash with access_token, waiting for Supabase to process...')
        // Give Supabase time to process the hash
        await new Promise(resolve => setTimeout(resolve, 1000))

        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          console.log('Session found after hash processing')
          setAuthCookie(session)
          router.replace('/portal/dashboard')
          return
        }
      }

      // Final check for existing session
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        console.log('Existing session found')
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
          {debug && (
            <pre className="text-left text-xs bg-gray-100 p-2 rounded mb-4 overflow-auto">
              {debug}
            </pre>
          )}
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
        {debug && (
          <pre className="mt-4 text-left text-xs bg-gray-100 p-2 rounded max-w-lg overflow-auto">
            {debug}
          </pre>
        )}
      </div>
    </div>
  )
}
