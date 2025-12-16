'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

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

      {/* Contact Form Section */}
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

          {/* Right Column - Form */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-lg bg-gray-50 p-12">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-medium text-gray-900">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 outline-none transition-colors focus:border-[#D2A62C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 outline-none transition-colors focus:border-[#D2A62C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 outline-none transition-colors focus:border-[#D2A62C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none border-b border-gray-300 bg-transparent py-3 text-gray-900 outline-none transition-colors focus:border-[#D2A62C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a0a0a] py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#D2A62C]"
                >
                  Send Message
                </button>
              </form>
            )}
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
