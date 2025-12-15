'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import DesignServicesOutlined from '@mui/icons-material/DesignServicesOutlined'
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined'
import RouteOutlined from '@mui/icons-material/RouteOutlined'
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

export const ProductsPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Design & Strategy"
          description="Research-driven design that translates complexity into clarity. We create products people actually want to use."
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
                  User-centered design process
                </h2>
              </div>
              <p className="dark:text-polar-500 text-lg text-gray-500">
                We start with deep user research and stakeholder interviews to
                understand the real problems. Then we design solutions that
                actually work.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                'User research and discovery workshops',
                'Information architecture and user flows',
                'Interactive prototyping and testing',
                'Design systems and component libraries',
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
                  Design Process
                </span>
                <DesignServicesOutlined
                  className="text-emerald-500"
                  fontSize="small"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm">Discovery & Research</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm">Strategy & Architecture</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="dark:bg-polar-600 h-2 w-2 rounded-full bg-gray-300" />
                  <span className="dark:text-polar-500 text-sm text-gray-500">Design & Prototype</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="dark:bg-polar-600 h-2 w-2 rounded-full bg-gray-300" />
                  <span className="dark:text-polar-500 text-sm text-gray-500">Test & Iterate</span>
                </div>
              </div>
            </motion.div>
            <Image
              src="/assets/landing/abstract_07.jpg"
              alt="Design Process"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        <Hero
          title="Strategy that drives results"
          description="We help you make the right decisions before writing a single line of code"
        >
          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <LightbulbOutlined fontSize="large" />,
                title: 'Product Strategy',
                description:
                  'Define your product vision, identify market opportunities, and create a roadmap for success.',
              },
              {
                icon: <DesignServicesOutlined fontSize="large" />,
                title: 'Design Systems',
                description:
                  'Build consistent, scalable design systems that accelerate development and ensure quality.',
              },
              {
                icon: <RouteOutlined fontSize="large" />,
                title: 'User Experience',
                description:
                  'Create intuitive experiences that delight users and drive business outcomes.',
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
            Ready to design something meaningful?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s talk about your product vision and how we can bring it to
            life.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
