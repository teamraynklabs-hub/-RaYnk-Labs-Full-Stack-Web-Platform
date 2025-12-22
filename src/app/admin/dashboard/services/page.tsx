'use client'

import { useEffect, useState } from 'react'
import AdminFormModal from '@/components/admin/AdminFormModal'

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [open, setOpen] = useState(false)
  const [editData, setEditData] = useState<any>(null)

  const load = async () => {
    const res = await fetch('/api/admin/courses')
    setCourses(await res.json())
  }

  const save = async (data: any) => {
    await fetch('/api/admin/courses', {
      method: editData ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, id: editData?._id }),
    })
    load()
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section className="section">
      <div className="flex justify-between mb-6">
        <h1 className="section-title gradient-text">Manage Courses</h1>
        <button
          onClick={() => {
            setEditData(null)
            setOpen(true)
          }}
          className="btn-primary"
        >
          + Add Course
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <div key={c._id} className="glass-card">
            <h3 className="font-bold">{c.title}</h3>
            <p className="section-desc">{c.description}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  setEditData(c)
                  setOpen(true)
                }}
                className="btn-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdminFormModal
        open={open}
        onClose={() => setOpen(false)}
        title={editData ? 'Edit Course' : 'Add Course'}
        initialData={editData}
        onSubmit={save}
      />
    </section>
  )
}
