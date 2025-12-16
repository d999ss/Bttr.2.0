import { ClientHubPage } from '@/components/Landing/resources/ClientHubPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Hub',
  description: 'Your dedicated command center for complete project transparency. Monitor progress, track hours, view system status, and access all project resources in one place.',
  keywords:
    'client portal, project management, hours tracking, invoices, support tickets, system monitoring, project transparency',
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
  return <ClientHubPage />
}
