import { getAuthenticatedUser } from '@/utils/user'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'donny@makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getAuthenticatedUser()
  return user?.email === ADMIN_EMAIL
}

// POST - Add or log hours
export async function POST(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await getAuthenticatedUser()
  const body = await request.json()
  const { client_id, change_type, hours_amount, description } = body

  if (!client_id || !change_type || hours_amount === undefined) {
    return NextResponse.json({
      error: 'client_id, change_type, and hours_amount are required'
    }, { status: 400 })
  }

  // Get current balance
  const { data: currentBalance } = await supabase
    .from('hours_balances')
    .select('*')
    .eq('client_id', client_id)
    .single()

  let newPurchased = currentBalance?.purchased_hours || 0
  let newUsed = currentBalance?.used_hours || 0

  // Update based on change type
  if (change_type === 'purchased') {
    newPurchased += hours_amount
  } else if (change_type === 'used') {
    newUsed += hours_amount
  } else if (change_type === 'adjustment') {
    // Adjustment can be positive or negative, applied to purchased
    newPurchased += hours_amount
  }

  // Upsert hours balance
  const { error: balanceError } = await supabase
    .from('hours_balances')
    .upsert({
      id: currentBalance?.id,
      client_id,
      purchased_hours: newPurchased,
      used_hours: newUsed,
      updated_at: new Date().toISOString(),
    })

  if (balanceError) {
    return NextResponse.json({ error: balanceError.message }, { status: 500 })
  }

  // Log the change
  const { data: logEntry, error: logError } = await supabase
    .from('hours_log')
    .insert({
      client_id,
      change_type,
      hours_amount,
      description,
      logged_by: user?.email,
    })
    .select()
    .single()

  if (logError) {
    return NextResponse.json({ error: logError.message }, { status: 500 })
  }

  return NextResponse.json({
    log: logEntry,
    balance: {
      purchased_hours: newPurchased,
      used_hours: newUsed,
      remaining_hours: newPurchased - newUsed,
    }
  }, { status: 201 })
}

// PATCH - Update hourly rate or notes
export async function PATCH(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { client_id, hourly_rate, notes } = body

  if (!client_id) {
    return NextResponse.json({ error: 'client_id is required' }, { status: 400 })
  }

  const { data: balance, error } = await supabase
    .from('hours_balances')
    .update({
      hourly_rate,
      notes,
      updated_at: new Date().toISOString(),
    })
    .eq('client_id', client_id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ balance })
}
