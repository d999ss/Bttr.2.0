'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import { Section } from '@/components/Landing/Section'
import { caseStudies } from '@/data/caseStudies'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import FlightOutlined from '@mui/icons-material/FlightOutlined'
import SecurityOutlined from '@mui/icons-material/SecurityOutlined'
import SpeedOutlined from '@mui/icons-material/SpeedOutlined'
import StorageOutlined from '@mui/icons-material/StorageOutlined'
import Button from '@polar-sh/ui/components/atoms/Button'
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

const aerospaceCaseStudies = caseStudies.filter((study) =>
  ['ge-aerospace', 'fleetpulse', 'ge-brilliant-you'].includes(study.slug)
)

const capabilities = [
  {
    icon: <FlightOutlined fontSize="large" />,
    title: 'Mission-Critical Systems',
    description:
      'We build software that operates under real-world constraints where failure is not an option.',
  },
  {
    icon: <SecurityOutlined fontSize="large" />,
    title: 'Regulatory Compliance',
    description:
      'Deep experience with FAA, EASA, and defense security requirements built into every system.',
  },
  {
    icon: <StorageOutlined fontSize="large" />,
    title: 'Legacy Integration',
    description:
      'Modernize existing systems while maintaining compatibility with SAP, Oracle, and custom platforms.',
  },
  {
    icon: <SpeedOutlined fontSize="large" />,
    title: 'Real-Time Operations',
    description:
      'High-performance dashboards and monitoring for global fleet and asset management.',
  },
]

export const AerospacePage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <motion.div
          className="relative flex flex-col items-center justify-center gap-4 px-4 pt-8 text-center md:pt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Image
              src="/assets/brand/SR71S.png"
              alt="SR-71 Blackbird"
              width={320}
              height={320}
            />
          </motion.div>
          <motion.h1
            className="text-5xl leading-tight! tracking-tight text-balance md:px-0 md:text-7xl"
            variants={itemVariants}
          >
            Aerospace & Defense
          </motion.h1>
          <motion.p
            className="dark:text-polar-500 max-w-2xl text-center text-2xl !leading-relaxed text-balance text-gray-500"
            variants={itemVariants}
          >
            Software built for the demands of aerospace and defense. We design
            and engineer mission-critical systems for organizations where
            reliability, security, and compliance are non-negotiable.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-col items-center gap-4 md:flex-row md:gap-6"
            variants={itemVariants}
          >
            <GetStartedButton size="lg" text="Start a Conversation" />
            <Link href="/work/ge-aerospace">
              <Button variant="secondary" className="rounded-full" size="lg">
                View GE Aerospace Case Study
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            className="dark:text-polar-500 text-sm font-medium uppercase tracking-wider text-gray-400"
            variants={itemVariants}
          >
            Trusted by industry leaders
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
            variants={itemVariants}
          >
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              GE Aerospace
            </span>
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              FleetPulse
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center gap-y-4 text-center">
            <motion.h2
              className="text-3xl leading-tight! tracking-tight md:text-4xl"
              variants={itemVariants}
            >
              Engineering excellence for high-stakes environments
            </motion.h2>
            <motion.p
              className="dark:text-polar-500 max-w-2xl text-lg text-gray-500"
              variants={itemVariants}
            >
              We bring specialized knowledge and proven experience to aerospace
              and defense—building products that meet rigorous standards and
              deliver measurable results.
            </motion.p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {capabilities.map((capability, i) => (
              <motion.div
                key={i}
                className="dark:bg-polar-900 flex flex-col items-center gap-y-6 rounded-xl bg-white px-6 py-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-blue-500">{capability.icon}</div>
                <div className="flex flex-col gap-y-3">
                  <h3 className="text-xl">{capability.title}</h3>
                  <p className="dark:text-polar-400 text-balance text-gray-600">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            className="dark:text-polar-500 text-center text-lg text-gray-400"
            variants={itemVariants}
          >
            Proven Results in Aerospace
          </motion.p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aerospaceCaseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Link href={`/work/${study.slug}`} className="group block">
                  <div className="dark:bg-polar-800 relative mb-4 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={study.thumbnail}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mb-2 text-xl tracking-tight text-black dark:text-white">
                    {study.title}
                  </h3>
                  <p className="dark:text-polar-500 text-gray-500">
                    {study.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/work"
              className="dark:text-polar-500 dark:hover:text-white group flex items-center gap-x-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-900"
            >
              <span>View all work</span>
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
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="dark:bg-polar-900 flex w-full flex-col overflow-hidden rounded-2xl bg-white md:flex-row md:items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-1 grow flex-col gap-y-10 p-8 md:p-16">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-2xl leading-normal! md:text-3xl">
                By the numbers
              </h2>
              <p className="dark:text-polar-500 text-lg text-gray-500">
                Our track record in aerospace and defense speaks for itself.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                '99.99% system uptime',
                '40% faster maintenance planning',
                '10+ years aerospace experience',
                'Global operations scale',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-x-3 py-3"
                  variants={itemVariants}
                >
                  <CheckOutlined
                    className="mt-0.5 text-blue-500"
                    fontSize="small"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="dark:bg-polar-800 relative flex flex-1 items-center justify-center bg-gray-100 p-8 md:p-16">
            <Image
              src="/assets/work/uploads/2024/08/ge-aerospace-thumb.jpg"
              alt="Aerospace"
              className="absolute inset-0 h-full w-full object-cover opacity-50"
              width={500}
              height={500}
            />
          </div>
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
            Ready to modernize your aerospace operations?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s discuss how we can help you build systems that meet the
            demands of modern aerospace and defense.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
