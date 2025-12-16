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
      try {
        const supabase = getSupabaseBrowserClient()

        // Check if there's an error in the URL (from OAuth provider)
        const errorParam = searchParams.get('error')
        const errorDescription = searchParams.get('error_description')

        if (errorParam) {
          setError(errorDescription || errorParam)
          return
        }

        // Let Supabase handle the OAuth callback
        // It will automatically exchange the code using the stored code verifier
        const { data: { session }, error: authError } = await supabase.auth.getSession()

        if (authError) {
          console.error('Auth callback error:', authError)
          setError(authError.message)
          return
        }

        if (session) {
          // Successfully authenticated
          const next = searchParams.get('next') || '/portal/dashboard'
          router.replace(next)
        } else {
          // No session yet, might need to wait for URL detection
          // Try to get session from URL hash/params
          const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(
            window.location.href
          )

          if (exchangeError) {
            console.error('Exchange error:', exchangeError)
            setError(exchangeError.message)
            return
          }

          if (data.session) {
            const next = searchParams.get('next') || '/portal/dashboard'
            router.replace(next)
          } else {
            setError('No session created')
          }
        }
      } catch (err) {
        console.error('Callback error:', err)
        setError(err instanceof Error ? err.message : 'Authentication failed')
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
