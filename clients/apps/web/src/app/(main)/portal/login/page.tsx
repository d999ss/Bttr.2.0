import Login from '@/components/Auth/Login'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Portal Login | Bttr.',
}

export default async function PortalLoginPage() {
  return (
    <div className="flex min-h-screen w-full grow items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-md flex-col justify-between gap-12 rounded-2xl bg-white p-10 shadow-sm">
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
        <Login returnTo="/portal/dashboard" />
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
