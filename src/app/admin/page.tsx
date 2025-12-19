'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (data.success) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      {/* Back Button */}
      <button
        onClick={() => router.push('/')}
        className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-muted"
      >
        ← Back
      </button>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-10 shadow-xl backdrop-blur">
        <h1 className="mb-2 text-center text-3xl font-extrabold text-primary">
          RaYnk Labs Admin
        </h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Secure Access Panel
        </p>

        {error && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            ⚠ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary py-3 text-lg font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          🔒 Admin-only secure login
        </p>
      </div>
    </div>
  )
}
