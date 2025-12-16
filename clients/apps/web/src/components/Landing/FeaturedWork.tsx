'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const featuredCaseStudies = caseStudies.filter((study) => study.featured)

const FeaturedCard = ({
  study,
  index,
}: {
  study: (typeof featuredCaseStudies)[0]
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link
        href={`/work/${study.slug}`}
        className="group block"
      >
        <div className="dark:bg-polar-800 relative mb-4 aspect-square overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={study.thumbnail}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h3 className="mb-2 text-xl tracking-tight text-black dark:text-white">
          {study.title}
        </h3>
        <p className="dark:text-polar-500 text-gray-500">
          {study.description}
        </p>
      </Link>
    </motion.div>
  )
}

export const FeaturedWork = () => {
  return (
    <section className="flex w-full flex-col gap-y-12">
      <div className="flex items-center gap-x-4">
        <div className="dark:to-polar-700 h-px w-12 bg-gradient-to-r from-transparent to-gray-300" />
        <p className="dark:text-polar-500 text-lg text-gray-400">
          Featured Work
        </p>
        <div className="dark:to-polar-700 h-px w-12 bg-gradient-to-l from-transparent to-gray-300" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCaseStudies.map((study, index) => (
          <FeaturedCard key={study.slug} study={study} index={index} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/work"
          className="dark:text-polar-500 dark:hover:text-white group flex items-center gap-x-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-900"
        >
          <span>View all work</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
