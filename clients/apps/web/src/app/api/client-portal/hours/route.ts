import { getAuthenticatedUser } from '@/utils/user'
import { getClientByEmail, getHoursLog, supabase } from '@/utils/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await getAuthenticatedUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = await getClientByEmail(user.email)
  if (!client) {
    return NextResponse.json({ error: 'Not a client' }, { status: 404 })
  }

  // Get hours balance
  const { data: balance, error: balanceError } = await supabase
    .from('hours_balances')
    .select('*')
    .eq('client_id', client.id)
    .single()

  // Get hours log
  const log = await getHoursLog(client.id)

  return NextResponse.json({
    balance: balance || {
      purchased_hours: 0,
      used_hours: 0,
      hourly_rate: null,
    },
    log,
  })
}
