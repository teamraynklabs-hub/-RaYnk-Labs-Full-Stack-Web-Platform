'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const words = ['Learn', 'Earn', 'Grow', 'Innovate']

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-background px-4"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary to-[var(--electric-purple)] blur-[80px] opacity-30" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--electric-purple)] to-primary blur-[80px] opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-[var(--electric-purple)] blur-[80px] opacity-25" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.h1
          variants={item}
          className="mb-6 bg-gradient-to-r from-primary via-[var(--electric-purple)] to-primary bg-[length:200%] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
        >
          RaYnk Labs
        </motion.h1>

        <motion.div variants={item} className="mb-6 flex flex-wrap justify-center gap-2">
          {words.map((word) => (
            <span
              key={word}
              className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-foreground transition hover:bg-primary/15 hover:text-primary md:text-lg"
            >
              {word}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A student-led innovation lab building tools, education, and opportunities for youth.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="rounded-full bg-gradient-to-r from-primary to-[var(--electric-purple)] px-8 py-3 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
          >
            Explore Services
          </a>

          <a
            href="#community"
            className="rounded-full border border-primary px-8 py-3 font-semibold text-foreground transition hover:bg-primary/10"
          >
            Join Community
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-primary">
          <span className="mt-2 h-2 w-1 animate-bounce rounded-full bg-gradient-to-b from-primary to-[var(--electric-purple)]" />
        </div>
      </div>
    </section>
  )
}
