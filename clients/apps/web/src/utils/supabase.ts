import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!

// Server-side Supabase client with service role key
// Use this in API routes only - never expose to client
export const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Types for our client portal tables
export interface Client {
  id: string
  name: string
  email: string
  company_name: string | null
  xero_contact_id: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  client_id: string
  name: string
  description: string | null
  status: 'active' | 'completed' | 'paused' | 'archived'
  vercel_preview_url: string | null
  vercel_production_url: string | null
  figma_link: string | null
  created_at: string
  updated_at: string
}

export interface HoursBalance {
  id: string
  client_id: string
  purchased_hours: number
  used_hours: number
  hourly_rate: number | null
  notes: string | null
  updated_at: string
}

export interface HoursLog {
  id: string
  client_id: string
  change_type: 'purchased' | 'used' | 'adjustment'
  hours_amount: number
  description: string | null
  logged_by: string | null
  created_at: string
}

// Helper to get client by email (for authenticated users)
export async function getClientByEmail(email: string): Promise<Client | null> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('email', email)
    .eq('is_active', true)
    .single()

  if (error || !data) return null
  return data as Client
}

// Helper to get client with all related data
export async function getClientWithData(email: string) {
  const { data: client, error } = await supabase
    .from('clients')
    .select(`
      *,
      projects (*),
      hours_balances (*)
    `)
    .eq('email', email)
    .eq('is_active', true)
    .single()

  if (error || !client) return null
  return client
}

// Helper to get hours log for a client
export async function getHoursLog(clientId: string): Promise<HoursLog[]> {
  const { data, error } = await supabase
    .from('hours_log')
    .select('*')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false })

  if (error) return []
  return data as HoursLog[]
}
