'use client'

import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      const supabase = getSupabaseBrowserClient()

      // Check for errors in URL
      const errorParam = searchParams.get('error')
      const errorDesc = searchParams.get('error_description')

      if (errorParam) {
        setError(errorDesc || errorParam)
        return
      }

      // PKCE flow: exchange code for session
      const code = searchParams.get('code')
      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
        if (exchangeError) {
          console.error('Code exchange error:', exchangeError)
          setError(exchangeError.message)
          return
        }
      }

      // Check for session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      if (sessionError) {
        console.error('Session error:', sessionError)
        setError(sessionError.message)
        return
      }

      if (session) {
        router.replace('/portal/dashboard')
      } else {
        setError('No authentication data found. Please try again.')
      }
    }

    handleCallback()
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
