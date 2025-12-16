'use client'

import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const navItems = [
  { href: '/portal/dashboard', label: 'Dashboard' },
  { href: '/portal/projects', label: 'Projects' },
  { href: '/portal/hours', label: 'Hours' },
  { href: '/portal/invoices', label: 'Invoices' },
]

export default function PortalLayout({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'
  const isLoginPage = pathname === '/portal/login'
  const isCallbackPage = pathname === '/portal/callback'
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (isDemo || isLoginPage || isCallbackPage) return
    async function checkAdmin() {
      try {
        const res = await fetch('/api/client-portal/admin/check')
        const data = await res.json()
        setIsAdmin(data.isAdmin)
      } catch {
        setIsAdmin(false)
      }
    }
    checkAdmin()
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

          <span className="dark:text-polar-500 hidden text-sm text-gray-500 md:block">
            {isDemo ? 'Demo Mode' : 'Client Portal'}
          </span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="dark:border-polar-800 border-b border-gray-200 md:hidden">
        <div className="flex gap-4 overflow-x-auto px-4 py-3 scrollbar-hide">
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
      </div>

      {/* Content */}
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {children}
      </main>
    </div>
  )
}
