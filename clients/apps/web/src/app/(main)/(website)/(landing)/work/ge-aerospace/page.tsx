import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'GE Aerospace - Bttr.',
  description: 'Enterprise asset management for jet engine maintenance.',
  openGraph: {
    title: 'GE Aerospace - Bttr.',
    description: 'Enterprise asset management for jet engine maintenance.',
    images: ['/assets/work/uploads/2023/09/GE-O-HS-1-1-1_00000.png'],
  },
}

export default function GEAerospacePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#003366]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/09/GE-O-HS-1-1-1_00000.png"
            alt="GE Aerospace"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Enterprise asset management for jet engine maintenance
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#003366] px-8 py-16 text-white md:px-16 lg:px-24">
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
              <p className="text-white">2023</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Design System</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              GE Aerospace needed an enterprise asset management platform to
              revolutionize how airlines and maintenance organizations track,
              maintain, and optimize their jet engine fleets across global
              operations.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              We partnered with GE to design a comprehensive platform that
              provides real-time visibility, reduces maintenance planning time,
              and integrates seamlessly with existing SAP systems.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/GE_wayfinding.jpg"
            alt="GE Aerospace Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          GE Aerospace
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Real-time visibility across global operations
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The platform provides maintenance teams with unprecedented visibility
          into engine health, lifecycle status, and maintenance schedules across
          their entire fleet. By consolidating data from multiple sources and
          presenting it in an intuitive interface, we enabled faster
          decision-making and more efficient resource allocation.
        </p>
      </section>

      {/* Results Section */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-8 text-sm uppercase tracking-wider text-gray-500">
          Results
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">40%</p>
            <p className="text-sm text-gray-600">
              Reduced maintenance planning time
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">Real-time</p>
            <p className="text-sm text-gray-600">
              Visibility across global operations
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">SAP</p>
            <p className="text-sm text-gray-600">
              Integrated with existing systems
            </p>
          </div>
        </div>
      </section>

      {/* Section Header - Design System */}
      <section className="w-full bg-[#003366] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          GE Aerospace
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Enterprise-grade design system
        </h2>
      </section>

      {/* Single Column Text Dark */}
      <section className="w-full bg-[#003366] px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-300">
          We developed a comprehensive design system that ensures consistency
          across all touchpoints while meeting the rigorous requirements of
          enterprise aerospace applications. The system scales from desktop
          workstations to mobile devices used on the shop floor.
        </p>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">GE Aerospace</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Cincinnati, OH</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Aerospace &amp; Defense</p>
              <p className="text-sm text-gray-600">Enterprise Software</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Chris Johns</p>
              <p className="text-sm text-gray-600">Neil Corcoran</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
