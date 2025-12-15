'use client'

interface CaseStudySingleColumnProps {
  eyebrow?: string
  content: string
  caption?: string
  width?: 'standard' | 'narrow'
}

export default function CaseStudySingleColumn({
  eyebrow,
  content,
  caption,
  width = 'standard',
}: CaseStudySingleColumnProps) {
  return (
    <section className="w-full px-8 py-8 md:px-16 lg:px-24">
      <div className={`${width === 'narrow' ? 'max-w-2xl' : 'max-w-4xl'}`}>
        {eyebrow && (
          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">
            {eyebrow}
          </p>
        )}
        {caption && (
          <p className="mb-2 text-sm font-medium text-gray-900">{caption}</p>
        )}
        <p className="text-base leading-relaxed text-gray-600">{content}</p>
      </div>
    </section>
  )
}
