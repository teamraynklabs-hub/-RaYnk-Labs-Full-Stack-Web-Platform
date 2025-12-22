'use client'

import { useState } from 'react'
import FormModal from '@/components/cards/FormModal'
import {
  Code,
  Laptop,
  Brain,
  Database,
  Cpu,
  GraduationCap,
} from 'lucide-react'

/* ================= TYPES ================= */
interface Course {
  id: string
  title: string
  icon: string
  badge?: string
  description: string
}

/* ================= ICON MAP ================= */
const iconMap: Record<string, any> = {
  code: Code,
  laptop: Laptop,
  brain: Brain,
  database: Database,
  cpu: Cpu,
}

/* ================= DATA ================= */
const courses: Course[] = [
  {
    id: '1',
    title: 'Web Development',
    icon: 'code',
    badge: 'Popular',
    description:
      'Learn HTML, CSS, JavaScript and modern frameworks with real projects.',
  },
  {
    id: '2',
    title: 'Frontend Mastery',
    icon: 'laptop',
    description:
      'Deep dive into React, Next.js, UI/UX principles and performance.',
  },
  {
    id: '3',
    title: 'AI & Automation',
    icon: 'brain',
    badge: 'Trending',
    description:
      'Understand AI tools, automation workflows and prompt engineering.',
  },
  {
    id: '4',
    title: 'Database Essentials',
    icon: 'database',
    description:
      'Learn SQL, MongoDB, data modeling and backend data handling.',
  },
  {
    id: '5',
    title: 'System Design Basics',
    icon: 'cpu',
    description:
      'Foundations of scalable systems, APIs and architecture.',
  },
]

/* ================= PAGE ================= */
export default function CourseCard() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="courses" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* HEADER */}
          <h2 className="mb-3 text-center text-3xl font-bold text-foreground">
            Our Courses
          </h2>
          <p className="mb-16 text-center text-muted-foreground">
            Practical, student-friendly learning paths
          </p>

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => {
              const Icon =
                iconMap[course.icon.toLowerCase()] || GraduationCap

              return (
                <div
                  key={course.id}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-border bg-card p-8 text-center
                    transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl
                  "
                >
                  {/* FIXED TOP LINE */}
                  <div
                    className="
                      absolute top-0 left-0 h-1 w-full
                      origin-left scale-x-0
                      bg-gradient-to-r from-primary to-accent
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />

                  {/* BADGE */}
                  <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                    {course.badge || 'Free'}
                  </span>

                  {/* ICON */}
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary transition group-hover:scale-110">
                    <Icon size={36} />
                  </div>

                  {/* CONTENT */}
                  <h3 className="mb-3 text-xl font-semibold">
                    {course.title}
                  </h3>

                  <p className="mb-6 text-sm text-muted-foreground">
                    {course.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      setSelectedCourse(course)
                      setIsModalOpen(true)
                    }}
                    className="
                      w-full rounded-full
                      bg-gradient-to-r from-primary to-accent
                      py-3 font-semibold text-primary-foreground
                      transition hover:-translate-y-1 hover:shadow-xl
                    "
                  >
                    Enroll Now
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && selectedCourse && (
        <FormModal
          type="course"
          title={selectedCourse.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
