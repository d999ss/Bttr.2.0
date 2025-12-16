'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export default function InvoicesPage() {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      try {
        const supabase = getSupabaseBrowserClient()
        const { data: { user } } = await supabase.auth.getUser()
        setIsAuthenticated(!!user)
      } catch {
        // Not authenticated
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C] dark:border-gray-700" />
          <p className="dark:text-polar-500 text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md py-16"
      >
        <div className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-2xl bg-white p-8 text-center transition-transform hover:translate-y-[-4px]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl leading-normal dark:text-white">Sign In Required</h2>
            <p className="dark:text-polar-500 text-gray-500">Sign in to view your invoices.</p>
          </div>
          <Link
            href="/portal/login"
            className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-y-12"
    >
      {/* Header */}
      <motion.div className="flex flex-col gap-y-2" variants={itemVariants}>
        <h1 className="text-3xl leading-normal tracking-tight md:text-4xl dark:text-white">Invoices</h1>
        <p className="dark:text-polar-500 text-lg text-gray-500">View and track your invoices.</p>
      </motion.div>

      {/* Coming Soon */}
      <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col items-center gap-y-8 rounded-2xl bg-white p-8 md:p-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10">
          <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex max-w-xl flex-col gap-y-3 text-center">
          <h2 className="text-2xl leading-normal tracking-tight dark:text-white">Invoice Portal Coming Soon</h2>
          <p className="dark:text-polar-500 text-lg text-gray-500">
            We're building a beautiful invoice tracking experience. Soon you'll be able to view all your invoices, payment history, and download receipts right here.
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-4 grid w-full max-w-2xl gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="dark:bg-polar-800 flex flex-col items-center gap-y-3 rounded-xl bg-gray-50 p-6 text-center transition-transform hover:translate-y-[-4px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-medium dark:text-white">View Invoices</h3>
            <p className="dark:text-polar-500 text-xs text-gray-500">See all your invoices in one place</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="dark:bg-polar-800 flex flex-col items-center gap-y-3 rounded-xl bg-gray-50 p-6 text-center transition-transform hover:translate-y-[-4px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium dark:text-white">Payment Status</h3>
            <p className="dark:text-polar-500 text-xs text-gray-500">Track paid and outstanding amounts</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="dark:bg-polar-800 flex flex-col items-center gap-y-3 rounded-xl bg-gray-50 p-6 text-center transition-transform hover:translate-y-[-4px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
              <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="font-medium dark:text-white">Download PDFs</h3>
            <p className="dark:text-polar-500 text-xs text-gray-500">Get copies of all your invoices</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div variants={itemVariants} className="dark:bg-polar-900 flex flex-col gap-4 rounded-2xl bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-xl dark:text-white">Need an invoice now?</h3>
          <p className="dark:text-polar-500 text-gray-500">
            Contact us directly and we'll send you any invoice you need.
          </p>
        </div>
        <a
          href="mailto:donny@makebttr.com?subject=Invoice Request"
          className="dark:hover:bg-polar-50 rounded-full border-none bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 dark:bg-white dark:text-black whitespace-nowrap"
        >
          Request Invoice
        </a>
      </motion.div>

      {/* Back to Dashboard */}
      <motion.div variants={itemVariants} className="text-center">
        <Link
          href="/portal/dashboard"
          className="dark:text-polar-500 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </motion.div>
    </motion.div>
  )
}
