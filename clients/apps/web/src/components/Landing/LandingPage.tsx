'use client'

import { Hero } from '@/components/Landing/Hero/Hero'
import { MerchantOfRecord } from '@/components/Landing/MOR'
import { Testimonials } from '@/components/Landing/Testimonials'
import useIsMobile from '@/utils/mobile'
import { Stream } from '@cloudflare/stream-react'
import Button from '@polar-sh/ui/components/atoms/Button'
import Link from 'next/link'
import GetStartedButton from '../Auth/GetStartedButton'
import { Adapters } from './Adapters'
import { Checkout } from './Checkout'
import { Events } from './Events'
import Features from './Features'
import { Pricing } from './Pricing'
import { Section } from './Section'
import { Usage } from './Usage'

export default function Page() {
  return (
    <div className="flex flex-col">
      <PageContent />
    </div>
  )
}

export const PageContent = () => {
  const { isMobile } = useIsMobile()

  return (
    <>
      <Section className="flex flex-col gap-y-32 py-0 md:py-0">
        <Hero
          title="Designed to Adapt. Engineered to Win."
          description="We design, build, and operate mission critical digital products for organizations where failure is not an option."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link
            href="/resources/why"
            prefetch
            className="dark:text-polar-400 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <Button
              variant="secondary"
              size="lg"
              className="dark:bg-polar-800 rounded-full border-none bg-white"
            >
              Why Bttr
            </Button>
          </Link>
        </Hero>
        <Features />
        {isMobile ? null : (
          <div className="dark:border-polar-700 relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 md:rounded-3xl">
            <Stream
              src="8fb79c2cb066f3d9e982ad5ad3eb9fc4"
              letterboxColor="black"
              autoplay
              muted
              loop
            />
          </div>
        )}
        <Events />
        <Adapters />
        <Usage />
        <div
          className="flex flex-col items-center gap-y-12 text-center"
        >
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-6xl">"</h2>
            <h2 className="text-2xl leading-relaxed! md:text-4xl">
              Senior leaders at GE and GE Aerospace trust Bttr to design and engineer systems that operate under real world constraints.
            </h2>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col gap-y-24">
        <Checkout />
        <MerchantOfRecord />
        <Testimonials />
      </Section>
      <Section className="flex flex-col gap-y-24">
        <Pricing />
      </Section>
    </>
  )
}
