import { getPortalUser } from '@/utils/portal-auth'
import { supabase, getClientByEmail } from '@/utils/supabase'
import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAILS = ['donny@makebttr.com', 'd999ss@gmail.com']

// GET - Download a file
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getPortalUser()

  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id: fileId } = await params
  const isAdmin = ADMIN_EMAILS.includes(user.email)

  // Get file record
  const { data: file, error: fetchError } = await supabase
    .from('client_files')
    .select('*')
    .eq('id', fileId)
    .single()

  if (fetchError || !file) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  // Check permissions
  if (!isAdmin) {
    const client = await getClientByEmail(user.email)
    if (!client || client.id !== file.client_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  // Generate signed URL for download
  const { data: signedUrl, error: urlError } = await supabase.storage
    .from('client-files')
    .createSignedUrl(file.file_path, 3600) // 1 hour expiry

  if (urlError || !signedUrl) {
    return NextResponse.json({ error: 'Failed to generate download URL' }, { status: 500 })
  }

  return NextResponse.json({
    file: {
      id: file.id,
      filename: file.filename,
      mime_type: file.mime_type,
      file_size: file.file_size,
    },
    downloadUrl: signedUrl.signedUrl,
  })
}
