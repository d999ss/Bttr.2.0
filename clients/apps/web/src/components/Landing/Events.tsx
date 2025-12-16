import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import AvatarWrapper from '@polar-sh/ui/components/atoms/Avatar'
import Button from '@polar-sh/ui/components/atoms/Button'
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'
import { Section } from './Section'

export const Events = () => {
  const [eventOffset, setEventOffset] = useState(() => 7)
  const y = useMotionValue(0)
  const previousClosestIndexRef = useRef<number | null>(null)

  const keyframes = useMemo(
    () =>
      Array.from({ length: mockedEvents.length + 1 }, (_, i) => -750 + i * 50),
    [],
  )

  useMotionValueEvent(y, 'change', (latest) => {
    // Find the closest keyframe to the current position
    let closestIndex = 0
    let closestDistance = Math.abs(latest - keyframes[0])

    for (let i = 1; i < keyframes.length; i++) {
      const distance = Math.abs(latest - keyframes[i])
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = i
      }
    }

    // Only update if we've moved to a different keyframe
    if (previousClosestIndexRef.current !== closestIndex) {
      previousClosestIndexRef.current = closestIndex
      // Update offset based on the current keyframe
      // Add 1 because we want to include events from the current keyframe onwards
      const newOffset = Math.min(closestIndex, mockedEvents.length)
      setEventOffset(newOffset)
    }
  })

  const activeCount = useMemo(() => {
    const events = mockedEvents.slice(-eventOffset)
    return events.filter(e => e.status === 'In progress' || e.status === 'Running').length
  }, [eventOffset])

  return (
    <Section className="flex flex-col gap-y-32 py-0 md:py-0">
      <div className="dark:bg-polar-900 flex w-full flex-col gap-y-6 overflow-hidden rounded-4xl bg-gray-200 p-2 xl:flex-row">
        <div className="flex w-full flex-1 flex-col gap-y-8 p-6 md:p-12">
          <span className="bg-blue-500 w-fit rounded-full px-3 py-1 text-xs font-medium text-white">
            Now Operating
          </span>
          <h3 className="text-3xl leading-tight! text-balance md:text-4xl">
            A real time view of your product ecosystem
          </h3>
          <p className="dark:text-polar-500 text-lg text-gray-500">
            We help teams understand how their systems perform, evolve, and scale over time through disciplined engineering and lifecycle ownership.
          </p>
          <Link
            href="/resources/why"
          >
            <Button
              variant="secondary"
              className="rounded-full"
              wrapperClassNames="flex flex-row items-center gap-x-2"
            >
              <span>Our Approach</span>
              <ArrowOutwardOutlined fontSize="inherit" />
            </Button>
          </Link>
        </div>
        <div className="dark:bg-polar-800 flex w-full flex-1 flex-col gap-y-4 rounded-3xl bg-gray-50 p-8">
          <div className="flex flex-row items-center justify-between gap-x-4">
            <h3>Activity</h3>
            <div className="flex flex-row items-center gap-x-4">
              <div className="flex flex-row items-center gap-x-4 font-mono text-xs">
                <span>Active</span>
                <span className="dark:text-polar-500 text-gray-500">
                  {activeCount}
                </span>
              </div>
            </div>
          </div>
          <div
            className="relative h-[356px] overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent 0rem, black .5rem, black calc(100% - .5rem), transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0rem, black .5rem, black calc(100% - .5rem), transparent 100%)',
            }}
          >
            <motion.div
              className="flex w-full flex-col gap-y-2 py-2"
              style={{ y }}
              initial={{
                y: '-100%',
              }}
              animate={{
                y: keyframes,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }}
              whileInView="animate"
            >
              {mockedEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="dark:bg-polar-700 flex flex-row items-center justify-between gap-x-8 rounded-md border border-gray-100 bg-gray-100 p-2 pl-4 font-mono text-xs md:justify-start dark:border-white/5"
                >
                  <h3 className="w-full truncate xl:w-36">{event.name}</h3>
                  <p className="dark:text-polar-500 hidden w-28 text-xs text-gray-500 xl:flex">
                    {event.timestamp.toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                  <div className="flex w-fit flex-row items-center justify-end gap-x-4 md:w-32">
                    <StatusBadge status={event.status} />
                    <AvatarWrapper
                      className="hidden md:block"
                      name={event.name}
                      avatar_url="/assets/landing/testamonials/emil.jpg"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Confirmed':
      case 'Passed':
      case 'Approved':
      case 'Live':
      case 'Closed':
      case 'Applied':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
      case 'Running':
      case 'In progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
      default:
        return 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  return (
    <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium ${getStatusStyle(status)}`}>
      {status}
    </span>
  )
}

const baseEvents = [
  { name: 'Contract signed', status: 'Confirmed' },
  { name: 'Cloud deployment', status: 'Live' },
  { name: 'Performance test', status: 'Running' },
  { name: 'API integration', status: 'In progress' },
  { name: 'Security review', status: 'Passed' },
  { name: 'Sprint completed', status: 'Closed' },
  { name: 'Design review', status: 'Approved' },
  { name: 'User testing', status: 'In progress' },
  { name: 'Infrastructure update', status: 'Applied' },
  { name: 'Release published', status: 'v1.4.0' },
]

const mockedEvents = [...baseEvents, ...baseEvents, ...baseEvents].map((event, idx) => ({
  id: idx + 1,
  name: event.name,
  timestamp: new Date(Date.now() - idx * 60000),
  status: event.status,
}))
