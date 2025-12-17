import { PricingPage } from '@/components/Landing/resources/PricingPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engagement Models',
  description: 'Flexible engagement structures for every stage of your product',
  keywords:
    'engagement models, embedded team, project-based, advisory, consulting, digital product agency',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    images: [
      {
        url: '/assets/brand/bttr_og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/assets/brand/bttr_og.png',
        width: 1200,
        height: 630,
        alt: 'Bttr.',
      },
    ],
  },
}

export default function Page() {
  return <PricingPage />
}
