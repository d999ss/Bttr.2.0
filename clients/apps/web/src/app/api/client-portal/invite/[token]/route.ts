import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

// GET - Validate invite token and get client info
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 })
  }

  const { data: client, error } = await supabase
    .from('clients')
    .select('id, name, email, company_name, invite_accepted_at')
    .eq('invite_token', token)
    .single()

  if (error || !client) {
    return NextResponse.json({ error: 'Invalid or expired invite' }, { status: 404 })
  }

  if (client.invite_accepted_at) {
    return NextResponse.json({ error: 'Invite already used', alreadyAccepted: true }, { status: 400 })
  }

  return NextResponse.json({
    client: {
      id: client.id,
      name: client.name,
      email: client.email,
      company_name: client.company_name,
    }
  })
}

// POST - Accept invite (link Supabase user to client)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params
  const body = await request.json()
  const { user_id, user_email } = body

  if (!token || !user_id) {
    return NextResponse.json({ error: 'Token and user ID are required' }, { status: 400 })
  }

  // Find client by invite token
  const { data: client, error: findError } = await supabase
    .from('clients')
    .select('id, email, invite_accepted_at')
    .eq('invite_token', token)
    .single()

  if (findError || !client) {
    return NextResponse.json({ error: 'Invalid invite token' }, { status: 404 })
  }

  if (client.invite_accepted_at) {
    return NextResponse.json({ error: 'Invite already accepted' }, { status: 400 })
  }

  // Update client - mark invite as accepted and optionally update email if different
  const updateData: Record<string, unknown> = {
    invite_accepted_at: new Date().toISOString(),
  }

  // If user signed up with different email than invite, update to their actual email
  if (user_email && user_email !== client.email) {
    updateData.email = user_email
  }

  const { error: updateError } = await supabase
    .from('clients')
    .update(updateData)
    .eq('id', client.id)

  if (updateError) {
    return NextResponse.json({ error: 'Failed to accept invite' }, { status: 500 })
  }

  return NextResponse.json({ success: true, client_id: client.id })
}
