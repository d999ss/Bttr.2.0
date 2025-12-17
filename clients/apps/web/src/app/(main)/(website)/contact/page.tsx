'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/Landing/Section'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'

const faqs = [
  {
    question: 'What does the call cover?',
    answer:
      "Your challenges, goals, and timeline. We'll determine fit together—no pitch, just an honest conversation.",
  },
  {
    question: 'What are your rates?',
    answer:
      'Projects typically range from $150K to $500K+ depending on scope. We can discuss alignment on our call.',
  },
  {
    question: 'How long do projects take?',
    answer:
      'Most engagements run 4-8 months. We maintain focus by limiting ourselves to 2-3 clients at a time.',
  },
  {
    question: 'What happens after?',
    answer:
      "If there's mutual interest, we'll prepare a proposal within two weeks. No obligation.",
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="dark:border-polar-800 border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-6 text-left"
      >
        <span className="dark:text-polar-50 text-lg text-gray-900 transition-colors group-hover:text-[#D2A62C]">{question}</span>
        <span className={`dark:text-polar-500 ml-4 text-2xl text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="dark:text-polar-400 pb-6 leading-relaxed text-gray-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero with Card - matching login page style */}
      <div className="dark:bg-polar-950 flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="dark:bg-polar-900 flex w-full max-w-md flex-col justify-between gap-12 rounded-4xl bg-white p-12 shadow-sm dark:shadow-none"
        >
          <div className="flex flex-col gap-y-8">
            <BttrLogotype variant="icon" size={60} />
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl text-black dark:text-white">
                Let&apos;s talk.
              </h1>
              <p className="dark:text-polar-400 text-lg text-gray-500">
                15 minutes to see if we&apos;re the right fit.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            {/* Availability badge */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D2A62C]" />
              <span className="dark:text-polar-400 text-sm text-gray-500">Booking Q2 2026</span>
            </div>

            {/* You'll speak with */}
            <div className="dark:border-polar-700 flex items-center gap-4 rounded-2xl border border-gray-100 p-4">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/assets/team/hiro.png"
                  alt="Hiro Grant"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-black dark:text-white">Hiro Grant</p>
                <p className="dark:text-polar-500 text-sm text-gray-500">Commercial Lead</p>
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="https://calendly.com/d999ss/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D2A62C] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>

            <div className="flex items-center gap-4">
              <div className="dark:border-polar-700 h-px flex-1 border-t border-gray-200" />
              <span className="dark:text-polar-500 text-sm text-gray-400">or</span>
              <div className="dark:border-polar-700 h-px flex-1 border-t border-gray-200" />
            </div>

            {/* Email option */}
            <a
              href="mailto:hello@makebttr.com"
              className="dark:bg-polar-700 dark:hover:bg-polar-600 dark:border-polar-600 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50 dark:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>

          <div className="dark:text-polar-500 text-center text-xs text-gray-400">
            No pitch. No pressure. Just an honest conversation about your project.
          </div>
        </motion.div>
      </div>

      {/* Social Proof */}
      <Section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="dark:text-polar-500 mb-12 text-center text-sm uppercase tracking-widest text-gray-400">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {['GE Aerospace', 'Allergan', 'Ikon Pass', 'Tiger Bio'].map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="dark:text-polar-500 dark:hover:text-polar-50 text-xl font-medium text-gray-300 transition-colors hover:text-gray-900"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Testimonial */}
      <Section className="py-24 md:py-32">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <span className="dark:text-polar-800 absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-gray-100">&ldquo;</span>
          <p className="dark:text-polar-50 relative z-10 text-2xl leading-relaxed text-gray-900 md:text-3xl lg:text-4xl">
            Bttr have been an essential part of Allē&apos;s success and business transformation—their vision and expertise continues driving progress.
          </p>
          <footer className="mt-10 flex flex-col items-center gap-4">
            <div className="dark:bg-polar-800 h-16 w-16 overflow-hidden rounded-full bg-gray-100">
              <Image
                src="/assets/landing/testamonials/rauch.jpg"
                alt="Tory Brady"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="dark:text-polar-50 font-medium text-gray-900">Tory Brady</p>
              <p className="dark:text-polar-500 text-gray-500">CTO, Allergan Aesthetics</p>
            </div>
          </footer>
        </motion.blockquote>
      </Section>

      {/* FAQ */}
      <div className="dark:bg-polar-900 w-full bg-gray-50">
        <Section className="py-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="dark:text-polar-500 mb-12 text-center text-sm uppercase tracking-widest text-gray-400"
          >
            Common questions
          </motion.h2>
          <div className="mx-auto max-w-2xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </Section>
      </div>

      {/* Final CTA */}
      <Section className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="dark:text-polar-50 mb-6 text-4xl font-medium text-gray-900 md:text-5xl">
            Ready to start?
          </h2>
          <p className="dark:text-polar-400 mb-10 max-w-md text-xl text-gray-500">
            15 minutes. No pitch. Just conversation.
          </p>
          <a
            href="https://calendly.com/d999ss/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#D2A62C] px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            <span>Book your call</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Section>
    </div>
  )
}
