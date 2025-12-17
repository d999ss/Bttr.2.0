'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const clientLogos = [
  { name: 'GE Aerospace', src: '/assets/landing/logos/ge.svg' },
  { name: 'Allergan', src: '/assets/landing/logos/allergan.svg' },
  { name: 'Ikon Pass', src: '/assets/landing/logos/ikon.svg' },
  { name: 'Tiger BioSciences', src: '/assets/landing/logos/tiger.svg' },
]

const faqs = [
  {
    question: 'What does the discovery call cover?',
    answer:
      "We'll discuss your current challenges, goals, and timeline. This is a two-way conversation to determine if there's a good fit. No sales pitch—just an honest assessment of whether we can help.",
  },
  {
    question: 'What are your rates?',
    answer:
      'We work on a project basis with fees typically ranging from $150K to $500K+ depending on scope. We can discuss budget alignment on our call.',
  },
  {
    question: 'How long do projects typically take?',
    answer:
      'Most engagements run 4-8 months from kickoff to launch. We maintain deep focus by limiting ourselves to 2-3 concurrent clients.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      "Our model works best for growth-stage companies and enterprises with established product-market fit. If you're pre-Series A, we're probably not the right partner yet.",
  },
  {
    question: 'What happens after the call?',
    answer:
      "If there's mutual interest, we'll schedule a deeper discovery session and prepare a proposal within 2 weeks. No obligation, no pressure.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a0a0a] px-8 py-24 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D2A62C]/20 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D2A62C]" />
            <span className="text-sm text-[#D2A62C]">Currently Booking Q2 2026</span>
          </div>
          <h1 className="mb-6 text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Start a conversation
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            30 minutes to explore whether we&apos;re the right partner for your next initiative.
            No pitch, no pressure—just an honest conversation.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="w-full border-b border-gray-100 bg-white px-8 py-8 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <span className="text-sm text-gray-400">Trusted by teams at</span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="relative h-8 w-24 opacity-60 grayscale transition-opacity hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white px-8 py-16 md:px-16 md:py-24 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-5">
          {/* Left Column - CTA */}
          <div className="lg:col-span-3">
            {/* Primary CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#D2A62C] to-[#E8C65C] p-8 md:p-10">
              <h2 className="mb-2 text-2xl font-bold text-black md:text-3xl">
                Schedule a Discovery Call
              </h2>
              <p className="mb-8 text-black/70">
                Book a 30-minute call to discuss your project and see if there&apos;s a fit.
              </p>

              <a
                href="https://calendly.com/donny-makebttr/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-base font-medium text-white transition-colors hover:bg-gray-900"
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
                Book Your Call
              </a>

              {/* What to Expect */}
              <div className="rounded-xl bg-black/10 p-6">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-black/70">
                  What we&apos;ll cover
                </h3>
                <ul className="space-y-3">
                  {[
                    'Your current challenges and goals',
                    'Timeline and budget alignment',
                    'Whether there\'s a fit (honest assessment)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black/80">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-black/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <svg
                className="mb-4 h-8 w-8 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 text-lg text-gray-900">
                &ldquo;Bttr have been an essential part of All&#275;&apos;s success and business transformation—their vision and expertise continues driving progress.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-medium text-gray-900">Tory Brady</p>
                  <p className="text-sm text-gray-500">CTO, Allergan Aesthetics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8 lg:col-span-2">
            {/* You'll Speak With */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">
                You&apos;ll speak with
              </h3>
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/assets/team/donny.jpg"
                    alt="Donny Smith"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Donny Smith</p>
                  <p className="mb-2 text-sm text-gray-500">Founder & Principal</p>
                  <p className="text-sm text-gray-600">
                    15+ years building digital products for GE, Allergan, and growth-stage ventures.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Prefer email?
                </h3>
                <a
                  href="mailto:donny@makebttr.com?subject=New%20Project%20Inquiry"
                  className="text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-[#D2A62C] hover:decoration-[#D2A62C]"
                >
                  donny@makebttr.com
                </a>
                <p className="mt-1 text-sm text-gray-500">We respond within 24 hours</p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Location
                </h3>
                <p className="text-gray-900">
                  Los Angeles, CA
                </p>
                <p className="text-sm text-gray-500">Working with teams globally</p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Follow us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/makebttr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/makebttr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full border-t border-gray-100 bg-gray-50 px-8 py-16 md:px-16 md:py-24 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-medium text-gray-900">
            Common questions
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-[#0a0a0a] px-8 py-16 md:px-16 md:py-24 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl leading-tight tracking-tight text-white md:text-3xl">
            Still exploring?
          </h2>
          <p className="mb-8 text-gray-400">
            See how we&apos;ve helped organizations like yours transform their digital presence.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#D2A62C] transition-colors hover:text-white"
          >
            <span>View case studies</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
