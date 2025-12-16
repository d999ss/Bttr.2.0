import { NextResponse } from 'next/server'
import { seedXeroTokens } from '@/utils/xero'
import fs from 'fs'

// This endpoint seeds Xero tokens from a local file into Supabase
// Only run this once to initialize, or when tokens need to be reset
// Protected by checking for admin secret

export async function POST(request: Request) {
  try {
    // Check for admin secret
    const { secret, tokenPath } = await request.json()

    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Read tokens from local file
    const path = tokenPath || process.env.XERO_TOKEN_PATH
    if (!path) {
      return NextResponse.json({
        error: 'No token path provided'
      }, { status: 400 })
    }

    let tokens
    try {
      const tokenData = fs.readFileSync(path, 'utf8')
      tokens = JSON.parse(tokenData)
    } catch (error) {
      return NextResponse.json({
        error: 'Failed to read tokens from file',
        message: error instanceof Error ? error.message : 'Unknown error'
      }, { status: 500 })
    }

    // Seed to Supabase
    await seedXeroTokens({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expires_at: tokens.expires_at
    })

    return NextResponse.json({
      success: true,
      message: 'Xero tokens seeded to Supabase successfully'
    })
  } catch (error) {
    console.error('Seed tokens error:', error)
    return NextResponse.json({
      error: 'Failed to seed tokens',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
