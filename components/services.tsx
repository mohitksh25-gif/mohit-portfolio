import { Code, Globe, LayoutTemplate, Puzzle, Terminal } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/portfolio-data'

const ICONS = [Globe, Puzzle, Terminal, Code, LayoutTemplate]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I can help with"
          description="Ways I can contribute using my current skills as a student developer."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground text-pretty">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
