'use client'

import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleAuth = async () => {
      // Check if there's an error in the URL
      const errorParam = searchParams.get('error')
      const errorDescription = searchParams.get('error_description')

      // Also check hash for errors
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      const hashError = hashParams.get('error')
      const hashErrorDesc = hashParams.get('error_description')

      if (errorParam || hashError) {
        setError(errorDescription || hashErrorDesc || errorParam || hashError || 'Unknown error')
        return
      }

      const supabase = getSupabaseBrowserClient()

      // Check if tokens are in the hash (implicit flow)
      const accessToken = hashParams.get('access_token')
      const refreshToken = hashParams.get('refresh_token')

      if (accessToken) {
        console.log('Found tokens in hash, setting session manually')

        // Set the session manually
        const { data, error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || '',
        })

        if (sessionError) {
          console.error('Error setting session:', sessionError)
          setError(sessionError.message)
          return
        }

        if (data.session) {
          console.log('Session set successfully:', data.session.user?.email)
          const next = searchParams.get('next') || '/portal/dashboard'
          router.replace(next)
          return
        }
      }

      // Fallback: check if we already have a session
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        const next = searchParams.get('next') || '/portal/dashboard'
        router.replace(next)
      } else {
        setError('No authentication tokens found. Please try again.')
      }
    }

    handleAuth()
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
