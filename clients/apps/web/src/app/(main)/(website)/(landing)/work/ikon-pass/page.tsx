import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'
import { CaseStudyJsonLd } from '@/components/SEO/CaseStudyJsonLd'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'Ikon Pass - Bttr.',
  description: 'Redefining the ride with an ambitious digital transformation.',
  openGraph: {
    title: 'Ikon Pass - Bttr.',
    description: 'Redefining the ride with an ambitious digital transformation.',
    images: ['/assets/work/uploads/2024/06/ikon-pass-thumb.jpg'],
  },
}

export default function IkonPassPage() {
  const study = caseStudies.find((s) => s.slug === 'ikon-pass')!

  return (
    <main className="bg-white">
      <CaseStudyJsonLd
        caseStudy={study}
        description="Redefining the ride – transforming 50+ disconnected resort Apps into a single, centralized digital platform for Alterra Mountain Company."
        datePublished="2024-06-01"
        images={[
          'https://makebttr.com/assets/work/uploads/2025/12/IkonSnow.webp',
          'https://makebttr.com/assets/work/uploads/2025/04/CS_Inset-full-width-2.webp',
        ]}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#1a1f4e]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/12/IkonSnow.webp"
            alt="Ikon Pass"
            fill
            className="hidden object-cover lg:block"
            priority
            sizes="100vw"
          />
          <Image
            src="/assets/work/uploads/2025/05/Mobile-Icon.webp"
            alt="Ikon Pass Mobile"
            fill
            className="block object-cover lg:hidden"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Redefining the ride with an ambitious digital transformation
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#1a1f4e] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / Ikon Pass
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Skiing &amp; Snow Sports</p>
                <p>Travel &amp; Tourism</p>
                <p>Outdoor Recreation</p>
                <p>Lifestyle &amp; Leisure</p>
                <p>Hospitality &amp; Events</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Alterra Mountain Company</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>User Research</p>
                <p>Market Research</p>
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>UI Design</p>
                <p>Service Design</p>
                <p>Motion Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Redefining the ride – take a look into the ambitious vision to
              transform a portfolio of 50+ disconnected resort Apps into a
              single, centralized digital platform that powers Alterra Mountain
              Companies owned and Partner Resorts in the US and around the
              world. Providing guests with an unrivalled level of convenience,
              personalization and seamless interaction.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Launching Winter 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Images */}
      <section className="w-full bg-[#1a1f4e]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-2.webp"
            alt="Ikon Pass App Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-[#1a1f4e]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width2.webp"
            alt="Ikon Pass App Features"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - B2B2C */}
      <section className="w-full bg-[#e5e3df] px-8 py-16 md:px-16 lg:px-24">
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A B2B2C Powerhouse built on world class design &amp; technology
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-[#e5e3df] px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Consolidating local market resort Apps into a centralized digital
          platform will transform how Alterra Mountain Company will be able to
          engage and add value to both resorts and guests. Access to data at
          scale, and the ability to analyze and systemetize personalized
          content, offers, promotions and more enables the business to do so
          much more than before.
        </p>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-[#e5e3df]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-10.webp"
              alt="Ikon Pass Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[1344/2010]">
            <Image
              src="/assets/work/uploads/2025/04/Portrait-Image-frame.png.webp"
              alt="Ikon Pass Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4F Principles Section */}
      <section className="w-full bg-[#e5e3df] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          4F Principles
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Fun, Fast, Functional, and Future-Forward: Elevating the Ikon Pass
          Experience
        </h2>
      </section>

      {/* Single Column - 4F Description */}
      <section className="w-full bg-[#e5e3df] px-8 py-8 md:px-16 lg:px-24">
        <p className="max-w-4xl text-base leading-relaxed text-gray-600">
          The Ikon Pass app is more than just a tool—it&apos;s the gateway to
          adventure. As the primary touchpoint for guest interactions, the new
          digital experience should embody the brand&apos;s personality with a
          bold, playful, and engaging interface. Speed is essential, ensuring
          users get to the fun faster with seamless, intuitive flows that remove
          friction without sacrificing quality. Every feature must have real
          purpose, delivering a functional and effortless experience that just
          works. Beyond the essentials, we must push boundaries introducing
          innovative, future-focused features that set Ikon Pass apart and
          signal a bold vision for what&apos;s next.
        </p>
      </section>

      {/* 4F Definition List */}
      <section className="w-full border-t border-gray-300 bg-[#e5e3df] px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Fun</h3>
            <p className="text-sm text-gray-600">
              Most guest interaction with the Ikon Pass brand will be via the
              App interface – Interface loyalty means brand loyalty, and
              we&apos;ve designed the App with this idea at heart of our
              thinking.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Fast</h3>
            <p className="text-sm text-gray-600">
              We&apos;ve focused on streamlining user flows and interactions, so
              users fingers don&apos;t freeze and they can get to the fun
              faster.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Functional
            </h3>
            <p className="text-sm text-gray-600">
              The new App must providing real utility behind every feature. No
              illusions. Logical simplicity. It just works.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Future</h3>
            <p className="text-sm text-gray-600">
              To stand out we need to be progressive and looking for
              opportunities to introduce concepts and features that signal a
              cutting edge future for the Ikon Pass.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#e5e3df]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/Full-width-1.webp"
            alt="Ikon Pass Full Experience"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Personas Section */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Personas
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Designing for Every Adventure: The Williams Family &amp; Friends
        </h2>
      </section>

      {/* Personas Description */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="max-w-4xl text-base leading-relaxed text-gray-600">
          To ensure the Ikon Pass app delivers an intuitive and seamless
          experience for all users, we built the experience around the needs of
          our fictional test family, the Williams. Mandy and John, along with
          their three children—Zayne, Vesper, and Emma—represent a range of
          skiers and snowboarders, each with different priorities on the
          mountain. Whether it&apos;s planning a family trip, tracking
          performance, or navigating resort details, their needs shaped key
          design decisions. Adding to the mix, their friend Roy, an
          adventure-seeker who maximizes every ski day, helped refine the
          app&apos;s ability to cater to solo travellers and groups alike. By
          designing with their experiences in mind, we created an interface that
          is not only functional but also engaging and inclusive for every Ikon
          Pass holder.
        </p>
      </section>

      {/* Personas Images */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-4.webp"
            alt="Williams Family Personas"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-12.webp"
            alt="Ikon Pass User Journey"
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
              src="/assets/work/uploads/2025/04/SQ-Image-frame-2.png.webp"
              alt="Ikon Pass Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-3.png.webp"
              alt="Ikon Pass Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Desktop-4 Full-width */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/Desktop-4.webp"
            alt="Ikon Pass Desktop Experience"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Design System Section */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Design System
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A universal design system for consistency at scale
        </h2>
      </section>

      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Building a design system that scales across 50+ resorts requires
          careful consideration of both consistency and flexibility. Our
          component library ensures every touchpoint feels cohesive while
          allowing individual resorts to maintain their unique character.
        </p>
      </section>

      {/* Design System Images */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-8.png"
            alt="Design System Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-4.png"
              alt="Design System Components"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-5.png.webp"
              alt="Design System Elements"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-13.png.webp"
            alt="Design System Components"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-6.png"
            alt="Design System UI"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-1.webp"
              alt="Design System Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/Desktop-3.webp"
              alt="Desktop Design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Features
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Designed for every stage of a skier&apos;s journey
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          From planning trips to navigating the slopes and managing in-resort
          activities, every feature addresses real user needs at every stage of
          the mountain experience.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-[#1a1f4e] px-8 py-24 md:px-16 lg:px-24">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl">
            &ldquo;The collaboration with Bttr. has been exceptional. Their
            expertise in product strategy and design thinking, combined with
            their ability to align diverse stakeholders across our organization,
            has been instrumental in bringing this vision to life.&rdquo;
          </p>
          <footer className="text-sm text-white/70">
            <p className="font-medium text-white">Ryan Schwartz</p>
            <p>Marketing &amp; Technology Lead, Alterra Mountain Company</p>
          </footer>
        </blockquote>
      </section>

      {/* More Design System Images */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/CS_Inset-full-width-14.webp"
            alt="Ikon Pass Experience"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-6.webp"
              alt="Ikon Pass Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-7.png"
              alt="Ikon Pass Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/Desktop-1.webp"
            alt="Ikon Pass Desktop"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/Desktop-5.webp"
            alt="Ikon Pass Dashboard"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/04/SQ-Image-frame-9.png.webp"
              alt="Ikon Pass Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[1344/2010]">
            <Image
              src="/assets/work/uploads/2025/04/Portrait-Image-frame-1.webp"
              alt="Ikon Pass Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/04/Desktop-2.webp"
            alt="Ikon Pass Final"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#1a1f4e] px-8 py-24 md:px-16 lg:px-24">
        <h2 className="mx-auto max-w-4xl text-center text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Connect with adventure and maximize your time on the mountain with
          Ikon Pass.
        </h2>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Alterra Mountain Company</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Denver, CO</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Skiing &amp; Snow Sports</p>
              <p className="text-sm text-gray-600">Travel &amp; Tourism</p>
              <p className="text-sm text-gray-600">Outdoor Recreation</p>
              <p className="text-sm text-gray-600">Lifestyle &amp; Leisure</p>
              <p className="text-sm text-gray-600">Hospitality &amp; Events</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Chris Johns</p>
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Nicole Hampton</p>
              <p className="text-sm text-gray-600">Joey Kantor</p>
              <p className="text-sm text-gray-600">Jenna Law</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
              <p className="text-sm text-gray-600">Ryan French</p>
              <p className="text-sm text-gray-600">Mat Cooper</p>
              <p className="text-sm text-gray-600">Karen Camacho</p>
              <p className="text-sm text-gray-600">Matt Wheeler</p>
            </div>
          </div>
        </div>
      </section>

      <NextCaseStudy currentSlug="ikon-pass" />
    </main>
  )
}
