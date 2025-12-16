'use client'

import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function PortalLoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleGoogleLogin = async () => {
    setLoading(true)
    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback?next=/portal/dashboard`,
      },
    })
    if (error) {
      setMessage(error.message)
      setLoading(false)
    }
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setMessage('')

    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/api/auth/callback?next=/portal/dashboard`,
      },
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for a login link!')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen w-full grow items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-md flex-col justify-between gap-10 rounded-2xl bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-y-6">
          <BttrLogotype variant="logotype" size={120} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-gray-900">
              Client Portal
            </h1>
            <p className="text-gray-500">
              Sign in to view your projects, invoices, and more.
            </p>
          </div>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            Authentication failed. Please try again.
          </div>
        )}

        {message && (
          <div className={`rounded-lg p-3 text-sm ${message.includes('Check your email') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {message}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
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
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <form onSubmit={handleMagicLink} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
              required
            />
            <button
              type="submit"
              disabled={loading || !email}
              className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Magic Link'}
            </button>
          </form>
        </div>

        <div className="text-center text-xs text-gray-400">
          By signing in, you agree to our{' '}
          <Link href="/legal/terms" className="text-gray-600 hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/legal/privacy" className="text-gray-600 hover:underline">
            Privacy Policy
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/portal/dashboard?demo=true"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try Demo Mode
          </Link>
        </div>
      </div>
    </div>
  )
}
