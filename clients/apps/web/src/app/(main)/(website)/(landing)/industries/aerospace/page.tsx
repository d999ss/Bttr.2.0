import { AerospacePage } from '@/components/Landing/industries/AerospacePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aerospace & Defense Software Development | Bttr.',
  description:
    'Enterprise software solutions for aerospace and defense. We design and build mission-critical systems for aviation, space, and defense organizations.',
  keywords:
    'aerospace software, defense software, aviation systems, mission-critical systems, FAA compliance, GE Aerospace',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    title: 'Aerospace & Defense Software Development | Bttr.',
    description:
      'Enterprise software solutions for aerospace and defense. We design and build mission-critical systems for aviation, space, and defense organizations.',
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
  return <AerospacePage />
}
