import { getPortalUser } from '@/utils/portal-auth'
import { supabase, getClientByEmail } from '@/utils/supabase'
import { NextResponse } from 'next/server'

// GET - Get milestones for the authenticated client
export async function GET() {
  const user = await getPortalUser()

  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get client by email
  const client = await getClientByEmail(user.email)

  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }

  // Fetch milestones for this client
  const { data: milestones, error } = await supabase
    .from('milestones')
    .select('*, projects(id, name)')
    .eq('client_id', client.id)
    .order('sort_order', { ascending: true })
    .order('due_date', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Separate into project milestones and payment gates
  const projectMilestones = milestones?.filter(m => m.type === 'project') || []
  const paymentGates = milestones?.filter(m => m.type === 'payment') || []

  return NextResponse.json({
    milestones,
    projectMilestones,
    paymentGates,
    summary: {
      total: milestones?.length || 0,
      completed: milestones?.filter(m => m.completed_at).length || 0,
      pending: milestones?.filter(m => !m.completed_at).length || 0,
      overdue: milestones?.filter(m => !m.completed_at && m.due_date && new Date(m.due_date) < new Date()).length || 0,
    }
  })
}
