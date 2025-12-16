'use client'

import { useEffect, useState } from 'react'

interface HoursBalance {
  purchased_hours: number
  used_hours: number
  hourly_rate: number | null
  notes: string | null
}

interface HoursLog {
  id: string
  change_type: 'purchased' | 'used' | 'adjustment'
  hours_amount: number
  description: string | null
  logged_by: string | null
  created_at: string
}

const changeTypeLabels: Record<string, { label: string; color: string }> = {
  purchased: { label: 'Hours Added', color: 'text-green-600' },
  used: { label: 'Hours Used', color: 'text-red-600' },
  adjustment: { label: 'Adjustment', color: 'text-blue-600' },
}

export default function HoursPage() {
  const [balance, setBalance] = useState<HoursBalance | null>(null)
  const [log, setLog] = useState<HoursLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchHours() {
      try {
        const res = await fetch('/api/client-portal/hours')
        if (!res.ok) throw new Error()
        const data = await res.json()
        setBalance(data.balance)
        setLog(data.log || [])
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchHours()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-xl font-medium text-gray-900">Unable to load hours</h2>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    )
  }

  const remainingHours = balance
    ? balance.purchased_hours - balance.used_hours
    : 0
  const usagePercent = balance && balance.purchased_hours > 0
    ? (balance.used_hours / balance.purchased_hours) * 100
    : 0

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium text-gray-900">Hours Balance</h1>
        <p className="mt-1 text-gray-600">Track your time and materials usage.</p>
      </div>

      {/* Balance Overview */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Purchased</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {(balance?.purchased_hours || 0).toFixed(1)}
            <span className="text-lg font-normal text-gray-500"> hrs</span>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Used</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {(balance?.used_hours || 0).toFixed(1)}
            <span className="text-lg font-normal text-gray-500"> hrs</span>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-gray-500">Remaining</div>
          <div className={`mt-1 text-3xl font-semibold ${remainingHours < 5 ? 'text-red-600' : 'text-green-600'}`}>
            {remainingHours.toFixed(1)}
            <span className="text-lg font-normal text-gray-500"> hrs</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-600">Usage Progress</span>
          <span className="font-medium text-gray-900">{usagePercent.toFixed(0)}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full rounded-full transition-all ${
              usagePercent > 90 ? 'bg-red-500' : usagePercent > 75 ? 'bg-yellow-500' : 'bg-[#D2A62C]'
            }`}
            style={{ width: `${Math.min(usagePercent, 100)}%` }}
          />
        </div>
        {balance?.hourly_rate && (
          <p className="mt-4 text-sm text-gray-500">
            Hourly Rate: <span className="font-medium text-gray-900">${balance.hourly_rate}</span>
          </p>
        )}
        {balance?.notes && (
          <p className="mt-2 text-sm text-gray-500">{balance.notes}</p>
        )}
      </div>

      {/* Activity Log */}
      <div>
        <h2 className="mb-4 text-lg font-medium text-gray-900">Activity Log</h2>
        {log.length === 0 ? (
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <p className="text-gray-500">No activity yet</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {log.map((entry) => {
                  const typeInfo = changeTypeLabels[entry.change_type] || {
                    label: entry.change_type,
                    color: 'text-gray-600'
                  }
                  return (
                    <tr key={entry.id}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {new Date(entry.created_at).toLocaleDateString()}
                      </td>
                      <td className={`whitespace-nowrap px-6 py-4 text-sm font-medium ${typeInfo.color}`}>
                        {typeInfo.label}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        {entry.change_type === 'used' ? '-' : '+'}{entry.hours_amount.toFixed(1)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {entry.description || '-'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Low Hours Warning */}
      {remainingHours < 10 && remainingHours > 0 && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Low Hours Balance</h3>
              <p className="mt-1 text-sm text-yellow-700">
                You have {remainingHours.toFixed(1)} hours remaining. Contact us to purchase more hours.
              </p>
              <a
                href="mailto:donny@makebttr.com?subject=Purchase More Hours"
                className="mt-2 inline-block text-sm font-medium text-yellow-800 underline hover:text-yellow-900"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
