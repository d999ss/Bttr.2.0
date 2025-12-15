import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tarform - Bttr.',
  description: 'Luxury electric motorcycle configurator and mobile app.',
  openGraph: {
    title: 'Tarform - Bttr.',
    description: 'Luxury electric motorcycle configurator and mobile app.',
    images: ['/assets/work/uploads/2024/08/tarform-hero.jpg'],
  },
}

export default function TarformPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/08/tarform-hero.jpg"
            alt="Tarform"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Luxury electric motorcycle configurator and mobile app
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
            / Tarform
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Electric Vehicles</p>
                <p>Luxury &amp; Lifestyle</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Tarform</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>3D Visualization</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Tarform is a Brooklyn-based manufacturer of luxury electric
              motorcycles, combining sustainable materials with cutting-edge
              technology to create the future of two-wheeled transportation.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              We partnered with Tarform to create a real-time 3D bike
              customization experience that streamlines their $42K+ purchase
              flow and integrates seamlessly with their manufacturing pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/tarform-configurator.jpg"
            alt="Tarform Configurator"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - 3D Experience */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Tarform
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Real-time 3D bike customization experience
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The configurator allows customers to build their dream motorcycle in
          real-time, selecting from various frame finishes, seat materials, and
          performance packages. Every choice updates the 3D model instantly,
          giving buyers confidence in their customization decisions before
          committing to the $42,000+ purchase.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/tarform-luna-1.jpg"
              alt="Tarform Luna"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/tarform-details.jpg"
              alt="Tarform Details"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Results
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Real-time 3D
            </h3>
            <p className="text-sm text-gray-600">
              Full 3D bike customization experience with instant visual feedback
              on all configuration choices.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Streamlined Purchase
            </h3>
            <p className="text-sm text-gray-600">
              Simplified $42K+ purchase flow that guides customers through
              customization to checkout.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Manufacturing Integration
            </h3>
            <p className="text-sm text-gray-600">
              Direct integration with manufacturing pipeline for seamless order
              processing.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/tarform-luna-2.jpg"
            alt="Tarform Luna"
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
            <p className="text-sm text-gray-600">Tarform</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Brooklyn, NY</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Electric Vehicles</p>
              <p className="text-sm text-gray-600">Luxury &amp; Lifestyle</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
              <p className="text-sm text-gray-600">Neil Corcoran</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
