'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Metric {
  value: number
  suffix: string
  prefix?: string
  label: string
}

const metrics: Metric[] = [
  { value: 99.99, suffix: '%', label: 'System Uptime' },
  { value: 50, suffix: '+', label: 'Enterprise Systems' },
  { value: 10, suffix: 'M+', label: 'End Users' },
  { value: 8, suffix: '+', label: 'Year Avg. Relationship' },
]

const AnimatedNumber = ({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (value - startValue) * eased

      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  const formatted = value % 1 !== 0
    ? `${prefix}${displayValue.toFixed(2)}${suffix}`
    : `${prefix}${Math.floor(displayValue)}${suffix}`

  return <span ref={ref}>{formatted}</span>
}

export const ImpactMetrics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid w-full grid-cols-2 gap-12 md:grid-cols-4 md:gap-8"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col gap-y-2 text-center"
        >
          <span className="text-4xl font-light tracking-tight text-black md:text-5xl dark:text-white">
            <AnimatedNumber value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
          </span>
          <span className="dark:text-polar-500 text-sm text-gray-500">
            {metric.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
