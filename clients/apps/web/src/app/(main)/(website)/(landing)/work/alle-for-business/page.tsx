import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'
import { CaseStudyJsonLd } from '@/components/SEO/CaseStudyJsonLd'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'Allē for Business - Bttr.',
  description: 'Empowering healthcare practices to manage, grow, and scale.',
  openGraph: {
    title: 'Allē for Business - Bttr.',
    description: 'Empowering healthcare practices to manage, grow, and scale.',
    images: ['/assets/work/uploads/2024/03/Desktop-6-1440x901.jpg'],
  },
}

export default function AlleForBusinessPage() {
  const study = caseStudies.find((s) => s.slug === 'alle-for-business')!

  return (
    <main className="bg-white">
      <CaseStudyJsonLd caseStudy={study} datePublished="2023-09-01" />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/03/Desktop-6-1440x901.jpg"
            alt="Allē for Business"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Empowering healthcare practices to manage, grow, and scale
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
            / Allē for Business
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Healthcare</p>
                <p>B2B SaaS</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Allergan Data Labs</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2021-2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>User Research</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Allē for Business is the B2B platform that empowers healthcare
              practices to manage their Allergan Aesthetics business. We designed
              and built a comprehensive suite of tools for marketing automation,
              lead management, and business analytics.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The platform gives registered practitioners everything they need to
              grow their practice and build lasting relationships with patients.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/03/50-Inset-5_2-scaled.jpg"
            alt="Allē for Business Dashboard"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - The Solution */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Solution
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A suite of features designed to serve practice needs
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Allē for Business gives registered practitioners a native,
          industry-specific marketing automation platform. From campaign planning
          to asset libraries to data analytics, the platform provides everything
          practices need to attract and retain patients.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/03/alle-business-thumb.jpg"
              alt="Allē for Business Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/03/Alle-for-Business.jpg.webp"
              alt="Allē for Business Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Marketing Automation */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Marketing Automation
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A native, industry-specific platform for healthcare marketing
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Campaign planning, asset library management, data analytics, and lead
          management all in one place. The platform helps practices drive customer
          loyalty through the Allē consumer program while growing their business.
        </p>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Allergan Data Labs</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Irvine, California</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Healthcare</p>
              <p className="text-sm text-gray-600">B2B SaaS</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Chris Johns</p>
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Kristen Cattel</p>
            </div>
          </div>
        </div>
      </section>

      <NextCaseStudy currentSlug="alle-for-business" />
    </main>
  )
}
