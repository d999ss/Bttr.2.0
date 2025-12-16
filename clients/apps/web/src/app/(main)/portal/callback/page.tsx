'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'

export default function PortalCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function handleCallback() {
      try {
        const code = searchParams.get('code')
        const error = searchParams.get('error')
        const errorDescription = searchParams.get('error_description')

        if (error) {
          setStatus('error')
          setErrorMessage(errorDescription || error)
          return
        }

        if (!code) {
          // No code - check if we already have a session
          const supabase = getSupabaseBrowserClient()
          const { data: { session } } = await supabase.auth.getSession()

          if (session) {
            setStatus('success')
            router.replace('/portal/dashboard')
            return
          }

          setStatus('error')
          setErrorMessage('No authorization code received')
          return
        }

        // Exchange the code for a session using the browser client
        // This works because the browser client has access to the PKCE code_verifier
        const supabase = getSupabaseBrowserClient()
        const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

        if (exchangeError) {
          console.error('Code exchange error:', exchangeError)
          setStatus('error')
          setErrorMessage(exchangeError.message)
          return
        }

        if (data.session) {
          setStatus('success')
          // Small delay to ensure session is persisted
          setTimeout(() => {
            router.replace('/portal/dashboard')
          }, 100)
        } else {
          setStatus('error')
          setErrorMessage('No session returned from authentication')
        }
      } catch (err) {
        console.error('Callback error:', err)
        setStatus('error')
        setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred')
      }
    }

    handleCallback()
  }, [searchParams, router])

  return (
    <div className="dark:bg-polar-950 flex min-h-screen w-full grow items-center justify-center bg-gray-50">
      <div className="dark:bg-polar-900 flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-4xl bg-white p-12 shadow-sm dark:shadow-none">
        <BttrLogotype variant="icon" size={60} />

        {status === 'loading' && (
          <>
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C] dark:border-gray-700" />
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl text-black dark:text-white">Signing you in...</h2>
              <p className="dark:text-polar-400 text-center text-gray-500">
                Please wait while we complete your authentication.
              </p>
            </div>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl text-black dark:text-white">Success!</h2>
              <p className="dark:text-polar-400 text-center text-gray-500">
                Redirecting to your dashboard...
              </p>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
              <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl text-black dark:text-white">Authentication Failed</h2>
              <p className="dark:text-polar-400 text-center text-gray-500">
                {errorMessage}
              </p>
            </div>
            <a
              href="/portal/login"
              className="rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Try Again
            </a>
          </>
        )}
      </div>
    </div>
  )
}
