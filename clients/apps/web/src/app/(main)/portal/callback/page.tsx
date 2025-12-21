'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import type { Session } from '@supabase/supabase-js'

// Check if user was created within last 5 minutes (new signup)
function isNewUser(session: Session): boolean {
  const createdAt = session.user?.created_at
  if (!createdAt) return false
  const createdTime = new Date(createdAt).getTime()
  const now = Date.now()
  const fiveMinutes = 5 * 60 * 1000
  return now - createdTime < fiveMinutes
}

// Send signup notification (fire and forget)
async function notifySignup(session: Session) {
  try {
    await fetch('/api/notify-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session.user?.email,
        userId: session.user?.id,
        provider: session.user?.app_metadata?.provider || 'email',
      }),
    })
  } catch (error) {
    console.error('Failed to send signup notification:', error)
  }
}

// Accept invite and link user to client record
async function acceptInvite(session: Session, inviteToken: string) {
  try {
    const res = await fetch(`/api/client-portal/invite/${inviteToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: session.user?.id,
        user_email: session.user?.email,
      }),
    })
    if (res.ok) {
      console.log('Invite accepted successfully')
      // Clear stored invite token
      localStorage.removeItem('bttr_invite_token')
    } else {
      console.error('Failed to accept invite:', await res.text())
    }
  } catch (error) {
    console.error('Error accepting invite:', error)
  }
}

export default function PortalCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const notifiedRef = useRef(false)

  useEffect(() => {
    async function handleCallback() {
      try {
        // Debug: log all URL params
        const allParams = Object.fromEntries(searchParams.entries())
        console.log('Callback URL params:', allParams)
        console.log('Full URL:', window.location.href)

        const error = searchParams.get('error')
        const errorDescription = searchParams.get('error_description')

        if (error) {
          console.error('OAuth error:', error, errorDescription)
          setStatus('error')
          setErrorMessage(errorDescription || error)
          return
        }

        const supabase = getSupabaseBrowserClient()

        // Helper to handle successful auth
        const handleSuccess = async (session: Session) => {
          // Check for invite token (from URL param or localStorage)
          const inviteToken = searchParams.get('invite') || localStorage.getItem('bttr_invite_token')

          if (inviteToken) {
            // Accept the invite to link user to client record
            await acceptInvite(session, inviteToken)
          }

          // Send notification for new users (only once)
          if (isNewUser(session) && !notifiedRef.current) {
            notifiedRef.current = true
            notifySignup(session)
          }
          setStatus('success')
          setTimeout(() => {
            router.replace('/portal/dashboard')
          }, 100)
        }

        // Check if there's an auth code in the URL that needs to be exchanged
        const code = searchParams.get('code')

        if (code) {
          console.log('Exchanging code for session...')
          // Explicitly exchange the code for a session
          const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

          if (exchangeError) {
            console.error('Code exchange error:', exchangeError)
            setStatus('error')
            setErrorMessage(exchangeError.message || 'Failed to complete authentication. Please try again.')
            return
          }

          if (data.session) {
            console.log('Session obtained:', data.session.user?.email)
            console.log('Session stored, checking cookies...')
            // Log cookies to verify they were set
            console.log('Document cookies:', document.cookie.split(';').map(c => c.trim().split('=')[0]))
            await handleSuccess(data.session)
            return
          }
        }

        // Listen for auth state changes as fallback
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN' && session) {
            handleSuccess(session)
          }
        })

        // Also check if we already have a session
        const { data: { session } } = await supabase.auth.getSession()

        if (session) {
          handleSuccess(session)
          return
        }

        // If no code and no session, show error faster
        if (!code) {
          console.error('No code in URL, params:', Object.fromEntries(searchParams.entries()))
          setStatus('error')
          setErrorMessage(`No authentication code found. URL: ${window.location.href}`)
          return
        }

        // If no session after a delay, show error
        const timeout = setTimeout(() => {
          setStatus('error')
          setErrorMessage('Authentication timed out. Please try again.')
        }, 10000)

        return () => {
          subscription.unsubscribe()
          clearTimeout(timeout)
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
