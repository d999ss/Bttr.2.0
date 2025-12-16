import { getAuthenticatedUser } from '@/utils/user'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'donny@makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getAuthenticatedUser()
  return user?.email === ADMIN_EMAIL
}

// GET - List all projects (optionally filtered by client)
export async function GET(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const clientId = searchParams.get('client_id')

  let query = supabase
    .from('projects')
    .select(`
      *,
      clients (id, name, company_name)
    `)
    .order('created_at', { ascending: false })

  if (clientId) {
    query = query.eq('client_id', clientId)
  }

  const { data: projects, error } = await query

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }

  return NextResponse.json({ projects })
}

// POST - Create new project
export async function POST(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const {
    client_id,
    name,
    description,
    status,
    vercel_preview_url,
    vercel_production_url,
    figma_link
  } = body

  if (!client_id || !name) {
    return NextResponse.json({ error: 'Client ID and name are required' }, { status: 400 })
  }

  const { data: project, error } = await supabase
    .from('projects')
    .insert({
      client_id,
      name,
      description,
      status: status || 'active',
      vercel_preview_url,
      vercel_production_url,
      figma_link,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ project }, { status: 201 })
}
