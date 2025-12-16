import { createClient as createSupabaseClient } from '@supabase/supabase-js'

let browserClient: ReturnType<typeof createSupabaseClient> | null = null

// Supabase configuration - hardcoded fallbacks for when env vars aren't available
// The anon key is public/safe to expose (it's the service_role key that must be secret)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oiekbwdggfjihihdmzsa.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZWtid2RnZ2ZqaWhpaGRtenNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDQ2NTEsImV4cCI6MjA4MTQyMDY1MX0.p7lMi2CShGRnGAMaFvfkJghD1cKXPTR-e4QK3lLFvYs'

export function getSupabaseBrowserClient() {
  if (typeof window === 'undefined') {
    throw new Error('getSupabaseBrowserClient should only be called in the browser')
  }

  if (!browserClient) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error('Supabase environment variables not configured')
    }

    browserClient = createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        flowType: 'pkce',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false, // We'll handle this manually in callback
      },
    })
  }

  return browserClient
}
