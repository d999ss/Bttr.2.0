import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'
import { CaseStudyJsonLd } from '@/components/SEO/CaseStudyJsonLd'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'BOTOX Cosmetic - Bttr.',
  description:
    'Strengthening product recognition and loyalty across a market leader.',
  openGraph: {
    title: 'BOTOX Cosmetic - Bttr.',
    description:
      'Strengthening product recognition and loyalty across a market leader.',
    images: ['/assets/work/uploads/2025/04/Featured-image.jpg.webp'],
  },
}

export default function BotoxCosmeticPage() {
  const study = caseStudies.find((s) => s.slug === 'botox-cosmetic')!

  return (
    <main className="bg-white">
      <CaseStudyJsonLd caseStudy={study} datePublished="2024-04-01" />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/04/botox-hero.jpg"
            alt="BOTOX Cosmetic"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Strengthening product recognition and loyalty across a market
              leader
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#1a1a1a] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / BOTOX Cosmetic
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Pharmaceuticals</p>
                <p>Health &amp; Beauty</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Allergan Aesthetics</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>User Research</p>
                <p>UX Design</p>
                <p>UI Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Redesigning the website for an iconic billion dollar brand
              doesn&apos;t come easy. Working closely with the client team we
              set about a complete UX &amp; UI overhaul of the B2B and B2C
              digital experience for Botox. Designed to better reflect the
              brand&apos;s evolution and meet the needs of today&apos;s
              consumers and customers.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Whilst implementing the refreshed brand identity – we created an
              evergreen, intuitive site that educates, inspires, and
              converts—ultimately supporting both brand loyalty and business
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/botox-fullwidth-1.jpg"
            alt="BOTOX Cosmetic Website"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Design System */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          BOTOX COSMETIC
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A rich and scalable system
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          As part of the website redesign we built a robust and universal UI kit
          and component library. These foundational components are designed to
          work across the Allergan Aesthetics product portfolio, centralizing
          control and streamlining efficiency whilst being adaptable enough for
          each brand to look and feel unique. Meaning each brand site can look
          distinctly different but keep the same recognizable DNA that lets
          users know it&apos;s part of the same family, ensuring unity across
          each of the brands digital platforms.
        </p>
      </section>

      {/* Full-width Image - Design System */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width_11.jpg"
            alt="BOTOX Design System"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/botox-sq-1.jpg"
              alt="BOTOX Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/botox-sq-logo.webp"
              alt="BOTOX Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/botox-fullwidth.jpg"
            alt="BOTOX Website Full View"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/botox-components.jpg"
            alt="BOTOX Components"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Experience */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          BOTOX COSMETIC
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          An elevated and refined experience
        </h2>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/botox-experience.jpg"
            alt="BOTOX Experience"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/botox-sq-4.jpg"
              alt="BOTOX Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/botox-sq-4.webp"
              alt="BOTOX Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Conversion */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          BOTOX COSMETIC
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A website that educates, inspires, and converts.
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Different approaches were taken to ensure content remained relevant to
          each audience group, customer and consumer. With the end goal of the
          content being both educational and accessible – encouraging people to
          learn and explore more about the product, whilst driving them to key
          CTAs.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-square w-full md:aspect-video">
          <Image
            src="/assets/work/uploads/2025/04/botox-sq-6.jpg"
            alt="BOTOX Content Strategy"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/botox-platform.jpg"
            alt="BOTOX Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/ST13_botox-scaled.webp"
            alt="BOTOX Final"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Allergan Aesthetics</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Irvine, CA</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Pharmaceuticals</p>
              <p className="text-sm text-gray-600">Health &amp; Beauty</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Nicole Hampton</p>
              <p className="text-sm text-gray-600">Joey Kantor</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
              <p className="text-sm text-gray-600">Jenna Law</p>
              <p className="text-sm text-gray-600">Ryan French</p>
              <p className="text-sm text-gray-600">Erica Shultz</p>
              <p className="text-sm text-gray-600">Charles Law</p>
              <p className="text-sm text-gray-600">Jocelyn McArthur</p>
              <p className="text-sm text-gray-600">Alex Stojanovski</p>
              <p className="text-sm text-gray-600">Neil Corcoran</p>
            </div>
          </div>
        </div>
      </section>

      <NextCaseStudy currentSlug="botox-cosmetic" />
    </main>
  )
}
