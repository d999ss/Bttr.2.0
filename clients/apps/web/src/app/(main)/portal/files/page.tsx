'use client'

import { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

interface FileRecord {
  id: string
  filename: string
  file_size: number
  mime_type: string | null
  description: string | null
  uploaded_by: 'admin' | 'client'
  uploader_email: string
  created_at: string
  projects: { id: string; name: string } | null
}

export default function FilesPage() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'
  const [files, setFiles] = useState<FileRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isDemo) {
      setFiles([
        { id: '1', filename: 'Brand Guidelines.pdf', file_size: 2500000, mime_type: 'application/pdf', description: 'Official brand guidelines', uploaded_by: 'admin', uploader_email: 'donny@makebttr.com', created_at: '2024-02-01T10:00:00Z', projects: { id: 'p1', name: 'Website Redesign' } },
        { id: '2', filename: 'Homepage Mockup v3.fig', file_size: 15000000, mime_type: null, description: 'Latest homepage design', uploaded_by: 'admin', uploader_email: 'donny@makebttr.com', created_at: '2024-02-10T14:30:00Z', projects: { id: 'p1', name: 'Website Redesign' } },
        { id: '3', filename: 'Content Updates.docx', file_size: 45000, mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', description: 'Requested content changes', uploaded_by: 'client', uploader_email: 'client@example.com', created_at: '2024-02-15T09:00:00Z', projects: null },
      ])
      setLoading(false)
      return
    }

    fetchFiles()
  }, [isDemo])

  async function fetchFiles() {
    try {
      const res = await fetch('/api/client-portal/files')
      if (res.ok) {
        const data = await res.json()
        setFiles(data.files || [])
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setUploadError('')

    try {
      // Get client ID first
      const meRes = await fetch('/api/client-portal/me')
      if (!meRes.ok) {
        throw new Error('Failed to get client info')
      }
      const meData = await meRes.json()

      const formData = new FormData()
      formData.append('file', file)
      formData.append('client_id', meData.client.id)

      const res = await fetch('/api/client-portal/files', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Upload failed')
      }

      fetchFiles()
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  async function handleDownload(fileId: string, filename: string) {
    try {
      const res = await fetch(`/api/client-portal/files/${fileId}`)
      if (!res.ok) throw new Error('Failed to get download URL')

      const data = await res.json()

      // Open download in new tab
      const link = document.createElement('a')
      link.href = data.downloadUrl
      link.download = filename
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Download failed:', err)
    }
  }

  async function handleDelete(fileId: string) {
    if (!confirm('Delete this file?')) return

    await fetch(`/api/client-portal/files?id=${fileId}`, { method: 'DELETE' })
    fetchFiles()
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const getFileIcon = (mimeType: string | null, filename: string) => {
    if (mimeType?.startsWith('image/')) {
      return (
        <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
    if (mimeType?.includes('pdf')) {
      return (
        <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
    if (filename.endsWith('.fig') || filename.endsWith('.figma')) {
      return (
        <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
    return (
      <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-[#D2A62C]" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900 dark:text-white">Files</h1>
          <p className="mt-1 text-gray-600 dark:text-polar-400">Shared files and documents.</p>
        </div>
        {!isDemo && (
          <div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className={`cursor-pointer rounded-lg bg-[#D2A62C] px-4 py-2 text-sm font-medium text-white hover:opacity-90 ${
                uploading ? 'opacity-50 cursor-wait' : ''
              }`}
            >
              {uploading ? 'Uploading...' : 'Upload File'}
            </label>
          </div>
        )}
      </div>

      {uploadError && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-sm text-red-700 dark:text-red-300">
          {uploadError}
        </div>
      )}

      <div className="rounded-lg bg-white dark:bg-polar-800 shadow-sm">
        {files.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-polar-400">
            <svg className="mx-auto h-12 w-12 text-gray-300 dark:text-polar-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <p className="mt-4">No files yet</p>
            {!isDemo && <p className="mt-1 text-sm">Upload a file to get started</p>}
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-polar-700">
            {files.map((file) => (
              <div key={file.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-polar-700">
                <div className="flex-shrink-0">
                  {getFileIcon(file.mime_type, file.filename)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 dark:text-white truncate">{file.filename}</span>
                    {file.uploaded_by === 'admin' && (
                      <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 text-xs text-blue-700 dark:text-blue-400">
                        From Bttr
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-polar-400">
                    <span>{formatFileSize(file.file_size)}</span>
                    <span>•</span>
                    <span>{new Date(file.created_at).toLocaleDateString()}</span>
                    {file.projects && (
                      <>
                        <span>•</span>
                        <span>{file.projects.name}</span>
                      </>
                    )}
                  </div>
                  {file.description && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-polar-400">{file.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {!isDemo && (
                    <>
                      <button
                        onClick={() => handleDownload(file.id, file.filename)}
                        className="rounded-lg border border-gray-200 dark:border-polar-600 p-2 text-gray-500 hover:text-gray-700 dark:text-polar-400 dark:hover:text-white"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                      {file.uploaded_by === 'client' && (
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="rounded-lg border border-red-200 dark:border-red-800 p-2 text-red-500 hover:text-red-700"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
