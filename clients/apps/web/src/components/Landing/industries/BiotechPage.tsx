'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import { Hero } from '@/components/Landing/Hero/Hero'
import { Section } from '@/components/Landing/Section'
import { caseStudies } from '@/data/caseStudies'
import BiotechOutlined from '@mui/icons-material/BiotechOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'
import ScienceOutlined from '@mui/icons-material/ScienceOutlined'
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

const biotechCaseStudies = caseStudies.filter((study) =>
  ['tiger-biosciences', 'air-company', 'ciitizen'].includes(study.slug)
)

const capabilities = [
  {
    icon: <ScienceOutlined fontSize="large" />,
    title: 'Research Platforms',
    description:
      'Data visualization and collaboration tools that accelerate scientific discovery and streamline research workflows.',
  },
  {
    icon: <DescriptionOutlined fontSize="large" />,
    title: 'Regulatory Navigation',
    description:
      'Experience with FDA pathways, clinical trial requirements, and compliance frameworks built into every solution.',
  },
  {
    icon: <BiotechOutlined fontSize="large" />,
    title: 'Scientific Communication',
    description:
      'Digital experiences that translate complex science into compelling narratives for investors, partners, and patients.',
  },
  {
    icon: <LockOutlined fontSize="large" />,
    title: 'Data Security',
    description:
      'HIPAA-compliant architectures and secure data handling for sensitive research and patient information.',
  },
]

export const BiotechPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Biotechnology"
          description="Digital products for the science that changes everything. We partner with biotech companies to build platforms that support breakthrough research, streamline clinical operations, and communicate science to the world."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link href="/work/tiger-biosciences">
            <Button variant="secondary" className="rounded-full" size="lg">
              View Tiger BioSciences Case Study
            </Button>
          </Link>
        </Hero>

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
            Trusted by innovators
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
            variants={itemVariants}
          >
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              Tiger BioSciences
            </span>
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              Air Company
            </span>
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              Ciitizen
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
              Building at the intersection of science and software
            </motion.h2>
            <motion.p
              className="dark:text-polar-500 max-w-2xl text-lg text-gray-500"
              variants={itemVariants}
            >
              We bring specialized knowledge and proven experience to
              biotechnology—building products that meet rigorous standards and
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
                <div className="text-emerald-500">{capability.icon}</div>
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
            Proven Results in Biotech
          </motion.p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {biotechCaseStudies.map((study, index) => (
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
                Our track record in biotechnology speaks for itself.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                'FDA breakthrough experience',
                'HIPAA-compliant systems',
                '10+ years life sciences experience',
                'Series A+ funded clients',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-x-3 py-3"
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
          <div className="dark:bg-polar-800 relative flex flex-1 items-center justify-center bg-gray-100 p-8 md:p-16">
            <Image
              src="/assets/work/uploads/2024/08/tiger-fur-thumb.webp"
              alt="Biotech"
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
            Ready to accelerate your biotech mission?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s discuss how we can help you build platforms that support
            your science and scale with your ambitions.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
