'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'GE Aerospace', category: 'Aerospace & Defense' },
  { name: 'AbbVie', category: 'Pharmaceuticals' },
  { name: 'Allergan Aesthetics', category: 'Medical Devices' },
  { name: 'Alterra Mountain Co.', category: 'Hospitality' },
  { name: 'Tiger BioSciences', category: 'Life Sciences' },
  { name: 'Tarform', category: 'Electric Vehicles' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const ClientLogos = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-y-8 py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        className="dark:text-polar-500 text-sm uppercase tracking-widest text-gray-400"
        variants={itemVariants}
      >
        Trusted by industry leaders
      </motion.p>
      <motion.div
        className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
        variants={containerVariants}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="flex flex-col items-center gap-y-1 text-center"
            variants={itemVariants}
          >
            <span className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
              {client.name}
            </span>
            <span className="dark:text-polar-500 text-xs text-gray-400">
              {client.category}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
