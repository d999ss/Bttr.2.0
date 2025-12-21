import { getPortalUser } from '@/utils/portal-auth'
import { NextResponse } from 'next/server'

const ADMIN_EMAILS = ['donny@makebttr.com', 'd999ss@gmail.com']

export async function GET() {
  const user = await getPortalUser()
  const isAdmin = ADMIN_EMAILS.includes(user?.email || '')

  return NextResponse.json({ isAdmin, email: user?.email })
}
