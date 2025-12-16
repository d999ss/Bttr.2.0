import { UsageBillingPage } from '@/components/Landing/features/UsageBillingPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scalable Solutions — Bttr.',
  description:
    'Systems designed to grow with your business. Built for scale from day one.',
  keywords:
    'scalable software, enterprise solutions, growth infrastructure, performance optimization',
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
  return <UsageBillingPage />
}
