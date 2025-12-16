'use client'

import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/data/caseStudies'

interface NextCaseStudyProps {
  currentSlug: string
}

export function NextCaseStudy({ currentSlug }: NextCaseStudyProps) {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % caseStudies.length
  const nextStudy = caseStudies[nextIndex]

  if (!nextStudy) return null

  return (
    <section className="dark:bg-polar-900 w-full bg-gray-50">
      <Link href={`/work/${nextStudy.slug}`} className="group block">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-square md:w-1/3">
            <Image
              src={nextStudy.thumbnail}
              alt={nextStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-16 lg:px-24">
            <p className="dark:text-polar-500 mb-2 text-sm uppercase tracking-wider text-gray-500">
              Next Case Study
            </p>
            <h2 className="mb-4 text-3xl tracking-tight text-gray-900 transition-colors group-hover:text-[#D2A62C] dark:text-white md:text-4xl lg:text-5xl">
              {nextStudy.title}
            </h2>
            <p className="dark:text-polar-400 mb-6 max-w-xl text-lg text-gray-600">
              {nextStudy.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-[#D2A62C]">
              <span>View Project</span>
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
          </div>
        </div>
      </Link>
    </section>
  )
}
