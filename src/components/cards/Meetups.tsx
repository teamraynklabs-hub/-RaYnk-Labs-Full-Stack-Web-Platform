'use client'

import { useState } from 'react'
import FormModal from '@/components/cards/FormModal'
import {
  CalendarDays,
  Presentation,
  Podcast,
} from 'lucide-react'

export default function Meetups() {
  const [selectedMeetup, setSelectedMeetup] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const meetups = [
    {
      id: 'weekly-tech-meetup',
      title: 'Weekly Tech Meetup',
      date: 'Every Saturday, 6 PM IST',
      description:
        'Join fellow students for tech discussions, project showcases, and networking.',
      icon: CalendarDays,
      cta: 'Register',
    },
    {
      id: 'masterclass-series',
      title: 'Masterclass Series',
      date: 'Monthly Sessions',
      description:
        'Expert-led sessions on advanced topics in tech and entrepreneurship.',
      icon: Presentation,
      cta: 'Register',
    },
    {
      id: 'student-podcast',
      title: 'Student Innovators Podcast',
      date: 'Weekly Episodes',
      description:
        'Stories, insights, and journeys of successful student entrepreneurs.',
      icon: Podcast,
      cta: 'Listen Now',
    },
  ]

  const handleMeetupClick = (title: string) => {
    setSelectedMeetup(title)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        id="meetups"
        className="bg-background py-24 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground">
            Meetups & Podcasts
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {meetups.map((meetup) => {
              const Icon = meetup.icon

              return (
                <div
                  key={meetup.id}
                  className="group relative rounded-2xl border border-border bg-card p-8 text-center backdrop-blur transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
                >
                  {/* Badge */}
                  <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Free
                  </span>

                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all group-hover:scale-110">
                    <Icon size={40} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    {meetup.title}
                  </h3>

                  <p className="mb-3 text-sm font-medium text-primary">
                    {meetup.date}
                  </p>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {meetup.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => handleMeetupClick(meetup.title)}
                    className="w-full rounded-full bg-gradient-to-r from-primary to-accent py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    {meetup.cta}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedMeetup && (
        <FormModal
          type="meetup"
          title={selectedMeetup}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
