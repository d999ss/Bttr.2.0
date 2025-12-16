import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Summit - Bttr.',
  description: 'Creating an AI-generated concept car brand for a marketing automation prototype.',
  openGraph: {
    title: 'Summit - Bttr.',
    description: 'Creating an AI-generated concept car brand for a marketing automation prototype.',
    images: ['/assets/work/uploads/2025/02/summit-hero.jpg'],
  },
}

export default function SummitPage() {
  return (
    <main className="dark:bg-polar-950 bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2025/02/summit-hero.jpg"
            alt="Summit Concept Car"
            fill
            className="object-cover opacity-90"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/70">
              Summit
            </p>
            <h1 className="max-w-5xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Building a Brand with AI
            </h1>
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="dark:bg-polar-950 w-full bg-[#1a1a1a] px-8 py-16 text-white md:px-16 lg:px-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-white/70">
            <a href="/work" className="hover:text-white">
              Work
            </a>{' '}
            / Summit
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Automotive</p>
                <p>AI / Creative Tech</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Project</h3>
              <p className="text-white">Internal R&D</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2025</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>AI Art Direction</p>
                <p>Brand Design</p>
                <p>Visual Development</p>
                <p>Prototyping</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              When designing a marketing automation tool for auto dealerships, we needed realistic vehicle imagery without using existing brand photography.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The solution? Create an entirely new car brand using AI—one realistic enough to be believable, but generic enough to avoid trademark issues.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#1a1a1a]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/02/summit-suv.webp"
            alt="Summit SUV"
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
          Real-looking cars without the real brands
        </h2>
        <p className="dark:text-polar-400 max-w-3xl text-lg leading-relaxed text-gray-600">
          The notoriously wasteful world of auto dealerships needed a marketing automation tool. Our team required high-quality vehicle images to showcase the tool's features, but using real brand-specific photography was not an option due to licensing restrictions and trademark concerns.
        </p>
      </section>

      {/* Process Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-8 text-sm uppercase tracking-wider text-gray-500">
          The Process
        </p>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-2xl font-light text-gray-900 dark:text-white">Defining Visual Identity</p>
            <p className="dark:text-polar-400 text-gray-600">
              Before generating images, we established a cohesive design language. Summit vehicles needed to look modern and refined with a premium feel—authentic enough to be believable while maintaining a distinct brand style across all images.
            </p>
          </div>
          <div>
            <p className="mb-4 text-2xl font-light text-gray-900 dark:text-white">Iterative Refinement</p>
            <p className="dark:text-polar-400 text-gray-600">
              Midjourney interprets natural language prompts to generate images, but achieving specificity is iterative. We started broad and gradually refined based on outputs, using existing photos for reference to improve outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/02/summit-sedan.png"
            alt="Summit Sedan"
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
          Constructing the Summit vehicle fleet
        </h2>
        <p className="dark:text-polar-400 mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
          Using Midjourney, we generated a fleet of visually consistent vehicles that looked authentic and modern while maintaining a distinct brand style.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Detailed design elements like rear light bars and wheel designs</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Environment settings for uniformity across urban and studio shots</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Signature grille and cohesive design language across vehicle types</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Post-processing in Photoshop to refine AI-generated results</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Premium wheels and modern lighting for authenticity</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Cinematic compositions for marketing materials</p>
          </div>
        </div>
      </section>

      {/* Prompt Engineering Section */}
      <section className="w-full bg-[#1a1a1a] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Prompt Engineering
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          The art of AI direction
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
          Achieving consistent, realistic results required precise prompting and iterative refinement.
        </p>
        <div className="rounded-xl bg-white/5 p-6">
          <p className="font-mono text-sm italic text-gray-300">
            "Summit SUV, signature grille, cohesive design language, cinematic side profile, premium wheels, modern lighting, high detail, studio photography, soft reflections."
          </p>
        </div>
        <p className="mt-6 text-gray-400">
          This refined approach helped Midjourney generate vehicles that felt cohesive as part of the same lineup. However, some inconsistencies remained, requiring manual adjustments in Photoshop.
        </p>
      </section>

      {/* Screenshot/Application Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/02/summit-screens.jpg"
            alt="Summit in Marketing Application"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-8 text-sm uppercase tracking-wider text-gray-500">
          The Impact
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="dark:bg-polar-800 rounded-xl bg-white p-6">
            <p className="mb-2 text-3xl font-light text-gray-900 dark:text-white">90%</p>
            <p className="dark:text-polar-400 text-gray-600">Time saved vs. traditional illustration</p>
          </div>
          <div className="dark:bg-polar-800 rounded-xl bg-white p-6">
            <p className="mb-2 text-3xl font-light text-gray-900 dark:text-white">$0</p>
            <p className="dark:text-polar-400 text-gray-600">Stock photography licensing fees</p>
          </div>
          <div className="dark:bg-polar-800 rounded-xl bg-white p-6">
            <p className="mb-2 text-3xl font-light text-gray-900 dark:text-white">100%</p>
            <p className="dark:text-polar-400 text-gray-600">Visual consistency across fleet</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl leading-relaxed text-gray-900 md:text-3xl dark:text-white">
            AI-generated imagery provided a fast, efficient, and cost-effective alternative to traditional methods.
          </p>
          <p className="dark:text-polar-400 mt-6 text-lg text-gray-600">
            Finding suitable stock photography is often tedious with limited results that never maintain visual consistency. Manually designing vehicles in Photoshop would be incredibly time-consuming. Hiring an illustrator would be costly with extensive revisions. Summit solved all of these problems.
          </p>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2025/02/summit-suv-2.webp"
            alt="Summit SUV Fleet"
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
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Project</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">Internal R&D / Lab</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Tools</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Midjourney</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">Adobe Photoshop</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Sector</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Automotive</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">AI / Creative Tech</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Team</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Chris Kerr</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
