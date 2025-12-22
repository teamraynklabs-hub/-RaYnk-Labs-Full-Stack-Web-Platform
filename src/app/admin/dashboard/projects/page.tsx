'use client'

import { useEffect, useState } from 'react'
import AdminFormModal from '@/components/admin/AdminFormModal'

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState<any>(null)

  const load = async () => {
    const res = await fetch('/api/admin/projects')
    setProjects(await res.json())
  }

  const save = async (data: any) => {
    await fetch('/api/admin/projects', {
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
        <h1 className="section-title gradient-text">Manage Projects</h1>
        <button onClick={() => { setEdit(null); setOpen(true) }} className="btn-primary">
          + Add Project
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p._id} className="glass-card">
            <h3 className="font-bold">{p.title}</h3>
            <p className="section-desc">{p.description}</p>
            <button onClick={() => { setEdit(p); setOpen(true) }} className="btn-secondary mt-4">
              Edit
            </button>
          </div>
        ))}
      </div>

      <AdminFormModal
        open={open}
        onClose={() => setOpen(false)}
        title={edit ? 'Edit Project' : 'Add Project'}
        initialData={edit}
        onSubmit={save}
      />
    </section>
  )
}
