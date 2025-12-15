'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import GppGoodOutlined from '@mui/icons-material/GppGoodOutlined'
import HealthAndSafetyOutlined from '@mui/icons-material/HealthAndSafetyOutlined'
import PolicyOutlined from '@mui/icons-material/PolicyOutlined'
import ShieldOutlined from '@mui/icons-material/ShieldOutlined'
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

export const CustomersPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Security & Compliance"
          description="Regulatory-ready systems built for healthcare, finance, and other environments where compliance is mandatory."
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
                  Built for regulated environments
                </h2>
              </div>
              <p className="dark:text-polar-500 text-lg text-gray-500">
                We understand the unique challenges of building software in
                regulated industries. Our systems are designed with compliance,
                audit trails, and security as first-class concerns.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                'HIPAA-compliant healthcare systems',
                'SOC 2 Type II certified infrastructure',
                'End-to-end encryption and access controls',
                'Comprehensive audit logging',
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
                  Compliance Status
                </span>
                <ShieldOutlined
                  className="text-emerald-500"
                  fontSize="small"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">HIPAA</span>
                  <span className="text-sm font-medium text-emerald-500">Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SOC 2 Type II</span>
                  <span className="text-sm font-medium text-emerald-500">Certified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">GDPR</span>
                  <span className="text-sm font-medium text-emerald-500">Compliant</span>
                </div>
              </div>
              <div className="dark:border-polar-700 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-emerald-500">All requirements met</span>
                </div>
              </div>
            </motion.div>
            <Image
              src="/assets/landing/abstract_07.jpg"
              alt="Security & Compliance"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        <Hero
          title="Industry expertise"
          description="Deep experience in highly regulated sectors"
        >
          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <HealthAndSafetyOutlined fontSize="large" />,
                title: 'Healthcare',
                description:
                  'HIPAA-compliant systems for patient data, EHR integrations, and medical device software.',
              },
              {
                icon: <PolicyOutlined fontSize="large" />,
                title: 'Financial Services',
                description:
                  'PCI DSS compliant payment systems, banking integrations, and fraud detection.',
              },
              {
                icon: <GppGoodOutlined fontSize="large" />,
                title: 'Enterprise Security',
                description:
                  'SSO, RBAC, audit trails, and security monitoring for mission-critical systems.',
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
            Need help with compliance?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            We&apos;ve helped organizations navigate complex regulatory
            requirements while building exceptional products.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
