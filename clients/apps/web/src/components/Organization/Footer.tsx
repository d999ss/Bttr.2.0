import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import X from '@mui/icons-material/X'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { BttrLogotype } from '../Brand/BttrLogotype'
import { caseStudies } from '@/data/caseStudies'

const Footer = () => {
  const featuredWork = caseStudies.filter((study) => study.featured)
  const otherWork = caseStudies.filter((study) => !study.featured)

  return (
    <div className="mt-16 flex w-full flex-col items-center gap-y-12 bg-white dark:bg-black">
      <div className="flex w-full flex-col items-center px-6 py-16 md:max-w-5xl md:px-0 lg:py-32 xl:max-w-7xl">
        {/* Top section with logo and tagline */}
        <div className="mb-16 flex w-full flex-col items-start gap-y-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-y-4">
            <BttrLogotype
              className="ml-2 md:ml-0"
              variant="logotype"
              size={140}
            />
            <p className="dark:text-polar-400 max-w-md text-base text-gray-500">
              We design, build, and run digital systems for the science, aerospace, and biotech industries.
            </p>
          </div>
          <div className="flex flex-col items-start gap-y-4 md:items-end">
            <p className="dark:text-polar-500 text-sm uppercase tracking-wider text-gray-400">
              Follow Us
            </p>
            <div className="flex flex-row gap-x-5">
              <a
                href="https://x.com/makebttr"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-polar-500 text-gray-400 transition-colors hover:text-black dark:hover:text-white"
              >
                <X fontSize="medium" />
              </a>
              <a
                href="https://www.linkedin.com/company/makebttr"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-polar-500 text-gray-400 transition-colors hover:text-black dark:hover:text-white"
              >
                <LinkedIn fontSize="medium" />
              </a>
              <a
                href="https://instagram.com/make_bttr"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-polar-500 text-gray-400 transition-colors hover:text-black dark:hover:text-white"
              >
                <Instagram fontSize="medium" />
              </a>
            </div>
          </div>
        </div>

        {/* Main link grid */}
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {/* Capabilities */}
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 font-medium uppercase tracking-wider text-gray-400">
              Capabilities
            </h3>
            <div className="flex flex-col gap-y-3">
              <FooterLink href="/features/products">Design &amp; Strategy</FooterLink>
              <FooterLink href="/features/benefits">Engineering</FooterLink>
              <FooterLink href="/resources/merchant-of-record">Lifecycle Ownership</FooterLink>
              <FooterLink href="/features/customers">Security &amp; Compliance</FooterLink>
              <FooterLink href="/features/finance">Engagement Models</FooterLink>
              <FooterLink href="/features/usage-billing">Our Process</FooterLink>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 font-medium uppercase tracking-wider text-gray-400">
              Resources
            </h3>
            <div className="flex flex-col gap-y-3">
              <FooterLink href="/resources/why">Why Bttr.</FooterLink>
              <FooterLink href="/resources/pricing">Pricing</FooterLink>
              <FooterLink href="/features/analytics">Case Studies</FooterLink>
              <FooterLink href="/resources/client-hub">Client Hub</FooterLink>
              <FooterLink href="/portal/login">Client Login</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 font-medium uppercase tracking-wider text-gray-400">
              Company
            </h3>
            <div className="flex flex-col gap-y-3">
              <FooterLink href="/company">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/legal/terms">Terms of Service</FooterLink>
            </div>
          </div>

          {/* Featured Work */}
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 font-medium uppercase tracking-wider text-gray-400">
              Featured Work
            </h3>
            <div className="flex flex-col gap-y-3">
              {featuredWork.slice(0, 6).map((study) => (
                <FooterLink key={study.slug} href={`/work/${study.slug}`}>
                  {study.title}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* More Featured Work */}
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 font-medium uppercase tracking-wider text-gray-400">
              More Work
            </h3>
            <div className="flex flex-col gap-y-3">
              {featuredWork.slice(6).map((study) => (
                <FooterLink key={study.slug} href={`/work/${study.slug}`}>
                  {study.title}
                </FooterLink>
              ))}
              {otherWork.slice(0, 6 - featuredWork.slice(6).length).map((study) => (
                <FooterLink key={study.slug} href={`/work/${study.slug}`}>
                  {study.title}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* All Work */}
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 font-medium uppercase tracking-wider text-gray-400">
              All Work
            </h3>
            <div className="flex flex-col gap-y-3">
              {otherWork.slice(6 - featuredWork.slice(6).length, 5 + (6 - featuredWork.slice(6).length)).map((study) => (
                <FooterLink key={study.slug} href={`/work/${study.slug}`}>
                  {study.title}
                </FooterLink>
              ))}
              <FooterLink href="/work">View All Work →</FooterLink>
            </div>
          </div>
        </div>

        {/* Industries section */}
        <div className="dark:border-polar-800 mt-16 w-full border-t border-gray-200 pt-12">
          <h3 className="dark:text-polar-500 mb-6 text-sm font-medium uppercase tracking-wider text-gray-400">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <span className="dark:text-polar-300 text-gray-700">Aerospace &amp; Defense</span>
            <span className="dark:text-polar-300 text-gray-700">Biotech &amp; Life Sciences</span>
            <span className="dark:text-polar-300 text-gray-700">Medical Devices</span>
            <span className="dark:text-polar-300 text-gray-700">Healthcare Technology</span>
            <span className="dark:text-polar-300 text-gray-700">Manufacturing</span>
            <span className="dark:text-polar-300 text-gray-700">Financial Services</span>
            <span className="dark:text-polar-300 text-gray-700">Consumer Products</span>
            <span className="dark:text-polar-300 text-gray-700">Enterprise Software</span>
          </div>
        </div>

        {/* Contact info */}
        <div className="dark:border-polar-800 mt-12 w-full border-t border-gray-200 pt-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="dark:text-polar-500 mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
                New Business
              </h3>
              <a
                href="mailto:hello@makebttr.com"
                className="dark:text-white text-lg text-black transition-colors hover:text-gray-500 dark:hover:text-gray-300"
              >
                hello@makebttr.com
              </a>
            </div>
            <div>
              <h3 className="dark:text-polar-500 mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
                Careers
              </h3>
              <a
                href="mailto:careers@makebttr.com"
                className="dark:text-white text-lg text-black transition-colors hover:text-gray-500 dark:hover:text-gray-300"
              >
                careers@makebttr.com
              </a>
            </div>
            <div>
              <h3 className="dark:text-polar-500 mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
                Headquarters
              </h3>
              <p className="dark:text-white text-lg text-black">
                North America
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row with copyright */}
        <div className="dark:border-polar-800 mt-12 flex w-full flex-col items-center justify-between gap-y-4 border-t border-gray-200 pt-8 md:flex-row">
          <span className="dark:text-polar-500 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bttr. All rights reserved.
          </span>
          <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <FooterLink href="/legal/privacy">Privacy</FooterLink>
            <FooterLink href="/legal/terms">Terms</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/portal/login">Client Portal</FooterLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

const FooterLinkClassnames =
  'dark:text-white dark:hover:text-polar-100 flex flex-row items-center gap-x-1 text-black transition-colors hover:text-gray-500'

const FooterLink = (props: PropsWithChildren<{ href: string }>) => {
  const isExternal = props.href.toString().startsWith('http')

  if (isExternal) {
    return (
      <a className={FooterLinkClassnames} {...props}>
        {props.children}
      </a>
    )
  }

  return (
    <Link className={FooterLinkClassnames} {...props}>
      {props.children}
    </Link>
  )
}
