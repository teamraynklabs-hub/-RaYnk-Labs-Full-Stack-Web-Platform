'use client'

import { useEffect, useState } from 'react'
import AdminFormModal from '@/components/admin/AdminFormModal'

export default function AdminTeamPage() {
  const [members, setMembers] = useState<any[]>([])
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState<any>(null)

  const load = async () => {
    const res = await fetch('/api/admin/team')
    setMembers(await res.json())
  }

  const save = async (data: any) => {
    await fetch('/api/admin/team', {
      method: edit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, id: edit?._id }),
    })
    load()
  }

  useEffect(() => { load() }, [])

  return (
    <section className="section">
      <div className="flex justify-between mb-6">
        <h1 className="section-title gradient-text">Manage Team</h1>
        <button onClick={() => { setEdit(null); setOpen(true) }} className="btn-primary">
          + Add Member
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {members.map(m => (
          <div key={m._id} className="glass-card">
            <h3 className="font-bold">{m.title}</h3>
            <p className="section-desc">{m.description}</p>
            <button onClick={() => { setEdit(m); setOpen(true) }} className="btn-secondary mt-4">
              Edit
            </button>
          </div>
        ))}
      </div>

      <AdminFormModal
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? 'Edit Member' : 'Add Member'}
        initialData={edit}
        onSubmit={save}
      />
    </section>
  )
}
