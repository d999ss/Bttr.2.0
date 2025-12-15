'use client'

interface CaseStudyIntroProps {
  breadcrumb: string
  sectors: string[]
  client: string
  year: string
  disciplines: string[]
  description: string[]
}

export default function CaseStudyIntro({
  breadcrumb,
  sectors,
  client,
  year,
  disciplines,
  description,
}: CaseStudyIntroProps) {
  return (
    <section className="w-full px-8 py-16 md:px-16 lg:px-24">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          <a href="/work" className="hover:text-gray-700">
            Work
          </a>{' '}
          / {breadcrumb}
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium text-gray-900">Sectors</h3>
            <div className="space-y-1 text-gray-600">
              {sectors.map((sector, i) => (
                <p key={i}>{sector}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-medium text-gray-900">Client</h3>
            <p className="text-gray-600">{client}</p>
          </div>

          <div>
            <h3 className="mb-2 font-medium text-gray-900">Year</h3>
            <p className="text-gray-600">{year}</p>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-2 font-medium text-gray-900">Disciplines</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
              {disciplines.map((discipline, i) => (
                <p key={i}>{discipline}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {description.map((paragraph, i) => (
            <p key={i} className="text-xl leading-relaxed text-gray-900 lg:text-2xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
