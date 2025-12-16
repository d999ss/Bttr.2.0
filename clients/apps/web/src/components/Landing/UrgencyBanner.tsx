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
      className="relative overflow-hidden"
    >
      {/* Sophisticated border with gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#D2A62C]/20 via-[#D2A62C]/40 to-[#D2A62C]/20 p-px">
        <div className="h-full w-full rounded-3xl bg-gray-950" />
      </div>

      <div className="relative flex flex-col items-center gap-y-10 rounded-3xl px-8 py-16 text-center md:px-16 md:py-20">
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D2A62C]/50 to-transparent" />

        <div className="flex flex-col items-center gap-y-6">
          <span className="inline-flex items-center gap-x-2 text-xs font-medium uppercase tracking-[0.3em] text-[#D2A62C]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D2A62C]" />
            Limited Q1 2025 Availability
          </span>

          <h2 className="max-w-2xl text-3xl font-light tracking-tight text-white md:text-5xl">
            We partner with 2–3 new clients per quarter
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-gray-400">
            Our model is built on deep engagement, not volume. If you&apos;re evaluating partners for a critical initiative, let&apos;s talk now.
          </p>
        </div>

        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-x-3 overflow-hidden rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
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

        {/* Bottom ambient glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D2A62C]/30 to-transparent" />
      </div>
    </motion.div>
  )
}
