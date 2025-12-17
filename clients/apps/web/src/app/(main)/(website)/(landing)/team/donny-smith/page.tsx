import { TeamBioPage } from '@/components/Landing/team/TeamBioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donny Smith - ECD, Founder | Bttr.',
  description:
    'Donny Smith is the Executive Creative Director and Founder of Bttr., a digital product agency that partners with ambitious teams to design and build mission-critical products.',
  openGraph: {
    siteName: 'Bttr.',
    type: 'profile',
    title: 'Donny Smith - ECD, Founder | Bttr.',
    description:
      'Donny Smith is the Executive Creative Director and Founder of Bttr., a digital product agency that partners with ambitious teams to design and build mission-critical products.',
    images: [
      {
        url: '/assets/team/donny.jpg',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [
      {
        url: '/assets/team/donny.jpg',
        width: 400,
        height: 400,
        alt: 'Donny Smith',
      },
    ],
  },
}

const donny = {
  name: 'Donny Smith',
  title: 'ECD, Founder',
  image: '/assets/team/donny.png',
  bio: [
    'Donny Smith is the Executive Creative Director and Founder of Bttr. With over 15 years of experience in digital product design, he has led creative teams at some of the world\'s most innovative companies.',
    'Before founding Bttr., Donny held senior design leadership roles where he built and scaled design organizations, established design systems, and delivered products used by millions of people worldwide.',
    'His work spans aerospace, healthcare, biotech, and consumer technology—always focused on solving complex problems with elegant, user-centered solutions.',
    'Donny believes that great design is not just about aesthetics, but about creating products that genuinely improve people\'s lives and help businesses achieve their goals.',
  ],
  linkedin: 'https://www.linkedin.com/in/donnysmith/',
  email: 'donny@makebttr.com',
}

export default function Page() {
  return <TeamBioPage member={donny} />
}
