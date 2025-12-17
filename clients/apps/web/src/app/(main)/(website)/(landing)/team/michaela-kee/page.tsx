import { TeamBioPage } from '@/components/Landing/team/TeamBioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michaela Kee - Head of Projects | Bttr.',
  description:
    'Michaela Kee is Head of Projects at Bttr., ensuring seamless delivery of mission-critical digital products.',
  openGraph: {
    siteName: 'Bttr.',
    type: 'profile',
    title: 'Michaela Kee - Head of Projects | Bttr.',
    description:
      'Michaela Kee is Head of Projects at Bttr., ensuring seamless delivery of mission-critical digital products.',
    images: [
      {
        url: '/assets/team/michaela.png',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [
      {
        url: '/assets/team/michaela.png',
        width: 400,
        height: 400,
        alt: 'Michaela Kee',
      },
    ],
  },
}

const michaela = {
  name: 'Michaela Kee',
  title: 'Head of Projects',
  image: '/assets/team/michaela.png',
  bio: [
    'Michaela Kee is Head of Projects at Bttr., where she oversees the delivery of complex digital products for clients across healthcare, aerospace, and technology.',
    'With extensive experience in project management and client partnerships, Michaela ensures that every engagement runs smoothly from kickoff to launch, keeping teams aligned and projects on track.',
    'She excels at navigating complexity, balancing competing priorities, and creating the conditions for great work to happen.',
    'Michaela believes that successful projects are built on clear communication, mutual trust, and a shared commitment to excellence.',
  ],
  email: 'michaela@makebttr.com',
}

export default function Page() {
  return <TeamBioPage member={michaela} />
}
