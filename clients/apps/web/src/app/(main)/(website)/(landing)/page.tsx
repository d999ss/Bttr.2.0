import { Metadata } from 'next'
import LandingPage from '../../../../components/Landing/LandingPage'

export const metadata: Metadata = {
  title: 'Bttr. — Designed to Adapt. Engineered to Win.',
  description: 'We design, build, and operate mission critical digital products for organizations where failure is not an option.',
  keywords:
    'digital products, product design, engineering, enterprise software, regulated environments, mission critical, systems design',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    images: [
      {
        url: 'https://www.makebttr.com/assets/brand/bttr_og.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.makebttr.com/assets/brand/bttr_og.webp',
        width: 1200,
        height: 630,
        alt: 'Bttr.',
      },
    ],
  },
}

export default function Page() {
  return <LandingPage />
}
