import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Allē - Bttr.',
  description: 'Building the loyalty platform for Allergan Aesthetics',
  openGraph: {
    title: 'Allē - Bttr.',
    description: 'Building the loyalty platform for Allergan Aesthetics',
    images: ['/assets/work/uploads/2023/09/Alle-HS-1-1-3_00000.png'],
  },
}

export default function AllePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#00856f]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/09/Alle-HS-1-1-3_00000.png"
            alt="Allē"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Building the loyalty platform for Allergan Aesthetics
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#00856f] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / Allē
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
              <p className="text-white">2019 – Present</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>User Research</p>
                <p>Market Research</p>
                <p>Brand Strategy</p>
                <p>Brand Design</p>
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Service Design</p>
                <p>Org Design</p>
                <p>Motion Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Allergan Aesthetics engaged us to modernize their consumer loyalty
              program, Brilliant Distinctions®. The existing platform suffered
              from outdated infrastructure accumulated over a decade.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              In collaboration with Allergan Data Labs, we completely rebuilt
              the technology foundation emphasizing data science and
              omni-channel personalization, followed by a contemporary rebrand
              redefining the organization&apos;s visual identity.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#00856f]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/09/Desktop-2.jpg"
            alt="Allē Platform Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* The Solution Section */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Solution
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          The business needed a modern, cross-portfolio digital platform to act
          as the technology layer that brings everything together.
        </h2>
      </section>

      {/* Solution Description */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          With a primary focus on customer and consumer loyalty, Allē was born.
          A platform that connects patients with providers, rewards loyalty, and
          powers the entire Allergan Aesthetics ecosystem.
        </p>
      </section>

      {/* Metrics Section */}
      <section className="w-full bg-[#f5f5f5] px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="text-5xl font-light text-[#00856f] md:text-6xl">6M+</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Users
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-light text-[#00856f] md:text-6xl">
              2.7M+
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Treatment Visits
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-light text-[#00856f] md:text-6xl">
              1.8M+
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              Gift Cards Purchased
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full bg-gray-900 px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl">
            &quot;Bttr have been an essential part of Allē&apos;s success and
            business transformation—their vision and expertise continues driving
            progress.&quot;
          </p>
          <p className="mt-8 text-sm text-gray-400">
            Tory Brady, CTO, Allergan Aesthetics
          </p>
        </div>
      </section>

      {/* Allē for Consumers */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Allē for Consumers
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A friendly, contemporary interface for the modern aesthetic consumer
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The consumer experience enables users to find healthcare providers,
          book appointments, learn about products and treatments, manage
          payments, and claim rewards—all in one seamless platform.
        </p>
      </section>

      {/* Full-width placeholder */}
      <section className="w-full bg-[#00856f]">
        <div className="relative aspect-video w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl text-white/50">Consumer Platform Interface</p>
          </div>
        </div>
      </section>

      {/* Allē for Business */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Allē for Business
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Empowering healthcare practitioners with modern business tools
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The business suite serves healthcare practitioners by addressing
          common pain points through lead generation, bookings, payments
          management, and integrated marketing automation.
        </p>
      </section>

      {/* Design System Section */}
      <section className="w-full bg-gray-900 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Design System
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          A unified design language across every touchpoint
        </h2>
      </section>

      <section className="w-full bg-gray-900 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-400">
          We created a comprehensive Figma-based design system with components,
          guidelines, patterns, interaction design specifications, and
          accessibility standards—ensuring consistency across web, mobile, and
          marketing materials.
        </p>
      </section>

      {/* Brand Evolution */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Brand Evolution
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          From pharmaceutical to consumer beauty brand
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The visual identity evolution transformed Allē from a traditional
          pharmaceutical rewards program into a modern consumer beauty brand,
          complete with comprehensive brand guidelines, photography direction,
          and motion specifications.
        </p>
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
              <p className="text-sm text-gray-600">Chris Johns</p>
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Nicole Hampton</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
              <p className="text-sm text-gray-600">Nick Clement</p>
              <p className="text-sm text-gray-600">Jenna Law</p>
              <p className="text-sm text-gray-600">Matt Wheeler</p>
              <p className="text-sm text-gray-600">Philip Han</p>
              <p className="text-sm text-gray-600">Chris Becker</p>
              <p className="text-sm text-gray-600">Jesse Bulger</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
