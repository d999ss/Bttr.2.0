import { TeamBioPage } from '@/components/Landing/team/TeamBioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hiro Grant - Commercial Lead | Bttr.',
  description:
    'Hiro Grant is Commercial Lead at Bttr., driving business development and client partnerships for mission-critical digital products.',
  openGraph: {
    siteName: 'Bttr.',
    type: 'profile',
    title: 'Hiro Grant - Commercial Lead | Bttr.',
    description:
      'Hiro Grant is Commercial Lead at Bttr., driving business development and client partnerships for mission-critical digital products.',
    images: [
      {
        url: '/assets/team/hiro.png',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [
      {
        url: '/assets/team/hiro.png',
        width: 400,
        height: 400,
        alt: 'Hiro Grant',
      },
    ],
  },
}

const hiro = {
  name: 'Hiro Grant',
  title: 'Commercial Lead',
  image: '/assets/team/hiro.png',
  bio: [
    'Hiro Grant is Commercial Lead at Bttr., where he drives business development and cultivates client partnerships across aerospace, healthcare, and technology.',
    'With a deep understanding of both the business and technical sides of digital product development, Hiro connects organizations with the solutions they need to achieve their goals.',
    'He excels at building long-term relationships, understanding client challenges, and aligning Bttr.\'s capabilities with strategic opportunities.',
    'Hiro believes that the best partnerships are built on trust, transparency, and a shared commitment to delivering exceptional results.',
  ],
  email: 'hiro@makebttr.com',
}

export default function Page() {
  return <TeamBioPage member={hiro} />
}
