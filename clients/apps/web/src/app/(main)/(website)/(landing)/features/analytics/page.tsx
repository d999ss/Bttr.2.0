import { AnalyticsPage } from '@/components/Landing/features/AnalyticsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Bttr.',
  description:
    'See how we help organizations build mission-critical digital products.',
  keywords:
    'case studies, portfolio, client work, digital products, success stories, enterprise software',
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
  return <AnalyticsPage />
}
