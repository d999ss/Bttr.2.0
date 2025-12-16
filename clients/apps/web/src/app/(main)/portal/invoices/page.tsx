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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-700 border-t-[#D2A62C]" />
          <p className="text-sm text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-md py-16"
      >
        <div className="rounded-2xl bg-gray-900 p-8 text-center ring-1 ring-gray-800">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D2A62C]/10">
            <svg className="h-8 w-8 text-[#D2A62C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-white">Sign In Required</h2>
          <p className="mb-6 text-gray-400">Sign in to view your invoices.</p>
          <Link
            href="/portal/login"
            className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a]"
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
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight text-white">Invoices</h1>
        <p className="mt-1 text-gray-400">View and track your invoices.</p>
      </motion.div>

      {/* Coming Soon */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 ring-1 ring-blue-500/20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/20">
            <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Invoice Portal Coming Soon</h2>
          <p className="mt-3 text-gray-400">
            We're building a beautiful invoice tracking experience. Soon you'll be able to view all your invoices, payment history, and download receipts right here.
          </p>

          {/* Features Preview */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl bg-gray-900/80 p-4 ring-1 ring-gray-800 backdrop-blur transition-transform hover:translate-y-[-4px]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-medium text-white">View Invoices</h3>
              <p className="mt-1 text-xs text-gray-400">See all your invoices in one place</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl bg-gray-900/80 p-4 ring-1 ring-gray-800 backdrop-blur transition-transform hover:translate-y-[-4px]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-white">Payment Status</h3>
              <p className="mt-1 text-xs text-gray-400">Track paid and outstanding amounts</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl bg-gray-900/80 p-4 ring-1 ring-gray-800 backdrop-blur transition-transform hover:translate-y-[-4px]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="font-medium text-white">Download PDFs</h3>
              <p className="mt-1 text-xs text-gray-400">Get copies of all your invoices</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-gray-900 p-6 ring-1 ring-gray-800 transition-transform hover:translate-y-[-2px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold tracking-tight text-white">Need an invoice now?</h3>
            <p className="mt-1 text-sm text-gray-400">
              Contact us directly and we'll send you any invoice you need.
            </p>
          </div>
          <a
            href="mailto:donny@makebttr.com?subject=Invoice Request"
            className="inline-flex items-center justify-center rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b8922a] whitespace-nowrap"
          >
            Request Invoice
          </a>
        </div>
      </motion.div>

      {/* Back to Dashboard */}
      <motion.div variants={itemVariants} className="text-center">
        <Link
          href="/portal/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition"
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
