'use client'

import { MerchantOfRecord } from '@/components/Landing/MOR'
import { Testimonials } from '@/components/Landing/Testimonials'
import { Adapters } from './Adapters'
import { Checkout } from './Checkout'
import { Events } from './Events'
import Features from './Features'
import { FeaturedMasthead } from './FeaturedMasthead'
import { FeaturedWork } from './FeaturedWork'
import { ImpactMetrics } from './ImpactMetrics'
import { Pricing } from './Pricing'
import { Section } from './Section'
import { Usage } from './Usage'
import { ViewWork } from './ViewWork'

export default function Page() {
  return (
    <div className="flex flex-col">
      <PageContent />
    </div>
  )
}

export const PageContent = () => {
  return (
    <>
      <FeaturedMasthead />
      <Section className="flex flex-col gap-y-32 pt-16 md:pt-24">
        <Features />
        <FeaturedWork />
        <Events />
        <Adapters />
        <Usage />
        <div
          className="flex flex-col items-center gap-y-12 text-center"
        >
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-6xl">"</h2>
            <h2 className="text-2xl leading-relaxed! md:text-4xl">
              Senior leaders at GE and GE Aerospace trust Bttr. to design and engineer systems that operate under real world constraints.
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
      <Section className="flex flex-col gap-y-24">
        <ImpactMetrics />
        <ViewWork />
      </Section>
    </>
  )
}
