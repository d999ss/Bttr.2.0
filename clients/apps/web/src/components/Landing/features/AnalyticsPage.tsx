'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
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

const caseStudies = [
  {
    client: 'GE Aerospace',
    industry: 'Aerospace & Defense',
    description: 'Enterprise asset management platform for jet engine maintenance and lifecycle tracking.',
    results: [
      'Reduced maintenance planning time by 40%',
      'Real-time visibility across global operations',
      'Integrated with existing SAP systems',
    ],
    image: '/assets/landing/abstract_07.jpg',
  },
  {
    client: 'Healthcare Network',
    industry: 'Healthcare',
    description: 'Patient engagement platform with HIPAA-compliant messaging and appointment scheduling.',
    results: [
      '60% increase in patient engagement',
      'HIPAA compliance achieved',
      'Reduced no-show rates by 35%',
    ],
    image: '/assets/landing/abstract_08.jpg',
  },
  {
    client: 'Financial Services Firm',
    industry: 'Fintech',
    description: 'Real-time trading dashboard with advanced analytics and regulatory reporting.',
    results: [
      'Sub-100ms data refresh rates',
      'SOC 2 Type II certified',
      'Automated compliance reporting',
    ],
    image: '/assets/landing/abstract_07.jpg',
  },
]

export const AnalyticsPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Case Studies"
          description="See how we help organizations build mission-critical digital products that deliver real results."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link href="/contact">
            <Button variant="secondary" className="rounded-full" size="lg">
              Work With Us
              <ArrowOutwardOutlined className="ml-2" />
            </Button>
          </Link>
        </Hero>

        {caseStudies.map((study, index) => (
          <motion.div
            key={study.client}
            className="dark:bg-polar-900 flex w-full flex-col overflow-hidden rounded-2xl bg-white md:flex-row-reverse md:items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            style={{ flexDirection: index % 2 === 0 ? undefined : 'row' }}
          >
            <div className="flex flex-1 grow flex-col gap-y-10 p-8 md:p-16">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <span className="dark:text-polar-500 text-sm font-medium text-gray-500">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl leading-normal! md:text-3xl">
                    {study.client}
                  </h2>
                </div>
                <p className="dark:text-polar-500 text-lg text-gray-500">
                  {study.description}
                </p>
              </div>
              <motion.ul
                className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
                variants={containerVariants}
              >
                {study.results.map((result, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-x-3 py-2"
                    variants={itemVariants}
                  >
                    <CheckOutlined
                      className="mt-0.5 text-emerald-500"
                      fontSize="small"
                    />
                    <span>{result}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className="dark:bg-polar-800 relative flex flex-1 items-center justify-center p-8 md:p-16">
              <Image
                src={study.image}
                alt={study.client}
                className="absolute inset-0 h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        ))}
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
            Ready to be our next success story?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s discuss how we can help you achieve similar results for
            your organization.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
