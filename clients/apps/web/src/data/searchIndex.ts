import { caseStudies } from './caseStudies'

export interface SearchItem {
  id: string
  type: 'case-study' | 'page' | 'team' | 'industry' | 'resource'
  title: string
  description: string
  url: string
  tags?: string[]
  highlight?: string
  keywords?: string[]
}

// Case studies from existing data
const caseStudyItems: SearchItem[] = caseStudies.map((study) => ({
  id: `case-study-${study.slug}`,
  type: 'case-study',
  title: study.title,
  description: study.description,
  url: `/work/${study.slug}`,
  tags: study.tags,
  highlight: study.resultHighlight,
  keywords: [study.title.toLowerCase(), ...study.tags.map((t) => t.toLowerCase())],
}))

// Main pages
const pageItems: SearchItem[] = [
  {
    id: 'page-home',
    type: 'page',
    title: 'Home',
    description: 'Bttr - Designed to Adapt. Engineered to Win.',
    url: '/',
    keywords: ['home', 'bttr', 'agency', 'digital', 'product'],
  },
  {
    id: 'page-work',
    type: 'page',
    title: 'Our Work',
    description: 'Explore our portfolio of digital products and experiences',
    url: '/work',
    keywords: ['work', 'portfolio', 'projects', 'case studies'],
  },
  {
    id: 'page-company',
    type: 'page',
    title: 'Company',
    description: 'Learn about our vision, culture, and the team behind Bttr',
    url: '/company',
    keywords: ['company', 'about', 'vision', 'culture', 'team'],
  },
  {
    id: 'page-careers',
    type: 'page',
    title: 'Careers',
    description: 'Join our team and help build the future of digital products',
    url: '/careers',
    keywords: ['careers', 'jobs', 'hiring', 'work with us', 'employment'],
  },
  {
    id: 'page-contact',
    type: 'page',
    title: 'Contact',
    description: 'Get in touch with our team to discuss your project',
    url: '/contact',
    keywords: ['contact', 'get in touch', 'reach out', 'email', 'talk'],
  },
  {
    id: 'page-design-strategy',
    type: 'page',
    title: 'Design & Strategy',
    description: 'Product strategy and design systems that scale',
    url: '/features/products',
    keywords: ['design', 'strategy', 'product', 'ux', 'ui', 'design systems'],
  },
  {
    id: 'page-engineering',
    type: 'page',
    title: 'Engineering',
    description: 'Production-grade platforms built for performance',
    url: '/features/benefits',
    keywords: ['engineering', 'development', 'code', 'platform', 'technical'],
  },
  {
    id: 'page-security',
    type: 'page',
    title: 'Security & Compliance',
    description: 'Regulatory-ready systems for healthcare, finance, and more',
    url: '/features/customers',
    keywords: ['security', 'compliance', 'hipaa', 'regulatory', 'privacy'],
  },
  {
    id: 'page-case-studies',
    type: 'page',
    title: 'Case Studies',
    description: 'Deep dives into our most impactful projects',
    url: '/features/analytics',
    keywords: ['case studies', 'projects', 'results', 'impact'],
  },
  {
    id: 'page-engagement',
    type: 'page',
    title: 'Engagement Models',
    description: 'Flexible ways to work with our team',
    url: '/features/finance',
    keywords: ['engagement', 'pricing', 'models', 'partnership', 'retainer'],
  },
  {
    id: 'page-process',
    type: 'page',
    title: 'Our Process',
    description: 'How we turn ideas into exceptional digital products',
    url: '/features/usage-billing',
    keywords: ['process', 'methodology', 'workflow', 'approach'],
  },
  {
    id: 'page-privacy',
    type: 'page',
    title: 'Privacy Policy',
    description: 'How we handle and protect your data',
    url: '/legal/privacy',
    keywords: ['privacy', 'policy', 'data', 'gdpr'],
  },
  {
    id: 'page-terms',
    type: 'page',
    title: 'Terms of Service',
    description: 'Terms and conditions for using our services',
    url: '/legal/terms',
    keywords: ['terms', 'service', 'conditions', 'legal'],
  },
]

// Resource pages
const resourceItems: SearchItem[] = [
  {
    id: 'resource-why',
    type: 'resource',
    title: 'Why Bttr',
    description: 'What makes us different and how we approach every project',
    url: '/resources/why',
    keywords: ['why', 'approach', 'difference', 'philosophy'],
  },
  {
    id: 'resource-pricing',
    type: 'resource',
    title: 'Pricing & Engagement',
    description: 'Transparent pricing and flexible engagement models',
    url: '/resources/pricing',
    keywords: ['pricing', 'cost', 'engagement', 'budget', 'investment'],
  },
  {
    id: 'resource-client-hub',
    type: 'resource',
    title: 'Client Hub',
    description: 'Your project command center for collaboration',
    url: '/resources/client-hub',
    keywords: ['client', 'hub', 'portal', 'dashboard', 'collaboration'],
  },
  {
    id: 'resource-lifecycle',
    type: 'resource',
    title: 'Lifecycle Ownership',
    description: 'Long-term system stewardship and ongoing support',
    url: '/resources/merchant-of-record',
    keywords: ['lifecycle', 'ownership', 'support', 'maintenance', 'stewardship'],
  },
]

// Industry pages
const industryItems: SearchItem[] = [
  {
    id: 'industry-aerospace',
    type: 'industry',
    title: 'Aerospace & Defense',
    description: 'Mission-critical systems for aviation and defense',
    url: '/industries/aerospace',
    keywords: ['aerospace', 'defense', 'aviation', 'military', 'ge', 'jets'],
  },
  {
    id: 'industry-biotech',
    type: 'industry',
    title: 'Biotechnology',
    description: 'Research and clinical platforms for biotech innovators',
    url: '/industries/biotech',
    keywords: ['biotech', 'biotechnology', 'research', 'clinical', 'lab', 'science'],
  },
  {
    id: 'industry-medical',
    type: 'industry',
    title: 'Medical & Healthcare',
    description: 'Patient and provider solutions for healthcare',
    url: '/industries/medical',
    keywords: ['medical', 'healthcare', 'health', 'patient', 'provider', 'hipaa'],
  },
]

// Team members
const teamItems: SearchItem[] = [
  {
    id: 'team-donny-smith',
    type: 'team',
    title: 'Donny Smith',
    description: 'Founder & Creative Director',
    url: '/team/donny-smith',
    keywords: ['donny', 'smith', 'founder', 'creative', 'director'],
  },
  {
    id: 'team-chris-kerr',
    type: 'team',
    title: 'Chris Kerr',
    description: 'Partner & Technology Lead',
    url: '/team/chris-kerr',
    keywords: ['chris', 'kerr', 'partner', 'technology', 'engineering'],
  },
  {
    id: 'team-ava-cohen',
    type: 'team',
    title: 'Ava Cohen',
    description: 'Design Director',
    url: '/team/ava-cohen',
    keywords: ['ava', 'cohen', 'design', 'director'],
  },
  {
    id: 'team-hiro-grant',
    type: 'team',
    title: 'Hiro Grant',
    description: 'Engineering Lead',
    url: '/team/hiro-grant',
    keywords: ['hiro', 'grant', 'engineering', 'lead', 'developer'],
  },
  {
    id: 'team-ken-leung',
    type: 'team',
    title: 'Ken Leung',
    description: 'Strategy Director',
    url: '/team/ken-leung',
    keywords: ['ken', 'leung', 'strategy', 'director'],
  },
  {
    id: 'team-michaela-kee',
    type: 'team',
    title: 'Michaela Kee',
    description: 'Project Director',
    url: '/team/michaela-kee',
    keywords: ['michaela', 'kee', 'project', 'director', 'management'],
  },
]

// Combined search index
export const searchIndex: SearchItem[] = [
  ...pageItems,
  ...caseStudyItems,
  ...resourceItems,
  ...industryItems,
  ...teamItems,
]

// Search function with fuzzy matching
export function searchSite(query: string): SearchItem[] {
  if (!query.trim()) return []

  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean)

  const scored = searchIndex.map((item) => {
    let score = 0
    const titleLower = item.title.toLowerCase()
    const descLower = item.description.toLowerCase()
    const keywordsStr = (item.keywords || []).join(' ')
    const tagsStr = (item.tags || []).join(' ').toLowerCase()

    for (const term of searchTerms) {
      // Exact title match (highest priority)
      if (titleLower === term) score += 100
      // Title starts with term
      else if (titleLower.startsWith(term)) score += 50
      // Title contains term
      else if (titleLower.includes(term)) score += 30
      // Keywords match
      if (keywordsStr.includes(term)) score += 25
      // Tags match
      if (tagsStr.includes(term)) score += 20
      // Description contains term
      if (descLower.includes(term)) score += 10
      // Highlight contains term
      if (item.highlight?.toLowerCase().includes(term)) score += 15
    }

    // Boost by type priority
    const typeBoost: Record<string, number> = {
      page: 5,
      'case-study': 4,
      resource: 3,
      industry: 2,
      team: 1,
    }
    score += typeBoost[item.type] || 0

    return { item, score }
  })

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(({ item }) => item)
}

// Get type label for display
export function getTypeLabel(type: SearchItem['type']): string {
  const labels: Record<string, string> = {
    page: 'Pages',
    'case-study': 'Work',
    resource: 'Resources',
    industry: 'Industries',
    team: 'Team',
  }
  return labels[type] || type
}
