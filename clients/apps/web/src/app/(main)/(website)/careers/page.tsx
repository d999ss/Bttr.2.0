import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Bttr.',
  description: 'Join our team and help build extraordinary digital experiences.',
  openGraph: {
    title: 'Careers - Bttr.',
    description: 'Join our team and help build extraordinary digital experiences.',
  },
}

const openPositions = [
  {
    title: 'Senior Product Designer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Design',
  },
  {
    title: 'Senior Full-Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
  },
  {
    title: 'UX Researcher',
    location: 'Remote',
    type: 'Full-time',
    department: 'Design',
  },
]

const values = [
  {
    title: 'Craft',
    description:
      'We obsess over the details. Every pixel, every interaction, every line of code matters.',
  },
  {
    title: 'Ownership',
    description:
      'We take responsibility for outcomes, not just outputs. We see projects through from vision to reality.',
  },
  {
    title: 'Collaboration',
    description:
      'We believe the best work happens when diverse perspectives come together toward a shared goal.',
  },
  {
    title: 'Growth',
    description:
      "We're constantly learning, pushing boundaries, and helping each other level up.",
  },
]

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a0a0a] px-8 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
            Careers
          </p>
          <h1 className="mb-6 text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Help us build what&apos;s next
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-gray-400">
            We&apos;re a team of designers, engineers, and strategists who are
            passionate about creating digital products that matter.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
            Our Values
          </p>
          <h2 className="mb-16 max-w-3xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl">
            What drives us every day
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="mb-3 text-xl font-medium text-gray-900">
                  {value.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="w-full bg-gray-50 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
            Open Positions
          </p>
          <h2 className="mb-16 max-w-3xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl">
            Join our growing team
          </h2>

          {openPositions.length > 0 ? (
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <a
                  key={index}
                  href={`mailto:donny@makebttr.com?subject=Application: ${position.title}`}
                  className="group flex flex-col justify-between gap-4 border-b border-gray-200 py-6 transition-colors hover:border-[#D2A62C] md:flex-row md:items-center"
                >
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#D2A62C]">
                      {position.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{position.department}</p>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="rounded-full bg-gray-200 px-3 py-1">
                      {position.location}
                    </span>
                    <span className="rounded-full bg-gray-200 px-3 py-1">
                      {position.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-white p-12 text-center">
              <h3 className="mb-2 text-xl font-medium text-gray-900">
                No open positions right now
              </h3>
              <p className="text-gray-600">
                But we&apos;re always looking for exceptional talent. Send us
                your resume and we&apos;ll keep you in mind.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
            Benefits
          </p>
          <h2 className="mb-16 max-w-3xl text-3xl leading-tight tracking-tight text-gray-900 md:text-4xl">
            We take care of our team
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Remote First
              </h3>
              <p className="text-gray-600">
                Work from anywhere. We believe great work can happen from any
                location.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Flexible Hours
              </h3>
              <p className="text-gray-600">
                We care about results, not when you clock in. Work when
                you&apos;re at your best.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Health & Wellness
              </h3>
              <p className="text-gray-600">
                Comprehensive health coverage and wellness stipend to keep you
                at your best.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Learning Budget
              </h3>
              <p className="text-gray-600">
                Annual budget for courses, conferences, and books to fuel your
                growth.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Equipment
              </h3>
              <p className="text-gray-600">
                Top-of-the-line equipment and home office setup allowance.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Unlimited PTO
              </h3>
              <p className="text-gray-600">
                Take the time you need to recharge. We trust you to manage your
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0a0a0a] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl leading-tight tracking-tight text-white md:text-4xl">
            Don&apos;t see the right role?
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            We&apos;re always interested in meeting talented people. Send us
            your portfolio and let&apos;s talk.
          </p>
          <a
            href="mailto:donny@makebttr.com"
            className="inline-block border border-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  )
}
