import { getPortalUser } from '@/utils/portal-auth'
import { getClientByEmail, supabase } from '@/utils/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await getPortalUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = await getClientByEmail(user.email)
  if (!client) {
    return NextResponse.json({ error: 'Not a client' }, { status: 404 })
  }

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('client_id', client.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }

  return NextResponse.json({ projects })
}
