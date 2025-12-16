import { createClient as createSupabaseClient } from '@supabase/supabase-js'

let browserClient: ReturnType<typeof createSupabaseClient> | null = null

export function getSupabaseBrowserClient() {
  if (typeof window === 'undefined') {
    throw new Error('getSupabaseBrowserClient should only be called in the browser')
  }

  if (!browserClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!url || !anonKey) {
      throw new Error('Supabase environment variables not configured')
    }

    browserClient = createSupabaseClient(url, anonKey, {
      auth: {
        flowType: 'pkce',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  }

  return browserClient
}
