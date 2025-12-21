import { getPortalUser } from '@/utils/portal-auth'
import { getClientWithData } from '@/utils/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await getPortalUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = await getClientWithData(user.email)

  if (!client) {
    return NextResponse.json({ error: 'Not a client' }, { status: 404 })
  }

  return NextResponse.json({
    user: { email: user.email },
    client,
  })
}
