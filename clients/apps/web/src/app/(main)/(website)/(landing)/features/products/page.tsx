import { ProductsPage } from '@/components/Landing/features/ProductsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design & Strategy — Bttr.',
  description:
    'Research-driven design that translates complexity into clarity. Product strategy and design systems.',
  keywords:
    'product design, ux design, design systems, product strategy, user research, digital product agency',
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
  return <ProductsPage />
}
