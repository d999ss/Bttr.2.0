'use client'

import { motion } from 'framer-motion'

const GEAerospaceLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 40" fill="currentColor">
    <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="20" y="26" textAnchor="middle" fontSize="18" fontWeight="bold" fontFamily="serif">GE</text>
    <text x="75" y="24" fontSize="11" fontFamily="sans-serif">Aerospace</text>
  </svg>
)

const AbbVieLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 40" fill="currentColor">
    <text x="0" y="28" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
      <tspan>abb</tspan>
      <tspan fill="#071D49">v</tspan>
      <tspan>ie</tspan>
    </text>
  </svg>
)

const AllerganLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 40" fill="currentColor">
    <text x="0" y="26" fontSize="16" fontWeight="500" fontFamily="sans-serif" letterSpacing="1">ALLERGAN</text>
    <text x="0" y="38" fontSize="10" fontFamily="sans-serif" letterSpacing="2">AESTHETICS</text>
  </svg>
)

const AlterraLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 130 40" fill="currentColor">
    <path d="M10 32 L20 8 L30 32 M14 24 L26 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="38" y="26" fontSize="14" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.5">ALTERRA</text>
    <text x="38" y="36" fontSize="8" fontFamily="sans-serif" letterSpacing="1">MOUNTAIN CO.</text>
  </svg>
)

const TigerBioLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 40" fill="currentColor">
    <path d="M8 12 Q12 8 16 12 L20 20 L24 12 Q28 8 32 12 L28 24 Q20 32 12 24 Z" fill="currentColor" />
    <text x="42" y="22" fontSize="13" fontWeight="600" fontFamily="sans-serif">TIGER</text>
    <text x="42" y="34" fontSize="9" fontFamily="sans-serif" letterSpacing="0.5">BIOSCIENCES</text>
  </svg>
)

const TarformLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 40" fill="currentColor">
    <rect x="0" y="14" width="24" height="3" rx="1" />
    <rect x="8" y="10" width="8" height="20" rx="1" />
    <text x="32" y="27" fontSize="16" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">TARFORM</text>
  </svg>
)

const clients = [
  { name: 'GE Aerospace', Logo: GEAerospaceLogo },
  { name: 'AbbVie', Logo: AbbVieLogo },
  { name: 'Allergan Aesthetics', Logo: AllerganLogo },
  { name: 'Alterra Mountain Co.', Logo: AlterraLogo },
  { name: 'Tiger BioSciences', Logo: TigerBioLogo },
  { name: 'Tarform', Logo: TarformLogo },
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
        className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 lg:grid-cols-6"
        variants={containerVariants}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <client.Logo className="h-10 w-auto text-gray-700 opacity-70 transition-opacity hover:opacity-100 dark:text-gray-300" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
