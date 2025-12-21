import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// DEV ONLY - Creates a session for testing
// This should be removed or disabled in production

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oiekbwdggfjihihdmzsa.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZWtid2RnZ2ZqaWhpaGRtenNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDQ2NTEsImV4cCI6MjA4MTQyMDY1MX0.p7lMi2CShGRnGAMaFvfkJghD1cKXPTR-e4QK3lLFvYs'
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

const TEST_PASSWORD = 'devtest123!'

export async function GET(request: NextRequest) {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 })
  }

  const email = request.nextUrl.searchParams.get('email') || 'donny@makebttr.com'
  const action = request.nextUrl.searchParams.get('action') || 'login'

  if (!SUPABASE_SERVICE_KEY) {
    return NextResponse.json({
      error: 'SUPABASE_SERVICE_KEY not set',
      hint: 'Add SUPABASE_SERVICE_KEY to .env.local'
    }, { status: 500 })
  }

  try {
    const cookieStore = await cookies()
    const cookiesToSetLater: { name: string; value: string; options: any }[] = []

    // Create admin client for user management
    const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    // Create SSR client for session - collect cookies to set later
    const supabaseSSR = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSetLater.push(...cookiesToSet)
        }
      }
    })

    // Helper to create redirect with cookies
    const createRedirectWithCookies = (url: string) => {
      const response = NextResponse.redirect(new URL(url, request.url))
      cookiesToSetLater.forEach(({ name, value, options }) => {
        response.cookies.set(name, value, options)
      })
      return response
    }

    if (action === 'create') {
      // Create user with password
      const { data: createData, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password: TEST_PASSWORD,
        email_confirm: true
      })

      if (createError && !createError.message.includes('already been registered')) {
        return NextResponse.json({ error: createError.message }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: `User ${email} created. Now visit /api/client-portal/dev-login?email=${email} to login`,
        password: TEST_PASSWORD
      })
    }

    // Try to sign in with password
    const { data: signInData, error: signInError } = await supabaseSSR.auth.signInWithPassword({
      email,
      password: TEST_PASSWORD
    })

    if (signInError) {
      // If invalid credentials, try updating the user's password
      if (signInError.message.includes('Invalid login')) {
        // Find user by email
        const { data: users } = await supabaseAdmin.auth.admin.listUsers()
        const existingUser = users?.users?.find(u => u.email === email)

        if (existingUser) {
          // Update password
          await supabaseAdmin.auth.admin.updateUserById(existingUser.id, {
            password: TEST_PASSWORD
          })

          // Try signing in again
          const { error: retryError } = await supabaseSSR.auth.signInWithPassword({
            email,
            password: TEST_PASSWORD
          })

          if (retryError) {
            return NextResponse.json({ error: `After password update: ${retryError.message}` }, { status: 500 })
          }

          // Redirect to dashboard with cookies
          return createRedirectWithCookies('/portal/dashboard')
        }
      }

      // If user doesn't exist, create them
      if (signInError.message.includes('not found') || signInError.message.includes('Invalid login')) {
        const { error: createError } = await supabaseAdmin.auth.admin.createUser({
          email,
          password: TEST_PASSWORD,
          email_confirm: true
        })

        if (createError && !createError.message.includes('already been registered')) {
          return NextResponse.json({
            error: `Could not create user: ${createError.message}`,
            hint: `Try: /api/client-portal/dev-login?email=${email}&action=create`
          }, { status: 500 })
        }

        // Try signing in again
        const { data: retryData, error: retryError } = await supabaseSSR.auth.signInWithPassword({
          email,
          password: TEST_PASSWORD
        })

        if (retryError) {
          return NextResponse.json({ error: retryError.message }, { status: 500 })
        }

        // Redirect to dashboard with cookies
        return createRedirectWithCookies('/portal/dashboard')
      }

      return NextResponse.json({ error: signInError.message }, { status: 500 })
    }

    // Success - redirect to dashboard with cookies
    return createRedirectWithCookies('/portal/dashboard')

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
