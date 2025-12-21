'use client'

import { useEffect, useState } from 'react'
import { getSupabaseBrowserClient } from '@/utils/supabase-browser'
import type { User } from '@supabase/supabase-js'

export default function DebugPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cookies, setCookies] = useState<string[]>([])
  const [serverData, setServerData] = useState<any>(null)
  const [localStorageKeys, setLocalStorageKeys] = useState<string[]>([])

  useEffect(() => {
    // Check localStorage for Supabase keys
    const keys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (key.includes('supabase') || key.includes('sb-'))) {
        keys.push(key)
      }
    }
    setLocalStorageKeys(keys)
    async function checkAuth() {
      try {
        const supabase = getSupabaseBrowserClient()

        // Get session from Supabase
        const { data: { user }, error } = await supabase.auth.getUser()

        if (error) {
          setError(error.message)
        } else {
          setUser(user)
        }

        // Get cookies
        const cookieNames = document.cookie.split(';').map(c => c.trim().split('=')[0]).filter(Boolean)
        setCookies(cookieNames)

        // Check server-side auth
        const res = await fetch('/api/client-portal/debug-auth')
        const data = await res.json()
        setServerData(data)

      } catch (err) {
        setError(String(err))
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleLogout = async () => {
    const supabase = getSupabaseBrowserClient()
    await supabase.auth.signOut()
    window.location.reload()
  }

  const handleClearAll = () => {
    // Clear all Supabase localStorage keys
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i)
      if (key && (key.includes('supabase') || key.includes('sb-'))) {
        localStorage.removeItem(key)
      }
    }
    // Clear Supabase cookies by setting them to expire
    document.cookie.split(';').forEach(c => {
      const name = c.trim().split('=')[0]
      if (name.includes('sb-')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
      }
    })
    window.location.href = '/portal/login'
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Auth Debug</h1>

      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Client-Side User</h2>
          {user ? (
            <div>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>ID:</strong> {user.id}</p>
            </div>
          ) : (
            <p className="text-red-500">No user (not logged in client-side)</p>
          )}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Server-Side Auth</h2>
          <pre className="text-sm overflow-auto">{JSON.stringify(serverData, null, 2)}</pre>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Browser Cookies ({cookies.length})</h2>
          <div className="text-sm">
            {cookies.map(c => (
              <div key={c} className={c.includes('sb-') ? 'text-green-600 font-semibold' : ''}>
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">LocalStorage Supabase Keys ({localStorageKeys.length})</h2>
          <div className="text-sm">
            {localStorageKeys.length > 0 ? (
              localStorageKeys.map(k => (
                <div key={k} className="text-yellow-600 font-semibold">{k}</div>
              ))
            ) : (
              <p className="text-gray-500">No Supabase keys in localStorage</p>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Error</h2>
            <p className="text-red-600 dark:text-red-300">{error}</p>
          </div>
        )}

        <div className="flex gap-4 flex-wrap">
          <a href="/portal/login" className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Login
          </a>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
          <button onClick={handleClearAll} className="bg-yellow-500 text-white px-4 py-2 rounded">
            Clear All & Re-Login
          </button>
        </div>
      </div>
    </div>
  )
}
