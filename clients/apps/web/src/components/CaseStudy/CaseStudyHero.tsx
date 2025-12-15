'use client'

import Image from 'next/image'

interface CaseStudyHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt?: string
}

export default function CaseStudyHero({
  title,
  subtitle,
  image,
  imageAlt = '',
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex min-h-screen items-end">
        <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
          <h1 className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">{title}</span>
            <span className="block opacity-90">{subtitle}</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
