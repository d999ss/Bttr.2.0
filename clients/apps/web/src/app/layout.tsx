import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { SkipToContent } from '@/components/Accessibility/SkipToContent'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import SandboxBanner from '@/components/Sandbox/SandboxBanner'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/SEO/CaseStudyJsonLd'
import { UserContextProvider } from '@/providers/auth'
import { getServerSideAPI } from '@/utils/client/serverside'
import { CONFIG } from '@/utils/config'
import { getAuthenticatedUser, getUserOrganizations } from '@/utils/user'
import { schemas } from '@polar-sh/client'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { Metadata } from 'next/types'
import {
  NavigationHistoryProvider,
  PolarNuqsProvider,
  PolarPostHogProvider,
  PolarQueryClientProvider,
} from './providers'

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata: Metadata = {
    title: {
      template: '%s | Bttr.',
      default: 'Bttr.',
    },
    description:
      'We design, build, and operate mission critical digital products for organizations where failure is not an option.',
    openGraph: {
      images: 'https://www.makebttr.com/assets/brand/bttr_og.png',
      type: 'website',
      siteName: 'Bttr.',
      title: 'Bttr. | Designed to Adapt. Engineered to Win.',
      description:
        'We design, build, and operate mission critical digital products for organizations where failure is not an option.',
      locale: 'en_US',
    },
    twitter: {
      images: 'https://www.makebttr.com/assets/brand/bttr_og.png',
      card: 'summary_large_image',
      title: 'Bttr. | Designed to Adapt. Engineered to Win.',
      description:
        'We design, build, and operate mission critical digital products for organizations where failure is not an option.',
    },
    metadataBase: new URL('https://makebttr.com/'),
    alternates: {
      canonical: 'https://makebttr.com/',
    },
  }

  // Environment-specific metadata
  if (CONFIG.IS_SANDBOX) {
    return {
      ...baseMetadata,
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    }
  }

  return {
    ...baseMetadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  const api = await getServerSideAPI()

  let authenticatedUser: schemas['UserRead'] | undefined = undefined
  let userOrganizations: schemas['Organization'][] = []

  try {
    authenticatedUser = await getAuthenticatedUser()
    userOrganizations = await getUserOrganizations(api)
  } catch (e) {
    // Silently swallow errors during build, typically when rendering static pages

    if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
      throw e
    }
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`antialiased ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        {CONFIG.ENVIRONMENT === 'development' && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {CONFIG.ENVIRONMENT === 'development' ? (
          <>
            <link
              href="/favicon.svg"
              rel="icon"
              type="image/svg+xml"
              media="(prefers-color-scheme: dark)"
            />
            <link
              href="/favicon-dark.svg"
              rel="icon"
              type="image/svg+xml"
              media="(prefers-color-scheme: light)"
            />
          </>
        ) : (
          <>
            <link
              href="/favicon.svg"
              rel="icon"
              type="image/svg+xml"
              media="(prefers-color-scheme: dark)"
            />
            <link
              href="/favicon-dark.svg"
              rel="icon"
              type="image/svg+xml"
              media="(prefers-color-scheme: light)"
            />
          </>
        )}
      </head>
      <body
        style={{
          textRendering: 'optimizeLegibility',
        }}
      >
        <SkipToContent />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <UserContextProvider
          user={authenticatedUser}
          userOrganizations={userOrganizations}
        >
          <PolarPostHogProvider>
            <PolarQueryClientProvider>
              <PolarNuqsProvider>
                <NavigationHistoryProvider>
                  <ErrorBoundary>
                    <SandboxBanner />
                    <main id="main-content">
                      {children}
                    </main>
                  </ErrorBoundary>
                  <Analytics />
                  <SpeedInsights />
                </NavigationHistoryProvider>
              </PolarNuqsProvider>
            </PolarQueryClientProvider>
          </PolarPostHogProvider>
        </UserContextProvider>
      </body>
    </html>
  )
}
