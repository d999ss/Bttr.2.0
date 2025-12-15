'use client'

import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import Check from '@mui/icons-material/Check'
import Button from '@polar-sh/ui/components/atoms/Button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@polar-sh/ui/components/atoms/Tabs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import {
  SyntaxHighlighterClient,
  SyntaxHighlighterProvider,
} from '../SyntaxHighlighterShiki/SyntaxHighlighterClient'

const strategies = [
  {
    name: 'AI Enabled',
    description: "We design systems that integrate AI responsibly within regulated and high risk environments.",
    bullets: [
      'Responsible AI integration',
      'Regulatory compliance',
      'Risk-aware architecture',
    ],
    code: `// AI-enabled platform architecture
// Designed for regulated environments

interface AISystem {
  compliance: "regulatory-ready";
  risk: "managed";
  integration: "responsible";
}

export const aiPlatform: AISystem = {
  compliance: "regulatory-ready",
  risk: "managed",
  integration: "responsible"
};`,
    link: '/resources/why',
  },
  {
    name: 'Performance',
    description:
      'Architected for latency, throughput, and reliability at scale.',
    bullets: [
      'Low-latency architecture',
      'High-throughput systems',
      'Reliability at scale',
    ],
    code: `// Performance-sensitive systems
// Built for demanding workloads

const performanceMetrics = {
  latency: "< 100ms p99",
  throughput: "10k+ rps",
  uptime: "99.99%",
  scalability: "horizontal"
};

export default performanceMetrics;`,
    link: '/resources/why',
  },
  {
    name: 'Custom',
    description:
      'Every system is designed around the realities of the business, not templates.',
    bullets: [
      'Business-driven architecture',
      'No template solutions',
      'Tailored to your constraints',
    ],
    code: `// Custom system architecture
// Designed for your reality

interface CustomSystem {
  requirements: BusinessRequirements;
  constraints: OperationalConstraints;
  architecture: TailoredSolution;
}

export function designSystem(
  business: BusinessRequirements
): CustomSystem {
  // Every solution is unique
  return buildForReality(business);
}`,
    link: '/resources/why',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export const Usage = () => {
  const tabsTriggerClassName = useMemo(() => {
    return 'rounded-full! px-4 py-2 data-[state=active]:bg-white hidden md:flex'
  }, [])

  return (
    <SyntaxHighlighterProvider>
      <Tabs defaultValue={strategies[0].name}>
        <div className="flex w-full flex-col gap-y-16 md:h-full md:min-h-96">
          <div className="flex flex-col items-center gap-y-8">
            <span className="dark:text-polar-500 text-lg text-gray-400">
              Adaptive Systems
            </span>
            <h1 className="w-fit max-w-3xl text-center text-3xl text-pretty md:text-5xl md:leading-normal">
              Designed for change, not replacement
            </h1>
            <TabsList>
              {strategies.map((strategy) => (
                <TabsTrigger
                  key={strategy.name}
                  value={strategy.name}
                  className={tabsTriggerClassName}
                >
                  {strategy.name}
                </TabsTrigger>
              ))}
              <Link href="/resources/why">
                <Button className="rounded-full" variant="ghost">
                  <span>Our Approach</span>
                  <ArrowOutwardOutlined className="ml-2" />
                </Button>
              </Link>
            </TabsList>
          </div>
          {strategies.map((strategy) => (
            <TabsContent value={strategy.name} key={strategy.name}>
              <motion.div
                className={`dark:bg-polar-900 flex w-full flex-col overflow-hidden rounded-2xl bg-white md:flex-row md:rounded-4xl`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-center gap-y-8 p-8 md:w-1/2 md:p-16">
                  <div className="flex flex-col gap-y-8">
                    <motion.h2
                      className="text-2xl leading-normal! md:text-4xl"
                      variants={itemVariants}
                    >
                      {strategy.name} Platforms
                    </motion.h2>
                    <motion.p
                      className="text-lg leading-relaxed text-pretty"
                      variants={itemVariants}
                    >
                      {strategy.description}
                    </motion.p>
                    <ul className="flex flex-col gap-y-1">
                      {strategy.bullets.map((bullet) => (
                        <motion.li
                          className="flex flex-row items-center gap-x-2"
                          variants={itemVariants}
                          key={bullet}
                        >
                          <Check
                            className="text-emerald-500"
                            fontSize="small"
                          />
                          <p className="leading-relaxed text-pretty">
                            {bullet}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.span
                      className="text-sm text-gray-400"
                      variants={itemVariants}
                    >
                      <Link href={strategy.link}>
                        <Button variant="secondary" className="rounded-full">
                          Learn More
                          <ArrowOutwardOutlined
                            fontSize="inherit"
                            className="ml-2"
                          />
                        </Button>
                      </Link>
                    </motion.span>
                  </div>
                </div>

                <div className="dark:bg-polar-800 relative flex flex-col justify-center bg-gray-100 p-4 text-sm md:w-1/2 xl:p-12">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/assets/landing/abstract_02.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 640px"
                    loading="lazy"
                    alt=""
                  />
                  <div className="dark:bg-polar-900 z-1 rounded-lg bg-white p-4">
                    <SyntaxHighlighterClient
                      lang="typescript"
                      code={strategy.code}
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </SyntaxHighlighterProvider>
  )
}
