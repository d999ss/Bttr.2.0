import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import { Section } from '@/components/Landing/Section'

export const metadata: Metadata = {
  title: 'Work - Bttr.',
  description:
    "View our case studies and learn more about the clients we're helping design a better future.",
  openGraph: {
    title: 'Work - Bttr.',
    description:
      "View our case studies and learn more about the clients we're helping design a better future.",
    images: ['/assets/brand/bttr_og.jpg'],
  },
}

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-16 py-8 md:py-16">
        {/* Testimonial */}
        <blockquote className="flex flex-col items-center text-center">
          <p className="text-6xl">"</p>
          <p className="text-2xl leading-relaxed tracking-tight text-balance md:text-4xl">
            Partnering with the Bttr. team has been both exciting and inspiring
          </p>
          <cite className="mt-6 not-italic">
            <span className="font-medium text-gray-900 dark:text-white">Ryan Schwartz</span>
            <span className="ml-2 text-gray-500 dark:text-polar-500">
              Mobile Product Lead, Alterra Mountain Company
            </span>
          </cite>
        </blockquote>

        {/* Case Studies Grid */}
        <div className="flex flex-col gap-y-8">
          <div className="border-b border-gray-200 pb-4 dark:border-polar-700">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-polar-500">
              Latest Case Studies
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-polar-800">
                  <Image
                    src={study.thumbnail}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="text-gray-500 dark:text-polar-500">{study.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
