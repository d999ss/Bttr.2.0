import { getPortalUser } from '@/utils/portal-auth'
import { supabase, getClientByEmail } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAILS = ['donny@makebttr.com', 'd999ss@gmail.com']

// GET - List files for a client
export async function GET(request: NextRequest) {
  const user = await getPortalUser()

  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email)
  const clientId = request.nextUrl.searchParams.get('client_id')
  const projectId = request.nextUrl.searchParams.get('project_id')

  // If admin, they can view any client's files
  // If client, they can only view their own files
  let targetClientId = clientId

  if (!isAdmin) {
    const client = await getClientByEmail(user.email)
    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 })
    }
    targetClientId = client.id
  }

  if (!targetClientId) {
    return NextResponse.json({ error: 'client_id is required' }, { status: 400 })
  }

  let query = supabase
    .from('client_files')
    .select('*, projects(id, name)')
    .eq('client_id', targetClientId)
    .order('created_at', { ascending: false })

  if (projectId) {
    query = query.eq('project_id', projectId)
  }

  const { data: files, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ files })
}

// POST - Upload a file
export async function POST(request: NextRequest) {
  const user = await getPortalUser()

  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email)

  const formData = await request.formData()
  const file = formData.get('file') as File
  const clientId = formData.get('client_id') as string
  const projectId = formData.get('project_id') as string | null
  const description = formData.get('description') as string | null

  if (!file || !clientId) {
    return NextResponse.json({ error: 'file and client_id are required' }, { status: 400 })
  }

  // If not admin, verify client owns this client_id
  if (!isAdmin) {
    const client = await getClientByEmail(user.email)
    if (!client || client.id !== clientId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  // Generate unique file path
  const timestamp = Date.now()
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
  const filePath = `${clientId}/${timestamp}-${safeName}`

  // Upload to Supabase Storage
  const arrayBuffer = await file.arrayBuffer()
  const { error: uploadError } = await supabase.storage
    .from('client-files')
    .upload(filePath, arrayBuffer, {
      contentType: file.type,
      upsert: false,
    })

  if (uploadError) {
    console.error('Upload error:', uploadError)
    return NextResponse.json({ error: uploadError.message }, { status: 500 })
  }

  // Create file record in database
  const { data: fileRecord, error: dbError } = await supabase
    .from('client_files')
    .insert({
      client_id: clientId,
      project_id: projectId || null,
      uploaded_by: isAdmin ? 'admin' : 'client',
      uploader_email: user.email,
      filename: file.name,
      file_path: filePath,
      file_size: file.size,
      mime_type: file.type || null,
      description: description || null,
    })
    .select()
    .single()

  if (dbError) {
    // Clean up uploaded file if db insert fails
    await supabase.storage.from('client-files').remove([filePath])
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }

  return NextResponse.json({ file: fileRecord }, { status: 201 })
}

// DELETE - Delete a file
export async function DELETE(request: NextRequest) {
  const user = await getPortalUser()

  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email)
  const fileId = request.nextUrl.searchParams.get('id')

  if (!fileId) {
    return NextResponse.json({ error: 'File ID is required' }, { status: 400 })
  }

  // Get file record
  const { data: file, error: fetchError } = await supabase
    .from('client_files')
    .select('*')
    .eq('id', fileId)
    .single()

  if (fetchError || !file) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  // Check permissions - only admin or the uploader can delete
  if (!isAdmin) {
    const client = await getClientByEmail(user.email)
    if (!client || client.id !== file.client_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    // Clients can only delete files they uploaded
    if (file.uploaded_by !== 'client' || file.uploader_email !== user.email) {
      return NextResponse.json({ error: 'You can only delete files you uploaded' }, { status: 403 })
    }
  }

  // Delete from storage
  const { error: storageError } = await supabase.storage
    .from('client-files')
    .remove([file.file_path])

  if (storageError) {
    console.error('Storage delete error:', storageError)
  }

  // Delete from database
  const { error: dbError } = await supabase
    .from('client_files')
    .delete()
    .eq('id', fileId)

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
