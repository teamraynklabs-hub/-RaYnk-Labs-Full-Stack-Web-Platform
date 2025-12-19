'use client'

import { useState } from 'react'
import FormModal from '@/components/cards/FormModal'
import {
  Code,
  Briefcase,
  Palette,
  Brain,
  Globe,
  Smartphone,
  Database,
  Wrench,
} from 'lucide-react'

interface Service {
  id?: string
  title: string
  icon: string
  description: string
}

/**
 * Map backend icon string → lucide icon
 * Keep backend flexible, frontend clean
 */
const iconMap: Record<string, any> = {
  code: Code,
  briefcase: Briefcase,
  palette: Palette,
  brain: Brain,
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
  wrench: Wrench,
}

export default function Services({ services }: { services: Service[] }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        id="services"
        className="bg-background py-24 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground">
            Our Services
          </h2>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon =
                iconMap[service.icon?.toLowerCase()] || Briefcase

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-8 text-center backdrop-blur transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={34} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    Get Service
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <FormModal
          type="service"
          title={selectedService.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
