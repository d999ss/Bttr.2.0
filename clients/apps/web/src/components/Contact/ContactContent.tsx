'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      className="border-b border-gray-200 dark:border-polar-800"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-base text-gray-900 transition-colors group-hover:text-[#D2A62C] dark:text-polar-50">{question}</span>
        <span className={`ml-4 text-xl text-gray-300 transition-transform duration-300 dark:text-polar-500 ${isOpen ? 'rotate-45' : ''}`}>+</span>
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
            <p className="pb-4 text-sm leading-relaxed text-gray-500 dark:text-polar-400" style={{ textTransform: 'none', fontFamily: 'inherit', letterSpacing: 'normal' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface ContactContentProps {
  isModal?: boolean
}

export function ContactContent({ isModal = false }: ContactContentProps) {
  return (
    <div className={`flex flex-col ${isModal ? '' : ''}`}>
      {/* Hero */}
      <div className={`relative flex w-full flex-col items-center justify-center overflow-hidden bg-gray-950 dark:bg-polar-950 ${isModal ? 'px-6 py-16' : 'min-h-[80vh] px-8 py-32'}`}>
        {/* Subtle gradient orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#D2A62C]/20 via-[#D2A62C]/5 to-transparent blur-3xl" />

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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D2A62C]/30 bg-[#D2A62C]/10 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D2A62C]" />
            <span className="text-sm text-[#D2A62C]">Booking Q2 2026</span>
          </motion.div>

          <h1 className={`mb-6 font-medium leading-[1.1] tracking-tight text-white dark:text-polar-50 ${isModal ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl lg:text-8xl'}`}>
            Let&apos;s talk.
          </h1>

          <p className={`mx-auto mb-8 max-w-xl text-gray-400 dark:text-polar-400 ${isModal ? 'text-lg' : 'text-xl md:text-2xl'}`}>
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
      </div>

      {/* You'll speak with */}
      <div className="w-full bg-gray-50 dark:bg-polar-900">
        <div className={`mx-auto ${isModal ? 'px-6 py-12' : 'px-8 py-24'} max-w-4xl`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <p className="mb-6 text-sm uppercase tracking-widest text-gray-400 dark:text-polar-500">You&apos;ll speak with</p>
            <div className="mb-4 inline-block overflow-hidden rounded-full">
              <Image
                src="/assets/team/hiro.png"
                alt="Hiro Grant"
                width={100}
                height={100}
                className="h-24 w-24 object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-polar-50">Hiro Grant</h3>
            <p className="mb-3 text-sm text-gray-500 dark:text-polar-500" style={{ textTransform: 'uppercase' }}>Commercial Lead</p>
            <p className="mx-auto max-w-md text-gray-600 dark:text-polar-400" style={{ textTransform: 'none', fontFamily: 'inherit', letterSpacing: 'normal' }}>
              10 years in enterprise software and regulated industries. He'll help you figure out if we're the right fit.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <div className={`mx-auto w-full max-w-2xl ${isModal ? 'px-6 py-12' : 'px-8 py-24'}`}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm uppercase tracking-widest text-gray-400 dark:text-polar-500"
        >
          Common questions
        </motion.h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full bg-gray-950 dark:bg-polar-950">
        <div className={`mx-auto flex flex-col items-center text-center ${isModal ? 'px-6 py-12' : 'px-8 py-24 md:py-32'} max-w-4xl`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`mb-4 font-medium text-white dark:text-polar-50 ${isModal ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
              Ready?
            </h2>
            <p className="mb-8 text-lg text-gray-400 dark:text-polar-400">
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

            <div className="mt-12 flex flex-col items-center gap-2 text-gray-600 dark:text-polar-600">
              <p style={{ textTransform: 'none', fontFamily: 'inherit', letterSpacing: 'normal' }}>Prefer email?</p>
              <a
                href="mailto:donny@makebttr.com"
                className="text-gray-400 transition-colors hover:text-white dark:text-polar-400"
                style={{ textTransform: 'none', fontFamily: 'inherit', letterSpacing: 'normal' }}
              >
                donny@makebttr.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
