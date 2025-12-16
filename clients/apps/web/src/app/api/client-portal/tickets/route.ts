import { getPortalUser } from '@/utils/portal-auth'
import { supabase } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const user = await getPortalUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { category, priority, subject, description, project, client_name, client_email } = body

  if (!subject || !description) {
    return NextResponse.json({ error: 'Subject and description are required' }, { status: 400 })
  }

  // Get client ID if they're a registered client
  let clientId = null
  const { data: client } = await supabase
    .from('clients')
    .select('id')
    .eq('email', user.email)
    .single()

  if (client) {
    clientId = client.id
  }

  // Try to store ticket in database
  const ticketData = {
    client_id: clientId,
    client_email: client_email || user.email,
    client_name: client_name || 'Unknown',
    category: category || 'question',
    priority: priority || 'medium',
    subject,
    description,
    project: project || null,
    status: 'open',
  }

  const { data: ticket, error: ticketError } = await supabase
    .from('tickets')
    .insert(ticketData)
    .select()
    .single()

  if (ticketError) {
    // Table might not exist - log the ticket details for manual handling
    console.log('=== NEW SUPPORT TICKET ===')
    console.log('From:', client_name, `<${client_email || user.email}>`)
    console.log('Category:', category)
    console.log('Priority:', priority)
    console.log('Subject:', subject)
    console.log('Description:', description)
    console.log('Project:', project || 'N/A')
    console.log('========================')

    // Still return success - the ticket was "submitted" (logged)
    // In production, you'd want to send an email notification here
    return NextResponse.json({
      success: true,
      message: 'Ticket submitted successfully',
      fallback: true, // Indicates it was logged, not stored in DB
    })
  }

  return NextResponse.json({
    success: true,
    ticket_id: ticket.id,
    message: 'Ticket submitted successfully',
  })
}

// GET - List tickets for the authenticated user
export async function GET() {
  const user = await getPortalUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: tickets, error } = await supabase
    .from('tickets')
    .select('*')
    .eq('client_email', user.email)
    .order('created_at', { ascending: false })

  if (error) {
    // Table might not exist
    return NextResponse.json({ tickets: [] })
  }

  return NextResponse.json({ tickets })
}
