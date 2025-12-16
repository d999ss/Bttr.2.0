import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // If there's an OAuth code on the homepage, redirect to the client-side callback
  const code = searchParams.get('code')
  if (code && pathname === '/') {
    const callbackUrl = new URL('/portal/callback', request.url)
    callbackUrl.searchParams.set('code', code)
    // Preserve any other params
    const next = searchParams.get('next')
    if (next) {
      callbackUrl.searchParams.set('next', next)
    }
    return NextResponse.redirect(callbackUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match homepage where OAuth might redirect with code
    '/',
  ],
}
