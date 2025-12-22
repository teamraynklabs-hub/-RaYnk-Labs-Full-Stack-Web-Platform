'use client'

import { useState } from 'react'
import FormModal from '@/components/cards/FormModal'
import {
  FileText,
  FileCheck,
  CalendarCheck,
  Route,
  ListChecks,
  ArrowRight,
} from 'lucide-react'

export default function SoftwareCard() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tools = [
    {
      title: 'AI Resume Builder',
      description: 'Create professional resumes in minutes with AI assistance',
      icon: FileText,
    },
    {
      title: 'Notes Summarizer',
      description: 'Instantly summarize your study notes with AI',
      icon: FileCheck,
    },
    {
      title: 'Study Planner',
      description: 'Smart schedules optimized for your learning style',
      icon: CalendarCheck,
    },
    {
      title: 'Skill Roadmap AI',
      description: 'Personalized learning paths for any skill',
      icon: Route,
    },
    {
      title: 'Assignment Assistant',
      description: 'AI-powered help for your assignments',
      icon: ListChecks,
    },
  ]

  const handleToolClick = (tool: string) => {
    setSelectedTool(tool)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        id="ai-tools"
        className="bg-background py-24 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* Section header */}
          <h2 className="mb-3 text-center text-3xl font-bold text-foreground">
            AI-Powered Tools
          </h2>
          <p className="mb-16 text-center text-muted-foreground">
            Smart tools to supercharge your productivity
          </p>

          {/* Tools grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-border bg-card p-8 text-center backdrop-blur transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={36} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>

                {/* Action */}
                <button
                  onClick={() => handleToolClick(title)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:translate-x-1"
                >
                  Try Now
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedTool && (
        <FormModal
          type="ai_tool"
          title={selectedTool}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
