'use client'

import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="dark:bg-polar-950 flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 px-8">
      <div className="flex max-w-md flex-col items-center gap-y-8 text-center">
        <Link href="/">
          <BttrLogotype variant="icon" size={60} />
        </Link>

        <div className="flex flex-col gap-y-4">
          <h1 className="text-8xl font-bold tracking-tight text-[#D2A62C]">
            404
          </h1>
          <h2 className="text-2xl leading-normal tracking-tight text-gray-900 dark:text-white">
            Page not found
          </h2>
          <p className="dark:text-polar-400 text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            href="/work"
            className="dark:bg-polar-800 dark:hover:bg-polar-700 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:text-white"
          >
            View Our Work
          </Link>
        </div>

        <p className="dark:text-polar-500 text-sm text-gray-500">
          Need help?{' '}
          <Link href="/contact" className="text-[#D2A62C] hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PageNotFound
