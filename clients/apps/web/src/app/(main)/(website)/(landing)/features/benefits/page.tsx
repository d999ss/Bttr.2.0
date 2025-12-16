import { BenefitsPage } from '@/components/Landing/features/BenefitsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering — Bttr.',
  description:
    'Full-stack systems built for performance and longevity. Web platforms, cloud infrastructure, and integrations.',
  keywords:
    'software engineering, web development, cloud infrastructure, full-stack, platform development, digital product agency',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    images: [
      {
        url: '/assets/brand/bttr_og.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/assets/brand/bttr_og.webp',
        width: 1200,
        height: 630,
        alt: 'Bttr.',
      },
    ],
  },
}

export default function Page() {
  return <BenefitsPage />
}
