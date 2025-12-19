import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'
import { CaseStudyJsonLd } from '@/components/SEO/CaseStudyJsonLd'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'Allergan Data Labs - Bttr.',
  description: 'An identity to be proud of.',
  openGraph: {
    title: 'Allergan Data Labs - Bttr.',
    description: 'An identity to be proud of.',
    images: ['/assets/work/uploads/2023/08/ADL_1_Header.png.webp'],
  },
}

export default function AllerganDataLabsPage() {
  const study = caseStudies.find((s) => s.slug === 'allergan-data-labs')!

  return (
    <main className="bg-white">
      <CaseStudyJsonLd caseStudy={study} datePublished="2023-09-01" />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/08/ADL_1_Header.png.webp"
            alt="Allergan Data Labs"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              An identity to be proud of
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
            / Allergan Data Labs
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Healthcare</p>
                <p>Technology</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Allergan Data Labs</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2020</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Brand Strategy</p>
                <p>Visual Identity</p>
                <p>Brand Guidelines</p>
                <p>Motion Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Allergan Data Labs is the technology arm of Allergan Aesthetics,
              responsible for building the digital products that power the
              company&apos;s consumer and business platforms. They needed a
              distinct identity that could stand on its own while connecting to
              the parent brand.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              We created a brand identity that reflects their innovative spirit
              and technical excellence, giving the team an identity they&apos;re
              proud to call their own.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/ADL_Large_3.png"
            alt="Allergan Data Labs Brand"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - The Identity */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Identity
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A brand that attracts top tech talent
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          In a competitive market for engineering talent, Allergan Data Labs
          needed a brand that could compete with tech giants. We created an
          identity that positions them as a cutting-edge technology organization
          while maintaining their connection to the healthcare mission of the
          parent company.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/ADL_Square_2.png.webp"
              alt="Allergan Data Labs Logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/ADL_Large_1.png.webp"
              alt="Allergan Data Labs Brand Application"
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
          From logo to comprehensive brand guidelines
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          We delivered a complete brand system including logo variations, color
          palette, typography, iconography, and motion principles. The
          comprehensive guidelines ensure consistent application across all
          touchpoints from recruitment to product design.
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
              <p className="text-sm text-gray-600">Technology</p>
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

      <NextCaseStudy currentSlug="allergan-data-labs" />
    </main>
  )
}
