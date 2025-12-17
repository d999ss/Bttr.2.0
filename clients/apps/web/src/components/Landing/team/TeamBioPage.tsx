'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
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

export interface TeamMember {
  name: string
  title: string
  image: string
  bio: string[]
  linkedin?: string
  twitter?: string
  email?: string
}

interface TeamBioPageProps {
  member: TeamMember
}

export const TeamBioPage = ({ member }: TeamBioPageProps) => {
  return (
    <div className="flex flex-col">
      <Section className="flex flex-col gap-y-16 pt-0 md:pt-0">
        <motion.div
          className="flex flex-col items-center gap-y-8 pt-8 md:pt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="aspect-square rounded-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col items-center gap-y-2 text-center">
            <motion.h1
              className="text-4xl leading-tight! tracking-tight md:text-5xl"
              variants={itemVariants}
            >
              {member.name}
            </motion.h1>
            <motion.p
              className="dark:text-polar-500 text-xl text-gray-500"
              variants={itemVariants}
            >
              {member.title}
            </motion.p>
          </div>
          {(member.linkedin || member.twitter || member.email) && (
            <motion.div
              className="flex items-center gap-x-6"
              variants={itemVariants}
            >
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="dark:text-polar-400 dark:hover:text-white text-gray-500 transition-colors hover:text-gray-900"
                >
                  LinkedIn
                </Link>
              )}
              {member.twitter && (
                <Link
                  href={member.twitter}
                  target="_blank"
                  className="dark:text-polar-400 dark:hover:text-white text-gray-500 transition-colors hover:text-gray-900"
                >
                  Twitter
                </Link>
              )}
              {member.email && (
                <Link
                  href={`mailto:${member.email}`}
                  className="dark:text-polar-400 dark:hover:text-white text-gray-500 transition-colors hover:text-gray-900"
                >
                  Email
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-2xl flex-col gap-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {member.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              className="dark:text-polar-400 text-lg leading-relaxed text-gray-600"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            className="dark:text-polar-500 text-gray-500"
            variants={itemVariants}
          >
            Want to work with {member.name.split(' ')[0]}?
          </motion.p>
          <motion.div variants={itemVariants}>
            <GetStartedButton size="lg" text="Start a Conversation" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/company"
              className="dark:text-polar-500 dark:hover:text-white group flex items-center gap-x-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-900"
            >
              <svg
                className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
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
              <span>Back to Company</span>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  )
}
