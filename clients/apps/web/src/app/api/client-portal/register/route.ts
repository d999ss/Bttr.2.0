import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const user = await getPortalUser()
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

  // Create client (phone field is optional - column may not exist yet)
  const clientData: Record<string, string | null> = {
    name,
    email: user.email,
    company_name: company_name || null,
  }

  // Try with phone first, fall back to without if column doesn't exist
  let client
  let clientError

  if (phone) {
    const result = await supabase
      .from('clients')
      .insert({ ...clientData, phone })
      .select()
      .single()

    if (result.error?.message?.includes('phone')) {
      // Phone column doesn't exist, try without it
      const fallback = await supabase
        .from('clients')
        .insert(clientData)
        .select()
        .single()
      client = fallback.data
      clientError = fallback.error
    } else {
      client = result.data
      clientError = result.error
    }
  } else {
    const result = await supabase
      .from('clients')
      .insert(clientData)
      .select()
      .single()
    client = result.data
    clientError = result.error
  }

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
