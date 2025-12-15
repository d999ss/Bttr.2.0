'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import LoopOutlined from '@mui/icons-material/LoopOutlined'
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import Button from '@polar-sh/ui/components/atoms/Button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '../Hero/Hero'
import { Section } from '../Section'

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
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
}

export const UsageBillingPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Our Process"
          description="A proven methodology for delivering mission-critical digital products on time and on budget."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link href="/resources/why">
            <Button variant="secondary" className="rounded-full" size="lg">
              Why Bttr
              <ArrowOutwardOutlined className="ml-2" />
            </Button>
          </Link>
        </Hero>

        <motion.div
          className="dark:bg-polar-900 flex w-full flex-col overflow-hidden rounded-2xl bg-white xl:flex-row-reverse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-1 grow flex-col gap-y-10 p-8 xl:p-16">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-3">
                <h2 className="text-2xl leading-normal! md:text-3xl">
                  Built for predictable outcomes
                </h2>
              </div>
              <p className="dark:text-polar-500 text-lg text-gray-500">
                Our process is designed to reduce risk, increase transparency,
                and deliver results that matter to your business.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                'Discovery-driven requirements gathering',
                'Iterative sprints with regular demos',
                'Continuous integration and deployment',
                'Post-launch monitoring and support',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-x-3 py-2"
                  variants={itemVariants}
                >
                  <CheckOutlined
                    className="mt-0.5 text-emerald-500"
                    fontSize="small"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="dark:bg-polar-800 relative flex h-full bg-gray-100 p-4 md:p-8 xl:items-center xl:justify-center xl:p-16">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/landing/abstract_02.jpg"
              alt="Our Process"
              width={1500}
              height={1500}
            />
            <motion.div
              className="dark:bg-polar-900 dark:border-polar-700 z-10 flex w-full max-w-sm flex-col gap-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center justify-between gap-x-2">
                <span className="text-sm font-medium text-black dark:text-white">
                  Project Timeline
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Discovery</span>
                  <span className="text-sm text-emerald-500">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Design & Architecture</span>
                  <span className="text-sm text-emerald-500">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Development Sprint 3</span>
                  <span className="text-sm font-medium text-blue-500">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Testing & QA</span>
                  <span className="dark:text-polar-500 text-sm text-gray-500">Upcoming</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Launch</span>
                  <span className="dark:text-polar-500 text-sm text-gray-500">Upcoming</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Hero
          title="Three phases, one outcome"
          description="Every project follows a structured approach to minimize risk and maximize value"
        >
          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <SearchOutlined fontSize="large" />,
                title: 'Discovery',
                description:
                  'Deep-dive into your business, users, and constraints to define the right solution.',
              },
              {
                icon: <LoopOutlined fontSize="large" />,
                title: 'Build',
                description:
                  'Iterative development with senior engineers, regular demos, and continuous feedback.',
              },
              {
                icon: <RocketLaunchOutlined fontSize="large" />,
                title: 'Launch & Sustain',
                description:
                  'Production deployment with ongoing monitoring, support, and iteration.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="dark:bg-polar-900 flex flex-col items-center gap-y-8 rounded-xl bg-white px-6 py-12 text-center"
              >
                <div className="flex flex-row gap-x-2">{feature.icon}</div>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl">{feature.title}</h3>
                  <p className="dark:text-polar-400 text-balance text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Hero>
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
            Ready to see how we work?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s discuss your project and show you how our process
            delivers results.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
