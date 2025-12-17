'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  lowQualityPlaceholder?: boolean
}

export function OptimizedImage({
  lowQualityPlaceholder = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {lowQualityPlaceholder && !isLoaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />
      )}
      <Image
        {...props}
        className={twMerge(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

export function BlurImage({
  className,
  blurDataURL,
  ...props
}: ImageProps) {
  return (
    <Image
      {...props}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBBAEFAAAAAAAAAAAAAQIDBBEABRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgARAwQh/9oADAMBAAIRAxEAPwC9T27dpQk1yvHVjblIkcihmVePQ8E+dVftVBMcmziWSTBjYJH+cBfjHxpNYGnRbuZk4//Z'}
      className={className}
    />
  )
}
