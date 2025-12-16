'use client'

import { motion } from 'framer-motion'

const metrics = [
  { value: '99.99%', label: 'System Uptime', sublabel: 'Across all platforms' },
  { value: '50+', label: 'Enterprise Systems', sublabel: 'Delivered & operating' },
  { value: '10M+', label: 'End Users', sublabel: 'Served daily' },
  { value: '8+', label: 'Years', sublabel: 'Average client relationship' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const ImpactMetrics = () => {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <span className="dark:text-polar-500 text-lg text-gray-400">
          Proven Impact
        </span>
        <h2 className="max-w-2xl text-3xl text-pretty md:text-5xl md:leading-normal">
          Results that speak for themselves
        </h2>
      </div>
      <motion.div
        className="grid w-full grid-cols-2 gap-8 md:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            className="dark:bg-polar-900 flex flex-col items-center gap-y-2 rounded-2xl bg-white p-8 text-center"
            variants={itemVariants}
          >
            <span className="text-4xl font-bold tracking-tight text-[#D2A62C] md:text-5xl">
              {metric.value}
            </span>
            <span className="text-lg font-medium text-gray-900 dark:text-white">
              {metric.label}
            </span>
            <span className="dark:text-polar-500 text-sm text-gray-500">
              {metric.sublabel}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
