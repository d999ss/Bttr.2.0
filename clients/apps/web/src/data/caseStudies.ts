export interface CaseStudy {
  slug: string
  title: string
  description: string
  thumbnail: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ikon-pass',
    title: 'Ikon Pass',
    description: 'Redefining the ride with an ambitious digital transformation',
    thumbnail: '/assets/work/uploads/2025/04/CS_Inset-full-width-2.png',
    featured: true,
  },
  {
    slug: 'juvederm',
    title: 'JUVÉDERM',
    description: 'Enhancing engagement for a leading aesthetic brand',
    thumbnail: '/assets/work/uploads/2025/04/Thumbnail.jpg.webp',
  },
  {
    slug: 'botox-cosmetic',
    title: 'BOTOX Cosmetic',
    description: 'Strengthening product recognition and loyalty across a market leader',
    thumbnail: '/assets/work/uploads/2025/04/Featured-image-1920x1920.jpg.webp',
  },
  {
    slug: 'ami',
    title: 'AMI',
    description: 'Improving the user experience and product strategy for a learning platform.',
    thumbnail: '/assets/work/uploads/2025/03/20211133.jpg.webp',
  },
  {
    slug: 'tarform',
    title: 'Tarform',
    description: 'Luxury electric motorcycle configurator and mobile app',
    thumbnail: '/assets/work/uploads/2024/08/NIKED.png',
  },
  {
    slug: 'revaire',
    title: 'Revaire',
    description: 'A modern, luxurious identity.',
    thumbnail: '/assets/work/uploads/2024/08/SQ-Image-frame-4.jpg.webp',
  },
  {
    slug: 'air-company',
    title: 'Air Company',
    description: 'Shaping a startup around groundbreaking technology',
    thumbnail: '/assets/work/uploads/2023/09/AirCo-HS-1-1-1_00000.png.webp',
  },
  {
    slug: 'fleetpulse',
    title: 'FleetPulse',
    description: 'Smart-Trailer innovation, designed for a more efficient future',
    thumbnail: '/assets/work/uploads/2024/06/Fleetpulse_Thumb.jpg.webp',
  },
  {
    slug: 'ge-brilliant-you',
    title: 'GE Brilliant You',
    description: "Investing in GE's most valuable asset—their people",
    thumbnail: '/assets/work/uploads/2023/08/GE_wayfinding.jpg',
  },
  {
    slug: 'ge-aerospace',
    title: 'GE Aerospace',
    description: 'Enterprise asset management for jet engine maintenance',
    thumbnail: '/assets/work/uploads/2023/09/GE-O-HS-1-1-1_00000.png',
  },
]
