import { Award, CalendarDays } from 'lucide-react'
import { AssetImage } from '@/components/asset-image'
import { SectionHeading } from '@/components/section-heading'
import { CERTIFICATES } from '@/lib/portfolio-data'

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates & recognition"
          description="Courses and recognition earned along the way."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CERTIFICATES.map((cert) => (
            <article
              key={cert.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:flex-row"
            >
              <AssetImage
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="aspect-video w-full sm:aspect-auto sm:w-40 sm:shrink-0"
                placeholderLabel="Add certificate scan"
                objectFit="cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-base font-semibold leading-snug text-foreground text-pretty">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary text-pretty">
                  {cert.organization}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
                <p className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {cert.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
