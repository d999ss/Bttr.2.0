import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact - Bttr.',
  description:
    "Let's build something extraordinary together. Get in touch to discuss your next digital product.",
  openGraph: {
    title: 'Contact - Bttr.',
    description:
      "Let's build something extraordinary together. Get in touch to discuss your next digital product.",
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a0a0a] px-8 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-400">
            Contact
          </p>
          <h1 className="text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s build something extraordinary together
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-medium text-gray-900">
                Get in touch
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Whether you&apos;re looking to transform your digital presence,
                build a new product, or explore a partnership, we&apos;d love to
                hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Email
                </h3>
                <a
                  href="mailto:donny@makebttr.com"
                  className="text-lg text-gray-900 hover:text-[#D2A62C]"
                >
                  donny@makebttr.com
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Location
                </h3>
                <p className="text-lg text-gray-900">
                  Los Angeles, CA
                  <br />
                  <span className="text-gray-600">Working globally</span>
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/makebttr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/makebttr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    X
                  </a>
                  <a
                    href="https://instagram.com/make_bttr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="flex flex-col gap-6">
            {/* Schedule a Call - Primary CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-[#D2A62C] to-[#E8C65C] p-8">
              <div className="mb-2 inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-black/70">
                Recommended
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">
                Schedule a Call
              </h3>
              <p className="mb-6 text-black/70">
                Book a 30-minute discovery call directly on our calendar.
              </p>
              <a
                href="https://calendly.com/donny-makebttr/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-sm font-medium text-white transition-colors hover:bg-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book Discovery Call
              </a>
              <p className="mt-3 text-center text-xs text-black/50">
                Most clients prefer this option
              </p>
            </div>

            {/* Email - Secondary CTA */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="mb-2 text-xl font-medium text-gray-900">
                Send a Message
              </h3>
              <p className="mb-6 text-gray-600">
                Prefer email? We respond within 24 hours.
              </p>
              <a
                href="mailto:donny@makebttr.com?subject=New%20Project%20Inquiry&body=Hi%20Bttr.%20team%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20project.%0A%0ACompany%3A%20%0AProject%20Overview%3A%20%0ATimeline%3A%20%0A%0AThanks!"
                className="inline-block w-full rounded-lg border-2 border-gray-900 py-3 text-center text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0a0a0a] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl leading-tight tracking-tight text-white md:text-4xl">
            Ready to make things better?
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            Explore our work and see how we&apos;ve helped organizations
            transform their digital experiences.
          </p>
          <Link
            href="/work"
            className="inline-block border border-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
          >
            View Our Work
          </Link>
        </div>
      </section>
    </main>
  )
}
