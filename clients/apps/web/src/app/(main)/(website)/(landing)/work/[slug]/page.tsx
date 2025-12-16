import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/data/caseStudies'
import { Section } from '@/components/Landing/Section'
import Button from '@polar-sh/ui/components/atoms/Button'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return { title: 'Not Found' }
  }

  return {
    title: `${study.title} - Bttr.`,
    description: study.description,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={study.thumbnail}
            alt={study.title}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="relative flex h-[80vh] items-end">
          <div className="w-full px-8 pb-16 md:px-16 lg:px-24">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/70">
              <Link href="/work" className="hover:text-white">
                Work
              </Link>{' '}
              / {study.title}
            </p>
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-white/80">
              {study.description}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <Section className="flex flex-col items-center gap-y-6 py-24 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-polar-500">
          Case Study
        </p>
        <h2 className="text-2xl leading-relaxed tracking-tight md:text-4xl">
          Full case study coming soon
        </h2>
        <p className="max-w-lg text-gray-500 dark:text-polar-500">
          We&apos;re currently updating this case study with detailed project
          information, process insights, and results. Check back soon for the
          complete story.
        </p>
        <Link href="/work">
          <Button
            variant="secondary"
            size="lg"
            className="mt-4 rounded-full"
          >
            View All Work
          </Button>
        </Link>
      </Section>
    </div>
  )
}

// Pages with dedicated static routes - exclude from dynamic generation
const staticPages = [
  'great-dane',
  'ikon-pass',
  'ge-brilliant-you',
  'juvederm',
  'botox-cosmetic',
  'ami',
  'tarform',
  'revaire',
  'air-company',
  'fleetpulse',
  'ge-aerospace',
  'tiger-biosciences',
  'alle',
  'alle-for-business',
  'alle-for-consumers',
  'ciitizen',
  'helix-homes',
  'advantage',
  'allergan-data-labs',
  'ross-j-barr',
  'spark',
  'ge-user-conference',
  'atom',
]

export async function generateStaticParams() {
  return caseStudies
    .filter((study) => !staticPages.includes(study.slug))
    .map((study) => ({
      slug: study.slug,
    }))
}
