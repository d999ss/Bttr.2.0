'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface InkTransitionProps {
  isActive: boolean
  onComplete?: () => void
}

const InkBlob = ({ delay, x, y, scale }: { delay: number; x: string; y: string; scale: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-black"
      style={{
        left: x,
        top: y,
        width: 100,
        height: 100,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, scale * 0.5, scale, scale * 1.5, scale * 2],
        opacity: [0, 0.8, 1, 1, 0.9],
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  )
}

export const InkTransition = ({ isActive, onComplete }: InkTransitionProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        onComplete?.()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background fill */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, times: [0, 0.5, 1] }}
          />

          {/* Ink blobs spreading like ink in water */}
          <InkBlob delay={0} x="50%" y="50%" scale={40} />
          <InkBlob delay={0.05} x="30%" y="40%" scale={35} />
          <InkBlob delay={0.1} x="70%" y="60%" scale={38} />
          <InkBlob delay={0.08} x="45%" y="30%" scale={32} />
          <InkBlob delay={0.12} x="55%" y="70%" scale={36} />
          <InkBlob delay={0.06} x="20%" y="55%" scale={30} />
          <InkBlob delay={0.15} x="80%" y="45%" scale={34} />
          <InkBlob delay={0.03} x="40%" y="65%" scale={28} />
          <InkBlob delay={0.18} x="60%" y="35%" scale={26} />

          {/* Organic blob edges */}
          <svg className="absolute inset-0 h-full w-full" style={{ filter: 'url(#goo)' }}>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
