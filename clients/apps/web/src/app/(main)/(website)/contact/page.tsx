'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/Landing/Section'

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
      {/* Hero */}
      <div className="dark:bg-polar-950 relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-gray-950 px-8 py-32">
        {/* Subtle gradient orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#D2A62C]/20 via-[#D2A62C]/5 to-transparent blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D2A62C]/30 bg-[#D2A62C]/10 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D2A62C]" />
            <span className="text-sm text-[#D2A62C]">Booking Q2 2026</span>
          </motion.div>

          <h1 className="dark:text-polar-50 mb-8 text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            Let&apos;s talk.
          </h1>

          <p className="dark:text-polar-400 mx-auto mb-12 max-w-xl text-xl text-gray-400 md:text-2xl">
            15 minutes to see if we&apos;re the right fit.
          </p>

          <motion.a
            href="https://calendly.com/d999ss/15min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 rounded-full bg-[#D2A62C] px-8 py-4 text-lg font-medium text-black transition-all hover:bg-[#e0b432] hover:shadow-lg hover:shadow-[#D2A62C]/25"
          >
            <span>Book a call</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="dark:border-polar-700 h-12 w-6 rounded-full border border-gray-700 p-1"
          >
            <div className="dark:bg-polar-600 h-2 w-full rounded-full bg-gray-600" />
          </motion.div>
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

      {/* You'll speak with */}
      <div className="dark:bg-polar-900 w-full bg-gray-50">
        <Section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <p className="dark:text-polar-500 mb-8 text-sm uppercase tracking-widest text-gray-400">You&apos;ll speak with</p>
            <div className="mb-6 inline-block overflow-hidden rounded-full">
              <Image
                src="/assets/team/hiro.png"
                alt="Hiro Grant"
                width={120}
                height={120}
                className="h-28 w-28 object-cover"
              />
            </div>
            <h3 className="dark:text-polar-50 mb-2 text-2xl font-medium text-gray-900">Hiro Grant</h3>
            <p className="dark:text-polar-500 mb-4 text-gray-500">Commercial Lead</p>
            <p className="dark:text-polar-400 mx-auto max-w-md text-gray-600">
              10 years in enterprise software and regulated industries. He'll help you figure out if we're the right fit.
            </p>
          </motion.div>
        </Section>
      </div>

      {/* FAQ */}
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

      {/* Final CTA */}
      <div className="dark:bg-polar-950 w-full bg-gray-950">
        <Section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="dark:text-polar-50 mb-6 text-4xl font-medium text-white md:text-5xl">
              Ready?
            </h2>
            <p className="dark:text-polar-400 mb-10 text-xl text-gray-400">
              15 minutes. No pitch. Just conversation.
            </p>
            <a
              href="https://calendly.com/d999ss/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-[#D2A62C] transition-colors hover:text-white"
            >
              <span>Book your call</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="dark:text-polar-600 mt-16 flex flex-col items-center gap-2 text-gray-600">
              <p>Prefer email?</p>
              <a
                href="mailto:donny@makebttr.com"
                className="dark:text-polar-400 text-gray-400 transition-colors hover:text-white"
              >
                donny@makebttr.com
              </a>
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  )
}
