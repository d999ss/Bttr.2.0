import { BiotechPage } from '@/components/Landing/industries/BiotechPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biotech Software Development | Bttr.',
  description:
    'Digital product design and development for biotechnology companies. We build platforms for research, clinical operations, and scientific communication.',
  keywords:
    'biotech software, life sciences software, FDA compliance, HIPAA compliant, research platforms, clinical trials',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    title: 'Biotech Software Development | Bttr.',
    description:
      'Digital product design and development for biotechnology companies. We build platforms for research, clinical operations, and scientific communication.',
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
  return <BiotechPage />
}
