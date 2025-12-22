'use client'

import { useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  initialData?: any
  onSubmit: (data: any) => void
}

export default function AdminFormModal({
  open,
  onClose,
  title,
  initialData = {},
  onSubmit,
}: Props) {
  const [form, setForm] = useState(initialData)

  if (!open) return null

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit(form)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="glass-card w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 gradient-text">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Title"
            value={form.title || ''}
            onChange={handleChange}
            className="input"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description || ''}
            onChange={handleChange}
            rows={4}
            className="input"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
