import { getPortalUser } from '@/utils/portal-auth'
import { supabase, Client } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

const ADMIN_EMAILS = ['donny@makebttr.com', 'd999ss@gmail.com']
const RESEND_API_KEY = process.env.RESEND_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getPortalUser()
  return ADMIN_EMAILS.includes(user?.email || '')
}

async function sendInviteEmail(client: { id: string; name: string; email: string }, inviteToken: string) {
  const inviteUrl = `${BASE_URL}/portal/invite/${inviteToken}`

  if (!RESEND_API_KEY) {
    console.log('RESEND_API_KEY not configured - invite URL:', inviteUrl)
    return { sent: false, inviteUrl }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Bttr <noreply@makebttr.com>',
        to: [client.email],
        subject: `You're invited to the Bttr Client Portal`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #D2A62C; font-size: 28px; font-weight: 600; margin: 0;">Bttr.</h1>
            </div>

            <h2 style="color: #111; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">
              Welcome to your Client Portal
            </h2>

            <p style="color: #444; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              Hi ${client.name},
            </p>

            <p style="color: #444; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              You've been invited to access your Bttr client portal where you can view your projects, track milestones, and access shared files.
            </p>

            <div style="text-align: center; margin: 32px 0;">
              <a href="${inviteUrl}" style="display: inline-block; background-color: #D2A62C; color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                Access Your Portal
              </a>
            </div>

            <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 32px 0 0 0;">
              Or copy this link: <a href="${inviteUrl}" style="color: #D2A62C;">${inviteUrl}</a>
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;" />

            <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
              Bttr. — Designed to Adapt. Engineered to Win.<br />
              <a href="https://makebttr.com" style="color: #999;">makebttr.com</a>
            </p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      console.error('Failed to send invite email:', await response.text())
      return { sent: false, inviteUrl }
    }

    return { sent: true, inviteUrl }
  } catch (error) {
    console.error('Error sending invite email:', error)
    return { sent: false, inviteUrl }
  }
}

// GET - List all clients
export async function GET() {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: clients, error } = await supabase
    .from('clients')
    .select(`
      *,
      projects (id, name, status),
      hours_balances (purchased_hours, used_hours)
    `)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 })
  }

  return NextResponse.json({ clients })
}

// POST - Create new client and send invite
export async function POST(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { name, email, company_name, xero_contact_id, send_invite = true } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  // Generate invite token
  const inviteToken = randomUUID()

  // Create client with invite token
  const { data: client, error: clientError } = await supabase
    .from('clients')
    .insert({
      name,
      email,
      company_name,
      xero_contact_id,
      invite_token: inviteToken,
      invite_sent_at: send_invite ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (clientError) {
    return NextResponse.json({ error: clientError.message }, { status: 500 })
  }

  // Create initial hours balance
  await supabase
    .from('hours_balances')
    .insert({
      client_id: client.id,
      purchased_hours: 0,
      used_hours: 0,
    })

  // Send invite email automatically
  let inviteResult = { sent: false, inviteUrl: '' }
  if (send_invite) {
    inviteResult = await sendInviteEmail(
      { id: client.id, name: client.name, email: client.email },
      inviteToken
    )
  }

  return NextResponse.json({
    client,
    invite: {
      sent: inviteResult.sent,
      url: inviteResult.inviteUrl,
      message: inviteResult.sent ? `Invite sent to ${email}` : 'Invite URL generated (check console for details)'
    }
  }, { status: 201 })
}
