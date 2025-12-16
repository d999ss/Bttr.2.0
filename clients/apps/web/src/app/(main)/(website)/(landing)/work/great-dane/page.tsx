import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Great Dane - Bttr.',
  description: 'Redesigning the digital presence for a 125-year legacy in American manufacturing.',
  openGraph: {
    title: 'Great Dane - Bttr.',
    description: 'Redesigning the digital presence for a 125-year legacy in American manufacturing.',
    images: ['/assets/work/uploads/2025/01/great-dane/1.jpg'],
  },
}

export default function GreatDanePage() {
  return (
    <main className="dark:bg-polar-950 bg-white">
      {/* Hero Section - Aerial truck shot */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/1.jpg"
            alt="Great Dane trailer on scenic highway"
            fill
            className="object-cover opacity-90"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[85vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/70">
              Great Dane
            </p>
            <h1 className="max-w-5xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              We Make the Products That Move America
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
                <p>Brand Strategy</p>
                <p>Website Design</p>
                <p>UX Strategy</p>
                <p>Information Architecture</p>
                <p>Visual Design</p>
                <p>Design System</p>
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

      {/* Homepage Mockup - Full Width */}
      <section className="w-full bg-[#0a1628]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/2.jpg"
            alt="Great Dane website homepage - We Make the Products That Move America"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-20 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Brand Identity
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          125 years of heritage, refreshed for the modern era
        </h2>
        <p className="dark:text-polar-400 mb-16 max-w-3xl text-lg leading-relaxed text-gray-600">
          The brand refresh balanced Great Dane's storied legacy with a contemporary visual language that speaks to today's fleet operators and transportation professionals.
        </p>

        {/* Brand Assets Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/assets/work/uploads/2025/01/great-dane/3.jpg"
              alt="Here for the Long Haul badge with Great Dane dog logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/assets/work/uploads/2025/01/great-dane/4.jpg"
              alt="125 Years - Then and Now, Great Connects Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-20 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Design System
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          A cohesive visual language built for scale
        </h2>
        <p className="dark:text-polar-400 mb-16 max-w-3xl text-lg leading-relaxed text-gray-600">
          We developed a comprehensive design system encompassing logo variations, color palette, typography, buttons, and custom iconography to ensure consistency across all touchpoints.
        </p>

        {/* Design System Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/5.jpg"
            alt="Great Dane design system - logos, colors, typography, buttons"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Custom Icons */}
      <section className="w-full bg-[#C41E3A]">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/6.jpg"
            alt="Great Dane custom iconography"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Product Pages Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-20 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Product Experience
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Showcasing industry-leading trailers
        </h2>
        <p className="dark:text-polar-400 mb-16 max-w-3xl text-lg leading-relaxed text-gray-600">
          Each product line received dedicated presentation showcasing performance specifications, technology features, and real-world applications across refrigerated, dry freight, and flatbed segments.
        </p>

        {/* Product Carousel */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/7.jpg"
            alt="Great Dane Everest product carousel"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Driver Photo - Full Width */}
      <section className="w-full">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/8.jpg"
            alt="Driver with Great Dane Champion trailer"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="w-full bg-[#0a1628] px-8 py-20 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Innovation Story
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Over 100 years of innovation
        </h2>
        <p className="mb-16 max-w-3xl text-lg leading-relaxed text-gray-300">
          The website celebrates Great Dane's history of firsts in the trailer industry while highlighting continued investment in technology, sustainability, and manufacturing excellence.
        </p>

        {/* Innovation Page on Laptop */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/9.jpg"
            alt="Great Dane innovation page on laptop"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Photo Collage - Full Width */}
      <section className="w-full">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/10.jpg"
            alt="Great Dane photo collage - trailers, logo detail, employee"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Product Specs Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-20 md:px-16 lg:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
              Detailed Specifications
            </p>
            <h2 className="mb-6 text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Technical depth for informed decisions
            </h2>
            <p className="dark:text-polar-400 text-lg leading-relaxed text-gray-600">
              Fleet operators need detailed specifications to make purchasing decisions. We designed intuitive spec sheets that present complex technical data in an accessible, scannable format across all device sizes.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/assets/work/uploads/2025/01/great-dane/11.jpg"
              alt="Great Dane Everest specifications on iPad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-20 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Interactive Features
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Cool & Connected
        </h2>
        <p className="dark:text-polar-400 mb-16 max-w-3xl text-lg leading-relaxed text-gray-600">
          Interactive product explorers let users discover features and technology integrations through an engaging, hands-on digital experience.
        </p>

        {/* Features Page */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/12.jpg"
            alt="Great Dane features page - Cool and Connected interactive trailer"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Culture & Careers Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-20 md:px-16 lg:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="/assets/work/uploads/2025/01/great-dane/13.jpg"
              alt="Great Dane culture - Grow With Us and Culture Champions cards"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-1">
            <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
              Culture & Careers
            </p>
            <h2 className="mb-6 text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Growing the next generation
            </h2>
            <p className="dark:text-polar-400 text-lg leading-relaxed text-gray-600">
              The careers section highlights Great Dane's commitment to employee development, showcasing culture champions and growth opportunities to attract top talent in manufacturing and logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonial - Full Width */}
      <section className="w-full">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/15.jpg"
            alt="Great Dane customer testimonial - After 25 years together"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Content & Resources Section */}
      <section className="w-full bg-[#0a1628] px-8 py-20 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Content Hub
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Resources that drive decisions
        </h2>
        <p className="mb-16 max-w-3xl text-lg leading-relaxed text-gray-300">
          A robust content strategy supports the sales process with FAQs, blog articles, and downloadable guides that address fleet operators' key questions and concerns.
        </p>

        {/* Content Pages Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/assets/work/uploads/2025/01/great-dane/17.jpg"
              alt="Great Dane FAQs and blog mockups"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/assets/work/uploads/2025/01/great-dane/18.jpg"
              alt="Great Dane guide download - Essential Guide to Flatbed Trailers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Manufacturing Photo - Full Width */}
      <section className="w-full">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src="/assets/work/uploads/2025/01/great-dane/19.jpg"
            alt="Great Dane manufacturing - worker at production line"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Technology Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-20 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Technology Integration
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Showcasing what sets Great Dane apart
        </h2>
        <p className="dark:text-polar-400 mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
          Great Dane differentiates through proprietary technologies that improve safety, performance, and fleet efficiency. The website makes these advantages tangible and compelling.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-6">
            <p className="text-gray-900 dark:text-white">FleetPulse Telematics</p>
            <p className="dark:text-polar-400 mt-2 text-sm text-gray-600">Standard asset tracking with upgrade options</p>
          </div>
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-6">
            <p className="text-gray-900 dark:text-white">ThermoGuard Liners</p>
            <p className="dark:text-polar-400 mt-2 text-sm text-gray-600">Microban-infused for hygiene and durability</p>
          </div>
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-6">
            <p className="text-gray-900 dark:text-white">SlipNot Safety Grip</p>
            <p className="dark:text-polar-400 mt-2 text-sm text-gray-600">Exclusive high-friction surface technology</p>
          </div>
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-6">
            <p className="text-gray-900 dark:text-white">AnchorPoint Mounting</p>
            <p className="dark:text-polar-400 mt-2 text-sm text-gray-600">Heavy-duty truck body mounting system</p>
          </div>
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-6 md:col-span-2 lg:col-span-2">
            <p className="text-gray-900 dark:text-white">Strata Sidewall System</p>
            <p className="dark:text-polar-400 mt-2 text-sm text-gray-600">Premium lining, insulation, and corrosion protection</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-20 md:px-16 lg:px-24">
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
