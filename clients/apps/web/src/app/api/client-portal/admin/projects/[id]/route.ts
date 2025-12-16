import { getAuthenticatedUser } from '@/utils/user'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'donny@makebttr.com'

async function isAdmin(): Promise<boolean> {
  const user = await getAuthenticatedUser()
  return user?.email === ADMIN_EMAIL
}

// GET - Get single project
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const { data: project, error } = await supabase
    .from('projects')
    .select(`
      *,
      clients (id, name, company_name)
    `)
    .eq('id', id)
    .single()

  if (error || !project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  return NextResponse.json({ project })
}

// PATCH - Update project
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()
  const {
    name,
    description,
    status,
    vercel_preview_url,
    vercel_production_url,
    figma_link
  } = body

  const { data: project, error } = await supabase
    .from('projects')
    .update({
      name,
      description,
      status,
      vercel_preview_url,
      vercel_production_url,
      figma_link,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ project })
}

// DELETE - Delete project
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
