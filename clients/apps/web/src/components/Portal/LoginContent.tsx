'use client'

import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function LoginContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleGoogleLogin = async () => {
    setLoading(true)
    setMessage('')

    try {
      const supabase = getSupabaseBrowserClient()
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/portal/callback`,
        },
      })

      if (error) {
        console.error('Google login error:', error)
        setMessage(error.message)
        setLoading(false)
        return
      }

      // If we get a URL back, redirect manually
      if (data?.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      setMessage(err instanceof Error ? err.message : 'An unexpected error occurred')
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
        emailRedirectTo: `${window.location.origin}/portal/callback`,
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
    <div className="flex w-full flex-col justify-between gap-8 p-8 md:gap-12 md:p-12">
      <div className="flex flex-col gap-y-6 md:gap-y-8">
        <BttrLogotype variant="icon" size={60} />
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-2xl text-black dark:text-white">
            Client Portal
          </h2>
          <p className="text-base text-gray-500 dark:text-polar-400 md:text-lg">
            Sign in to view your projects, invoices, and more.
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-xl bg-red-500/10 p-4 text-sm text-red-500">
          {decodeURIComponent(error)}
        </div>
      )}

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
          disabled={loading}
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
            disabled={loading || !email}
            className="w-full rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Magic Link'}
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-4">
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

        <div className="text-center">
          <Link
            href="/portal/admin"
            className="text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-polar-400 dark:hover:text-polar-300"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  )
}
