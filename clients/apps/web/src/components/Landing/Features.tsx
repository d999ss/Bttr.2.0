'use client'

import BrushOutlined from '@mui/icons-material/BrushOutlined'
import BuildOutlined from '@mui/icons-material/BuildOutlined'
import CodeOutlined from '@mui/icons-material/CodeOutlined'
import DesignServicesOutlined from '@mui/icons-material/DesignServicesOutlined'
import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined'
import InsightsOutlined from '@mui/icons-material/InsightsOutlined'
import SecurityOutlined from '@mui/icons-material/SecurityOutlined'
import SpeedOutlined from '@mui/icons-material/SpeedOutlined'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type FeatureCardProps = {
  title: string
  description: string | React.ReactNode
  linkHref: string
  className?: string
  children?: React.ReactNode
}

const FeatureCard = ({
  title,
  description,
  linkHref,
  className,
  children,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
      }}
      className={twMerge('flex flex-col gap-y-6', className)}
    >
      <Link
        href={linkHref}
        target={linkHref.startsWith('http') ? '_blank' : undefined}
        className="dark:bg-polar-900 flex h-full flex-col justify-between gap-x-6 gap-y-6 rounded-2xl bg-white p-6! transition-transform hover:translate-y-[-4px] md:p-10 xl:gap-y-0"
      >
        <div className="flex h-full flex-col gap-y-6">
          <div className="flex h-full flex-col gap-y-2 md:gap-y-6">
            <h3 className="text-xl text-pretty text-black md:text-3xl md:leading-tight! dark:text-white">
              {title}
            </h3>
            {typeof description === 'string' ? (
              <p className="dark:text-polar-500 mb-8 w-full grow text-lg text-gray-500 md:max-w-96">
                {description}
              </p>
            ) : (
              description
            )}
          </div>
        </div>
        {children}
      </Link>
    </motion.div>
  )
}

type FeaturesProps = {
  className?: string
}

const Features = ({ className }: FeaturesProps) => {
  const features = [
    {
      title: 'Design and Strategy',
      description:
        'Product strategy, experience architecture, and design systems grounded in business reality.',
      linkHref: '/features/products',
      children: (
        <div className="grid grid-cols-2 gap-2">
          {[
            {
              icon: <InsightsOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'User Research',
            },
            {
              icon: <DesignServicesOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'UX Design',
            },
            {
              icon: <BrushOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'Design Systems',
            },
            {
              icon: <HandshakeOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'Strategy',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="dark:bg-polar-800 dark:border-polar-700 flex items-center gap-x-3 rounded-lg border border-transparent bg-gray-50 px-3 py-2"
            >
              {item.icon}
              <span className="dark:text-polar-50 text-xs text-gray-950">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      ),
    },

    {
      title: 'Engineering',
      description:
        'Production grade platforms engineered for performance, scale, reliability, and compliance.',
      linkHref: '/features/benefits',
      children: (
        <div className="grid grid-cols-2 gap-2">
          {[
            {
              icon: <CodeOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'Web & Mobile',
            },
            {
              icon: <SpeedOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'Performance',
            },
            {
              icon: <SecurityOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'Security',
            },
            {
              icon: <BuildOutlined className="h-4 w-4" fontSize="inherit" />,
              text: 'Infrastructure',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="dark:bg-polar-800 dark:border-polar-700 flex items-center gap-x-3 rounded-lg border border-transparent bg-gray-50 px-3 py-2"
            >
              {item.icon}
              <span className="dark:text-polar-50 text-xs text-gray-950">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Lifecycle Ownership',
      description:
        'Long term system stewardship beyond launch, with ongoing support and continuous improvement.',
      linkHref: '/resources/merchant-of-record',
      children: (
        <div className="grid grid-cols-2 gap-2">
          <div className="dark:bg-polar-800 dark:border-polar-700 flex items-center justify-between rounded-lg border border-transparent bg-gray-50 px-3 py-2">
            <span className="dark:text-polar-50 text-xs text-gray-950">Status</span>
            <span className="text-xs text-emerald-500">Live</span>
          </div>
          <div className="dark:bg-polar-800 dark:border-polar-700 flex items-center justify-between rounded-lg border border-transparent bg-gray-50 px-3 py-2">
            <span className="dark:text-polar-50 text-xs text-gray-950">Uptime</span>
            <span className="dark:text-polar-500 text-xs text-gray-500">99.99%</span>
          </div>
          <div className="dark:bg-polar-800 dark:border-polar-700 flex items-center justify-between rounded-lg border border-transparent bg-gray-50 px-3 py-2">
            <span className="dark:text-polar-50 text-xs text-gray-950">Monitoring</span>
            <span className="dark:text-polar-500 text-xs text-gray-500">24/7</span>
          </div>
          <div className="dark:bg-polar-800 dark:border-polar-700 flex items-center justify-between rounded-lg border border-transparent bg-gray-50 px-3 py-2">
            <span className="dark:text-polar-50 text-xs text-gray-950">SLA</span>
            <span className="dark:text-polar-500 text-xs text-gray-500">Enterprise</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className={className}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.1,
        }}
        className="flex flex-col gap-4 md:gap-8 xl:flex-row"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            linkHref={feature.linkHref}
          >
            {feature.children}
          </FeatureCard>
        ))}
      </motion.div>
    </section>
  )
}

export default Features
