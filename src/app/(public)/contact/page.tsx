'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FormModal from '@/components/cards/FormModal'
import { CheckCircle } from 'lucide-react'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (formData: Record<string, any>) => {
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          origin_title: 'Contact Form',
          ...formData,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 5000)
        return true
      }

      alert(data.message || 'Error submitting form')
      return false
    } catch {
      alert('Error submitting form. Please try again.')
      return false
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-background py-24 transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-8 backdrop-blur"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                handleSubmit({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  message: formData.get('message'),
                })
                e.currentTarget.reset()
              }}
            >
              {[
                { name: 'name', type: 'text', placeholder: 'Your Name' },
                { name: 'email', type: 'email', placeholder: 'Your Email' },
                { name: 'phone', type: 'tel', placeholder: 'Your Phone' },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-input bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              ))}

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-input bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-primary py-4 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Join Options */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join RaYnk Labs
            </h3>

            <div className="flex flex-col gap-4">
              <FormModal
                type="community"
                originTitle="Join as Student"
                buttonText="Join as Student"
                buttonClass="w-full rounded-xl border border-primary/50 px-6 py-4 font-semibold text-primary hover:bg-primary/10"
                fields={[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'phone', label: 'Phone', type: 'tel', required: true },
                  {
                    name: 'message',
                    label: 'What are your learning goals?',
                    type: 'textarea',
                    required: true,
                  },
                ]}
              />

              <FormModal
                type="community"
                originTitle="Join as Mentor"
                buttonText="Join as Mentor"
                buttonClass="w-full rounded-xl border border-primary/50 px-6 py-4 font-semibold text-primary hover:bg-primary/10"
                fields={[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'phone', label: 'Phone', type: 'tel', required: true },
                  {
                    name: 'message',
                    label: 'What can you mentor on?',
                    type: 'textarea',
                    required: true,
                  },
                ]}
              />

              <FormModal
                type="community"
                originTitle="Join Team"
                buttonText="Join Team"
                buttonClass="w-full rounded-xl border border-primary/50 px-6 py-4 font-semibold text-primary hover:bg-primary/10"
                fields={[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'phone', label: 'Phone', type: 'tel', required: true },
                  {
                    name: 'message',
                    label: 'Why do you want to join our team?',
                    type: 'textarea',
                    required: true,
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-green-500/50 bg-green-500/20 px-6 py-3 text-green-400 backdrop-blur"
            >
              <CheckCircle size={20} />
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
