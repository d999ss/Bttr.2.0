'use client'

import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'

const navItems = [
  { href: '/portal/dashboard', label: 'Dashboard' },
  { href: '/portal/projects', label: 'Projects' },
  { href: '/portal/milestones', label: 'Milestones' },
  { href: '/portal/files', label: 'Files' },
  { href: '/portal/hours', label: 'Hours' },
  { href: '/portal/invoices', label: 'Invoices' },
  { href: '/portal/support', label: 'Support' },
]

interface UserInfo {
  avatarUrl: string | null
  name: string | null
  email: string
}

export default function PortalLayout({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'
  const isLoginPage = pathname === '/portal/login'
  const isCallbackPage = pathname === '/portal/callback'
  const isOnboardingPage = pathname === '/portal/onboarding'
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState<UserInfo | null>(null)
  const [avatarError, setAvatarError] = useState(false)

  useEffect(() => {
    if (isDemo || isLoginPage || isCallbackPage) return

    async function fetchUserAndAdmin() {
      try {
        // Get user info from Supabase
        const supabase = getSupabaseBrowserClient()
        const { data: { user: authUser } } = await supabase.auth.getUser()

        if (authUser) {
          setUser({
            avatarUrl: authUser.user_metadata?.avatar_url || authUser.user_metadata?.picture || null,
            name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || null,
            email: authUser.email || '',
          })
        }

        // Check admin status
        const res = await fetch('/api/client-portal/admin/check')
        const data = await res.json()
        setIsAdmin(data.isAdmin)
      } catch {
        setIsAdmin(false)
      }
    }
    fetchUserAndAdmin()
  }, [isDemo, isLoginPage, isCallbackPage])

  const getHref = (href: string) => isDemo ? `${href}?demo=true` : href

  // Login and callback pages have their own layout
  if (isLoginPage || isCallbackPage) {
    return <>{children}</>
  }

  return (
    <div className="dark:bg-polar-950 relative flex min-h-screen flex-col bg-gray-50">
      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="bg-[#D2A62C] px-4 py-2 text-center text-sm font-medium text-white">
          Demo Mode - Viewing sample data.{' '}
          <Link href="/portal/dashboard" className="underline hover:no-underline">
            Exit Demo
          </Link>
        </div>
      )}

      {/* Navigation - matching main site style */}
      <div className="dark:text-polar-50 flex w-full flex-col items-center py-8">
        <div className="relative flex w-full max-w-6xl flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={getHref('/portal/dashboard')}>
            <BttrLogotype variant="icon" size={40} />
          </Link>

          <ul className="absolute left-1/2 mx-auto hidden -translate-x-1/2 flex-row gap-x-8 font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={getHref(item.href)}
                  className={twMerge(
                    'dark:text-polar-500 -m-1 flex items-center gap-x-2 p-1 text-gray-500 transition-colors hover:text-black dark:hover:text-white',
                    (pathname === item.href || pathname.startsWith(item.href + '/')) && 'text-black dark:text-white'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {isAdmin && (
              <li>
                <Link
                  href="/portal/admin"
                  className={twMerge(
                    'dark:text-polar-500 -m-1 flex items-center gap-x-2 p-1 text-gray-500 transition-colors hover:text-black dark:hover:text-white',
                    (pathname === '/portal/admin' || pathname.startsWith('/portal/admin/')) && 'text-black dark:text-white'
                  )}
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            {isDemo ? (
              <span className="dark:text-polar-500 text-sm text-gray-500">Demo Mode</span>
            ) : user ? (
              <Link href="/portal/profile" className="flex items-center gap-3 group">
                {user.avatarUrl && !avatarError ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name || user.email}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-transparent transition-all group-hover:ring-[#D2A62C]"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D2A62C] text-sm font-medium text-white ring-2 ring-transparent transition-all group-hover:ring-[#D2A62C]/50">
                    {(user.name || user.email).charAt(0).toUpperCase()}
                  </div>
                )}
              </Link>
            ) : (
              <Link
                href="/portal/login"
                className="dark:text-polar-500 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="dark:border-polar-800 border-b border-gray-200 md:hidden">
        <div className="flex items-center justify-between gap-4 overflow-x-auto px-4 py-3 scrollbar-hide">
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getHref(item.href)}
                className={twMerge(
                  'dark:text-polar-500 whitespace-nowrap text-sm font-medium text-gray-500 transition-colors hover:text-black dark:hover:text-white',
                  (pathname === item.href || pathname.startsWith(item.href + '/')) && 'text-black dark:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                href="/portal/admin"
                className={twMerge(
                  'dark:text-polar-500 whitespace-nowrap text-sm font-medium text-gray-500 transition-colors hover:text-black dark:hover:text-white',
                  (pathname === '/portal/admin' || pathname.startsWith('/portal/admin/')) && 'text-black dark:text-white'
                )}
              >
                Admin
              </Link>
            )}
          </div>
          {user && !isDemo && (
            <Link href="/portal/profile" className="flex-shrink-0">
              {user.avatarUrl && !avatarError ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name || user.email}
                  className="h-8 w-8 rounded-full object-cover"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D2A62C] text-sm font-medium text-white">
                  {(user.name || user.email).charAt(0).toUpperCase()}
                </div>
              )}
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {children}
      </main>
    </div>
  )
}
