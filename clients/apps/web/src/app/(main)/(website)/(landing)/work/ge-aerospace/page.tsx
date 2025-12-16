import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'GE Aerospace FlightDeck - Bttr.',
  description: 'Modernizing the FlightDeck Activation Hub for GE Aerospace.',
  openGraph: {
    title: 'GE Aerospace FlightDeck - Bttr.',
    description: 'Modernizing the FlightDeck Activation Hub for GE Aerospace.',
    images: ['/assets/work/uploads/2024/08/ge-aerospace-thumb.jpg'],
  },
}

export default function GEAerospacePage() {
  return (
    <main className="dark:bg-polar-950 bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-cfm-engines.jpg"
            alt="GE Aerospace CFM Engines"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/70">
              GE Aerospace
            </p>
            <h1 className="max-w-5xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              FlightDeck Activation Hub
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
            / GE Aerospace
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-medium text-white/70">Sectors</h3>
              <div className="space-y-1 text-white">
                <p>Aerospace &amp; Defense</p>
                <p>Enterprise Software</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Client</h3>
              <p className="text-white">GE Aerospace</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-white/70">Year</h3>
              <p className="text-white">2024–Present</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-2 font-medium text-white/70">Our Roles</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white">
                <p>Product Strategy</p>
                <p>UX Design</p>
                <p>Information Architecture</p>
                <p>Design System</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              GE Aerospace engaged Bttr. to modernize the FlightDeck Activation Hub, a mission defining internal SharePoint system used to operationalize behaviors, standards, and continuous improvement across the organization.
            </p>
            <p className="text-xl leading-relaxed text-white lg:text-2xl">
              The work began under real enterprise constraints—delayed procurement, government grade infrastructure, and zero room for disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="w-full bg-[#0a1628]">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-ge9x-gearbox.jpg"
            alt="GE9X Gearbox"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Context Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          Context
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          This was not a greenfield build
        </h2>
        <p className="dark:text-polar-400 max-w-3xl text-lg leading-relaxed text-gray-600">
          It was a live system, already in use, already politicized, and in the middle of a tenant migration.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-8 text-sm uppercase tracking-wider text-gray-500">
          Timeline Reality Check
        </p>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-2xl font-light text-gray-900 dark:text-white">March 28</p>
            <p className="dark:text-polar-400 text-gray-600">
              Initial alignment emails surfaced two blockers immediately—procurement and access. Hardware deployment and SharePoint permissions were gated behind a PO that had not yet cleared. Laptop delivery timelines were uncertain and could not be guaranteed before April.
            </p>
            <p className="dark:text-polar-400 mt-4 text-gray-600">
              Despite this, the business expectation was still an April 1 kickoff.
            </p>
          </div>
          <div>
            <p className="mb-4 text-2xl font-light text-gray-900 dark:text-white">April 1</p>
            <p className="dark:text-polar-400 text-gray-600">
              Fieldglass support was contacted to validate that no configuration or compliance issues would block onboarding once procurement cleared. This allowed the team to eliminate unknowns before access even existed.
            </p>
            <p className="dark:text-polar-400 mt-4 font-medium text-gray-900 dark:text-white">
              The result was a zero idle time ramp once systems unlocked.
            </p>
          </div>
        </div>
      </section>

      {/* What Existed Section */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          What Existed
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          The structure was strong. The experience was not.
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="dark:text-polar-400 text-lg leading-relaxed text-gray-600">
              GE Aerospace maintained a FlightDeck Activation Hub organized around three core behaviors: respect for people, continuous improvement, and customer driven execution.
            </p>
          </div>
          <div>
            <p className="dark:text-polar-400 text-lg leading-relaxed text-gray-600">
              The system housed eight FlightDeck fundamentals including standard work, daily and visual management, value stream management, operating cadences, action planning, problem solving, Five S, and flow and pull.
            </p>
          </div>
        </div>
        <div className="dark:border-polar-800 mt-12 border-t border-gray-200 pt-12">
          <p className="dark:text-polar-400 text-gray-600">
            Each fundamental had its own page with overview content, usage guidance, examples, templates, expert directories, and Smartsheets driven feedback loops.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="w-full bg-[#0a1628]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-cf6.jpg"
              alt="CF6 Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-choice.jpg"
              alt="GE Aerospace Innovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Constraint Stack */}
      <section className="w-full bg-[#0a1628] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          The Constraint Stack
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          Design had to work inside the cage
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
          This project ran directly into a non negotiable technical shift. GE Aerospace was migrating SharePoint into GCC High, Microsoft's government cloud, due to military relationships.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">Reduced feature set</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">Stripped visual capabilities</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">Security driven UI limitations</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6">
            <p className="text-white">Unknown migration timeline</p>
          </div>
          <div className="rounded-xl bg-white/5 p-6 md:col-span-2 lg:col-span-2">
            <p className="text-white">No parity with standard enterprise SharePoint</p>
          </div>
        </div>
        <p className="mt-8 text-gray-400">
          A test site had already been migrated with minimal visual change, signaling that cosmetic redesign alone would fail.
        </p>
      </section>

      {/* User Reality */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          User Reality
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          High risk, high complexity, zero margin for confusion
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-8">
            <p className="mb-2 font-medium text-gray-900 dark:text-white">FlightDeck Leaders</p>
            <p className="dark:text-polar-400 text-sm text-gray-600">Who lived in the system</p>
          </div>
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-8">
            <p className="mb-2 font-medium text-gray-900 dark:text-white">Unofficial FlightDeck Leaders</p>
            <p className="dark:text-polar-400 text-sm text-gray-600">Who inherited responsibility without training</p>
          </div>
          <div className="dark:bg-polar-900 rounded-xl bg-gray-100 p-8">
            <p className="mb-2 font-medium text-gray-900 dark:text-white">KPI Owners</p>
            <p className="dark:text-polar-400 text-sm text-gray-600">Operating at frontline and mid management levels</p>
          </div>
        </div>
        <p className="dark:text-polar-400 mt-8 text-gray-600">
          On top of that, the system needed to support external users including suppliers, customers, and consultants, with no permission model yet defined.
        </p>
      </section>

      {/* Full-width Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-masthead.jpg"
            alt="GE Aerospace Catalyst Engine"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* What We Did */}
      <section className="dark:bg-polar-950 w-full bg-white px-8 py-16 md:px-16 lg:px-24">
        <p className="dark:text-polar-500 mb-4 text-sm uppercase tracking-wider text-gray-500">
          What We Did
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          We focused on what could be designed independently of access
        </h2>
        <p className="dark:text-polar-400 mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
          Instead of waiting on procurement or migration clarity, the work was reframed around certainty.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Audited the full content model and fundamental structure</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Designed a reusable visual template system compatible with GCC High constraints</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Reworked information architecture to reduce clicks and cognitive load</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Prioritized an example and pattern repository over abstract guidance</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Planned a permission model that could flex once external access rules were defined</p>
          </div>
          <div className="dark:border-polar-800 border-l-2 border-gray-200 pl-6">
            <p className="dark:text-polar-300 text-gray-700">Scoped a technical audit to activate the moment migration timelines were confirmed</p>
          </div>
        </div>
        <div className="dark:border-polar-800 mt-12 border-t border-gray-200 pt-12">
          <p className="dark:text-polar-400 text-lg text-gray-600">
            Everything was built to survive the environment it would actually live in, not the one people wished they had.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="w-full bg-[#0a1628]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-ge9x.jpg"
              alt="GE9X Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-genx.jpg"
              alt="GEnx Engine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="w-full bg-[#0a1628] px-8 py-16 md:px-16 lg:px-24">
        <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
          Outcome
        </p>
        <h2 className="mb-8 max-w-4xl text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          By the time access unlocked, the team was not onboarding. They were executing.
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
          While access, hardware, and procurement worked their way through enterprise systems, the project advanced without losing a week.
        </p>
        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-gray-300">
          Rather than stall momentum, leadership alignment, staffing plans, and scope clarity were delivered upfront so procurement could move in parallel with strategy.
        </p>
      </section>

      {/* Closing Statement */}
      <section className="dark:bg-polar-900 w-full bg-gray-100 px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl leading-relaxed text-gray-900 md:text-3xl dark:text-white">
            This is what enterprise work actually looks like.
          </p>
          <p className="dark:text-polar-400 mt-6 text-lg text-gray-600">
            Constraints first. Clarity second. Design that survives reality.
          </p>
        </div>
      </section>

      {/* Full-width Closing Image */}
      <section className="w-full">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/work/uploads/2024/08/ge-aerospace-ge9x-gearbox.jpg"
            alt="GE9X Gearbox Engineering"
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
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Client</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">GE Aerospace</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Location</h3>
            <p className="dark:text-polar-400 text-sm text-gray-600">Cincinnati, OH</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Sector</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Aerospace &amp; Defense</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">Enterprise Software</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Team</h3>
            <div className="space-y-1">
              <p className="dark:text-polar-400 text-sm text-gray-600">Donny Smith</p>
              <p className="dark:text-polar-400 text-sm text-gray-600">Chris Johns</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
