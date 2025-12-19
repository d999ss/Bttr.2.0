import { NextRequest, NextResponse } from 'next/server'

const NOTIFY_EMAIL = 'd999ss@gmail.com'
const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { email, userId, provider } = await request.json()

    // Log to console regardless of email setup
    console.log('🎉 New signup:', { email, userId, provider, timestamp: new Date().toISOString() })

    // If Resend is configured, send email notification
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bttr Portal <notifications@makebttr.com>',
          to: [NOTIFY_EMAIL],
          subject: `🎉 New Portal Signup: ${email}`,
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #D2A62C;">New Client Portal Signup</h2>
              <p>A new user has signed up for the Bttr client portal:</p>
              <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${email || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Provider</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${provider || 'Unknown'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">User ID</td>
                  <td style="padding: 10px; border: 1px solid #eee; font-size: 12px;">${userId || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Time</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              <p style="color: #666; font-size: 14px;">
                <a href="https://makebttr.com/portal/dashboard" style="color: #D2A62C;">View Portal Dashboard</a>
              </p>
            </div>
          `,
        }),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('Failed to send signup notification email:', error)
      } else {
        console.log('Signup notification email sent successfully')
      }
    } else {
      console.log('RESEND_API_KEY not configured - skipping email notification')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in notify-signup:', error)
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
