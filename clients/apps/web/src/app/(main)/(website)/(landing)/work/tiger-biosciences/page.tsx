import { Metadata } from 'next'
import Image from 'next/image'
import { NextCaseStudy } from '@/components/CaseStudy/NextCaseStudy'

export const metadata: Metadata = {
  title: 'Tiger BioSciences - Bttr.',
  description: 'Redefining regenerative medicine through innovation.',
  openGraph: {
    title: 'Tiger BioSciences - Bttr.',
    description: 'Redefining regenerative medicine through innovation.',
    images: ['/assets/work/uploads/2024/08/tiger-biosciences-hero.webp'],
  },
}

export default function TigerBioSciencesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/assets/work/uploads/2024/08/tiger-hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="relative flex min-h-screen items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Redefining regenerative medicine through innovation
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
            / Tiger BioSciences
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Healthcare</p>
                <p>Biotech</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">Tiger BioSciences</p>
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
                <p>Web Development</p>
                <p>Content Strategy</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              Tiger BioSciences is a medical technology innovator redefining
              regenerative medicine through its expertise in cellular, acellular,
              and matrix-like products.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              We partnered with Tiger to create a unified digital platform that
              showcases their comprehensive portfolio of wound care and aesthetic
              products while maintaining the trust and credibility essential in
              healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Video */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/assets/work/uploads/2024/08/tiger-particles.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Section Header - Challenge */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          The Challenge
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Unifying a complex portfolio under one cohesive brand experience
        </h2>
      </section>

      {/* Challenge Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            Tiger BioSciences had grown rapidly through strategic acquisitions
            and product development, resulting in a portfolio of over 17
            distinct products across three specialized divisions. Each product
            had its own identity, messaging, and audience—creating a fragmented
            digital presence that made it difficult for healthcare professionals
            to understand the full scope of Tiger&apos;s offerings.
          </p>
          <p>
            The challenge was threefold: create a unified brand architecture
            that respects the unique positioning of each division, design an
            intuitive navigation system for a complex product catalog, and build
            trust with healthcare professionals who demand the highest standards
            of credibility and compliance.
          </p>
        </div>
      </section>

      {/* Two Column Videos */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/assets/work/uploads/2024/08/tiger-beauty.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/assets/work/uploads/2024/08/tiger-subtle.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Section Header - Strategy */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Strategy & Approach
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A research-driven approach to healthcare digital transformation
        </h2>
      </section>

      {/* Strategy Text */}
      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            We began with extensive stakeholder interviews and competitive
            analysis to understand the unique needs of Tiger&apos;s diverse
            audience—from wound care specialists and plastic surgeons to
            procurement teams at major hospital systems.
          </p>
          <p>
            Our research revealed that healthcare professionals valued quick
            access to product specifications, clinical evidence, and regulatory
            information above all else. They needed to make informed decisions
            quickly, often while consulting with patients or colleagues.
          </p>
          <p>
            This insight shaped our entire approach: design for speed and
            clarity first, then layer in the brand storytelling that builds
            long-term trust and recognition.
          </p>
        </div>
      </section>

      {/* Strategy Grid */}
      <section className="w-full bg-gray-100 px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Discovery</h3>
            <p className="text-sm text-gray-600">
              Stakeholder interviews, competitive analysis, and user research to
              understand the healthcare professional journey.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Architecture
            </h3>
            <p className="text-sm text-gray-600">
              Information architecture and content strategy to organize 17+
              products across three distinct divisions.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Design</h3>
            <p className="text-sm text-gray-600">
              Visual design system and UI components that balance scientific
              credibility with modern aesthetics.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Build</h3>
            <p className="text-sm text-gray-600">
              Headless CMS implementation with Next.js for performance,
              flexibility, and easy content management.
            </p>
          </div>
        </div>
      </section>

      {/* Section Header - Portfolio */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Product Portfolio
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A unified platform for 17+ regenerative medicine products
        </h2>
      </section>

      {/* Portfolio Text */}
      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <p className="ml-auto max-w-2xl text-base leading-relaxed text-gray-600">
          Tiger BioSciences operates through specialized divisions including
          Tiger Wound Care, Tiger Aesthetics, and Tiger BioSciences
          International. The platform needed to elegantly present this complex
          portfolio while making it easy for healthcare professionals to find
          the right solutions for their patients.
        </p>
      </section>

      {/* Full-width Video 2 */}
      <section className="w-full bg-white">
        <div className="relative aspect-video w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/assets/work/uploads/2024/08/tiger-subtle.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Section Header - Divisions */}
      <section className="w-full bg-[#0a0a0a] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Specialized Divisions
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Three pillars of regenerative medicine
        </h2>
      </section>

      {/* Divisions Grid */}
      <section className="w-full bg-[#0a0a0a] px-8 py-8 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-medium text-white">Wound Care</h3>
            <p className="text-sm text-gray-400">
              Cellular, acellular, and matrix-like products (CAMPs) for chronic
              and acute wounds, including ACAPatch, alloPLY, and caregraFT.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-white">Aesthetics</h3>
            <p className="text-sm text-gray-400">
              Reconstructive, cosmetic, and regenerative solutions including
              Bellafill, Avéli, Sientra, and advanced tissue expansion devices.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-white">
              International
            </h3>
            <p className="text-sm text-gray-400">
              Germany-based expansion focusing on global distribution
              partnerships and regulatory compliance across markets.
            </p>
          </div>
        </div>
      </section>

      {/* Wound Care Deep Dive */}
      <section className="w-full bg-[#0a0a0a] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Tiger Wound Care
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Advanced solutions for chronic and acute wounds
        </h2>
      </section>

      <section className="w-full bg-[#0a0a0a] px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-300">
          <p>
            Tiger Wound Care develops cellular, acellular, and matrix-like
            products (CAMPs) that represent the cutting edge of wound healing
            technology. These products harness the body&apos;s natural healing
            mechanisms to accelerate recovery and improve patient outcomes.
          </p>
          <p>
            The division&apos;s portfolio includes placental allografts like
            ACAPatch and alloPLY, which provide protective barriers for wounds
            while delivering growth factors and cytokines that promote tissue
            regeneration. Each product is designed for specific wound types and
            healing stages.
          </p>
        </div>
      </section>

      {/* Wound Care Products */}
      <section className="w-full bg-[#0a0a0a] px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-lg bg-white/5 p-6">
            <h4 className="mb-2 font-medium text-white">ACAPatch™</h4>
            <p className="text-xs text-gray-400">
              Dehydrated four-layer placental allograft for protective barrier
              applications
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-6">
            <h4 className="mb-2 font-medium text-white">alloPLY®</h4>
            <p className="text-xs text-gray-400">
              Dual-layer placental allograft for advanced wound protection
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-6">
            <h4 className="mb-2 font-medium text-white">caregraFT™</h4>
            <p className="text-xs text-gray-400">
              Three-layer placental allograft for complex wound management
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-6">
            <h4 className="mb-2 font-medium text-white">Coll-e-Derm®</h4>
            <p className="text-xs text-gray-400">
              Acellular dermal matrix for tissue reconstruction
            </p>
          </div>
          <div className="rounded-lg bg-white/5 p-6">
            <h4 className="mb-2 font-medium text-white">Resolve Matrix™</h4>
            <p className="text-xs text-gray-400">
              Extracellular matrix for topical wound applications
            </p>
          </div>
        </div>
      </section>

      {/* Aesthetics Deep Dive */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Tiger Aesthetics
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Reconstructive and cosmetic innovation
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            Tiger Aesthetics delivers reconstructive, cosmetic, and regenerative
            solutions exclusively for board-certified plastic surgeons and
            aesthetic specialists. The division focuses on products that deliver
            predictable, long-lasting results while maintaining the highest
            safety standards.
          </p>
          <p>
            From Bellafill, the only FDA-approved dermal filler that stimulates
            collagen production for up to five years, to Avéli, a revolutionary
            cellulite treatment, Tiger Aesthetics provides practitioners with
            tools that differentiate their practices.
          </p>
        </div>
      </section>

      {/* Aesthetics Products */}
      <section className="w-full bg-white px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-100 p-6">
            <h4 className="mb-2 font-medium text-gray-900">Bellafill®</h4>
            <p className="text-xs text-gray-600">
              Long-lasting collagen builder FDA approved for smile lines and
              acne scars
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h4 className="mb-2 font-medium text-gray-900">Avéli®</h4>
            <p className="text-xs text-gray-600">
              Revolutionary cellulite treatment targeting fibrous septa
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h4 className="mb-2 font-medium text-gray-900">Sientra®</h4>
            <p className="text-xs text-gray-600">
              Premium breast implants exclusively for board-certified surgeons
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h4 className="mb-2 font-medium text-gray-900">Viality®</h4>
            <p className="text-xs text-gray-600">
              Advanced fat transfer system for predictable volume restoration
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Video 3 */}
      <section className="w-full bg-gray-100">
        <div className="relative aspect-video w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/assets/work/uploads/2024/08/tiger-beauty.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Section Header - Design System */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Design System
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          A visual language that builds trust
        </h2>
      </section>

      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            Healthcare professionals are trained to be skeptical. They need to
            trust the products they recommend to patients, and that trust starts
            with how a brand presents itself. Our design system for Tiger
            BioSciences balances scientific credibility with modern aesthetics.
          </p>
          <p>
            Clean typography, generous whitespace, and a restrained color
            palette communicate professionalism and precision. Meanwhile,
            sophisticated motion design and high-quality imagery elevate the
            brand above competitors who rely on generic medical stock
            photography.
          </p>
        </div>
      </section>

      {/* Design Principles */}
      <section className="w-full bg-gray-100 px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Clarity</h3>
            <p className="text-sm text-gray-600">
              Information hierarchy that guides users to what they need. Complex
              medical information presented in digestible formats without
              oversimplification.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Credibility
            </h3>
            <p className="text-sm text-gray-600">
              Visual language that reflects scientific rigor. Every design
              decision reinforces Tiger&apos;s position as a trusted partner in
              patient care.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Consistency
            </h3>
            <p className="text-sm text-gray-600">
              Unified experience across all touchpoints. From product pages to
              clinical resources, every interaction feels connected.
            </p>
          </div>
        </div>
      </section>

      {/* Section Header - UX */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          User Experience
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Designed for the way healthcare professionals work
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            Healthcare professionals are busy. They often access product
            information between patient consultations, during procedures, or
            while reviewing treatment options with colleagues. The platform
            needed to deliver information quickly, without requiring users to
            navigate through marketing content to find what they need.
          </p>
          <p>
            We designed product pages with scannable layouts that surface key
            specifications, indications, and clinical evidence immediately.
            Detailed information is available for those who need it, but never
            at the expense of quick access to essentials.
          </p>
          <p>
            Smart filtering and search functionality allow users to find
            products by indication, tissue type, or application method. The
            system learns from user behavior to surface relevant products and
            resources based on specialty and browsing history.
          </p>
        </div>
      </section>

      {/* UX Features */}
      <section className="w-full bg-white px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Quick Access Navigation
            </h3>
            <p className="text-sm text-gray-600">
              Persistent navigation that adapts to user context. Product
              specifications, ordering information, and clinical resources are
              never more than one click away.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Intelligent Search
            </h3>
            <p className="text-sm text-gray-600">
              Search that understands medical terminology and synonyms. Find
              products by brand name, generic term, indication, or application.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Comparison Tools
            </h3>
            <p className="text-sm text-gray-600">
              Side-by-side product comparison for healthcare professionals
              evaluating options. Filter by specifications that matter most to
              their practice.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Resource Library
            </h3>
            <p className="text-sm text-gray-600">
              Centralized access to clinical studies, product documentation,
              training materials, and regulatory information.
            </p>
          </div>
        </div>
      </section>

      {/* Section Header - Trust */}
      <section className="w-full bg-[#0a0a0a] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Vertical Integration
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Building trust through absolute quality control
        </h2>
      </section>

      <section className="w-full bg-[#0a0a0a] px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-300">
          <p>
            Tiger BioSciences maintains absolute control over quality and
            innovation through vertical integration—from donor screening and
            tissue collection through R&D, manufacturing, and distribution. The
            digital platform needed to communicate this commitment to excellence
            while showcasing 150+ years of combined executive experience.
          </p>
          <p>
            We developed content strategies that highlight Tiger&apos;s unique
            position in the market: a company that controls every step of the
            supply chain, ensuring consistent quality and traceability that
            competitors cannot match.
          </p>
        </div>
      </section>

      {/* Vertical Integration Steps */}
      <section className="w-full bg-[#0a0a0a] px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="border-l border-white/20 pl-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
              Step 1
            </p>
            <h4 className="mb-2 font-medium text-white">Donor Screening</h4>
            <p className="text-xs text-gray-400">
              Rigorous screening protocols that exceed FDA requirements
            </p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
              Step 2
            </p>
            <h4 className="mb-2 font-medium text-white">Tissue Collection</h4>
            <p className="text-xs text-gray-400">
              AATB-accredited recovery through proprietary networks
            </p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
              Step 3
            </p>
            <h4 className="mb-2 font-medium text-white">R&D</h4>
            <p className="text-xs text-gray-400">
              Continuous innovation in tissue processing and preservation
            </p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
              Step 4
            </p>
            <h4 className="mb-2 font-medium text-white">Manufacturing</h4>
            <p className="text-xs text-gray-400">
              FDA-registered facilities with ISO-certified processes
            </p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
              Step 5
            </p>
            <h4 className="mb-2 font-medium text-white">Distribution</h4>
            <p className="text-xs text-gray-400">
              Direct-to-provider logistics with cold chain integrity
            </p>
          </div>
        </div>
      </section>

      {/* Section Header - Donor Networks */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Donor Networks
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Ethical sourcing at the foundation
        </h2>
      </section>

      <section className="w-full bg-white px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            Tiger BioSciences operates two specialized donor networks that
            ensure a consistent, ethical supply of tissue for their regenerative
            medicine products. Birth Tissue Recovery (BTR) is an FDA-registered,
            AATB-accredited birth tissue banking operation, while the bioCARE
            Donor Network coordinates deceased donor tissue recovery.
          </p>
          <p>
            The platform presents these networks in a way that honors donors
            while communicating the rigorous standards that healthcare
            professionals expect. Transparency about sourcing builds trust and
            differentiates Tiger from competitors who rely on third-party tissue
            banks.
          </p>
        </div>
      </section>

      {/* Donor Network Cards */}
      <section className="w-full bg-white px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Birth Tissue Recovery
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              FDA-registered, AATB-accredited birth tissue banking operation
              that partners with hospitals and birthing centers to recover
              placental tissue that would otherwise be discarded.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Voluntary donor program</li>
              <li>• Comprehensive maternal screening</li>
              <li>• Same-day processing protocols</li>
            </ul>
          </div>
          <div className="rounded-lg bg-gray-100 p-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              bioCARE Donor Network
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Deceased donor tissue coordination services that work with organ
              procurement organizations to recover tissue for processing into
              regenerative medicine products.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 24/7 coordination services</li>
              <li>• Family-centered approach</li>
              <li>• Full traceability documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Header - Technical */}
      <section className="w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
          Technical Implementation
        </p>
        <h2 className="max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          Built for performance and flexibility
        </h2>
      </section>

      <section className="w-full bg-gray-100 px-8 py-8 md:px-16 lg:px-24">
        <div className="ml-auto max-w-2xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            The platform is built on a modern headless architecture using
            Next.js for the frontend and Sanity as the content management
            system. This approach gives Tiger&apos;s marketing team full control
            over content updates while ensuring the site remains fast, secure,
            and scalable.
          </p>
          <p>
            Server-side rendering and static generation deliver sub-second page
            loads even for content-heavy product pages. Edge caching ensures
            consistent performance globally, important for Tiger&apos;s
            international expansion.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full bg-gray-100 px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Frontend</h3>
            <p className="text-sm text-gray-600">
              Next.js with TypeScript for type-safe, performant React
              applications with built-in optimization.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">CMS</h3>
            <p className="text-sm text-gray-600">
              Sanity headless CMS for flexible content modeling and real-time
              collaboration on content updates.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">Hosting</h3>
            <p className="text-sm text-gray-600">
              Vercel edge network for global distribution, automatic scaling,
              and preview deployments.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Analytics
            </h3>
            <p className="text-sm text-gray-600">
              Privacy-first analytics that track user journeys while maintaining
              HIPAA compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-[#0a0a0a] px-8 py-24 md:px-16 lg:px-24">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-2xl leading-relaxed text-white md:text-3xl lg:text-4xl">
            &ldquo;The new platform has transformed how we communicate with
            healthcare professionals. It&apos;s not just a website—it&apos;s a
            tool that helps our sales team close deals and our customers find
            the products they need.&rdquo;
          </p>
          <footer className="text-sm text-gray-400">
            <p className="font-medium text-white">Tiger BioSciences</p>
            <p>Leadership Team</p>
          </footer>
        </blockquote>
      </section>

      {/* Results Section */}
      <section className="w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-8 text-sm uppercase tracking-wider text-gray-500">
          Results
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">17+</p>
            <p className="text-sm text-gray-600">
              Products unified under one platform
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">3</p>
            <p className="text-sm text-gray-600">
              Specialized divisions integrated
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">FDA</p>
            <p className="text-sm text-gray-600">
              Approved products showcased with clarity
            </p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-5xl font-light text-gray-900">150+</p>
            <p className="text-sm text-gray-600">
              Years combined executive experience
            </p>
          </div>
        </div>
      </section>

      {/* Additional Results */}
      <section className="w-full bg-white px-8 py-8 pb-16 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Unified Brand
            </h3>
            <p className="text-sm text-gray-600">
              Three divisions with distinct positioning now share a cohesive
              visual language and user experience that reinforces the Tiger
              BioSciences master brand.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Faster Discovery
            </h3>
            <p className="text-sm text-gray-600">
              Healthcare professionals can now find product information in
              seconds rather than minutes, improving their workflow and Tiger&apos;s
              position as a trusted partner.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Content Control
            </h3>
            <p className="text-sm text-gray-600">
              Marketing team can update products, add clinical evidence, and
              respond to regulatory changes without developer involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
            <p className="text-sm text-gray-600">Tiger BioSciences</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">Conshohocken, PA</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Healthcare</p>
              <p className="text-sm text-gray-600">Biotech</p>
              <p className="text-sm text-gray-600">Regenerative Medicine</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Donny Smith</p>
              <p className="text-sm text-gray-600">Chris Kerr</p>
            </div>
          </div>
        </div>
      </section>

      <NextCaseStudy currentSlug="tiger-biosciences" />
    </main>
  )
}
