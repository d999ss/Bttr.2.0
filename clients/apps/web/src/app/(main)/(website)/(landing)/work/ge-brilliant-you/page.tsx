import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'GE Brilliant You - Bttr.',
  description: "Investing in GE's most valuable asset—their people",
  openGraph: {
    title: 'GE Brilliant You - Bttr.',
    description: "Investing in GE's most valuable asset—their people",
    images: ['/assets/work/uploads/2023/06/general-sample.jpg'],
  },
}

export default function GEBrilliantYouPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2023/08/Desktop-4.png"
            alt="GE Brilliant You"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">GE Brilliant You</span>
              <span className="block opacity-90">
                Investing in GE&apos;s most valuable asset—their people
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="w-full bg-[#1a3a5c] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / GE BYOU
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Aerospace</p>
                <p>Power</p>
                <p>Renewable Energy</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">General Electric</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2018 – Present</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Disciplines</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>User Research</p>
                <p>Product Strategy</p>
                <p>UX/UI Design</p>
                <p>Product Development</p>
                <p>Design System</p>
                <p>Web Development</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Working with General Electric&apos;s in-house design, innovation,
              and learning &amp; development teams, we created a product
              strategy and system that provided the foundations on which to
              build upon.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The result is a virtual university, that supports the development
              of over 300,000 GE employees in 180 countries: BrilliantYOU
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image 1 */}
      <section className="w-full bg-[#1a3a5c]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/Full-width-5.png"
            alt="GE Brilliant You Platform"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images */}
      <section className="w-full bg-[#1a3a5c]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-2-5.png.webp"
              alt="GE Brilliant You Mobile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/GE-B-U-replacement-image.jpg"
              alt="GE Brilliant You Interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Full-width Image 2 */}
      <section className="w-full bg-[#1a3a5c]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width.jpg"
            alt="GE Brilliant You Dashboard"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Creating Simplicity */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          GE BYOU
        </p>
        <h2 className="text-3xl font-light leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Creating simplicity out of complexity
        </h2>
      </section>

      {/* Full-width Image 3 */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width-12.png"
            alt="GE Brilliant You Design System"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Full-width Image 4 */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width_2.jpg"
            alt="GE Brilliant You Interface Design"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images 2 */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame.jpg"
              alt="GE Brilliant You Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-1.jpg.webp"
              alt="GE Brilliant You Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Single Column Text */}
      <section className="w-full px-8 py-8 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          GE BYOU
        </p>
        <p className="max-w-4xl text-base leading-relaxed text-gray-600">
          We designed a simple, clean, and unified user experience for an
          incredibly complex ecosystem of pre-existing content, ongoing user
          generated content, and a network of third party content providers.
          <br />
          <br />
          Designed to engage a global community and inspire them to learn
          something new through best-in-class learning opportunities.
        </p>
      </section>

      {/* Caption Text */}
      <section className="w-full px-8 py-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium text-gray-900">
            Cards for the Brilliant You website
          </p>
          <p className="text-sm text-gray-600">
            A design system has been created to ensure that the large amount of
            varying content and subject matter can be easily navigated.
          </p>
        </div>
      </section>

      {/* Full-width Image 5 */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/Frame-1171275801.jpg"
            alt="GE Brilliant You Cards System"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Full-width Image 6 */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width_3.jpg"
            alt="GE Brilliant You Interface"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - Reaching a Global Audience */}
      <section className="w-full px-8 py-16 md:px-16 lg:px-24">
        <h2 className="mb-6 max-w-4xl text-3xl font-light leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Reaching a Global Audience
        </h2>
        <p className="max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
          With a user base of over 300,000 people and a wide range of internal
          stakeholders to navigate, we created an accessible product that would
          adapt to a variety of languages, regions, and user scenarios.
        </p>
      </section>

      {/* Full-width Image 7 */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2023/08/CS_Inset-full-width_3-1.jpg"
            alt="GE Brilliant You Global"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Section Header - AI */}
      <section className="w-full px-8 py-16 md:px-16 lg:px-24">
        <h2 className="mb-6 max-w-4xl text-3xl font-light leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Supercharging BrilliantYOU with AI
        </h2>
        <p className="max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
          As the power of AI accelerates, GE tasked us to develop a concept to
          allow BrilliantYOU&apos;s users to get the information they need, as
          easily as possible. We designed an AI Product extension trained on
          BrilliantYOU&apos;s content so users can access it by simply asking a
          question. The system drafts a summary response, serves up relevant
          articles, insights, and training.
        </p>
      </section>

      {/* Full-width Image 8 */}
      <section className="w-full">
        <div className="relative aspect-[2880/2064] w-full">
          <Image
            src="/assets/work/uploads/2023/08/Frame-1171275809-1.png"
            alt="GE Brilliant You AI"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Two Column Images 3 */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-5-5.png.webp"
              alt="GE Brilliant You AI Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-6-5.png.webp"
              alt="GE Brilliant You AI Feature"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section Header - User Insight */}
      <section className="w-full px-8 py-16 md:px-16 lg:px-24">
        <h2 className="mb-6 max-w-4xl text-3xl font-light leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Using a wealth of user insight, research, and stakeholder workshops,
          our aim was to enhance GE BrilliantYOU&apos;s usability and
          functionality and improve the overall user experience.
        </h2>
        <p className="max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
          This included refining the UI, streamlining workflows, optimizing
          performance and improving the personalization and accessibility of the
          site.
          <br />
          <br />
          And the results are clear, with overall user sentiment increasing
          across the board:
        </p>
      </section>

      {/* Two Column - Video and Image */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <iframe
              src="https://player.vimeo.com/video/866843654?background=1&autoplay=1&loop=1&muted=1"
              className="h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2023/08/SQ-Image-frame-4-5.png.webp"
              alt="GE Brilliant You Results"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">General Electric</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">New York, NY</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Aerospace</p>
              <p className="text-sm text-gray-600">Power</p>
              <p className="text-sm text-gray-600">Renewable Energy</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Chris Johns</p>
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Danielle Senior</p>
              <p className="text-sm text-gray-600">Neil Corcoran</p>
              <p className="text-sm text-gray-600">Miriam Goldstein</p>
              <p className="text-sm text-gray-600">Ken Leung</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
