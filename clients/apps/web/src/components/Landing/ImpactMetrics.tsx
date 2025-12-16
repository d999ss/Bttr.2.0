'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

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

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) => {
    if (value % 1 !== 0) {
      return `${prefix}${current.toFixed(2)}${suffix}`
    }
    return `${prefix}${Math.floor(current)}${suffix}`
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
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
