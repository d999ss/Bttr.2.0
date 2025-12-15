'use client'

interface CaseStudySectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function CaseStudySectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: CaseStudySectionHeaderProps) {
  return (
    <section className="w-full px-8 py-16 md:px-16 lg:px-24">
      <div
        className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
      >
        {eyebrow && (
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-6 text-3xl font-light leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
