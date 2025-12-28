'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="mt-24 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* ================= BRAND ================= */}
          <div>
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary to-[var(--electric-purple)] bg-clip-text text-transparent">
              RaYnk Labs
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Empowering students through innovation, education, and
              real-world project experience.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex gap-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/rohitrathod1',
                },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com',
                },
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com',
                },
                {
                  icon: Youtube,
                  href: 'https://www.youtube.com',
                },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h5 className="mb-4 text-lg font-semibold text-foreground">
              Quick Links
            </h5>

            <ul className="space-y-3 text-sm">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Softwares', href: '/softwares' },
                { label: 'Projects', href: '/projects' },
                { label: 'Courses', href: '/courses' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h5 className="mb-4 text-lg font-semibold text-foreground">
              Get In Touch
            </h5>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                team.raynklabs@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                India
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RaYnk Labs. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}
