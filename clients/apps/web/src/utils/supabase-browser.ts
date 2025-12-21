import { createBrowserClient } from '@supabase/ssr'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oiekbwdggfjihihdmzsa.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZWtid2RnZ2ZqaWhpaGRtenNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDQ2NTEsImV4cCI6MjA4MTQyMDY1MX0.p7lMi2CShGRnGAMaFvfkJghD1cKXPTR-e4QK3lLFvYs'

let browserClient: ReturnType<typeof createBrowserClient> | null = null

export function getSupabaseBrowserClient() {
  if (typeof window === 'undefined') {
    throw new Error('getSupabaseBrowserClient should only be called in the browser')
  }

  if (!browserClient) {
    browserClient = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  }

  return browserClient
}
