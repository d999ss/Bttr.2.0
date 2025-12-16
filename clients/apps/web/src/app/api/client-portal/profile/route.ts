import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

// PATCH - Update profile
export async function PATCH(request: NextRequest) {
  const user = await getPortalUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { name, company_name, phone } = body

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  // Check if client exists
  const { data: existing } = await supabase
    .from('clients')
    .select('id')
    .eq('email', user.email)
    .single()

  if (!existing) {
    // Create new client if doesn't exist
    const clientData: Record<string, string | null> = {
      name,
      email: user.email,
      company_name: company_name || null,
    }

    // Try with phone, fall back without
    let client
    let clientError

    if (phone) {
      const result = await supabase
        .from('clients')
        .insert({ ...clientData, phone })
        .select()
        .single()

      if (result.error?.message?.includes('phone')) {
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
      return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 })
    }

    // Create initial hours balance
    await supabase
      .from('hours_balances')
      .insert({
        client_id: client.id,
        purchased_hours: 0,
        used_hours: 0,
      })

    return NextResponse.json({ client })
  }

  // Update existing client
  const updateData: Record<string, string | null> = {
    name,
    company_name: company_name || null,
  }

  // Try with phone first
  if (phone !== undefined) {
    const result = await supabase
      .from('clients')
      .update({ ...updateData, phone: phone || null })
      .eq('id', existing.id)
      .select()
      .single()

    if (result.error?.message?.includes('phone')) {
      // Phone column doesn't exist, update without it
      const { data: client, error } = await supabase
        .from('clients')
        .update(updateData)
        .eq('id', existing.id)
        .select()
        .single()

      if (error) {
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
      }

      return NextResponse.json({ client })
    }

    if (result.error) {
      return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
    }

    return NextResponse.json({ client: result.data })
  }

  // No phone provided
  const { data: client, error } = await supabase
    .from('clients')
    .update(updateData)
    .eq('id', existing.id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }

  return NextResponse.json({ client })
}
