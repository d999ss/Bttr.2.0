import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'

export const metadata: Metadata = {
  title: 'Helix - Bttr.',
  description:
    'One brand three sectors – Securities, Carbon Assets, and Real Estate.',
  openGraph: {
    title: 'Helix - Bttr.',
    description:
      'One brand three sectors – Securities, Carbon Assets, and Real Estate.',
    images: ['/assets/work/uploads/2023/09/Mask-group-1.png.webp'],
  },
}

export default function HelixHomesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/09/Mask-group-1.png.webp"
            alt="Helix"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              One brand three sectors – Securities, Carbon Assets, and Real
              Estate
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
            / Helix
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Financial Services</p>
                <p>Real Estate</p>
                <p>Sustainability</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Helix</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2022</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Brand Strategy</p>
                <p>Visual Identity</p>
                <p>UX Design</p>
                <p>UI Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Helix needed a unified brand that could flex across three distinct
              business verticals: securities trading, carbon asset management,
              and real estate investment. We created a cohesive visual identity
              that maintains brand consistency while allowing each sector to
              have its own personality.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The result is a sophisticated brand system that communicates trust
              and innovation across all touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/09/Full-Bleed-2-1.webp"
            alt="Helix Brand"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - The Challenge */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Challenge
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Building a brand that works across diverse industries
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Creating a unified brand for three distinct business verticals
          required careful consideration of each sector&apos;s unique audience
          and requirements. We developed a flexible design system that maintains
          brand cohesion while allowing each division to communicate effectively
          with its specific market.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-5.jpg"
              alt="Helix Securities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-3.webp"
              alt="Helix Carbon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Brand System */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Brand System
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A flexible system designed for growth
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The brand system we developed for Helix is built to scale. As the
          company expands into new markets and verticals, the design foundation
          provides clear guidelines for extending the brand while maintaining
          its core identity.
        </p>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Helix</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">New York, United States</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Financial Services</p>
              <p className="text-sm text-gray-600">Real Estate</p>
              <p className="text-sm text-gray-600">Sustainability</p>
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

      <NextCaseStudy currentSlug="helix-homes" />
    </main>
  )
}
