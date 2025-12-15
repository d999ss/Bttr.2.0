import { MORPage } from '@/components/Landing/resources/MORPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lifecycle Ownership',
  description: 'Long-term partnership beyond project handoff',
  keywords:
    'lifecycle ownership, maintenance, long-term partnership, digital product agency, ongoing support',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    images: [
      {
        url: '/assets/brand/bttr_og.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/assets/brand/bttr_og.jpg',
        width: 1200,
        height: 630,
        alt: 'Bttr.',
      },
    ],
  },
}

export default function Page() {
  return <MORPage />
}
