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
      <div className="relative flex flex-col items-center gap-y-4 rounded-3xl border border-gray-200/50 bg-white/70 p-10 backdrop-blur-sm transition-all duration-500 hover:border-gray-300/80 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-gray-700 dark:hover:bg-gray-900/80 dark:hover:shadow-none">
        {/* Subtle gradient orb */}
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#D2A62C]/10 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative text-5xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
          <AnimatedNumber value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
        </span>
        <div className="flex flex-col items-center gap-y-1 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-900 dark:text-white">
            {metric.label}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-500">
            {metric.sublabel}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export const ImpactMetrics = () => {
  return (
    <div className="flex flex-col items-center gap-y-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-y-4 text-center"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
          Proven Impact
        </span>
        <h2 className="max-w-xl text-3xl font-light tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Results that speak for themselves
        </h2>
      </motion.div>

      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </div>
    </div>
  )
}
