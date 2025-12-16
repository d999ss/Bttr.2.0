import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'FleetPulse - Bttr.',
  description: 'Smart-Trailer innovation, designed for a more efficient future.',
  openGraph: {
    title: 'FleetPulse - Bttr.',
    description:
      'Smart-Trailer innovation, designed for a more efficient future.',
    images: ['/assets/work/uploads/2024/06/Fleetpulse_Thumb.jpg.webp'],
  },
}

export default function FleetPulsePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/06/FP1.png"
            alt="FleetPulse"
            fill
            className="hidden object-cover lg:block"
            priority
            sizes="100vw"
          />
          <Image
            src="/assets/work/uploads/2024/06/Mobile-Header-image-FP.png"
            alt="FleetPulse Mobile"
            fill
            className="block object-cover lg:hidden"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Smart-Trailer innovation, designed for a more efficient future
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#0f172a] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / FleetPulse
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Transportation</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Great Dane, FleetPulse</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Digital Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Art Direction</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              A trailer equipped with FleetPulse is a smart trailer — one that
              provides data and insights that will help fleet managers be more
              efficient from an equipment utilization standpoint, more
              resourceful when it comes to maintenance, and more ready to
              compete in a connected future.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0f172a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/07/CS_Inset-full-width-pt2.png"
            alt="FleetPulse Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Industry Impact */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Driving the industry to a better future
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Every so often we get the opportunity to impact an entire industry for
          the better. That&apos;s what FleetPulse is on a mission to do.
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          As part of the iconic Great Dane company, the business has developed
          the first factory-finished reefer trailer; built the first multi-temp
          trailer; and created the new industry standard of anti-microbial
          liners. Today, all of those innovations are table stakes in the
          industry. FleetPulse is just the next innovation that Great Dane will
          do first. It too, will be table stakes in the industry.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/07/CS_Inset-full-width_Fleetpulse-1.jpg"
            alt="FleetPulse Platform"
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
            src="/assets/work/uploads/2024/07/Full-width.png"
            alt="FleetPulse Interface"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Personas Section */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          FleetPulse
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          We designed this website with a focus on three key Personas
        </h2>
      </section>

      {/* Personas List */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            <strong className="text-gray-900">The Buyer,</strong> who cares
            about increasing value to the business, equipment resale value, ROI.
          </p>
          <p>
            <strong className="text-gray-900">The User,</strong> who cares about
            reliability, safety, maximizing operating efficiency.
          </p>
          <p>
            <strong className="text-gray-900">The Influencer,</strong> who cares
            about the detailed features of the product.
          </p>
          <p>
            The site flows consider each of these users and takes them through a
            journey tailored to their needs.
          </p>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/06/Full-width-1-1.jpg"
            alt="FleetPulse Personas"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#0f172a] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Innovation with impact
        </p>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-6xl font-light text-white md:text-7xl lg:text-8xl">
            47%
          </p>
          <p className="max-w-md text-lg text-gray-300">
            of fleets realize a ROI on their telematics system within 6 months
            or less.
          </p>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/06/CS_Inset-full-width-5.jpg"
            alt="FleetPulse Dashboard"
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
            src="/assets/work/uploads/2024/06/Frame-1171275803-1.jpg"
            alt="FleetPulse Features"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Outcome */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          FleetPulse
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          The Outcome
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          A website with clear value propositions that track to simple,
          effective user journeys, supported by sales assets that drive
          conversion and provide sales teams with a compelling proposition.
        </p>
      </section>

      {/* Full-width Image - Laptop Display */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/07/MM_Laptop_LT-E-03_fleetpulse-1-scaled.jpg"
            alt="FleetPulse Laptop Display"
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
            <p className="text-sm text-gray-600">Great Dane, FleetPulse</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Chicago, USA</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Transportation</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Nicole Hampton</p>
              <p className="text-sm text-gray-600">Jocelyn McArthur</p>
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Nathan Koch</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
