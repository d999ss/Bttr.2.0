'use client'

import { caseStudies } from '@/data/caseStudies'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const featuredCaseStudies = caseStudies.filter((study) => study.featured)

const FeaturedCard = ({
  study,
  index,
}: {
  study: (typeof featuredCaseStudies)[0]
  index: number
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <Link
        ref={ref}
        href={`/work/${study.slug}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative block"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative h-48 w-36 overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl md:h-64 md:w-48"
        >
          <Image
            src={study.thumbnail}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 144px, 192px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <motion.div
            className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-semibold text-white drop-shadow-lg">
              {study.title}
            </span>
            <span className="line-clamp-2 text-xs text-white/80">
              {study.description}
            </span>
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export const FeaturedWork = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex w-full flex-col items-center gap-8"
    >
      <div className="flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          Featured Work
        </p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {featuredCaseStudies.map((study, index) => (
          <FeaturedCard key={study.slug} study={study} index={index} />
        ))}
      </div>
      <Link
        href="/work"
        className="group mt-2 flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        View all work
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
      </Link>
    </motion.section>
  )
}
