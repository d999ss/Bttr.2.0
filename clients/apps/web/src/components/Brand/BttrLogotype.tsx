'use client'

import { twMerge } from 'tailwind-merge'

export const BttrLogotype = ({
  variant = 'icon',
  size,
  className,
}: {
  variant?: 'icon' | 'logotype'
  size?: number
  className?: string
}) => {
  const defaultSize = variant === 'icon' ? 42 : 100

  return (
    <div
      className={twMerge(
        'flex items-center font-bold tracking-tight text-black dark:text-white',
        className,
      )}
      style={{
        fontSize: size ? size * 0.5 : defaultSize * 0.5,
      }}
    >
      {variant === 'icon' ? (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D2A62C] text-xl font-bold text-black">
          B
        </span>
      ) : (
        <span>Bttr</span>
      )}
    </div>
  )
}

export default BttrLogotype
