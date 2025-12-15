import { WhyBttrPage } from '@/components/Landing/resources/WhyBttrPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Bttr is different',
  description: 'Bttr operates where complexity, regulation, and ambition intersect.',
  keywords:
    'digital product agency, enterprise software, regulated environments, mission critical, systems design, engineering',
  openGraph: {
    siteName: 'Bttr',
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
        alt: 'Bttr',
      },
    ],
  },
}

export default function Page() {
  return <WhyBttrPage />
}
