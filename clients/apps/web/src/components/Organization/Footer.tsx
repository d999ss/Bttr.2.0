import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { BttrLogotype } from '../Brand/BttrLogotype'

const Footer = () => {
  return (
    <div className="mt-16 flex w-full flex-col items-center gap-y-12 bg-white dark:bg-black">
      <div className="flex w-full flex-col items-center px-6 py-16 md:max-w-3xl md:px-0 lg:py-32 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:justify-between md:gap-16 lg:grid-cols-6">
          <div className="flex h-full flex-1 flex-col justify-between gap-y-6 md:col-span-2">
            <span className="text-black md:ml-0">
              <BttrLogotype
                className="ml-2 md:ml-0"
                variant="logotype"
                size={120}
              />
            </span>
            <div className="flex flex-col gap-y-6">
              <Link
                href="/contact"
                className="flex w-fit flex-row items-center gap-x-2 border-b border-black pb-0.5 dark:border-white"
              >
                <span>Build something that lasts</span>
                <ArrowOutwardOutlined fontSize="inherit" />
              </Link>
              <span className="dark:text-polar-500 w-full text-gray-500">
                &copy; Bttr. Digital Product Agency {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 text-gray-500">Capabilities</h3>
            <div className="flex flex-col gap-y-3">
              <FooterLink href="/features/products">Design and Strategy</FooterLink>
              <FooterLink href="/features/benefits">Engineering</FooterLink>
              <FooterLink href="/resources/merchant-of-record">Lifecycle Ownership</FooterLink>
              <FooterLink href="/features/customers">Security and Compliance</FooterLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 text-gray-500">Resources</h3>
            <div className="flex flex-col gap-y-3">
              <FooterLink href="/resources/why">Why Bttr</FooterLink>
              <FooterLink href="/resources/pricing">Engagement Models</FooterLink>
              <FooterLink href="/features/analytics">Case Studies</FooterLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 text-sm">
            <h3 className="dark:text-polar-500 text-gray-500">Company</h3>
            <div className="flex flex-col gap-y-3">
              <FooterLink href="/company">About</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/legal/privacy">
                Privacy Policy
              </FooterLink>
              <FooterLink href="/legal/terms">
                Terms of Service
              </FooterLink>
            </div>
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
