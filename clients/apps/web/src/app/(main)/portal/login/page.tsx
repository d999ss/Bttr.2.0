'use client'

import { LoginContent } from '@/components/Portal/LoginContent'

export default function PortalLoginPage() {
  return (
    <div className="flex min-h-screen w-full grow items-center justify-center bg-gray-50 dark:bg-polar-950">
      <div className="w-full max-w-md rounded-4xl bg-white shadow-sm dark:bg-polar-900 dark:shadow-none">
        <LoginContent />
      </div>
    </div>
  )
}
