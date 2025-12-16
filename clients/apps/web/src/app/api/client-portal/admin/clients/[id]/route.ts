import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'donny@makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getPortalUser()
  return user?.email === ADMIN_EMAIL
}

// GET - Get single client
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const { data: client, error } = await supabase
    .from('clients')
    .select(`
      *,
      projects (*),
      hours_balances (*),
      hours_log (*)
    `)
    .eq('id', id)
    .single()

  if (error || !client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }

  return NextResponse.json({ client })
}

// PATCH - Update client
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()
  const { name, email, company_name, xero_contact_id, is_active } = body

  const { data: client, error } = await supabase
    .from('clients')
    .update({
      name,
      email,
      company_name,
      xero_contact_id,
      is_active,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ client })
}

// DELETE - Delete client
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const { error } = await supabase
    .from('clients')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
