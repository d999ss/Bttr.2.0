import { CustomersPage } from '@/components/Landing/features/CustomersPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Compliance — Bttr.',
  description:
    'Regulatory-ready systems built for healthcare, finance, and other regulated environments.',
  keywords:
    'security, compliance, hipaa, regulated environments, healthcare software, fintech, enterprise security',
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
  return <CustomersPage />
}
