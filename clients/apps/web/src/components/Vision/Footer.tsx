import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from './Button'
import { sections } from './Navigation'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        'border-polar-600 hidden flex-row gap-x-12 border-t pt-6 text-xs md:flex',
        className,
      )}
    >
      <NavigationLegend />
      <SectionsLegend />
      <WorkLegend />
      <ContactUsLegend />
    </div>
  )
}

const NavigationLegend = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row gap-x-2">
        <Button variant="icon">←</Button>
        <Button variant="icon">→</Button>
        <Button variant="icon">H</Button>
        <Button variant="icon">L</Button>
      </div>
      <span>Navigate</span>
    </div>
  )
}

const SectionsLegend = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row gap-x-2">
        {sections.map((_, index) => (
          <Button key={index} variant="icon">
            {index}
          </Button>
        ))}
      </div>
      <span>Sections</span>
    </div>
  )
}

const WorkLegend = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'w') {
        window.open('/work', '_self')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row gap-x-2">
        <Button variant="icon">W</Button>
      </div>
      <span>View Work</span>
    </div>
  )
}

const ContactUsLegend = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'm') {
        window.open('mailto:donny@makebttr.com', '_blank')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row gap-x-2">
        <Button variant="icon">M</Button>
      </div>
      <span>Contact Us</span>
    </div>
  )
}
