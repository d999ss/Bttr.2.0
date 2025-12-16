import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Hardcoded fallbacks for when env vars aren't available
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oiekbwdggfjihihdmzsa.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZWtid2RnZ2ZqaWhpaGRtenNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDQ2NTEsImV4cCI6MjA4MTQyMDY1MX0.p7lMi2CShGRnGAMaFvfkJghD1cKXPTR-e4QK3lLFvYs'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/portal/dashboard'

  if (code) {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('Auth callback error:', error.message, error)
      return NextResponse.redirect(`${origin}/portal/login?error=${encodeURIComponent(error.message)}`)
    }

    if (data.session) {
      // Set the auth cookie
      const response = NextResponse.redirect(`${origin}${next}`)
      response.cookies.set('sb-oiekbwdggfjihihdmzsa-auth-token', JSON.stringify([
        data.session.access_token,
        data.session.refresh_token
      ]), {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      })
      return response
    }
  }

  // Return to login page with error
  return NextResponse.redirect(`${origin}/portal/login?error=no_code_received`)
}
