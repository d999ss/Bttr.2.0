import Avatar from '@polar-sh/ui/components/atoms/Avatar'
import Image from 'next/image'
import Link from 'next/link'

export const testimonials = [
  {
    link: '/work/alle',
    name: 'Tory Brady',
    company: 'CTO, Allergan Aesthetics',
    verified: true,
    avatar: '/assets/landing/testamonials/rauch.jpg',
    text: (
      <p>
        &ldquo;Bttr have been an essential part of Allē&apos;s success and business transformation—their vision and expertise continues driving progress.&rdquo;
      </p>
    ),
  },
  {
    link: '/work/ge-aerospace',
    name: 'GE Aerospace',
    company: 'Enterprise Aviation',
    verified: true,
    avatar: '/assets/landing/testamonials/steven.jpg',
    text: (
      <p>
        &ldquo;Senior leaders at GE and GE Aerospace trust Bttr. to design and engineer systems that operate under real world constraints.&rdquo;
      </p>
    ),
  },
  {
    link: '/work/tiger-biosciences',
    name: 'Tiger BioSciences',
    company: 'Regenerative Medicine',
    verified: true,
    avatar: '/assets/landing/testamonials/mitchell.jpg',
    text: (
      <p>
        &ldquo;The new platform has transformed how we communicate with healthcare professionals. It&apos;s not just a website—it&apos;s a tool that helps our sales team close deals.&rdquo;
      </p>
    ),
  },
]

interface TestamonialProps {
  name: string
  company: string
  avatar: string
  text: React.ReactNode
  link: string
  verified?: boolean
}

export const Testamonial = ({
  name,
  company,
  avatar,
  text,
  link,
}: TestamonialProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="dark:bg-polar-900 dark:border-polar-800 dark:hover:bg-polar-800 flex h-full flex-col justify-between gap-x-4 gap-y-12 rounded-2xl border border-transparent bg-white p-8 transition-colors hover:bg-white"
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Avatar
            name={name}
            avatar_url={avatar}
            className="h-12 w-12"
            width={64}
            height={64}
            loading="lazy"
            CustomImageComponent={Image}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="dark:text-polar-50 flex flex-col gap-y-4 text-lg text-gray-950">
            {text}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="dark:text-polar-600 mb-4 text-gray-400">—</p>
        <div className="flex flex-row items-center gap-x-2">
          <span>{name}</span>
        </div>
        <span className="dark:text-polar-500 text-gray-500">{company}</span>
      </div>
    </Link>
  )
}

export const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 md:gap-y-24 md:py-12">
      <div className="flex flex-col items-center gap-y-8">
        <span className="dark:text-polar-500 text-lg text-gray-400">
          Testimonials
        </span>
        <h1 className="w-fit max-w-2xl text-center text-3xl text-pretty md:text-5xl md:leading-normal">
          Why teams trust Bttr.
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Testamonial key={`testimonial-${index}`} {...testimonial} />
        ))}
      </div>
    </div>
  )
}
