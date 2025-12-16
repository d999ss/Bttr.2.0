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
          <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-gray-50 p-12">
              <h3 className="mb-4 text-2xl font-medium text-gray-900">
                Start a conversation
              </h3>
              <p className="mb-8 text-lg text-gray-600">
                Tell us about your project and we&apos;ll get back to you within
                24 hours.
              </p>
              <a
                href="mailto:donny@makebttr.com?subject=New%20Project%20Inquiry&body=Hi%20Bttr.%20team%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20project.%0A%0ACompany%3A%20%0AProject%20Overview%3A%20%0ATimeline%3A%20%0A%0AThanks!"
                className="inline-block w-full bg-[#0a0a0a] py-4 text-center text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#D2A62C]"
              >
                Send Us an Email
              </a>
              <p className="mt-4 text-center text-sm text-gray-500">
                Or email us directly at{' '}
                <a
                  href="mailto:donny@makebttr.com"
                  className="text-gray-900 hover:text-[#D2A62C]"
                >
                  donny@makebttr.com
                </a>
              </p>
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
