'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const UrgencyBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="dark:bg-polar-900 dark:border-polar-800 flex flex-col items-center gap-y-8 rounded-2xl border border-transparent bg-white p-8 text-center md:p-12"
    >
      <div className="flex flex-col items-center gap-y-6">
        <span className="inline-flex items-center gap-x-2 text-sm text-[#D2A62C]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D2A62C]" />
          Currently Booking Q2 2026
        </span>

        <h2 className="max-w-2xl text-2xl text-pretty md:text-4xl md:leading-normal">
          We partner with 2–3 new clients per quarter
        </h2>

        <p className="dark:text-polar-500 max-w-lg text-lg text-gray-500">
          Our model is built on deep engagement, not volume. If you&apos;re evaluating partners for a critical initiative, let&apos;s talk now.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-x-2 rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <span>Schedule a Conversation</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/work"
          className="dark:bg-polar-800 dark:hover:bg-polar-700 dark:text-polar-300 inline-flex items-center gap-x-2 rounded-full bg-gray-100 px-6 py-3 text-sm text-gray-600 transition-colors hover:bg-gray-200"
        >
          <span>View Case Studies</span>
        </Link>
      </div>
    </motion.div>
  )
}
