'use client'

import Image from 'next/image'

interface CaseStudyImageProps {
  src: string
  alt?: string
  fullWidth?: boolean
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto'
  priority?: boolean
}

export default function CaseStudyImage({
  src,
  alt = '',
  fullWidth = true,
  aspectRatio = '16/9',
  priority = false,
}: CaseStudyImageProps) {
  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    auto: '',
  }

  return (
    <section
      className={`w-full ${fullWidth ? '' : 'px-8 md:px-16 lg:px-24'}`}
    >
      <div
        className={`relative w-full overflow-hidden ${aspectClasses[aspectRatio]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      </div>
    </section>
  )
}
