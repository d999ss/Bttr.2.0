'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

interface FeaturedSlide {
  href: string
  image: string
  alt: string
  title: string
  description: string
}

const slides: FeaturedSlide[] = [
  {
    href: '/work/ikon-pass',
    image: '/assets/work/uploads/2025/12/IkonSnow.webp',
    alt: 'Ikon Pass',
    title: 'Ikon Pass',
    description: 'Redefining the ride with an ambitious digital transformation',
  },
  {
    href: '/work/great-dane',
    image: '/assets/work/uploads/2025/01/great-dane/1.webp',
    alt: 'Great Dane',
    title: 'Great Dane',
    description: 'Redesigning the digital presence for a 125-year legacy in American manufacturing',
  },
  {
    href: '/work/juvederm',
    image: '/assets/work/uploads/2025/04/Desktop-6.webp',
    alt: 'JUVÉDERM',
    title: 'JUVÉDERM',
    description: 'Enhancing engagement for a leading aesthetic brand',
  },
  {
    href: '/work/ge-aerospace',
    image: '/assets/work/uploads/2024/08/ge-aerospace-masthead.jpg',
    alt: 'GE Aerospace FlightDeck',
    title: 'GE Aerospace FlightDeck',
    description: 'Modernizing enterprise systems under real-world constraints',
  },
]

export const FeaturedMasthead = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  const currentSlide = slides[currentIndex]

  return (
    <section className="relative w-full overflow-hidden">
      <Link href={currentSlide.href} className="group block">
        <div className="relative h-[80vh] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16"
            >
              <p className="mb-2 text-sm uppercase tracking-wider text-white/70">
                Featured Case Study
              </p>
              <h2 className="mb-3 max-w-3xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                {currentSlide.title}
              </h2>
              <p className="max-w-2xl text-lg text-white/80 md:text-xl">
                {currentSlide.description}
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
          </AnimatePresence>
        </div>
      </Link>
      {/* Navigation dots */}
      <div className="absolute bottom-8 right-8 flex gap-2 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              setCurrentIndex(index)
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
