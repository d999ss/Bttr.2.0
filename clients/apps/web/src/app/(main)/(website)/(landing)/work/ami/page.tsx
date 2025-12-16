import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AMI - Bttr.',
  description:
    'Improving the user experience and product strategy for a learning platform.',
  openGraph: {
    title: 'AMI - Bttr.',
    description:
      'Improving the user experience and product strategy for a learning platform.',
    images: ['/assets/work/uploads/2025/03/20211133.jpg.webp'],
  },
}

export default function AMIPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#1a1a2e]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/03/Desktop-1-scaled.jpg"
            alt="AMI"
            fill
            className="hidden object-cover lg:block"
            priority
            sizes="100vw"
          />
          <Image
            src="/assets/work/uploads/2025/03/AMIO_Mobile.jpg"
            alt="AMI Mobile"
            fill
            className="block object-cover lg:hidden"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Improving the user experience and product strategy for a learning
              platform.
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#1a1a2e] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / Allergan Medical Institute
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Pharmaceuticals</p>
                <p>Learning &amp; Development</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Allergan Medical Institute</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>User Research</p>
                <p>Brand Design</p>
                <p>UX Design</p>
                <p>UI Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Allergan Medical Institute (AMI) launched in 2022 as a way to
              further educate medical aesthetics practitioners. As the platform
              scaled, they needed a way to improve the user experience of the
              LMS through better functionality, sleeker visuals, and curated
              educational paths that folded in content for those new to the
              industry.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Partnering with the client team, we performed a deep dive of the
              existing AMI websites to understand any known constraints and
              analyze business and customer opportunities as well as their
              driving principles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Study Image */}
      <section className="w-full bg-[#1a1a2e]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/03/20211133.jpg"
            alt="AMI Platform Overview"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Strategy */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Allergan Medical Institute
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Strategy First
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          The initial considerations as we dived into updating AMI Online were:
          how do we sunset the existing &quot;introductory&quot; content site,
          Spark, and integrate that content into the AMI platform; how do we
          make the site &quot;mobile-first&quot; rather than
          &quot;mobile-compatible&quot;; and how do we improve the onboarding
          process.
        </p>
        <p className="ml-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
          During our initial site audit and discovery phases, we aligned on
          prioritizing onboarding as that would have the most immediate, direct
          impact on the user. The next priority was to build out a content
          matrix by experience phase in order to design and personalize content
          against; this would allow us to pull in the introductory content as
          well as provide a reason for the onboarding questions.
        </p>
      </section>

      {/* Section Header - Brand */}
      <section className="w-full bg-[#1a1a2e] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Allergan Medical Institute
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Refreshed look and feel
        </h2>
      </section>

      {/* Single Column Text Dark */}
      <section className="w-full bg-[#1a1a2e] px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-300">
          We updated and refreshed the brand identity, pulling in key elements
          that tied AMI, Allē and Allergan Aesthetics together creating stronger
          familiarity and connection across the brands. Additionally, we
          introduced a darker color palette to create a video streaming platform
          browsing experience and aesthetic.
        </p>
      </section>

      {/* Brand Images */}
      <section className="w-full bg-[#1a1a2e]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/03/50-Inset-4-scaled.jpg"
            alt="AMI Brand Identity"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-[#1a1a2e]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/03/AMI-logo-1.jpg"
              alt="AMI Logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/03/AMI-images-1.jpg"
              alt="AMI Imagery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* UI Mockup Images */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/03/Ui-mockup-pink-1-scaled.jpg"
              alt="AMI UI Mockup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2025/03/model-images.jpg"
              alt="AMI Model Images"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - Experience */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Allergan Medical Institute
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Improved Digital Experience
        </h2>
      </section>

      {/* Single Column Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Our focus while redesigning AMI was to create an overall improved
          experience for users coming to the platform. To do this, we united
          content libraries under one unified collection. This immediately
          streamlined the experience for the user, causing less confusion
          surrounding what content lived where. To further improve the
          experience, we consolidated the onboarding process, removing
          unnecessary questions while also providing a clear end-goal for the
          user of personalized content journeys.
        </p>
      </section>

      {/* Experience Images */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/03/temporary-mockup-2-scaled.jpg"
            alt="AMI Interface"
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
              src="/assets/work/uploads/2025/03/UI-element-scaled.jpg"
              alt="AMI UI Elements"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[1344/2010]">
            <Image
              src="/assets/work/uploads/2025/03/Portrait-Image-frame-1.jpg"
              alt="AMI Mobile Experience"
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
            src="/assets/work/uploads/2025/03/CS_Inset-full-width-scaled.jpg"
            alt="AMI Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/03/CS_Inset-full-width.jpg"
            alt="AMI Final"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center">
            <p className="text-6xl font-light text-gray-900">2x</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              New user numbers *Since relaunch
            </p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-light text-gray-900">40%</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
              More active users *Since relaunch
            </p>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Allergan Medical Institute</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Irvine, CA</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Pharmaceuticals</p>
              <p className="text-sm text-gray-600">Learning &amp; Development</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Jocelyn McArthur</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
              <p className="text-sm text-gray-600">Louise Dreier</p>
              <p className="text-sm text-gray-600">Charles Law</p>
              <p className="text-sm text-gray-600">Miriam Goldstein</p>
              <p className="text-sm text-gray-600">Elisa Karjalainen</p>
              <p className="text-sm text-gray-600">David Curtis</p>
              <p className="text-sm text-gray-600">Grant Liddall</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
