import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'GE Aerospace - Bttr.',
  description: 'Enterprise asset management for the future of flight.',
  openGraph: {
    title: 'GE Aerospace - Bttr.',
    description: 'Enterprise asset management for the future of flight.',
    images: ['/assets/work/uploads/2024/08/ge-aerospace-hero.jpg'],
  },
}

export default function GEAerospacePage() {
  return (
    <main className="dark:bg-polar-950 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-hero.jpg"
            alt="GE Aerospace"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/70">
              GE Aerospace
            </p>
            <h1 className="max-w-5xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Advancing flight for future generations
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="dark:bg-polar-950 w-full bg-[#0a1628] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / GE Aerospace
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Aerospace &amp; Defense</p>
                <p>Enterprise Software</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">GE Aerospace</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2022–Present</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Design System</p>
                <p>Engineering</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              GE Aerospace powers commercial and military aircraft around the world. They needed enterprise platforms to manage billions of dollars in jet engine assets across global operations.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              We partnered with GE to design and build asset management systems that provide real-time visibility into engine health, maintenance schedules, and lifecycle optimization for fleets spanning six continents.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a1628]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-engine.jpg"
            alt="GE Aerospace Engine"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Challenge
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Managing $1B+ in mission-critical assets
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="dark:text-polar-400 ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Airlines and maintenance organizations rely on GE Aerospace engines to power everything from regional jets to the world's largest widebody aircraft. Each engine represents millions of dollars in capital—and every hour of unplanned downtime costs operators significantly. The existing tools couldn't keep pace with the complexity of modern fleet management across GEnx, GE90, GE9X, and CFM engine families.
        </p>
      </section>

      {/* Results Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-8 text-sm uppercase tracking-wider text-gray-500">
          Results
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900 dark:text-white">$1B+</p>
            <p className="dark:text-polar-400 text-sm text-gray-600">
              Assets under management
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900 dark:text-white">40%</p>
            <p className="dark:text-polar-400 text-sm text-gray-600">
              Faster maintenance planning
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900 dark:text-white">6</p>
            <p className="dark:text-polar-400 text-sm text-gray-600">
              Continents served
            </p>
          </div>
        </div>
      </section>

      {/* Section Header - Design System */}
      <section className="w-full bg-[#0a1628] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          The Solution
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Real-time visibility for global operations
        </h2>
      </section>

      {/* Single Column Text Dark */}
      <section className="w-full bg-[#0a1628] px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-300">
          We designed and built enterprise platforms that consolidate data from maintenance systems, flight operations, and engine telemetry into unified dashboards. Maintenance teams now have unprecedented visibility into engine health, lifecycle status, and service schedules—enabling faster decisions and more efficient resource allocation across global operations.
        </p>
      </section>

      {/* Second Image */}
      <section className="w-full bg-[#0a1628]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-platform.jpg"
            alt="GE Aerospace Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Engine Portfolio Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Engine Portfolio
        </p>
        <h2 className="mb-12 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Powering commercial and military aviation
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-ge90.jpg"
              alt="GE90 Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-genx.jpg"
              alt="GEnx Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-f110.jpg"
              alt="F110 Military Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-t901.jpg"
              alt="T901 Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Full-width Catalyst Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-catalyst.jpg"
            alt="GE Catalyst Engine"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Credits */}
      <section className="dark:border-polar-800 dark:bg-polar-950 w-full border-t border-gray-200 bg-white px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Client</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">GE Aerospace</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Location</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">Cincinnati, OH</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Sector</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Aerospace &amp; Defense</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">Enterprise Software</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Team</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Donny Smith</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">Chris Johns</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
