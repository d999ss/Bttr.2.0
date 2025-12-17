'use client'

import Image from 'next/image'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'

interface ContactContentProps {
  isModal?: boolean
}

export function ContactContent({ isModal = false }: ContactContentProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-8 p-8 md:gap-12 md:p-12">
      <div className="flex flex-col gap-y-6 md:gap-y-8">
        <BttrLogotype variant="icon" size={60} />
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-2xl text-black dark:text-white">
            Let&apos;s talk.
          </h1>
          <p className="text-base text-gray-500 dark:text-polar-400 md:text-lg">
            15 minutes to see if we&apos;re the right fit.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-5 md:gap-y-6">
        {/* Availability badge */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#D2A62C]" />
          <span className="text-sm text-gray-500 dark:text-polar-400">Booking Q2 2026</span>
        </div>

        {/* You'll speak with */}
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 dark:border-polar-700">
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
            <p className="text-sm text-gray-500 dark:text-polar-500">Commercial Lead</p>
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
          <div className="h-px flex-1 border-t border-gray-200 dark:border-polar-700" />
          <span className="text-sm text-gray-400 dark:text-polar-500">or</span>
          <div className="h-px flex-1 border-t border-gray-200 dark:border-polar-700" />
        </div>

        {/* Email option */}
        <a
          href="mailto:hello@makebttr.com"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50 dark:border-polar-600 dark:bg-polar-700 dark:text-white dark:hover:bg-polar-600"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send an Email
        </a>
      </div>

      <div className="text-center text-xs text-gray-400 dark:text-polar-500">
        No pitch. No pressure. Just an honest conversation about your project.
      </div>
    </div>
  )
}
