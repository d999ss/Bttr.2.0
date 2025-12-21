import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAILS = ['donny@makebttr.com', 'd999ss@gmail.com']

async function isAdmin(): Promise<boolean> {
  const user = await getPortalUser()
  return ADMIN_EMAILS.includes(user?.email || '')
}

// GET - List milestones for a client
export async function GET(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const clientId = request.nextUrl.searchParams.get('client_id')
  const projectId = request.nextUrl.searchParams.get('project_id')

  let query = supabase
    .from('milestones')
    .select('*, projects(id, name)')
    .order('sort_order', { ascending: true })
    .order('due_date', { ascending: true })

  if (clientId) {
    query = query.eq('client_id', clientId)
  }

  if (projectId) {
    query = query.eq('project_id', projectId)
  }

  const { data: milestones, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ milestones })
}

// POST - Create a new milestone
export async function POST(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { client_id, project_id, type, title, description, due_date, amount, sort_order } = body

  if (!client_id || !type || !title) {
    return NextResponse.json({ error: 'client_id, type, and title are required' }, { status: 400 })
  }

  if (!['project', 'payment'].includes(type)) {
    return NextResponse.json({ error: 'type must be "project" or "payment"' }, { status: 400 })
  }

  const { data: milestone, error } = await supabase
    .from('milestones')
    .insert({
      client_id,
      project_id: project_id || null,
      type,
      title,
      description: description || null,
      due_date: due_date || null,
      amount: type === 'payment' ? amount : null,
      sort_order: sort_order || 0,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ milestone }, { status: 201 })
}

// PATCH - Update a milestone
export async function PATCH(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { id, ...updates } = body

  if (!id) {
    return NextResponse.json({ error: 'Milestone ID is required' }, { status: 400 })
  }

  // Filter valid fields
  const validFields = ['project_id', 'type', 'title', 'description', 'due_date', 'completed_at', 'amount', 'sort_order']
  const filteredUpdates: Record<string, unknown> = {}
  for (const field of validFields) {
    if (field in updates) {
      filteredUpdates[field] = updates[field]
    }
  }

  const { data: milestone, error } = await supabase
    .from('milestones')
    .update(filteredUpdates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ milestone })
}

// DELETE - Delete a milestone
export async function DELETE(request: NextRequest) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = request.nextUrl.searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Milestone ID is required' }, { status: 400 })
  }

  const { error } = await supabase
    .from('milestones')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
