'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { caseStudies, allTags } from '@/data/caseStudies'
import { Section } from '@/components/Landing/Section'
import { UrgencyBanner } from '@/components/Landing/UrgencyBanner'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Tag filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => study.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
  }

  const hasFilters = searchQuery !== '' || selectedTags.length > 0

  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-12 py-8 md:py-16">
        {/* Header */}
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl tracking-tight md:text-5xl dark:text-white">Our Work</h1>
          <p className="dark:text-polar-500 max-w-2xl text-lg text-gray-500">
            Explore our portfolio of work across industries, platforms, and disciplines.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col gap-y-6">
          {/* Search Input */}
          <div className="relative">
            <svg
              className="dark:text-polar-500 absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dark:border-polar-700 dark:bg-polar-900 dark:text-white dark:placeholder:text-polar-500 w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 outline-none transition-colors focus:border-[#D2A62C] dark:focus:border-[#D2A62C]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="dark:text-polar-500 dark:hover:text-polar-300 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={twMerge(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  selectedTags.includes(tag)
                    ? 'bg-[#D2A62C] text-white'
                    : 'dark:bg-polar-800 dark:text-polar-300 dark:hover:bg-polar-700 bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Active Filters & Results Count */}
          <div className="flex items-center justify-between">
            <p className="dark:text-polar-500 text-sm text-gray-500">
              {filteredStudies.length} {filteredStudies.length === 1 ? 'project' : 'projects'}
              {hasFilters && ' found'}
            </p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-sm font-medium text-[#D2A62C] transition-colors hover:text-[#b8922a]"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-col gap-y-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.length > 0 ? (
              <motion.div
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                layout
              >
                {filteredStudies.map((study, index) => (
                  <motion.div
                    key={study.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link href={`/work/${study.slug}`} className="group block">
                      <div className="dark:bg-polar-800 relative mb-4 aspect-square overflow-hidden rounded-xl bg-gray-200">
                        <Image
                          src={study.thumbnail}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <h3 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                        {study.title}
                      </h3>
                      <p className="dark:text-polar-500 mb-3 text-gray-500">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="dark:bg-polar-800 dark:text-polar-400 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-y-4 py-16 text-center"
              >
                <div className="dark:bg-polar-800 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    className="dark:text-polar-500 h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-lg font-medium dark:text-white">No projects found</h3>
                  <p className="dark:text-polar-500 text-gray-500">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
                <button
                  onClick={clearFilters}
                  className="mt-2 rounded-full bg-[#D2A62C] px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <UrgencyBanner />
      </Section>
    </div>
  )
}
