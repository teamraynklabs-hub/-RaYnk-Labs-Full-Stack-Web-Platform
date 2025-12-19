'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Briefcase,
  GraduationCap,
  Bot,
  Users,
  Calendar,
  UserRound,
  Mail,
  Menu,
  X,
  ArrowLeft,
  Shield
} from 'lucide-react'

const navLinks = [
  { id: 'home', label: 'Home', href: '#home', icon: Home },
  { id: 'services', label: 'Services', href: '#services', icon: Briefcase },
  { id: 'courses', label: 'Courses', href: '#courses', icon: GraduationCap },
  { id: 'ai-tools', label: 'AI Tools', href: '#ai-tools', icon: Bot },
  { id: 'community', label: 'Community', href: '#community', icon: Users },
  { id: 'meetups', label: 'Meetups', href: '#meetups', icon: Calendar },
  { id: 'team', label: 'Team', href: '#team', icon: UserRound },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [scrolled, setScrolled] = useState(false)
  const [showMinimal, setShowMinimal] = useState(false)

  useEffect(() => {
    if (!isHome) return

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      setShowMinimal(y > 400)

      const offset = y + 150
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (!el) continue
        if (offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActive(link.id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
    setOpen(false)
  }

  const activeIndex = navLinks.findIndex(l => l.id === active)

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-20 border-b transition ${
          scrolled
            ? 'border-border bg-background/90 backdrop-blur'
            : 'border-transparent bg-background/70 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            {!isHome && (
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary/10"
              >
                <ArrowLeft size={18} />
              </Link>
            )}

            <Link href="/" className="text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-primary to-[var(--electric-purple)] bg-clip-text text-transparent">
                RaYnk
              </span>
              <span className="ml-1 font-light text-foreground">Labs</span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.slice(1).map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary/10"
            >
              <Shield size={18} />
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary/10 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute inset-x-0 top-20 border-b border-border bg-background/95 backdrop-blur md:hidden"
            >
              <div className="flex flex-col p-4">
                {navLinks.slice(1).map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground transition hover:bg-primary/10"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* MINIMAL BOTTOM NAV */}
      <AnimatePresence>
        {isHome && showMinimal && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2"
          >
            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/95 px-3 py-2 backdrop-blur">
              {navLinks.map((link, i) => {
                const Icon = link.icon
                const isActive = link.id === active
                const near =
                  i === activeIndex ||
                  i === activeIndex - 1 ||
                  i === activeIndex + 1

                return (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`flex items-center justify-center rounded-full transition ${
                      isActive
                        ? 'h-14 w-14 bg-primary/25 text-primary'
                        : near
                        ? 'h-12 w-12 bg-primary/10 text-primary'
                        : 'h-10 w-10 text-muted-foreground hover:bg-primary/10'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={18} />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
