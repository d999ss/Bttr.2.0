import Image from 'next/image'
import { Link } from '../Link'
import { Section } from '../Section'

const team = [
  {
    name: 'Donny Smith',
    title: 'Founder & CEO',
    image: '/assets/team/donny.jpg',
  },
  {
    name: 'Ava Cohen',
    title: 'Chief of Staff',
    image: '/assets/team/ava.jpg',
  },
]

export const CompanySection = ({ active }: { active: boolean }) => {
  return (
    <Section
      active={active}
      header={{ index: '01', name: 'Company' }}
      title="Designed to Adapt. Engineered to Win."
      context={
        <div className="flex flex-col gap-y-8">
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
      <div className="flex flex-col gap-y-2">
        <Link href="https://www.linkedin.com/company/makebttr/" target="_blank" prefetch>
          Follow us on LinkedIn →
        </Link>
        <Link href="https://www.instagram.com/make_bttr/" target="_blank" prefetch>
          Follow us on Instagram →
        </Link>
      </div>
    </Section>
  )
}

interface ProfileProps {
  name: string
  title: string
  image: string
}

const Profile = ({ name, title, image }: ProfileProps) => {
  return (
    <div className="relative flex flex-col gap-y-4">
      <Image
        className="aspect-square size-64 flex-1 shrink-0"
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div className="flex flex-col text-left">
        <h1 className="text-xs">{name}</h1>
        <h1 className="text-polar-500 text-xs">{title}</h1>
      </div>
    </div>
  )
}
