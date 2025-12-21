import { createSupabaseServerClient } from './supabase-server'

export interface PortalUser {
  id: string
  email: string
}

export async function getPortalUser(): Promise<PortalUser | null> {
  try {
    const supabase = await createSupabaseServerClient()
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
