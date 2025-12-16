import { getAuthenticatedUser } from '@/utils/user'
import { supabase, Client } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'donny@makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getAuthenticatedUser()
  return user?.email === ADMIN_EMAIL
}

// GET - List all clients
export async function GET() {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: clients, error } = await supabase
    .from('clients')
    .select(`
      *,
      projects (id, name, status),
      hours_balances (purchased_hours, used_hours)
    `)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 })
  }

  return NextResponse.json({ clients })
}

// POST - Create new client
export async function POST(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { name, email, company_name, xero_contact_id } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  // Create client
  const { data: client, error: clientError } = await supabase
    .from('clients')
    .insert({
      name,
      email,
      company_name,
      xero_contact_id,
    })
    .select()
    .single()

  if (clientError) {
    return NextResponse.json({ error: clientError.message }, { status: 500 })
  }

  // Create initial hours balance
  await supabase
    .from('hours_balances')
    .insert({
      client_id: client.id,
      purchased_hours: 0,
      used_hours: 0,
    })

  return NextResponse.json({ client }, { status: 201 })
}
