'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Globe, User } from 'lucide-react'

const teamMembers = [
  {
    name: 'Rohit Rathod',
    role: 'Full Stack Developer',
    skills: 'Next.js, React, MongoDB, Tailwind',
    image: '/images/team/member2.jpg',
    github: 'https://github.com/rohitrathod1',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://rohitrathod1.github.io',
  },
  {
    name: 'Team Member',
    role: 'UI / UX Designer',
    skills: 'Figma, UI Design, Branding',
    image: '',
    github: '#',
    linkedin: '#',
    portfolio: '#',
  },
]

export default function TeamCard() {
  return (
    <section
      id="team"
      className="bg-gradient-to-b from-background to-bg-primary py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold text-foreground"
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-muted-foreground"
        >
          Passionate people building real products
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const skills = member.skills
              .split(',')
              .map(s => s.trim())

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-border bg-card p-8 text-center transition hover:-translate-y-3 hover:border-primary/50 hover:shadow-2xl"
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-primary/60">
                      <User size={48} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {member.role}
                </p>

                {/* Skills */}
                <div className="mb-6 flex flex-wrap justify-center gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 border-t border-border pt-5">
                  {member.github !== '#' && (
                    <a
                      href={member.github}
                      target="_blank"
                      className="rounded-full border border-primary/30 bg-primary/10 p-3 text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="rounded-full border border-primary/30 bg-primary/10 p-3 text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}

                  {member.portfolio !== '#' && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      className="rounded-full border border-primary/30 bg-primary/10 p-3 text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
