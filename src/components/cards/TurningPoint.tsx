'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  GraduationCap,
  TrendingUp,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

export default function TurningPoint() {
  return (
    <section
      id="turning-point"
      className="bg-bg-primary py-24 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* TEXT */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Turning Point App
            </motion.h2>

            <motion.p
              className="max-w-xl text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Your all-in-one platform for career growth, skill development,
              and scholarship opportunities.
            </motion.p>

            {/* FEATURES */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: GraduationCap,
                  title: 'Scholarship Programs',
                  desc: 'Access exclusive scholarship opportunities',
                },
                {
                  icon: TrendingUp,
                  title: 'Skill Tracking',
                  desc: 'Monitor your progress and growth',
                },
                {
                  icon: Briefcase,
                  title: 'Career Resources',
                  desc: 'Tools and guidance for your career journey',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:translate-x-2 hover:border-primary/40 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <item.icon className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://turning-point-01.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-10 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Explore Turning Point
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* PHONE MOCKUP */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-full max-w-[380px] aspect-[9/19.5]">
              {/* iframe */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="h-[94%] w-[87.5%] overflow-hidden rounded-[28px] bg-black shadow-2xl">
                  <iframe
                    src="https://turning-point-01.onrender.com/"
                    title="Turning Point App"
                    className="h-[125%] w-[125%] origin-top-left scale-[0.8] border-0 pointer-events-none"
                  />
                </div>
              </div>

              {/* mockup */}
              <Image
                src="/images/mocup.png"
                alt="Turning Point App Mockup"
                fill
                priority
                className="relative z-20 object-contain drop-shadow-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
