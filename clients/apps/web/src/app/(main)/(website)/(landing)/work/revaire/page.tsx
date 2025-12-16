import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Revaire - Bttr.',
  description: 'A modern, luxurious identity.',
  openGraph: {
    title: 'Revaire - Bttr.',
    description: 'A modern, luxurious identity.',
    images: ['/assets/work/uploads/2024/08/SQ-Image-frame-4.jpg.webp'],
  },
}

export default function RevairePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/08/LYRS_071-scaled.jpg.webp"
            alt="Revaire"
            fill
            className="hidden object-cover lg:block"
            priority
            sizes="100vw"
          />
          <Image
            src="/assets/work/uploads/2024/08/Revaire_mobile.jpg"
            alt="Revaire Mobile"
            fill
            className="block object-cover lg:hidden"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Upgrade Beyond First Class
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
            / Revaire
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Travel &amp; Leisure</p>
                <p>Aviation</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Revaire</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Brand Identity</p>
                <p>Brand Guidelines</p>
                <p>Digital Assets</p>
                <p>Physical Assets</p>
                <p>Marketing Assets</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Imagine accessing discounted empty leg flights and shared charters
              that allow you to experience private aviation at a fraction of the
              usual cost – and meeting some incredible people along the way.
              Revaire is a new kind of private members club that takes
              exclusivity to the skies.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The Founders at Revaire are disrupting this dated and gated world
              of private aviation by providing a luxurious, frictionless way for
              members to connect and fly private.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/CS_Inset-full-width-3.jpg"
            alt="Revaire Brand Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images - App */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/SOra-app.jpg.webp"
              alt="Revaire App"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/sora-logo.png.webp"
              alt="Revaire Logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Revaire
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A modern, luxurious identity
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Private Jet operators fly a significant number of repositioning legs
          empty, leaving billions of dollars &quot;in the air.&quot; To fill
          them is currently a real hassle. This is where Revaire comes in,
          taking a never-before-seen approach to help operators earn incremental
          revenue on these flights via a private members club experience for its
          users.
        </p>
        <p className="ml-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
          With a category full of bland competitors, Revaire&apos;s competitive
          advantage is to invest in design, both in the visual identity, but
          also in a seamless product user experience.
        </p>
        <p className="ml-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
          Our work sets the foundations for a technology company that unifies a
          fragmented market, positioning Revaire as an elevated experience
          within the category from launch.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/guidelines.jpg.webp"
            alt="Revaire Guidelines"
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
              src="/assets/work/uploads/2024/08/SQ-Image-frame.jpg.webp"
              alt="Revaire Brand Elements"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/SQ-Image-frame-1.jpg.webp"
              alt="Revaire Brand"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Integrated System */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          An Integrated System
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          We designed a scalable brand operating system for seamless deployment
          across digital and physical assets
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The brand identity system is designed with a digital interface as the
          primary touchpoint for Revaire members. Tactile, modular and
          luxurious, the brand provides a rich foundation for a premium digital
          experience.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/MM_Screen_SC-B-01-scaled.jpg.webp"
            alt="Revaire System"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/SQ-Image-frame-5.jpg"
              alt="Revaire Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/MM_Tablet_TB-CAF2-03-scaled.jpg"
              alt="Revaire Tablet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/Image-Single-1.jpg.webp"
            alt="Revaire Single"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Premium Experience */}
      <section className="w-full bg-[#0a0a0a] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Revaire
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Premium in-flight experience
        </h2>
      </section>

      {/* Single Column Text Dark */}
      <section className="w-full bg-[#0a0a0a] px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-300">
          A seamless, elevated experience at every touchpoint that unlocks
          access to an exciting and adventurous new world.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/CS_Inset-full-width-2.jpg.webp"
            alt="Revaire Experience"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/SQ-Image-frame-4.jpg.webp"
              alt="Revaire Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[1344/2010]">
            <Image
              src="/assets/work/uploads/2024/08/Portrait-Image-frame.jpg.webp"
              alt="Revaire Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Digital Assets */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Revaire
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Digital Assets
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Delivering a functional and useable identity system was essential for
          this early stage start up. We created sales &amp; marketing assets and
          templates and housed them in Canva for easy access and use. Alongside
          these assets were all the core brand identity OS assets, including
          logos, fonts, colors, iconography, art direction and more.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/mobile.jpg"
            alt="Revaire Mobile Assets"
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
            <p className="text-sm text-gray-600">Revaire</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">New York, USA</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Travel &amp; Leisure</p>
              <p className="text-sm text-gray-600">Aviation</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Jocelyn McArthur</p>
              <p className="text-sm text-gray-600">Bambos Neophytou</p>
              <p className="text-sm text-gray-600">Neil Corcoran</p>
              <p className="text-sm text-gray-600">Miriam Goldstein</p>
              <p className="text-sm text-gray-600">Bo Floejborg</p>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Naming, Strategy &amp; Messaging: Ugly Wolf
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
