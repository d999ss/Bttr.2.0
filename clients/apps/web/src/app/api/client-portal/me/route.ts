import { getAuthenticatedUser } from '@/utils/user'
import { getClientWithData } from '@/utils/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await getAuthenticatedUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const client = await getClientWithData(user.email)

  if (!client) {
    return NextResponse.json({ error: 'Not a client' }, { status: 404 })
  }

  return NextResponse.json(client)
}
