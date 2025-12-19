'use client'

import { BeaAnimation } from '@/components/Brand/BeaAnimation'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import Footer from '@/components/Organization/Footer'
import { SearchTrigger, SiteSearch } from '@/components/SiteSearch'
import { useSearchShortcut } from '@/components/SiteSearch/useSearchShortcut'
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
import { ComponentProps, PropsWithChildren, useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavPopover, NavPopoverSection } from './NavPopover'

export default function Layout({ children }: PropsWithChildren) {
  const [searchOpen, setSearchOpen] = useState(false)
  const openSearch = useCallback(() => setSearchOpen(true), [])
  useSearchShortcut(openSearch)

  return (
    <div className="dark:bg-polar-950 relative flex flex-col bg-gray-50 px-0 md:w-full md:flex-1 md:items-center md:px-4">
      {/* SVG Filters for Liquid Glass Effect */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          {/*
            Liquid Glass Refraction Filter
            Based on Apple's Liquid Glass (WWDC 2025)
            - Uses feTurbulence for organic distortion pattern
            - feDisplacementMap creates the lens-like refraction
            - Chromatic aberration via RGB channel separation
            - Note: Full effect only works in Chromium browsers
          */}
          <filter id="liquid-glass-refraction" x="-20%" y="-20%" width="140%" height="140%">
            {/* Generate organic noise pattern for distortion */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003"
              numOctaves="3"
              seed="42"
              result="noise"
            />
            {/* Soften the noise for smoother distortion */}
            <feGaussianBlur in="noise" stdDeviation="4" result="softNoise" />
            {/* Apply displacement - creates the lens refraction effect */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* Chromatic aberration - separate RGB channels */}
            {/* Red channel - shift left */}
            <feColorMatrix
              in="displaced"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />
            <feOffset in="red" dx="-1" dy="0" result="redShift" />
            {/* Green channel - no shift */}
            <feColorMatrix
              in="displaced"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />
            {/* Blue channel - shift right */}
            <feColorMatrix
              in="displaced"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />
            <feOffset in="blue" dx="1" dy="0" result="blueShift" />
            {/* Recombine channels with screen blend */}
            <feBlend in="redShift" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blueShift" mode="screen" result="aberration" />
            {/* Blend with original for subtlety */}
            <feBlend in="aberration" in2="displaced" mode="normal" result="final" />
          </filter>
          {/* Simpler distortion filter for performance */}
          <filter id="liquid-glass-simple" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex flex-col gap-y-2 md:w-full">
        <LandingPageDesktopNavigation onSearchClick={openSearch} />
        <SidebarProvider className="absolute inset-0 flex flex-col items-start md:hidden">
          <LandingPageTopbar onSearchClick={openSearch} />
          <LandingPageMobileNavigation />
        </SidebarProvider>

        <div className="dark:bg-polar-950 relative flex flex-col px-4 pt-32 md:w-full md:px-0 md:pt-0">
          {children}
        </div>
        <LandingPageFooter />
      </div>
      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
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
        '-m-1 flex items-center gap-x-2 p-1 text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300',
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
    href: '/features/products',
    isActive: (pathname) => pathname.startsWith('/features'),
  },
  {
    title: 'Industries',
    href: '/industries',
    isActive: (pathname) => pathname.startsWith('/industries'),
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

const LandingPageDesktopNavigation = ({
  onSearchClick,
}: {
  onSearchClick: () => void
}) => {
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
          href: '/resources/client-hub',
          label: 'Client Hub',
          subtitle: 'Your project command center',
        },
      ],
    },
    {
      title: 'Industries',
      items: [
        {
          href: '/industries/aerospace',
          label: 'Aerospace & Defense',
          subtitle: 'Mission-critical systems',
        },
        {
          href: '/industries/biotech',
          label: 'Biotechnology',
          subtitle: 'Research & clinical platforms',
        },
        {
          href: '/industries/medical',
          label: 'Medical & Healthcare',
          subtitle: 'Patient & provider solutions',
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
    <div className="dark:text-polar-50 sticky top-0 z-50 hidden w-full flex-col items-center px-4 py-4 md:flex">
      {/* Liquid Glass Navbar - Three layer system */}
      <div className="group relative grid w-full grid-cols-[1fr_auto_1fr] items-center overflow-hidden rounded-full lg:max-w-7xl">
        {/* Layer 1: Backdrop blur + SVG distortion filter (Chrome-only for full effect) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            backdropFilter: 'blur(24px) saturate(180%) url(#liquid-glass-simple)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          }}
        />
        {/* Layer 2: Glass surface with specular highlights */}
        <div className="pointer-events-none absolute inset-0 rounded-full border border-white/40 bg-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.05),0_8px_32px_rgba(0,0,0,0.12)] dark:border-white/15 dark:bg-black/25 dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.5)]" />
        {/* Layer 3: Curved lens highlights - top arc and bottom reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_100%_50%_at_50%_-10%,rgba(255,255,255,0.6),transparent_60%)] dark:bg-[radial-gradient(ellipse_100%_50%_at_50%_-10%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_80%_30%_at_50%_110%,rgba(255,255,255,0.2),transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_30%_at_50%_110%,rgba(255,255,255,0.08),transparent_50%)]" />
        {/* Layer 4: Edge refraction - subtle color fringing at borders */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(255,200,200,0.08)_0%,transparent_3%,transparent_97%,rgba(200,200,255,0.08)_100%)] dark:bg-[linear-gradient(90deg,rgba(255,150,150,0.05)_0%,transparent_3%,transparent_97%,rgba(150,150,255,0.05)_100%)]" />
        {/* Content container with padding - responsive spacing */}
        <div className="relative z-10 col-span-3 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 xl:px-10">
          <Link href="/" className="relative z-10 shrink-0">
            <BttrLogotype variant="icon" size={40} />
          </Link>

          <ul className="relative z-10 flex flex-row gap-x-5 font-medium md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
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

          <div className="relative z-10 flex items-center gap-2 justify-self-end md:gap-3 lg:gap-4">
            <Link href="/portal/login" className="hidden lg:block">
              <Button variant="ghost" className="rounded-full">
                Client Login
              </Button>
            </Link>
            <SearchTrigger onClick={onSearchClick} />
            <div className="hidden xl:block">
              <BeaAnimation size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LandingPageTopbar = ({
  onSearchClick,
}: {
  onSearchClick: () => void
}) => {
  return (
    <div className="z-30 flex w-full flex-row items-center justify-between px-6 py-6 md:hidden md:px-12">
      <Link href="/">
        <BttrLogotype
          className="mt-1 ml-2 md:hidden"
          variant="logotype"
          size={100}
        />
      </Link>
      <div className="flex items-center gap-2">
        <button
          onClick={onSearchClick}
          className="rounded-lg p-2 text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <SidebarTrigger className="md:hidden" />
      </div>
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
