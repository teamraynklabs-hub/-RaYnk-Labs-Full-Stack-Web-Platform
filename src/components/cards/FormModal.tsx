'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  required?: boolean
  placeholder?: string
}

interface FormModalProps {
  type:
    | 'service'
    | 'course'
    | 'ai_tool'
    | 'community'
    | 'meetup'
    | 'contact'
    | 'turning_point'
  originTitle?: string
  title?: string
  buttonText?: string
  fields?: FormField[]
  isOpen?: boolean
  onClose?: () => void
}

const defaultFields: Record<string, FormField[]> = {
  service: [
    { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your project' },
  ],
  course: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ],
  ai_tool: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ],
  community: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ],
  meetup: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ],
  contact: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ],
  turning_point: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ],
}

export default function FormModal({
  type,
  originTitle,
  title,
  buttonText,
  fields,
  isOpen: externalOpen,
  onClose,
}: FormModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const isOpen = externalOpen ?? internalOpen
  const displayTitle = title || originTitle || 'Form'
  const formFields = fields || defaultFields[type]

  const close = () => {
    setFormData({})
    onClose ? onClose() : setInternalOpen(false)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, origin_title: displayTitle, ...formData }),
      })

      const data = await res.json()
      alert(data.message || 'Submitted')
      if (data.success) close()
    } catch {
      alert('Submission failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {buttonText && (
        <button
          onClick={() => setInternalOpen(true)}
          className="rounded-full bg-gradient-to-r from-primary to-[var(--electric-purple)] px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          {buttonText}
        </button>
      )}

      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl border border-primary/20 bg-card shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-primary/20 px-6 py-4">
              <h3 className="bg-gradient-to-r from-primary to-[var(--electric-purple)] bg-clip-text text-xl font-bold text-transparent">
                {displayTitle}
              </h3>
              <button onClick={close} className="rounded-md p-1 hover:bg-primary/10">
                <X />
              </button>
            </div>

            <form onSubmit={submit} className="space-y-5 px-6 py-6">
              {formFields.map(field => (
                <div key={field.name}>
                  <label className="mb-1 block text-sm font-semibold">
                    {field.label} {field.required && '*'}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={e => setFormData({ ...formData, [field.name]: e.target.value })}
                      rows={4}
                      className="w-full rounded-xl border border-primary/20 bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={e => setFormData({ ...formData, [field.name]: e.target.value })}
                      className="w-full rounded-xl border border-primary/20 bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-border px-6 py-2 text-sm transition hover:bg-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-gradient-to-r from-primary to-[var(--electric-purple)] px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
