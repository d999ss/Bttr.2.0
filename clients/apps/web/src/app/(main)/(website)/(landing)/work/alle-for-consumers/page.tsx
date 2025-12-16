import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Allē for Consumers - Bttr.',
  description: 'A simple, modern, and engaging consumer loyalty program.',
  openGraph: {
    title: 'Allē for Consumers - Bttr.',
    description: 'A simple, modern, and engaging consumer loyalty program.',
    images: ['/assets/work/uploads/2024/03/Desktop-1440x905.jpg'],
  },
}

export default function AlleForConsumersPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/03/Desktop-1440x905.jpg"
            alt="Allē for Consumers"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              A simple, modern, and engaging consumer loyalty program
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
            / Allē for Consumers
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Healthcare</p>
                <p>Consumer Technology</p>
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
              Allē is the consumer loyalty program from Allergan Aesthetics that
              rewards patients for their aesthetic treatments. We designed and
              built a modern, engaging experience that makes earning and
              redeeming rewards simple and delightful.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The platform connects millions of consumers with their favorite
              aesthetic treatments while building lasting relationships with
              healthcare practices.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/03/Desktop.jpg"
            alt="Allē Consumer App"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - The Experience */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Experience
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Rewarding patients for their aesthetic journey
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The Allē consumer platform makes it easy for patients to track their
          treatments, earn points, and redeem rewards. We designed an intuitive
          experience that guides users through their aesthetic journey while
          keeping them engaged with personalized content and offers.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/03/alle-consumers-thumb.jpg"
              alt="Allē Consumer Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/03/Alle-for-Consumers.jpg.webp"
              alt="Allē Mobile Experience"
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
          A cohesive visual language across all touchpoints
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          We developed a comprehensive design system that ensures consistency
          across web, mobile, and marketing touchpoints. The system enables
          rapid iteration while maintaining brand integrity across millions of
          user interactions.
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
              <p className="text-sm text-gray-600">Consumer Technology</p>
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
    </main>
  )
}
