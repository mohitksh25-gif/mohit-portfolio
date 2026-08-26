import { SectionHeading } from '@/components/section-heading'
import { SKILLS } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & strengths"
          description="Technical skills and soft skills I use and continue to build on."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {skill.name}
              {skill.note && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-primary">
                  {skill.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
