import { TeamBioPage } from '@/components/Landing/team/TeamBioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Kerr - Principal Designer | Bttr.',
  description:
    'Chris Kerr is a Principal Designer at Bttr., bringing deep expertise in product design and design systems to mission-critical digital products.',
  openGraph: {
    siteName: 'Bttr.',
    type: 'profile',
    title: 'Chris Kerr - Principal Designer | Bttr.',
    description:
      'Chris Kerr is a Principal Designer at Bttr., bringing deep expertise in product design and design systems to mission-critical digital products.',
    images: [
      {
        url: '/assets/team/chris.jpg',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [
      {
        url: '/assets/team/chris.jpg',
        width: 400,
        height: 400,
        alt: 'Chris Kerr',
      },
    ],
  },
}

const chris = {
  name: 'Chris Kerr',
  title: 'Principal Designer',
  image: '/assets/team/chris.png',
  bio: [
    'Chris Kerr is a Principal Designer at Bttr., where he leads design efforts on complex enterprise and consumer products across healthcare, aerospace and technology. With more than twenty years of experience, Chris works across branding, UX, UI, interaction, web and app design for organisations of all sizes including Google, YouTube, Ford, Disney, Oxfam, Cadbury, Allergan and GE.',
    'With a background in both visual design and user experience, Chris brings a holistic approach that balances aesthetics, functionality and business outcomes. He has a particular passion for design systems, scalable design solutions and prototyping. He enjoys bringing ideas to life through interactive prototypes that help teams test, refine and validate direction early in the process.',
    'Chris believes that the best digital products are created through close collaboration between design and engineering, and he thrives in environments where those boundaries blur. He enjoys working directly with clients, uncovering insights and solving problems together while staying hands on in the craft.',
    'Based in Ireland, Chris spends his free time hiking with his pug and exploring the countryside by bike.',
  ],
  linkedin: 'https://www.linkedin.com/in/chriskerrdesign/',
  email: 'chris@makebttr.com',
}

export default function Page() {
  return <TeamBioPage member={chris} />
}
