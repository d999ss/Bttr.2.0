import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

const ADMIN_EMAILS = ['donny@makebttr.com', 'd999ss@gmail.com']
const RESEND_API_KEY = process.env.RESEND_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getPortalUser()
  return ADMIN_EMAILS.includes(user?.email || '')
}

// POST - Generate invite token and send email
export async function POST(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { client_id } = body

  if (!client_id) {
    return NextResponse.json({ error: 'Client ID is required' }, { status: 400 })
  }

  // Get client
  const { data: client, error: clientError } = await supabase
    .from('clients')
    .select('*')
    .eq('id', client_id)
    .single()

  if (clientError || !client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }

  // Generate new invite token
  const inviteToken = randomUUID()

  // Update client with invite token
  const { error: updateError } = await supabase
    .from('clients')
    .update({
      invite_token: inviteToken,
      invite_sent_at: new Date().toISOString(),
    })
    .eq('id', client_id)

  if (updateError) {
    return NextResponse.json({ error: 'Failed to generate invite' }, { status: 500 })
  }

  const inviteUrl = `${BASE_URL}/portal/invite/${inviteToken}`

  // Send email via Resend
  if (RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bttr Portal <onboarding@resend.dev>',
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
      }
    } catch (error) {
      console.error('Error sending invite email:', error)
    }
  } else {
    console.log('RESEND_API_KEY not configured - invite URL:', inviteUrl)
  }

  return NextResponse.json({
    success: true,
    inviteUrl,
    message: RESEND_API_KEY ? 'Invite sent to ' + client.email : 'Invite URL generated (email not sent - no API key)'
  })
}
