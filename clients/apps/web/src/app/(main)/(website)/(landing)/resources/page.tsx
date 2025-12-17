import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Learn more about how Bttr. approaches digital product development',
  keywords:
    'digital product agency, case studies, engagement models, lifecycle ownership, enterprise software',
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

const resourceLinks = [
  {
    title: 'Why Bttr.',
    description:
      'Learn what makes Bttr. different from traditional agencies',
    href: '/resources/why',
  },
  {
    title: 'Engagement Models',
    href: '/resources/pricing',
    description: 'Flexible ways to work with us',
  },
  {
    title: 'Lifecycle Ownership',
    href: '/resources/merchant-of-record',
    description: 'Long-term partnership beyond project handoff',
  },
]

const capabilityLinks = [
  {
    title: 'Design & Strategy',
    href: '/features/products',
    description: 'Research-driven design and product strategy',
  },
  {
    title: 'Engineering',
    href: '/features/benefits',
    description: 'Full-stack systems built for performance',
  },
  {
    title: 'Security & Compliance',
    href: '/features/customers',
    description: 'Regulatory-ready systems for sensitive environments',
  },
]

export default function Resources() {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full max-w-6xl flex-col gap-y-8 md:gap-y-16">
      <div className="flex flex-col gap-y-8">
        <h3 className="text-3xl md:text-5xl">Resources</h3>
      </div>
      <div className="flex flex-col gap-y-8">
        <h3 className="text-2xl">Approach</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {resourceLinks.map((link) => (
            <Link
              key={link.title + link.description}
              className="dark:hover:bg-polar-900 dark:border-polar-700 flex w-full cursor-pointer flex-col gap-6 border border-gray-300 p-6 transition-colors duration-200 hover:bg-gray-100"
              href={link.href}
            >
              <ArrowOutwardOutlined fontSize="inherit" />
              <div className="flex flex-col gap-2">
                <h3 className="font-mono text-xl">{link.title}</h3>
                <p className="dark:text-polar-500 font-sm text-gray-500">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <h3 className="text-2xl">Capabilities</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilityLinks.map((link) => (
            <Link
              key={link.title + link.description}
              className="dark:hover:bg-polar-900 dark:border-polar-700 flex w-full cursor-pointer flex-col gap-6 border border-gray-300 p-6 transition-colors duration-200 hover:bg-gray-100"
              href={link.href}
            >
              <ArrowOutwardOutlined fontSize="inherit" />
              <div className="flex flex-col gap-2">
                <h3 className="font-mono text-xl">{link.title}</h3>
                <p className="dark:text-polar-500 font-sm text-gray-500">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
