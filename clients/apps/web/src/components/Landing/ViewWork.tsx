'use client'

import Link from 'next/link'

export function ViewWork() {
  return (
    <section className="dark:bg-polar-900 w-full overflow-hidden rounded-2xl bg-gray-50">
      <Link href="/work" className="group block">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Video */}
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-square md:w-1/3">
            <video
              src="/assets/landing/orb.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-16">
            <p className="dark:text-polar-500 mb-2 text-sm uppercase tracking-wider text-gray-500">
              Case Studies
            </p>
            <h2 className="mb-4 text-3xl tracking-tight text-gray-900 transition-colors group-hover:text-[#D2A62C] dark:text-white md:text-4xl">
              Explore Our Work
            </h2>
            <p className="dark:text-polar-400 mb-6 max-w-xl text-lg text-gray-600">
              From enterprise leaders to innovative startups, see how we design and build mission-critical digital products.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-[#D2A62C]">
              <span>View the Work</span>
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
