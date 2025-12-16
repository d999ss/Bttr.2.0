'use client'

import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import Button from '@polar-sh/ui/components/atoms/Button'
import Link from 'next/link'

export const UrgencyBanner = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 rounded-3xl bg-gradient-to-r from-[#D2A62C] to-[#E8C65C] p-8 text-center md:p-12">
      <div className="flex flex-col items-center gap-y-4">
        <span className="rounded-full bg-black/10 px-4 py-1 text-sm font-medium text-black/80">
          Limited Q1 2025 Availability
        </span>
        <h2 className="max-w-2xl text-2xl font-bold text-black md:text-4xl">
          We partner with 2-3 new clients per quarter
        </h2>
        <p className="max-w-xl text-lg text-black/70">
          Our model is built on deep engagement, not volume. If you are evaluating partners for a critical initiative, let us talk now.
        </p>
      </div>
      <Link href="/contact">
        <Button
          size="lg"
          className="rounded-full bg-black text-white hover:bg-gray-900"
          wrapperClassNames="flex flex-row items-center gap-x-2"
        >
          <span>Schedule a Conversation</span>
          <ArrowOutwardOutlined fontSize="small" />
        </Button>
      </Link>
    </div>
  )
}
