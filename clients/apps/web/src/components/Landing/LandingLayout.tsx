'use client'

import { BeaAnimation } from '@/components/Brand/BeaAnimation'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import Footer from '@/components/Organization/Footer'
import { caseStudies } from '@/data/caseStudies'
import Button from '@polar-sh/ui/components/atoms/Button'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@polar-sh/ui/components/atoms/Sidebar'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavPopover, NavPopoverSection } from './NavPopover'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-polar-950 relative flex flex-col bg-gray-50 px-0 md:w-full md:flex-1 md:items-center md:px-4">
      <div className="flex flex-col gap-y-2 md:w-full">
        <LandingPageDesktopNavigation />
        <SidebarProvider className="absolute inset-0 flex flex-col items-start md:hidden">
          <LandingPageTopbar />
          <LandingPageMobileNavigation />
        </SidebarProvider>

        <div className="dark:bg-polar-950 relative flex flex-col px-4 pt-32 md:w-full md:px-0 md:pt-0">
          {children}
        </div>
        <LandingPageFooter />
      </div>
    </div>
  )
}

const NavLink = ({
  href,
  className,
  children,
  isActive: _isActive,
  target,
  ...props
}: ComponentProps<typeof Link> & {
  isActive?: (pathname: string) => boolean
}) => {
  const pathname = usePathname()
  const isActive = _isActive
    ? _isActive(pathname)
    : pathname.startsWith(href.toString())
  const isExternal = href.toString().startsWith('http')

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : target}
      prefetch
      className={twMerge(
        'dark:text-polar-500 -m-1 flex items-center gap-x-2 p-1 text-gray-500 transition-colors hover:text-black dark:hover:text-white',
        isActive && 'text-black dark:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

interface NavigationItem {
  title: string
  href: string
  isActive?: (pathname: string) => boolean
  target?: '_blank'
}

const mobileNavigationItems: NavigationItem[] = [
  {
    title: 'Overview',
    href: '/',
    isActive: (pathname) => pathname === '/',
  },
  {
    title: 'Capabilities',
    href: '/features/design',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Company',
    href: '/company',
  },
  {
    title: 'Careers',
    href: '/careers',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const LandingPageMobileNavigation = () => {
  const sidebar = useSidebar()

  return (
    <Sidebar className="md:hidden">
      <SidebarHeader className="p-4">
        <Link href="/">
          <BttrLogotype variant="icon" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-y-6 px-6 py-2">
        <div className="flex flex-col gap-y-1">
          {mobileNavigationItems.map((item) => {
            return (
              <NavLink
                key={item.title}
                className="text-xl tracking-tight"
                isActive={item.isActive}
                target={item.target}
                href={item.href}
                onClick={sidebar.toggleSidebar}
              >
                {item.title}
              </NavLink>
            )
          })}
        </div>
        <NavLink
          href="/portal/login"
          onClick={sidebar.toggleSidebar}
          className="text-xl tracking-tight"
        >
          Client Login
        </NavLink>
      </SidebarContent>
    </Sidebar>
  )
}

const LandingPageDesktopNavigation = () => {
  const pathname = usePathname()

  const featuresSections: NavPopoverSection[] = [
    {
      items: [
        {
          href: '/features/products',
          label: 'Design and Strategy',
          subtitle: 'Product strategy and design systems',
        },
        {
          href: '/features/benefits',
          label: 'Engineering',
          subtitle: 'Production grade platforms',
        },
        {
          href: '/resources/merchant-of-record',
          label: 'Lifecycle Ownership',
          subtitle: 'Long term system stewardship',
        },
        {
          href: '/features/customers',
          label: 'Security and Compliance',
          subtitle: 'Regulatory-ready systems',
        },
      ],
    },
  ]

  const docsSections: NavPopoverSection[] = [
    {
      title: 'Approach',
      items: [
        {
          href: '/resources/why',
          label: 'Why Bttr.',
          subtitle: 'How we work',
        },
        {
          href: '/resources/pricing',
          label: 'Engagement Models',
          subtitle: 'Ways to work with us',
        },
        {
          href: '/features/analytics',
          label: 'Case Studies',
          subtitle: 'Our work in action',
        },
        {
          href: '/resources/client-hub',
          label: 'Client Hub',
          subtitle: 'Your project command center',
        },
      ],
    },
  ]

  const workSections: NavPopoverSection[] = [
    {
      title: 'Featured',
      items: caseStudies
        .filter((study) => study.featured)
        .map((study) => ({
          href: `/work/${study.slug}`,
          label: study.title,
        })),
    },
    {
      title: 'All Work',
      items: caseStudies
        .filter((study) => !study.featured)
        .map((study) => ({
          href: `/work/${study.slug}`,
          label: study.title,
        })),
    },
  ]

  return (
    <div className="dark:text-polar-50 hidden w-full flex-col items-center gap-12 py-8 md:flex">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center px-8 lg:max-w-7xl">
        <Link href="/" className="justify-self-start">
          <BttrLogotype variant="icon" size={40} />
        </Link>

        <ul className="flex flex-row gap-x-8 font-medium">
          <li>
            <NavPopover
              trigger="Capabilities"
              sections={featuresSections}
              isActive={pathname.startsWith('/features')}
            />
          </li>
          <li>
            <NavPopover trigger="Approach" sections={docsSections} layout="flex" />
          </li>
          <li>
            <NavPopover
              trigger="Work"
              sections={workSections}
              isActive={pathname.startsWith('/work')}
              href="/work"
            />
          </li>
          <li>
            <NavLink href="/company">Company</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4 justify-self-end">
          <Link href="/portal/login">
            <Button variant="ghost" className="rounded-full">
              Client Login
            </Button>
          </Link>
          <BeaAnimation size={50} />
        </div>
      </div>
    </div>
  )
}

const LandingPageTopbar = () => {
  return (
    <div className="z-30 flex w-full flex-row items-center justify-between px-6 py-6 md:hidden md:px-12">
      <BttrLogotype
        className="mt-1 ml-2 md:hidden"
        variant="logotype"
        size={100}
      />
      <SidebarTrigger className="md:hidden" />
    </div>
  )
}

const LandingPageFooter = () => {
  return (
    <motion.div
      initial="initial"
      className="relative flex w-full flex-col items-center"
      variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Footer />
    </motion.div>
  )
}
