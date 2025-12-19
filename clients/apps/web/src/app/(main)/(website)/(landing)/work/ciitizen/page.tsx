import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'
import { CaseStudyJsonLd } from '@/components/SEO/CaseStudyJsonLd'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'Ciitizen - Bttr.',
  description: "Turning one brother's dream into a reality.",
  openGraph: {
    title: 'Ciitizen - Bttr.',
    description: "Turning one brother's dream into a reality.",
    images: ['/assets/work/uploads/2023/09/Desktop-5.webp'],
  },
}

export default function CiitizenPage() {
  const study = caseStudies.find((s) => s.slug === 'ciitizen')!

  return (
    <main className="bg-white">
      <CaseStudyJsonLd caseStudy={study} datePublished="2023-09-01" />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/09/Desktop-5.webp"
            alt="Ciitizen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Turning one brother&apos;s dream into a reality
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
            / Ciitizen
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
              <p className="text-white">Ciitizen</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2019</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Brand Strategy</p>
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Ciitizen was founded by Anil Sethi after his sister&apos;s
              diagnosis with stage 4 cancer. Frustrated by the fragmented
              healthcare system, he set out to build a platform that gives
              patients ownership and control of their medical records.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              We partnered with Ciitizen to design a platform that makes it easy
              for patients to collect, organize, and share their health data
              with researchers and clinicians.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/09/CS_Inset-full-width-12.jpg.webp"
            alt="Ciitizen Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - The Mission */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Mission
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Empowering patients with their own health data
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Healthcare data is often scattered across multiple providers, making
          it difficult for patients to get a complete picture of their health.
          Ciitizen solves this by automatically collecting medical records from
          any healthcare provider and organizing them in one secure, accessible
          place.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-24.jpg.webp"
              alt="Ciitizen Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-25.jpg.webp"
              alt="Ciitizen Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Impact */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Impact
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Accelerating medical research through patient data
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          With patient consent, Ciitizen connects researchers with real-world
          health data that can accelerate clinical trials and medical research.
          The platform has helped thousands of patients contribute to advancing
          treatments for rare diseases and cancer.
        </p>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Ciitizen</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Palo Alto, California</p>
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

      <NextCaseStudy currentSlug="ciitizen" />
    </main>
  )
}
