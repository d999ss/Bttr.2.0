'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Metric {
  value: number
  suffix: string
  prefix?: string
  label: string
  sublabel: string
}

const metrics: Metric[] = [
  { value: 99.99, suffix: '%', label: 'System Uptime', sublabel: 'Across all platforms' },
  { value: 50, suffix: '+', label: 'Enterprise Systems', sublabel: 'Delivered & operating' },
  { value: 10, suffix: 'M+', label: 'End Users', sublabel: 'Served daily' },
  { value: 8, suffix: '+', label: 'Years', sublabel: 'Average client relationship' },
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

const MetricCard = ({ metric, index }: { metric: Metric; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
    >
      <div className="dark:bg-polar-900 dark:hover:bg-polar-800 relative flex flex-col items-center gap-y-4 rounded-2xl bg-white p-10 transition-all duration-500 hover:translate-y-[-4px]">
        <span className="relative text-5xl font-light tracking-tight text-black md:text-6xl dark:text-white">
          <AnimatedNumber value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
        </span>
        <div className="flex flex-col items-center gap-y-1 text-center">
          <span className="text-sm font-medium text-black dark:text-white">
            {metric.label}
          </span>
          <span className="dark:text-polar-500 text-sm text-gray-500">
            {metric.sublabel}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export const ImpactMetrics = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 md:gap-y-24 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-y-8"
      >
        <span className="dark:text-polar-500 text-lg text-gray-400">
          Proven Impact
        </span>
        <h2 className="w-fit max-w-2xl text-center text-3xl text-pretty md:text-5xl md:leading-normal">
          Results that speak for themselves
        </h2>
      </motion.div>

      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </div>
    </div>
  )
}
