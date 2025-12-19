'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  User,
} from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  skills: string
  img?: string
  image?: string
  icon?: string
  github?: string
  linkedin?: string
  portfolio?: string
}

export default function Team({ teamMembers }: { teamMembers: TeamMember[] }) {
  const getImageSrc = (path?: string) => {
    if (!path) return null
    if (path.startsWith('http') || path.startsWith('/')) return path
    return `/images/${path.replace('assets/images/', '')}`
  }

  return (
    <section
      id="team"
      className="relative bg-gradient-to-b from-bg-primary to-background py-24 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.h2
          className="mb-4 text-center text-3xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="mb-16 text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Passionate students building the future
        </motion.p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const imageSrc = getImageSrc(member.img || member.image)
            const skills = member.skills
              .split(/[•,]/)
              .map(s => s.trim())
              .filter(Boolean)

            return (
              <motion.div
                key={index}
                className="group relative rounded-3xl border border-border bg-card p-8 text-center backdrop-blur transition-all hover:-translate-y-3 hover:shadow-2xl hover:border-primary/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Photo */}
                <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 transition-all group-hover:scale-110 group-hover:border-primary/60">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-primary/60">
                      <User size={48} />
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mb-5 text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>

                {/* Skills */}
                <div className="mb-6 flex flex-wrap justify-center gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4 border-t border-border pt-5">
                  {member.github && member.github !== '#' && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}

                  {member.portfolio && !member.portfolio.startsWith('mailto:') && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Globe size={18} />
                    </a>
                  )}

                  {member.portfolio?.startsWith('mailto:') && (
                    <a
                      href={member.portfolio}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Wave */}
      <div className="pointer-events-none mt-24 h-32 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-full w-full fill-primary/10"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
