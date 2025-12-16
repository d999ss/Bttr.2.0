import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export interface PortalUser {
  id: string
  email: string
}

// Hardcoded fallbacks for when env vars aren't available
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oiekbwdggfjihihdmzsa.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZWtid2RnZ2ZqaWhpaGRtenNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDQ2NTEsImV4cCI6MjA4MTQyMDY1MX0.p7lMi2CShGRnGAMaFvfkJghD1cKXPTR-e4QK3lLFvYs'

export async function getPortalUser(): Promise<PortalUser | null> {
  const supabaseUrl = SUPABASE_URL
  const supabaseAnonKey = SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables not configured')
    return null
  }

  // Get cookies for auth
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('sb-oiekbwdggfjihihdmzsa-auth-token')

  if (!accessToken) {
    return null
  }

  try {
    // Parse the cookie value (it's a JSON array with [access_token, refresh_token])
    const tokenData = JSON.parse(accessToken.value)
    const token = Array.isArray(tokenData) ? tokenData[0] : tokenData

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
      return null
    }

    return {
      id: user.id,
      email: user.email!,
    }
  } catch (error) {
    console.error('Error getting portal user:', error)
    return null
  }
}
