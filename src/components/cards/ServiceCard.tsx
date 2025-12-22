'use client'

import { useState } from 'react'
import {
  FileText,
  Globe,
  Palette,
  Bot,
  Code2,
  Compass,
  Share2,
  Handshake,
} from 'lucide-react'

const services = [
  {
    title: 'Resume Building',
    desc: 'Professional, ATS-friendly resumes that stand out',
    icon: FileText,
  },
  {
    title: 'Portfolio Website',
    desc: 'Stunning personal websites to showcase your work',
    icon: Globe,
  },
  {
    title: 'Branding Kit',
    desc: 'Complete brand identity for your projects',
    icon: Palette,
  },
  {
    title: 'AI Automation',
    desc: 'Smart automation solutions for productivity',
    icon: Bot,
  },
  {
    title: 'Web/App Development',
    desc: 'Custom websites and mobile applications',
    icon: Code2,
  },
  {
    title: 'Career Guidance',
    desc: 'Personalized mentorship and career planning',
    icon: Compass,
  },
  {
    title: 'Social Media Design',
    desc: 'Eye-catching content for your social presence',
    icon: Share2,
  },
  {
    title: 'Freelance Consulting',
    desc: 'Expert guidance for freelance projects',
    icon: Handshake,
  },
]

export default function Services() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <h2 className="mb-16 text-center text-4xl font-extrabold text-primary">
          Our Services
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(service => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                onMouseEnter={() => setActive(service.title)}
                onMouseLeave={() => setActive(null)}
                className="
                  group relative flex flex-col items-center
                  rounded-2xl border border-border
                  bg-card px-6 py-10 text-center
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                "
              >
                {/* ICON */}
                <div
                  className="
                    mb-6 flex h-14 w-14 items-center justify-center
                    rounded-full bg-primary/10 text-primary
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="mb-8 text-sm text-muted-foreground">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    relative rounded-full px-8 py-2 text-sm font-semibold
                    text-primary-foreground
                    transition-all duration-300
                  "
                  style={{
                    background: 'var(--gradient-1)',
                    boxShadow:
                      active === service.title
                        ? '0 0 30px oklch(0.62 0.22 259 / 0.45)'
                        : 'none',
                  }}
                >
                  Get Service
                </button>

                {/* HOVER GLOW */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    boxShadow:
                      'inset 0 0 0 1px oklch(1 0 0 / 6%), 0 0 60px oklch(0.62 0.22 259 / 0.12)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
