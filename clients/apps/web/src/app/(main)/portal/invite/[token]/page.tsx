'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import Link from 'next/link'

interface ClientInfo {
  id: string
  name: string
  email: string
  company_name: string | null
}

export default function InvitePage() {
  const params = useParams()
  const router = useRouter()
  const token = params.token as string

  const [client, setClient] = useState<ClientInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [alreadyAccepted, setAlreadyAccepted] = useState(false)

  const [email, setEmail] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function validateInvite() {
      try {
        const res = await fetch(`/api/client-portal/invite/${token}`)
        const data = await res.json()

        if (!res.ok) {
          if (data.alreadyAccepted) {
            setAlreadyAccepted(true)
          } else {
            setError(data.error || 'Invalid invite')
          }
          return
        }

        setClient(data.client)
        setEmail(data.client.email)
        // Store token for callback to use
        localStorage.setItem('bttr_invite_token', token)
      } catch {
        setError('Failed to validate invite')
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      validateInvite()
    }
  }, [token])

  const handleGoogleLogin = async () => {
    setAuthLoading(true)
    setMessage('')

    try {
      const supabase = getSupabaseBrowserClient()
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/portal/callback?invite=${token}`,
        },
      })

      if (error) {
        setMessage(error.message)
        setAuthLoading(false)
        return
      }

      if (data?.url) {
        window.location.href = data.url
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'An unexpected error occurred')
      setAuthLoading(false)
    }
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setAuthLoading(true)
    setMessage('')

    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/portal/callback?invite=${token}`,
      },
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for a login link!')
    }
    setAuthLoading(false)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 dark:bg-polar-950">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C]" />
      </div>
    )
  }

  if (alreadyAccepted) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 dark:bg-polar-950">
        <div className="w-full max-w-md rounded-4xl bg-white p-8 shadow-sm dark:bg-polar-900 md:p-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <BttrLogotype variant="icon" size={60} />
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl text-black dark:text-white">Invite Already Used</h2>
              <p className="mt-2 text-gray-500 dark:text-polar-400">
                This invite has already been accepted. You can log in to access your portal.
              </p>
            </div>
            <Link
              href="/portal/login"
              className="rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (error || !client) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 dark:bg-polar-950">
        <div className="w-full max-w-md rounded-4xl bg-white p-8 shadow-sm dark:bg-polar-900 md:p-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <BttrLogotype variant="icon" size={60} />
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
              <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl text-black dark:text-white">Invalid Invite</h2>
              <p className="mt-2 text-gray-500 dark:text-polar-400">
                {error || 'This invite link is invalid or has expired.'}
              </p>
            </div>
            <Link
              href="/portal/login"
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-polar-400"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 dark:bg-polar-950">
      <div className="w-full max-w-md rounded-4xl bg-white shadow-sm dark:bg-polar-900">
        <div className="flex w-full flex-col justify-between gap-8 p-8 md:gap-12 md:p-12">
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <BttrLogotype variant="icon" size={60} />
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-2xl text-black dark:text-white">
                Welcome, {client.name}!
              </h2>
              <p className="text-base text-gray-500 dark:text-polar-400 md:text-lg">
                {client.company_name ? (
                  <>You&apos;ve been invited to access the <strong>{client.company_name}</strong> client portal.</>
                ) : (
                  <>You&apos;ve been invited to access your Bttr client portal.</>
                )}
              </p>
            </div>
          </div>

          {message && (
            <div className={`rounded-xl p-4 text-sm ${
              message.includes('Check your email')
                ? 'bg-green-500/10 text-green-500'
                : 'bg-red-500/10 text-red-500'
            }`}>
              {message}
            </div>
          )}

          <div className="flex flex-col gap-y-4">
            <button
              onClick={handleGoogleLogin}
              disabled={authLoading}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50 disabled:opacity-50 dark:border-polar-600 dark:bg-polar-700 dark:text-white dark:hover:bg-polar-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 border-t border-gray-200 dark:border-polar-700" />
              <span className="text-sm text-gray-400 dark:text-polar-500">or</span>
              <div className="h-px flex-1 border-t border-gray-200 dark:border-polar-700" />
            </div>

            <form onSubmit={handleMagicLink} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm text-black outline-none transition-colors focus:border-gray-400 dark:border-polar-700 dark:bg-polar-800 dark:text-white dark:placeholder:text-polar-500 dark:focus:border-polar-500"
                required
              />
              <button
                type="submit"
                disabled={authLoading || !email}
                className="w-full rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {authLoading ? 'Sending...' : 'Send Magic Link'}
              </button>
            </form>
          </div>

          <div className="text-center text-xs text-gray-400 dark:text-polar-500">
            By signing in, you agree to our{' '}
            <Link href="/legal/terms" className="text-gray-600 hover:underline dark:text-polar-300">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/legal/privacy" className="text-gray-600 hover:underline dark:text-polar-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
