'use client'

import Link from 'next/link'

const items = [
  { title: 'Services', href: '/admin/dashboard/services' },
  { title: 'Courses', href: '/admin/dashboard/courses' },
  { title: 'Projects', href: '/admin/dashboard/projects' },
  { title: 'Softwares', href: '/admin/dashboard/softwares' },
  { title: 'Team', href: '/admin/dashboard/team' },
]

export default function AdminDashboardPage() {
  return (
    <section className="section">
      <h1 className="section-title gradient-text">Admin Dashboard</h1>
      <p className="section-desc">Manage website content from one place</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="glass-card text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground mt-2">
              Add • Edit • Delete
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
