import { IndustriesPage } from '@/components/Landing/industries/IndustriesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries | Bttr.',
  description:
    'We design and build digital products for aerospace, biotech, and medical companies. Deep industry expertise meets world-class product design.',
  keywords:
    'aerospace software, biotech software, healthcare software, medical software, enterprise software, regulated industries',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    title: 'Industries | Bttr.',
    description:
      'We design and build digital products for aerospace, biotech, and medical companies. Deep industry expertise meets world-class product design.',
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
  return <IndustriesPage />
}
