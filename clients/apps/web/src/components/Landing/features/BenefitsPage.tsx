'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import CloudOutlined from '@mui/icons-material/CloudOutlined'
import CodeOutlined from '@mui/icons-material/CodeOutlined'
import IntegrationInstructionsOutlined from '@mui/icons-material/IntegrationInstructionsOutlined'
import StorageOutlined from '@mui/icons-material/StorageOutlined'
import SpeedOutlined from '@mui/icons-material/SpeedOutlined'
import SecurityOutlined from '@mui/icons-material/SecurityOutlined'
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

export const BenefitsPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Engineering"
          description="Full-stack systems built for performance, reliability, and longevity. We write code that lasts."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link href="/contact">
            <Button variant="secondary" className="rounded-full" size="lg">
              View Our Work
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
                  Production-grade platforms
                </h2>
              </div>
              <p className="dark:text-polar-500 text-lg text-gray-500">
                We build systems that handle real-world scale. From high-traffic
                web applications to complex distributed systems, our engineering
                is built to perform under pressure.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                'Modern web and mobile platforms',
                'Cloud infrastructure and DevOps',
                'API design and third-party integrations',
                'Performance optimization and scaling',
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
                  System Health
                </span>
                <SpeedOutlined
                  className="text-emerald-500"
                  fontSize="small"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between">
                  <span className="dark:text-polar-500 text-sm text-gray-500">Uptime</span>
                  <span className="text-sm font-medium text-emerald-500">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="dark:text-polar-500 text-sm text-gray-500">Response Time</span>
                  <span className="text-sm font-medium text-black dark:text-white">42ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="dark:text-polar-500 text-sm text-gray-500">Requests/sec</span>
                  <span className="text-sm font-medium text-black dark:text-white">12.4k</span>
                </div>
              </div>
              <div className="dark:border-polar-700 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-emerald-500">All systems operational</span>
                </div>
              </div>
            </motion.div>
            <Image
              src="/assets/landing/abstract_07.jpg"
              alt="Engineering"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        <Hero
          title="Full-stack capabilities"
          description="From frontend to infrastructure, we handle the complete technical stack"
        >
          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <CodeOutlined fontSize="large" />,
                title: 'Web & Mobile',
                description:
                  'React, Next.js, React Native, and modern frameworks for fast, responsive applications.',
              },
              {
                icon: <CloudOutlined fontSize="large" />,
                title: 'Cloud Infrastructure',
                description:
                  'AWS, GCP, Azure deployment with infrastructure as code and automated pipelines.',
              },
              {
                icon: <StorageOutlined fontSize="large" />,
                title: 'Data & APIs',
                description:
                  'PostgreSQL, Redis, GraphQL, REST APIs designed for scale and reliability.',
              },
              {
                icon: <IntegrationInstructionsOutlined fontSize="large" />,
                title: 'Integrations',
                description:
                  'Connect with any third-party service, payment processor, or enterprise system.',
              },
              {
                icon: <SpeedOutlined fontSize="large" />,
                title: 'Performance',
                description:
                  'Optimization at every layer—from database queries to CDN caching strategies.',
              },
              {
                icon: <SecurityOutlined fontSize="large" />,
                title: 'Security',
                description:
                  'Security-first development with encryption, authentication, and compliance built in.',
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
            Ready to build something that scales?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s talk about your technical challenges and how we can solve
            them together.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
