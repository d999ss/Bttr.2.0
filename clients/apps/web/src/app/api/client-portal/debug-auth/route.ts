import { createSupabaseServerClient } from '@/utils/supabase-server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const allCookies = cookieStore.getAll()

    // Find Supabase auth cookies
    const supabaseCookies = allCookies.filter(c => c.name.includes('supabase') || c.name.includes('sb-'))

    const supabase = await createSupabaseServerClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    return NextResponse.json({
      supabaseCookies: supabaseCookies.map(c => ({ name: c.name, valueLength: c.value.length })),
      allCookieNames: allCookies.map(c => c.name),
      user: user ? { id: user.id, email: user.email } : null,
      error: error?.message || null
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
