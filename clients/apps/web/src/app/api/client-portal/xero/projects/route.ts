import { getAuthenticatedUser } from '@/utils/user'
import { NextResponse } from 'next/server'
import {
  getContactByEmail,
  getProjectsForContact,
  calculateProjectSummary
} from '@/utils/xero'

export async function GET() {
  try {
    const user = await getAuthenticatedUser()

    if (!user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find Xero contact by email
    const contact = await getContactByEmail(user.email)

    if (!contact) {
      return NextResponse.json({
        error: 'not-a-client',
        message: 'No Xero contact found for this email'
      }, { status: 404 })
    }

    // Fetch projects
    const projects = await getProjectsForContact(contact.ContactID)

    // Separate by status
    const active = projects.filter((p: any) => p.status === 'INPROGRESS')
    const completed = projects.filter((p: any) => p.status === 'CLOSED')

    const summary = calculateProjectSummary(projects)

    return NextResponse.json({
      projects,
      active,
      completed,
      summary
    })
  } catch (error) {
    console.error('Xero projects error:', error)
    return NextResponse.json({
      error: 'Failed to fetch projects',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
