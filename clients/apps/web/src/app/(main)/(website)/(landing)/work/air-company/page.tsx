import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'

export const metadata: Metadata = {
  title: 'Air Company - Bttr.',
  description: 'Shaping a startup around groundbreaking technology.',
  openGraph: {
    title: 'Air Company - Bttr.',
    description: 'Shaping a startup around groundbreaking technology.',
    images: ['/assets/work/uploads/2023/09/AirCo-HS-1-1-1_00000.png.webp'],
  },
}

export default function AirCompanyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/09/Header-copy.jpg.webp"
            alt="Air Company"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Shaping a startup around groundbreaking technology
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
            / Air Company
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Science &amp; Technology</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Air Company</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2020</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Brand Strategy</p>
                <p>Design Consulting</p>
                <p>Business Design</p>
                <p>Product Strategy</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Air Company&apos;s world-changing technology facilitates the
              production of the purest ethanol on the planet—from air. Their
              production process cleans harmful carbon dioxide from our
              atmosphere and pushes pure oxygen back out into the environment,
              cleaning the air we breathe.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              And if that&apos;s not impressive enough, all of this is achieved
              with renewable energy sources.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-2.png.webp"
              alt="Air Company Brand"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-1-1.png.webp"
              alt="Air Company Product"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Making Science Cool */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          AIR COMPANY
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Making Science Cool
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          For every litre of vodka produced using Air Company&apos;s technology,
          one pound of carbon dioxide is removed from the air we breathe. Dr.
          Stafford Sheehan developed this production process through many years
          of research. We partnered with Sheehan and his co-founder, Gregory
          Constantine, to bring their vision to life.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width-3-1.png"
            alt="Air Company Process"
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
              src="/assets/work/uploads/2023/09/SQ-Image-frame-6.png.webp"
              alt="Air Company Vodka"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-1.png.webp"
              alt="Air Company Bottle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Much More */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Much More Than Vodka
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Vodka is just the beginning. Air Company&apos;s technology works and
          is scalable.
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          There&apos;s tremendous opportunity to disrupt multiple
          industries—from spirits to fragrance to fuel—while minimizing the
          negative environmental impact of carbon dioxide.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width-1.png.webp"
            alt="Air Company Technology"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/09/CS_Inset-full-width-2.png.webp"
            alt="Air Company Products"
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
            src="/assets/work/uploads/2023/08/Full-width.png"
            alt="Air Company Full View"
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
              src="/assets/work/uploads/2023/08/SQ-Image-frame-4.png.webp"
              alt="Air Company Detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame-8.jpg.webp"
              alt="Air Company Product Shot"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-6.png.webp"
              alt="Air Company Packaging"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/09/SQ-Image-frame_2.jpg.webp"
              alt="Air Company Environment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full bg-[#0a0a0a] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl">
            &quot;Honestly couldn&apos;t have done it without Bttr.&quot;
          </p>
          <p className="text-sm text-gray-400">
            — Gregory Constantine
            <br />
            Co-Founder &amp; CEO, Air Company
          </p>
        </div>
      </section>

      {/* Seen In */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <h3 className="mb-8 text-sm font-medium text-gray-500">Seen in</h3>
        <div className="flex flex-wrap gap-8 text-lg text-gray-900">
          <span>Fast Company</span>
          <span>Forbes</span>
          <span>Entrepreneur</span>
          <span>Tech Crunch</span>
          <span>X Prize</span>
        </div>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Air Company</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">New York, United States</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Science &amp; Technology</p>
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

      <NextCaseStudy currentSlug="air-company" />
    </main>
  )
}
