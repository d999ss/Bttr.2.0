import Image from 'next/image'
import NextLink from 'next/link'
import { Link } from '../Link'
import { Section } from '../Section'

const team = [
  {
    name: 'Donny Smith',
    title: 'ECD, Founder',
    image: '/assets/team/donny.png',
    slug: 'donny-smith',
  },
  {
    name: 'Ken Leung',
    title: 'CTO',
    image: '/assets/team/ken.png',
    slug: 'ken-leung',
  },
  {
    name: 'Michaela Kee',
    title: 'Head of Projects',
    image: '/assets/team/michaela.png',
    slug: 'michaela-kee',
  },
  {
    name: 'Chris Kerr',
    title: 'Principal Designer',
    image: '/assets/team/chris.png',
    slug: 'chris-kerr',
  },
  {
    name: 'Ava Cohen',
    title: 'Chief of Staff',
    image: '/assets/team/ava.png',
    slug: 'ava-cohen',
  },
  {
    name: 'Hiro Grant',
    title: 'Commercial Lead',
    image: '/assets/team/hiro.png',
    slug: 'hiro-grant',
  },
]

const brands = [
  'General Electric',
  'GE Aerospace',
  'GE Vernova',
  'Alterra Mountain Company',
  'Ikon Pass',
  'Allergan Aesthetics',
  'Allergan Data Labs',
  'BOTOX Cosmetic',
  'JUVÉDERM',
  'Allē',
  'Tiger BioSciences',
  'Tarform',
  'Air Company',
  'Ciitizen',
  'Helix Homes',
  'Revaire',
  'AMI',
  'FleetPulse',
  'Atom Bank',
  'Spark',
  'Ross J Barr',
  'Advantage',
]

export const CompanySection = ({ active }: { active: boolean }) => {
  return (
    <Section
      active={active}
      header={{ index: '01', name: 'Company' }}
      title="Designed to Adapt. Engineered to Win."
      context={
        <div className="flex flex-col gap-y-4">
          <h3 className="text-polar-400 text-xs uppercase tracking-wider">
            Leadership Team
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {team.map((profile) => (
              <Profile key={profile.name} {...profile} />
            ))}
          </div>
        </div>
      }
    >
      <p>
        Bttr. is a digital product agency that partners with ambitious teams to
        design, build, and operate mission-critical digital products. We work
        with organizations where failure is not an option.
      </p>
      <p>
        From enterprise leaders like GE and Alterra Mountain Company to
        innovative startups, we bring decades of experience in product strategy,
        design systems, and production-grade engineering.
      </p>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-polar-400 text-xs uppercase tracking-wider">
            Brands We've Worked With
          </h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span
                key={brand}
                className="bg-polar-800 text-polar-300 rounded-full px-3 py-1 text-xs"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Link href="https://www.linkedin.com/company/makebttr/" target="_blank" prefetch>
            Follow us on LinkedIn →
          </Link>
          <Link href="https://www.instagram.com/make_bttr/" target="_blank" prefetch>
            Follow us on Instagram →
          </Link>
        </div>
      </div>
    </Section>
  )
}

interface ProfileProps {
  name: string
  title: string
  image: string
  slug: string
}

const Profile = ({ name, title, image, slug }: ProfileProps) => {
  return (
    <NextLink
      href={`/team/${slug}`}
      className="group relative flex flex-col gap-y-4 transition-opacity hover:opacity-80"
    >
      <Image
        className="aspect-square size-32 flex-1 shrink-0 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div className="flex flex-col text-center">
        <h1 className="text-xs">{name}</h1>
        <h1 className="text-polar-500 text-xs">{title}</h1>
      </div>
    </NextLink>
  )
}
