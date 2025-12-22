'use client'

import { Lightbulb, GraduationCap, Users, Rocket } from 'lucide-react'

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative bg-background py-24 transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Section title */}
        <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
          Who We Are
        </h2>

        {/* Description */}
        <p className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          RaYnk Labs is a student-led innovation hub dedicated to empowering young
          minds through cutting-edge education, real-world projects, and
          community-driven growth. We believe in learning by doing, earning while
          growing, and innovating for tomorrow.
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Innovation',
              desc: "Building tomorrow's solutions today",
              icon: Lightbulb,
            },
            {
              title: 'Learning',
              desc: 'Hands-on education for real skills',
              icon: GraduationCap,
            },
            {
              title: 'Community',
              desc: 'Connect, collaborate, and grow together',
              icon: Users,
            },
            {
              title: 'Opportunities',
              desc: 'Real projects, real impact, real growth',
              icon: Rocket,
            },
          ].map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-8 text-center backdrop-blur transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110">
                <Icon size={36} />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {title}
              </h3>

              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[60px] w-full fill-background"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
