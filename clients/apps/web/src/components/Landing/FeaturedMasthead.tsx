'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const FeaturedMasthead = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Link href="/work/ge-aerospace" className="group block">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-masthead.jpg"
            alt="GE Aerospace FlightDeck"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16"
          >
            <p className="mb-2 text-sm uppercase tracking-wider text-white/70">
              Featured Case Study
            </p>
            <h2 className="mb-3 max-w-3xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              GE Aerospace FlightDeck
            </h2>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              Modernizing enterprise systems under real-world constraints
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-white/80">
              View Case Study
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </Link>
    </section>
  )
}
