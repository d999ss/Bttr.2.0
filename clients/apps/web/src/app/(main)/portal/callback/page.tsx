'use client'

import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const supabase = getSupabaseBrowserClient()

    // Check for errors in URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const urlParams = new URLSearchParams(window.location.search)
    const errorParam = urlParams.get('error') || hashParams.get('error')
    const errorDesc = urlParams.get('error_description') || hashParams.get('error_description')

    if (errorParam) {
      setError(errorDesc || errorParam)
      return
    }

    // Use onAuthStateChange to detect when Supabase processes the hash tokens
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.replace('/portal/dashboard')
      }
    })

    // Check if session already exists or wait for it
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.replace('/portal/dashboard')
        return
      }

      // If tokens in hash but no session yet, wait a bit longer
      if (hashParams.get('access_token')) {
        setTimeout(async () => {
          const { data: { session: retry } } = await supabase.auth.getSession()
          if (retry) {
            router.replace('/portal/dashboard')
          } else {
            setError('Failed to complete authentication. Please try again.')
          }
        }, 2000)
      } else {
        setError('No authentication data found. Please try again.')
      }
    }

    checkSession()

    return () => subscription.unsubscribe()
  }, [router])

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
