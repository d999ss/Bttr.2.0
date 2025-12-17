'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import { Hero } from '@/components/Landing/Hero/Hero'
import { Section } from '@/components/Landing/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const industries = [
  {
    title: 'Aerospace & Defense',
    description:
      'Mission-critical systems for aviation, space, and defense organizations where reliability and compliance are non-negotiable.',
    href: '/industries/aerospace',
    image: '/assets/work/uploads/2024/08/ge-aerospace-thumb.jpg',
    color: 'text-blue-500',
    clients: ['GE Aerospace', 'FleetPulse'],
  },
  {
    title: 'Biotechnology',
    description:
      'Platforms for research, clinical operations, and scientific communication that accelerate breakthrough discoveries.',
    href: '/industries/biotech',
    image: '/assets/work/uploads/2024/08/tiger-fur-thumb.webp',
    color: 'text-emerald-500',
    clients: ['Tiger BioSciences', 'Air Company', 'Ciitizen'],
  },
  {
    title: 'Medical & Healthcare',
    description:
      'Patient engagement platforms and provider tools that transform healthcare delivery at enterprise scale.',
    href: '/industries/medical',
    image: '/assets/work/uploads/2025/04/botox-cosmetic-thumb.webp',
    color: 'text-rose-500',
    clients: ['Allergan Aesthetics', 'BOTOX Cosmetic', 'JUVÉDERM'],
  },
]

export const IndustriesPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Industries"
          description="Deep expertise where it matters most. We bring specialized knowledge and proven experience to the industries we serve—building products that meet rigorous standards and deliver measurable results."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
        </Hero>

        <motion.div
          className="flex flex-col gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link
                href={industry.href}
                className="dark:bg-polar-900 group grid overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg md:grid-cols-2"
              >
                <div className="dark:bg-polar-800 relative aspect-[4/3] overflow-hidden bg-gray-100 md:aspect-auto">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h2 className="mb-4 text-2xl tracking-tight text-black dark:text-white md:text-3xl">
                    {industry.title}
                  </h2>
                  <p className="dark:text-polar-500 mb-6 text-lg text-gray-500">
                    {industry.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {industry.clients.map((client) => (
                      <span
                        key={client}
                        className="dark:bg-polar-800 dark:text-polar-400 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`group flex items-center gap-x-2 text-sm font-medium ${industry.color}`}
                  >
                    <span>Explore {industry.title.split(' ')[0]}</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="flex flex-col gap-y-24">
        <motion.div
          className="flex flex-col items-center gap-y-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-2xl md:text-3xl" variants={itemVariants}>
            Don&apos;t see your industry?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            We work across many verticals. If you have a complex product
            challenge, we&apos;d love to hear about it.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
