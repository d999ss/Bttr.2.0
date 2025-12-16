import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export interface PortalUser {
  id: string
  email: string
}

export async function getPortalUser(): Promise<PortalUser | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

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
