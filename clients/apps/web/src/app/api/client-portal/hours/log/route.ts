import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await getPortalUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get client ID
  const { data: client } = await supabase
    .from('clients')
    .select('id')
    .eq('email', user.email)
    .single()

  if (!client) {
    return NextResponse.json({ error: 'Not a client' }, { status: 404 })
  }

  // Fetch hours log
  const { data: hoursLog, error } = await supabase
    .from('hours_log')
    .select('*')
    .eq('client_id', client.id)
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    return NextResponse.json([])
  }

  return NextResponse.json(hoursLog || [])
}
