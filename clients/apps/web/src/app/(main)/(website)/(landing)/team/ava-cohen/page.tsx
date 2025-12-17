import { TeamBioPage } from '@/components/Landing/team/TeamBioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ava Cohen - Chief of Staff | Bttr.',
  description:
    'Ava Cohen is Chief of Staff at Bttr., ensuring operational excellence and seamless client partnerships across all engagements.',
  openGraph: {
    siteName: 'Bttr.',
    type: 'profile',
    title: 'Ava Cohen - Chief of Staff | Bttr.',
    description:
      'Ava Cohen is Chief of Staff at Bttr., ensuring operational excellence and seamless client partnerships across all engagements.',
    images: [
      {
        url: '/assets/team/ava.jpg',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [
      {
        url: '/assets/team/ava.jpg',
        width: 400,
        height: 400,
        alt: 'Ava Cohen',
      },
    ],
  },
}

const ava = {
  name: 'Ava Cohen',
  title: 'Chief of Staff',
  image: '/assets/team/ava.png',
  bio: [
    'Ava Cohen serves as Chief of Staff at Bttr., where she oversees operations and ensures that every client engagement runs smoothly from kickoff to delivery.',
    'With a background in project management and business operations, Ava brings structure and clarity to complex, multi-stakeholder projects without sacrificing the creative energy that makes great work possible.',
    'She is passionate about building strong relationships with clients and team members alike, and believes that clear communication is the foundation of successful partnerships.',
    'Ava ensures that Bttr. delivers not just great design, but a great experience for everyone involved in the process.',
  ],
  linkedin: 'https://www.linkedin.com/in/avacohen/',
  email: 'ava@makebttr.com',
}

export default function Page() {
  return <TeamBioPage member={ava} />
}
