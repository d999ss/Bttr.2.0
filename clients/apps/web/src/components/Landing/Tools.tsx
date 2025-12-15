'use client'

import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import Button from '@polar-sh/ui/components/atoms/Button'
import { Compass, Cpu, Wrench } from 'lucide-react'
import Link from 'next/link'

export const Tools = () => {
  return (
    <div className="dark:bg-polar-900 flex w-full flex-col gap-y-16 rounded-4xl bg-white p-8 md:p-16">
      <div className="flex flex-col items-center gap-y-8">
        <span className="dark:text-polar-500 text-lg text-gray-400">
          How We Work
        </span>
        <h1 className="w-fit max-w-2xl text-center text-2xl text-pretty md:text-4xl md:leading-normal">
          From discovery to delivery, engineered for mission-critical outcomes
        </h1>
        <Link href="/resources/why">
          <Button className="rounded-full" variant="secondary">
            <span>Learn more</span>
            <ArrowOutwardOutlined className="ml-2" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="dark:bg-polar-800 flex w-full flex-col gap-y-4 rounded-3xl bg-gray-50 p-8">
          <div className="flex flex-row items-center gap-x-3">
            <Compass className="h-5 w-5" />
            <h1 className="text-xl">Discovery</h1>
          </div>
          <p className="dark:text-polar-400 text-gray-500">
            We start by understanding your constraints, users, and goals. No assumptions.
          </p>
        </div>
        <div className="dark:bg-polar-800 flex w-full flex-col gap-y-4 rounded-3xl bg-gray-50 p-8">
          <div className="flex flex-row items-center gap-x-3">
            <Cpu className="h-5 w-5" />
            <h1 className="text-xl">Build</h1>
          </div>
          <p className="dark:text-polar-400 text-gray-500">
            Iterative sprints with senior engineers. Real progress, not just prototypes.
          </p>
        </div>
        <div className="dark:bg-polar-800 flex w-full flex-col gap-y-4 rounded-3xl bg-gray-50 p-8">
          <div className="flex flex-row items-center gap-x-3">
            <Wrench className="h-5 w-5" />
            <h1 className="text-xl">Sustain</h1>
          </div>
          <p className="dark:text-polar-400 text-gray-500">
            Long-term ownership and support. We stay accountable beyond launch.
          </p>
        </div>
      </div>
    </div>
  )
}
