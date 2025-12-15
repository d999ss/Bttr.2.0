'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined'
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined'
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

export const FinancePage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Engagement Models"
          description="Flexible partnership structures designed to meet your organization where it is."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link href="/contact">
            <Button variant="secondary" className="rounded-full" size="lg">
              Get in Touch
              <ArrowOutwardOutlined className="ml-2" />
            </Button>
          </Link>
        </Hero>

        <motion.div
          className="dark:bg-polar-900 flex w-full flex-col overflow-hidden rounded-2xl bg-white md:flex-row-reverse md:items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-1 grow flex-col gap-y-10 p-8 md:p-16">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-3">
                <h2 className="text-2xl leading-normal! md:text-3xl">
                  Structured for long-term success
                </h2>
              </div>
              <p className="dark:text-polar-500 text-lg text-gray-500">
                We offer multiple engagement models to match your project scope,
                timeline, and organizational needs. Every engagement is designed
                for clarity and accountability.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                'Fixed-scope project engagements',
                'Retainer-based ongoing partnerships',
                'Dedicated team augmentation',
                'Advisory and strategic consulting',
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
          <div className="dark:bg-polar-800 relative flex flex-1 items-center justify-center p-8 md:p-16">
            <motion.div
              className="dark:bg-polar-900 dark:border-polar-700 z-10 flex w-full max-w-xs flex-col gap-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center justify-between gap-x-2">
                <span className="text-sm font-medium text-black dark:text-white">
                  Engagement Overview
                </span>
                <HandshakeOutlined
                  className="text-emerald-500"
                  fontSize="small"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Project Scope</span>
                  <span className="text-sm font-medium text-emerald-500">Defined</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Timeline</span>
                  <span className="text-sm font-medium text-emerald-500">On Track</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Team Aligned</span>
                  <span className="text-sm font-medium text-emerald-500">Yes</span>
                </div>
              </div>
              <div className="dark:border-polar-700 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-emerald-500">Sprint in progress</span>
                </div>
              </div>
            </motion.div>
            <Image
              src="/assets/landing/abstract_07.jpg"
              alt="Engagement Models"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        <Hero
          title="Partnership options"
          description="Choose the engagement model that fits your needs"
        >
          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <GroupsOutlined fontSize="large" />,
                title: 'Project-Based',
                description:
                  'Fixed-scope engagements with clear deliverables and timelines.',
              },
              {
                icon: <SupportAgentOutlined fontSize="large" />,
                title: 'Retainer',
                description:
                  'Ongoing partnership with dedicated resources and priority support.',
              },
              {
                icon: <HandshakeOutlined fontSize="large" />,
                title: 'Team Extension',
                description:
                  'Embedded engineers and designers working as part of your team.',
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
            Ready to explore partnership options?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s discuss which engagement model is right for your
            organization and project goals.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
