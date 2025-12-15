'use client'

import Image from 'next/image'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  alt?: string
  vimeoId?: string
}

interface CaseStudyMediaColumnsProps {
  items: MediaItem[]
  gap?: boolean
}

export default function CaseStudyMediaColumns({
  items,
  gap = true,
}: CaseStudyMediaColumnsProps) {
  return (
    <section className={`w-full ${gap ? 'px-4 md:px-8' : ''}`}>
      <div
        className={`grid gap-4 md:gap-6 ${
          items.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : items.length === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : 'grid-cols-1'
        }`}
      >
        {items.map((item, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : item.vimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&loop=1&muted=1`}
                className="h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
