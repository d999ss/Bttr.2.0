import { getAuthenticatedUser } from '@/utils/user'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const user = await getAuthenticatedUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { name, company_name, phone } = body

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  // Check if client already exists
  const { data: existing } = await supabase
    .from('clients')
    .select('id')
    .eq('email', user.email)
    .single()

  if (existing) {
    return NextResponse.json({ error: 'Account already exists' }, { status: 400 })
  }

  // Create client
  const { data: client, error: clientError } = await supabase
    .from('clients')
    .insert({
      name,
      email: user.email,
      company_name: company_name || null,
      phone: phone || null,
    })
    .select()
    .single()

  if (clientError) {
    console.error('Client creation error:', clientError)
    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 })
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
