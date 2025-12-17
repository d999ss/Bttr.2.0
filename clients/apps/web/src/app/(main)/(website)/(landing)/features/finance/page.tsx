import { FinancePage } from '@/components/Landing/features/FinancePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance & Operations — Bttr.',
  description:
    'Transparent project management with clear milestones, budget tracking, and operational excellence.',
  keywords:
    'project management, operations, budget tracking, milestones, transparent pricing',
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
  return <FinancePage />
}
