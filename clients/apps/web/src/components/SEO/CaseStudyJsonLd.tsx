import { CaseStudy } from '@/data/caseStudies'

interface CaseStudyJsonLdProps {
  caseStudy: CaseStudy
  description?: string
  datePublished?: string
  images?: string[]
}

export function CaseStudyJsonLd({
  caseStudy,
  description,
  datePublished = '2024-01-01',
  images = [],
}: CaseStudyJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${caseStudy.title} - Case Study`,
    description: description || caseStudy.description,
    image: images.length > 0 ? images : [`https://makebttr.com${caseStudy.thumbnail}`],
    datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Bttr.',
      url: 'https://makebttr.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bttr.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://makebttr.com/assets/brand/bttr_og.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://makebttr.com/work/${caseStudy.slug}`,
    },
    keywords: caseStudy.tags.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bttr.',
    description:
      'We design, build, and operate mission critical digital products for organizations where failure is not an option.',
    url: 'https://makebttr.com',
    logo: 'https://makebttr.com/assets/brand/bttr_og.png',
    sameAs: [
      'https://linkedin.com/company/makebttr',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://makebttr.com/contact',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bttr.',
    url: 'https://makebttr.com',
    description:
      'We design, build, and operate mission critical digital products for organizations where failure is not an option.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://makebttr.com/work?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
