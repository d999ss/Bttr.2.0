import { TeamBioPage } from '@/components/Landing/team/TeamBioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ken Leung - CTO | Bttr.',
  description:
    'Ken Leung is CTO at Bttr., leading engineering strategy and technical architecture for mission-critical digital products.',
  openGraph: {
    siteName: 'Bttr.',
    type: 'profile',
    title: 'Ken Leung - CTO | Bttr.',
    description:
      'Ken Leung is CTO at Bttr., leading engineering strategy and technical architecture for mission-critical digital products.',
    images: [
      {
        url: '/assets/team/ken.png',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [
      {
        url: '/assets/team/ken.png',
        width: 400,
        height: 400,
        alt: 'Ken Leung',
      },
    ],
  },
}

const ken = {
  name: 'Ken Leung',
  title: 'CTO',
  image: '/assets/team/ken.png',
  bio: [
    'Ken Leung is CTO at Bttr., where he leads engineering strategy and technical architecture for mission-critical digital products across aerospace, healthcare, and technology.',
    'With deep expertise in scalable systems, cloud infrastructure, and modern development practices, Ken ensures that every product Bttr. builds is robust, performant, and maintainable.',
    'He has a track record of building and leading high-performing engineering teams, establishing technical standards, and delivering complex systems that operate at scale.',
    'Ken believes that great technology should be invisible to users—enabling seamless experiences while providing the reliability and security that enterprise clients demand.',
  ],
  linkedin: 'https://www.linkedin.com/in/kenleung/',
  email: 'ken@makebttr.com',
}

export default function Page() {
  return <TeamBioPage member={ken} />
}
