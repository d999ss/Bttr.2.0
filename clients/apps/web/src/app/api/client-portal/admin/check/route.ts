import { getAuthenticatedUser } from '@/utils/user'
import { NextResponse } from 'next/server'

const ADMIN_EMAIL = 'donny@makebttr.com'

export async function GET() {
  const user = await getAuthenticatedUser()
  const isAdmin = user?.email === ADMIN_EMAIL

  return NextResponse.json({ isAdmin, email: user?.email })
}
