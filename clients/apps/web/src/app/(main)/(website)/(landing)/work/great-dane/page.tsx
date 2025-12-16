import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Great Dane - Bttr.',
  description: 'Redesigning the digital presence for a 125-year legacy in American manufacturing.',
  openGraph: {
    title: 'Great Dane - Bttr.',
    description: 'Redesigning the digital presence for a 125-year legacy in American manufacturing.',
    images: ['/assets/work/uploads/2025/01/great-dane-thumb.jpg'],
  },
}

export default function GreatDanePage() {
  return (
    <main className="dark:bg-polar-950 bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/01/great-dane-thumb.jpg"
            alt="Great Dane Trailers"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/70">
              Great Dane
            </p>
            <h1 className="max-w-5xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Tried and True for 125 Years
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
            / Great Dane
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Manufacturing</p>
                <p>Transportation</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Great Dane LLC</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Website Design</p>
                <p>UX Strategy</p>
                <p>Information Architecture</p>
                <p>Visual Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Great Dane engaged Bttr. to completely redesign their corporate website, celebrating 125 years of American manufacturing while positioning the brand for the next chapter of transportation innovation.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The result is a modern digital experience that honors heritage while showcasing industry-leading products and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a1628]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane-everest.jpg"
            alt="Great Dane Everest Refrigerated Trailer"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Challenge Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Challenge
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          A legacy brand needed a modern platform
        </h2>
        <p className="dark:text-polar-400 max-w-3xl text-lg leading-relaxed text-gray-600">
          With 125 years of manufacturing excellence, Great Dane had built a reputation on quality and durability. Their digital presence needed to reflect that same standard while serving the complex needs of fleet operators, dealers, and service providers across North America.
        </p>
      </section>

      {/* Product Lines Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-8 text-sm uppercase tracking-wider text-gray-500">
          Product Portfolio
        </p>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-2xl font-light text-gray-900 dark:text-white">Refrigerated Solutions</p>
            <p className="dark:text-polar-400 text-gray-600">
              Everest and Alpine single and multi-temperature trailers and truck bodies, plus Johnson last-mile refrigerated solutions. Each product line required dedicated presentation showcasing thermal performance and innovation.
            </p>
          </div>
          <div>
            <p className="mb-4 text-2xl font-light text-gray-900 dark:text-white">Dry Freight &amp; Flatbed</p>
            <p className="dark:text-polar-400 text-gray-600">
              Champion and Sahara dry vans alongside Freedom flatbed trailers in steel, aluminum, and combo configurations. The site architecture needed to guide buyers to the right solution for their operation.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane-sahara.jpg"
            alt="Great Dane Sahara Dry Freight Truck Body"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Approach Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Our Approach
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Heritage meets innovation
        </h2>
        <p className="dark:text-polar-400 mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
          We designed an experience that balances the weight of a 125-year legacy with forward-looking technology and modern user expectations.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Reorganized product architecture around industry verticals and use cases</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Created immersive product showcases with high-fidelity photography and specs</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Integrated dealer locator and parts catalog for seamless service discovery</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Highlighted technology differentiators including FleetPulse telematics</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Built content hub for industry insights and customer success stories</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Designed responsive experience optimized for field sales and fleet managers</p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full bg-[#0a1628] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Technology Integration
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Showcasing what sets Great Dane apart
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
          Great Dane differentiates through proprietary technologies that improve safety, performance, and fleet efficiency. The website needed to make these advantages tangible and compelling.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">FleetPulse Telematics</p>
            <p className="mt-2 text-sm text-gray-400">Standard asset tracking with upgrade options</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">ThermoGuard Liners</p>
            <p className="mt-2 text-sm text-gray-400">Microban-infused for hygiene and durability</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">SlipNot Safety Grip</p>
            <p className="mt-2 text-sm text-gray-400">Exclusive high-friction surface technology</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">AnchorPoint Mounting</p>
            <p className="mt-2 text-sm text-gray-400">Heavy-duty truck body mounting system</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6 md:col-span-2 lg:col-span-2">
            <p className="text-white">Strata Sidewall System</p>
            <p className="mt-2 text-sm text-gray-400">Premium lining, insulation, and corrosion protection</p>
          </div>
        </div>
      </section>

      {/* Screenshot/Hero Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane-hero.png"
            alt="Great Dane Website Homepage"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Results Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl leading-relaxed text-gray-900 md:text-3xl dark:text-white">
            A digital experience built to last another 125 years.
          </p>
          <p className="dark:text-polar-400 mt-6 text-lg text-gray-600">
            The new Great Dane website delivers the premium experience their products deserve, serving fleet operators, dealers, and service providers with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Credits */}
      <section className="dark:border-polar-800 dark:bg-polar-950 w-full border-t border-gray-200 bg-white px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Client</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">Great Dane LLC</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Location</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">Chicago, IL</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Sector</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Manufacturing</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">Transportation</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Team</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Donny Smith</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
