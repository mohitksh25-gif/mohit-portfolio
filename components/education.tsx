import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { EDUCATION } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="My academic journey" />

        <ol className="relative mt-12 border-l-2 border-border pl-8">
          {EDUCATION.map((item) => (
            <li key={item.degree} className="relative mb-10 last:mb-0">
              <span
                className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-primary">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-primary">
                      {item.note}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground text-pretty">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.institution}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
