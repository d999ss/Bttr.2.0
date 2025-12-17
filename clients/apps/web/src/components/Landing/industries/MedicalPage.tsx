'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import { Hero } from '@/components/Landing/Hero/Hero'
import { Section } from '@/components/Landing/Section'
import { caseStudies } from '@/data/caseStudies'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import LocalHospitalOutlined from '@mui/icons-material/LocalHospitalOutlined'
import PeopleOutlined from '@mui/icons-material/PeopleOutlined'
import SecurityOutlined from '@mui/icons-material/SecurityOutlined'
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined'
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

const medicalCaseStudies = caseStudies.filter((study) =>
  ['botox-cosmetic', 'juvederm', 'alle'].includes(study.slug)
)

const capabilities = [
  {
    icon: <PeopleOutlined fontSize="large" />,
    title: 'Patient Engagement',
    description:
      'Digital experiences that educate, inspire, and convert—from awareness through treatment and loyalty.',
  },
  {
    icon: <LocalHospitalOutlined fontSize="large" />,
    title: 'Provider Platforms',
    description:
      'Tools that empower healthcare professionals to manage practices, track outcomes, and grow their business.',
  },
  {
    icon: <SecurityOutlined fontSize="large" />,
    title: 'Regulatory Expertise',
    description:
      'Deep experience with FDA, HIPAA, and pharmaceutical marketing requirements built into every project.',
  },
  {
    icon: <VerifiedOutlined fontSize="large" />,
    title: 'Enterprise Scale',
    description:
      'Design systems and platforms that serve millions of patients across global healthcare organizations.',
  },
]

export const MedicalPage = () => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-32 pt-0 md:pt-0">
        <Hero
          title="Medical & Healthcare"
          description="Digital experiences that transform healthcare. We design and build platforms that connect patients with providers, drive engagement, and scale across global healthcare organizations."
        >
          <GetStartedButton size="lg" text="Start a Conversation" />
          <Link href="/work/botox-cosmetic">
            <Button variant="secondary" className="rounded-full" size="lg">
              View BOTOX Cosmetic Case Study
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
            Trusted by healthcare leaders
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
            variants={itemVariants}
          >
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              Allergan Aesthetics
            </span>
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              BOTOX Cosmetic
            </span>
            <span className="dark:text-polar-400 text-2xl font-semibold text-gray-400">
              JUVÉDERM
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
              Expertise across the healthcare ecosystem
            </motion.h2>
            <motion.p
              className="dark:text-polar-500 max-w-2xl text-lg text-gray-500"
              variants={itemVariants}
            >
              We bring specialized knowledge and proven experience to
              healthcare—building products that meet rigorous standards and
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
                <div className="text-rose-500">{capability.icon}</div>
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
            Proven Results in Healthcare
          </motion.p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {medicalCaseStudies.map((study, index) => (
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
                Our track record in healthcare speaks for itself.
              </p>
            </div>
            <motion.ul
              className="dark:divide-polar-700 dark:border-polar-700 flex flex-col divide-y divide-gray-200 border-y border-gray-200"
              variants={containerVariants}
            >
              {[
                '6M+ platform users',
                '40% engagement lift',
                '10+ years healthcare experience',
                'Global healthcare scale',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-x-3 py-3"
                  variants={itemVariants}
                >
                  <CheckOutlined
                    className="mt-0.5 text-rose-500"
                    fontSize="small"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="dark:bg-polar-800 relative flex flex-1 items-center justify-center bg-gray-100 p-8 md:p-16">
            <Image
              src="/assets/work/uploads/2025/04/botox-cosmetic-thumb.webp"
              alt="Healthcare"
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
            Ready to transform your healthcare digital experience?
          </motion.h2>
          <motion.p
            className="dark:text-polar-500 text-lg text-gray-500 md:w-[480px]"
            variants={itemVariants}
          >
            Let&apos;s discuss how we can help you build platforms that engage
            patients and empower providers.
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
