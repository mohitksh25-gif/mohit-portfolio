'use client'

import { useState } from 'react'
import { Award, CalendarDays, Maximize2 } from 'lucide-react'
import { AssetImage } from '@/components/asset-image'
import { Lightbox, type LightboxImage } from '@/components/lightbox'
import { SectionHeading } from '@/components/section-heading'
import { CERTIFICATES } from '@/lib/portfolio-data'

export function Certifications() {
  const [index, setIndex] = useState<number | null>(null)

  const images: LightboxImage[] = CERTIFICATES.filter((c) => c.image).map(
    (c) => ({
      src: c.image,
      alt: `${c.title} certificate`,
      caption: `${c.title} — ${c.organization}`,
    }),
  )

  return (
    <section id="certifications" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates & recognition"
          description="Courses and recognition earned along the way. Click any certificate to view the full document."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CERTIFICATES.map((cert, i) => (
            <article
              key={cert.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:flex-row"
            >
              {cert.image ? (
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`View ${cert.title} certificate`}
                  className="group relative w-full cursor-zoom-in overflow-hidden bg-muted sm:w-44 sm:shrink-0"
                >
                  <AssetImage
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="aspect-video h-full w-full sm:aspect-auto"
                    objectFit="contain"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/30">
                    <Maximize2 className="h-6 w-6 text-background opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </button>
              ) : (
                <AssetImage
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="aspect-video w-full sm:aspect-auto sm:w-44 sm:shrink-0"
                  placeholderLabel="Add certificate scan"
                  objectFit="cover"
                />
              )}
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

      {index !== null && images[index] && (
        <Lightbox
          images={images}
          index={index}
          onClose={() => setIndex(null)}
          onIndexChange={setIndex}
        />
      )}
    </section>
  )
}
