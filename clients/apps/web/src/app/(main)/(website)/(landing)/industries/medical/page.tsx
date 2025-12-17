import { MedicalPage } from '@/components/Landing/industries/MedicalPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical & Healthcare Software Development | Bttr.',
  description:
    'Digital product design for healthcare and medical companies. We build patient engagement platforms, provider tools, and enterprise health systems.',
  keywords:
    'healthcare software, medical software, patient engagement, HIPAA compliant, healthcare platforms, Allergan Aesthetics',
  openGraph: {
    siteName: 'Bttr.',
    type: 'website',
    title: 'Medical & Healthcare Software Development | Bttr.',
    description:
      'Digital product design for healthcare and medical companies. We build patient engagement platforms, provider tools, and enterprise health systems.',
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
  return <MedicalPage />
}
