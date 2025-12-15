'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

interface BeaAnimationProps {
  size?: number
  className?: string
}

export const BeaAnimation = ({ size = 70, className }: BeaAnimationProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    fetch('/assets/lottie/bea-emotion.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err))
  }, [])

  if (!animationData) {
    return <div style={{ width: size, height: size }} />
  }

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        filter: 'invert(1)',
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default BeaAnimation
