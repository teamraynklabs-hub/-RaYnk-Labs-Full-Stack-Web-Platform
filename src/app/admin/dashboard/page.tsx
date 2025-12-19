'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface DashboardProps {
  submissions: any
  total: number
  types: Record<string, string>
  adminEmail: string
}

export default function AdminDashboardPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [adminEmail, setAdminEmail] = useState('')
  const [submissions, setSubmissions] = useState<any>({})
  const [total, setTotal] = useState(0)
  const [activeTab, setActiveTab] = useState('service')

  const types: Record<string, string> = {
    service: 'Services',
    course: 'Courses',
    ai_tool: 'AI Tools',
    community: 'Community',
    meetup: 'Meetups',
    contact: 'Contact',
    turning_point: 'Turning Point',
  }

  const formFields: Record<string, string[]> = {
    service: ['origin_title', 'name', 'email', 'phone', 'message'],
    course: ['origin_title', 'name', 'email', 'phone', 'message'],
    ai_tool: ['origin_title', 'name', 'email', 'phone', 'message'],
    community: ['origin_title', 'name', 'email', 'phone', 'stream', 'skills', 'message'],
    meetup: ['origin_title', 'name', 'email', 'phone', 'message'],
    contact: ['name', 'email', 'phone', 'message'],
    turning_point: ['name', 'email', 'phone', 'message'],
  }

  useEffect(() => {
    const init = async () => {
      try {
        const verifyRes = await fetch('/api/admin/verify', {
          credentials: 'include',
        })

        if (!verifyRes.ok) {
          router.replace('/admin/login')
          return
        }

        const admin = await verifyRes.json()
        setAdminEmail(admin.email)

        const res = await fetch('/api/admin/submissions', {
          credentials: 'include',
          cache: 'no-store',
        })

        if (res.ok) {
          const data = await res.json()
          setSubmissions(data.submissions || {})
          setTotal(data.total || 0)
        }
      } catch {
        router.replace('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
      </div>
    )
  }

  const currentSubmissions = submissions[activeTab] || []

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => router.push('/')}
            className="text-lg font-extrabold text-primary"
          >
            ← RaYnk Labs
          </button>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">{adminEmail}</span>
            <button
              onClick={handleLogout}
              className="rounded-md border border-destructive px-3 py-1 text-destructive hover:bg-destructive hover:text-white transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-10 text-center text-3xl font-extrabold text-primary">
          Admin Dashboard
        </h1>

        {/* Stats */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground">Total Submissions</p>
            <p className="mt-2 text-4xl font-bold text-primary">{total}</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground mb-3">Manage Content</p>
            <a
              href="/admin/manage-content"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 font-semibold text-white hover:opacity-90"
            >
              ⚙ Manage Content
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {Object.entries(types).map(([type, label]) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === type
                  ? 'bg-primary text-white'
                  : 'border border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              {label}
              <span className="ml-2 rounded-full bg-muted px-2 text-xs">
                {(submissions[type] || []).length}
              </span>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          {currentSubmissions.length === 0 ? (
            <div className="p-10 text-center text-muted-foreground">
              No submissions for {types[activeTab]}
            </div>
          ) : (
            <table className="w-full min-w-[900px] text-sm">
              <thead className="border-b border-border bg-muted">
                <tr>
                  <th className="p-4 text-left">#</th>
                  {formFields[activeTab].map((f) => (
                    <th key={f} className="p-4 text-left capitalize">
                      {f.replace('_', ' ')}
                    </th>
                  ))}
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {currentSubmissions.map((row: any, i: number) => (
                  <tr
                    key={row.id}
                    className="border-b border-border hover:bg-muted/40"
                  >
                    <td className="p-4 font-semibold">{i + 1}</td>
                    {formFields[activeTab].map((f) => (
                      <td key={f} className="p-4">
                        {row[f] || '-'}
                      </td>
                    ))}
                    <td className="p-4 text-xs text-muted-foreground">
                      {new Date(row.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}
