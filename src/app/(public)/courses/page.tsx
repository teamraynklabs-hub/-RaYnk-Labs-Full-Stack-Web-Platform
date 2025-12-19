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

interface Course {
  id?: string
  title: string
  icon: string
  badge?: string
  description: string
}

/**
 * Map string icons (from backend) to lucide icons
 * Fallback is GraduationCap
 */
const iconMap: Record<string, any> = {
  code: Code,
  laptop: Laptop,
  brain: Brain,
  database: Database,
  cpu: Cpu,
}

export default function Courses({ courses }: { courses: Course[] }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        id="courses"
        className="relative bg-background py-24 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <h2 className="mb-3 text-center text-3xl font-bold text-foreground">
            Our Courses
          </h2>
          <p className="mb-16 text-center text-muted-foreground">
            Learn from practical, student-friendly micro-courses
          </p>

          {/* Courses Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => {
              const Icon =
                iconMap[course.icon?.toLowerCase()] || GraduationCap

              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-border bg-card p-8 text-center backdrop-blur transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
                >
                  {/* Top Accent */}
                  <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform group-hover:scale-x-100" />

                  {/* Badge */}
                  <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                    {course.badge || 'Free'}
                  </span>

                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={36} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                    {course.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => handleCourseClick(course)}
                    className="w-full rounded-full bg-gradient-to-r from-primary to-accent py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    Enroll Now
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="pointer-events-none absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-[60px] w-full fill-background"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Modal */}
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
