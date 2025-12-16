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
]

export default function PortalLayout({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (isDemo) return
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
  }, [isDemo])

  const getHref = (href: string) => isDemo ? `${href}?demo=true` : href

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Mode Banner */}
      {isDemo && (
        <div className="bg-[#D2A62C] px-4 py-2 text-center text-sm font-medium text-white">
          Demo Mode - Viewing sample data.{' '}
          <Link href="/portal/dashboard" className="underline hover:no-underline">
            Exit Demo
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href={getHref('/portal/dashboard')}>
                <BttrLogotype variant="logotype" size={100} />
              </Link>
              <div className="hidden md:flex md:gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={getHref(item.href)}
                    className={twMerge(
                      'text-sm font-medium transition-colors',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                {isAdmin && (
                  <Link
                    href="/portal/admin"
                    className={twMerge(
                      'text-sm font-medium transition-colors',
                      pathname === '/portal/admin' || pathname.startsWith('/portal/admin/')
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    )}
                  >
                    Admin
                  </Link>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {isDemo ? 'Demo Mode' : 'Client Portal'}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="border-b border-gray-200 bg-white md:hidden">
        <div className="flex gap-4 overflow-x-auto px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={getHref(item.href)}
              className={twMerge(
                'whitespace-nowrap text-sm font-medium transition-colors',
                pathname === item.href || pathname.startsWith(item.href + '/')
                  ? 'text-gray-900'
                  : 'text-gray-500'
              )}
            >
              {item.label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/portal/admin"
              className={twMerge(
                'whitespace-nowrap text-sm font-medium transition-colors',
                pathname === '/portal/admin' || pathname.startsWith('/portal/admin/')
                  ? 'text-gray-900'
                  : 'text-gray-500'
              )}
            >
              Admin
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
