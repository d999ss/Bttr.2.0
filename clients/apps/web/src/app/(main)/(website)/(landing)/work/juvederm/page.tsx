import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'JUVÉDERM - Bttr.',
  description: 'Enhancing engagement for a leading aesthetic brand.',
  openGraph: {
    title: 'JUVÉDERM - Bttr.',
    description: 'Enhancing engagement for a leading aesthetic brand.',
    images: ['/assets/work/uploads/2025/04/Thumbnail.jpg.webp'],
  },
}

export default function JuvedermPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#f07459]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/04/Desktop-1.png"
            alt="JUVÉDERM"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Enhancing engagement for a leading aesthetic brand
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#f07459] px-8 py-16 text-gray-900 md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-900/70">
            <a href="/work" className="hover:text-gray-900">
              Work
            </a>{' '}
            / JUVÉDERM
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-gray-900/70">Sectors</h3>
              <div className="space-y-1 text-gray-900">
                <p>Pharmaceuticals</p>
                <p>Health &amp; Beauty</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-gray-900/70">Client</h3>
              <p className="text-gray-900">Allergan Aesthetics</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-gray-900/70">Year</h3>
              <p className="text-gray-900">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-gray-900/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-900">
                <p>User Research</p>
                <p>UX Design</p>
                <p>UI Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-900 lg:text-2xl">
              JUVÉDERM®, a prominent name in dermal fillers, sought to revamp
              its digital presence to better connect with both healthcare
              professionals and consumers. The objective was to create an
              intuitive, informative, and engaging platform that reflects the
              brand&apos;s commitment to innovation and excellence in aesthetic
              treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-6.png"
            alt="JUVÉDERM Website Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Design System */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          JUVÉDERM WEBSITES
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A unified and scalable design system
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          To ensure consistency across Allergan Aesthetics&apos; portfolio, we
          developed a comprehensive UI kit and component library that was
          applied to each brand. This system allows for cohesive branding while
          providing the flexibility to highlight JUVÉDERM®&apos;s unique
          offerings and key brand elements. The design framework supports
          scalability and adaptability, ensuring a seamless user experience
          across various digital touchpoints.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-8.png"
            alt="JUVÉDERM Design System"
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
              src="/assets/work/uploads/2025/04/SQ-Image-frame-5.png.webp"
              alt="JUVÉDERM Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-6.png"
              alt="JUVÉDERM Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - User Journey */}
      <section className="w-full bg-gray-900 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          JUVÉDERM WEBSITES
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Crafting an engaging user journey with a reusable component library
        </h2>
      </section>

      {/* Full-width Image Dark */}
      <section className="w-full bg-gray-900">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-13.png.webp"
            alt="JUVÉDERM Component Library"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images Dark */}
      <section className="w-full bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-7.png"
              alt="JUVÉDERM Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-9.png.webp"
              alt="JUVÉDERM Feature"
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
          JUVÉDERM WEBSITES
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
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-14.png"
            alt="JUVÉDERM Conversion"
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
    </main>
  )
}
