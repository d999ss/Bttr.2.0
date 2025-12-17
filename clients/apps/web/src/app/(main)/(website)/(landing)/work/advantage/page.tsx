import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'

export const metadata: Metadata = {
  title: 'Advantage - Bttr.',
  description: 'A Fresh New Look for an Established B2B Platform.',
  openGraph: {
    title: 'Advantage - Bttr.',
    description: 'A Fresh New Look for an Established B2B Platform.',
    images: ['/assets/work/uploads/2023/09/Desktop-copy.webp'],
  },
}

export default function AdvantagePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/09/Desktop-copy.webp"
            alt="Advantage"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              A Fresh New Look for an Established B2B Platform
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#0a0a0a] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / Advantage
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Technology</p>
                <p>B2B SaaS</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Advantage</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2021</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Brand Refresh</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Design System</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Advantage is an established B2B platform that needed a modern
              refresh to stay competitive in an evolving market. We redesigned
              their digital experience from the ground up, creating a fresh
              visual identity while preserving the trust they had built with
              their existing customer base.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The new design system enables faster feature development while
              ensuring consistency across all touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/09/CS_Inset-full-width-1-1.jpg.webp"
            alt="Advantage Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - The Refresh */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Refresh
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Modernizing without losing brand equity
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Refreshing an established brand requires balancing innovation with
          familiarity. We evolved the visual identity to feel contemporary while
          maintaining the elements that customers recognize and trust. The
          result is a platform that feels both fresh and familiar.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-19.jpg"
              alt="Advantage Dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-1-2.jpg.webp"
              alt="Advantage Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Design System */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Design System
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Built for scale and consistency
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          We delivered a comprehensive design system with documented components,
          patterns, and guidelines. This enables the internal team to build new
          features quickly while maintaining design consistency across the
          platform.
        </p>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Advantage</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">United States</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Technology</p>
              <p className="text-sm text-gray-600">B2B SaaS</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Chris Johns</p>
              <p className="text-sm text-gray-600">Donny Smith</p>
            </div>
          </div>
        </div>
      </section>

      <NextCaseStudy currentSlug="advantage" />
    </main>
  )
}
