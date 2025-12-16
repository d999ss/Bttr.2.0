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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg'])

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ perspective: 1200 }}
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
          className="relative h-56 w-40 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 md:h-72 md:w-52"
        >
          <Image
            src={study.thumbnail}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 160px, 208px"
          />

          {/* Gradient overlay - always visible, intensifies on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Result highlight badge */}
          {study.resultHighlight && (
            <div className="absolute right-3 top-3 overflow-hidden rounded-full">
              <div className="flex items-center gap-x-1.5 bg-white/95 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D2A62C]" />
                <span className="text-[11px] font-medium tracking-wide text-gray-900">
                  {study.resultHighlight}
                </span>
              </div>
            </div>
          )}

          {/* Content - always visible */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-y-1 p-5">
            <span className="text-sm font-medium text-white">
              {study.title}
            </span>
            <span className="line-clamp-2 text-xs leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90">
              {study.description}
            </span>
          </div>

          {/* Subtle inner border */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/20" />
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
      className="flex w-full flex-col items-center gap-y-12"
    >
      <div className="flex items-center gap-x-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
          Featured Work
        </p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
        {featuredCaseStudies.map((study, index) => (
          <FeaturedCard key={study.slug} study={study} index={index} />
        ))}
      </div>

      <Link
        href="/work"
        className="group mt-4 flex items-center gap-x-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-900 dark:hover:text-white"
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
    </motion.section>
  )
}
