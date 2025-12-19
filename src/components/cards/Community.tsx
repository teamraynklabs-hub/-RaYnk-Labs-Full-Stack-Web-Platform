'use client'

import { useState } from 'react'
import FormModal from '@/components/cards/FormModal'
import { Users, CheckCircle } from 'lucide-react'

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        id="community"
        className="bg-background py-24 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Text content */}
            <div className="max-w-xl">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                RaYnk Innovators Club
              </h2>

              <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                Join a vibrant community of student innovators, creators, and
                learners. Connect, collaborate, and grow together.
              </p>

              <div className="mb-10 space-y-4">
                {[
                  'Student-to-student learning',
                  'Weekly tech meetups',
                  'Exclusive podcasts',
                  '24/7 peer support',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-foreground/90"
                  >
                    <CheckCircle className="text-primary" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl"
              >
                Join Community — Free
              </button>
            </div>

            {/* Visual */}
            <div className="relative flex h-[360px] items-center justify-center">
              <div className="absolute h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 text-primary shadow-lg">
                <Users size={48} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <FormModal
          type="community"
          title="RaYnk Innovators Club"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
