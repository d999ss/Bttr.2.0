'use client'

import { motion } from 'framer-motion'

const GEAerospaceLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 48" fill="currentColor">
    <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="24" y="30" textAnchor="middle" fontSize="20" fontWeight="600" fontFamily="Georgia, serif">GE</text>
    <text x="90" y="28" fontSize="13" fontWeight="300" fontFamily="system-ui" letterSpacing="0.5">Aerospace</text>
  </svg>
)

const AbbVieLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 110 48" fill="currentColor">
    <text x="0" y="32" fontSize="28" fontWeight="700" fontFamily="system-ui" letterSpacing="-1">
      abbvie
    </text>
  </svg>
)

const AllerganLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 48" fill="currentColor">
    <text x="0" y="28" fontSize="18" fontWeight="300" fontFamily="system-ui" letterSpacing="3">ALLERGAN</text>
    <text x="0" y="42" fontSize="9" fontWeight="400" fontFamily="system-ui" letterSpacing="4" opacity="0.7">AESTHETICS</text>
  </svg>
)

const AlterraLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 48" fill="currentColor">
    <polygon points="16,40 28,8 40,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="32" x2="36" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <text x="52" y="28" fontSize="15" fontWeight="500" fontFamily="system-ui" letterSpacing="2">ALTERRA</text>
    <text x="52" y="40" fontSize="8" fontWeight="300" fontFamily="system-ui" letterSpacing="1" opacity="0.7">MOUNTAIN CO.</text>
  </svg>
)

const TigerBioLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 48" fill="currentColor">
    <path d="M6 16 L12 8 L18 16 L24 8 L30 16 L24 28 L18 36 L12 28 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <text x="44" y="26" fontSize="14" fontWeight="600" fontFamily="system-ui" letterSpacing="1">TIGER</text>
    <text x="44" y="40" fontSize="9" fontWeight="300" fontFamily="system-ui" letterSpacing="2" opacity="0.7">BIOSCIENCES</text>
  </svg>
)

const TarformLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 130 48" fill="currentColor">
    <rect x="4" y="20" width="20" height="2" rx="1" />
    <rect x="12" y="12" width="2" height="18" rx="1" />
    <text x="34" y="30" fontSize="18" fontWeight="600" fontFamily="system-ui" letterSpacing="2">TARFORM</text>
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

export const ClientLogos = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 overflow-hidden py-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="dark:text-polar-500 text-lg text-gray-400"
      >
        Trusted by industry leaders
      </motion.p>

      <div className="relative w-full">
        {/* Gradient masks */}
        <div className="dark:from-polar-950 pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="dark:from-polar-950 pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent" />

        {/* Infinite marquee */}
        <div className="flex animate-marquee items-center gap-x-16">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex shrink-0 items-center justify-center px-4"
            >
              <client.Logo className="dark:text-polar-500 h-12 w-auto text-gray-400 grayscale transition-all duration-500 hover:text-gray-900 hover:grayscale-0 dark:hover:text-white" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
