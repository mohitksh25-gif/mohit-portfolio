'use client'

import { useState } from 'react'
import { Cpu, Lightbulb, Target, Wrench } from 'lucide-react'
import { AssetImage } from '@/components/asset-image'
import { Lightbox, type LightboxImage } from '@/components/lightbox'
import { SectionHeading } from '@/components/section-heading'
import { PROJECTS, type Project } from '@/lib/portfolio-data'

function ProjectCard({
  project,
  onOpenGallery,
}: {
  project: Project
  onOpenGallery: (images: LightboxImage[], index: number) => void
}) {
  const gallery = project.gallery ?? []
  const hasGallery = gallery.length > 0

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        {hasGallery ? (
          <button
            type="button"
            onClick={() => onOpenGallery(gallery, 0)}
            aria-label={`Open ${project.name} photo gallery`}
            className="group block w-full cursor-zoom-in"
          >
            <AssetImage
              src={project.image}
              alt={project.imageAlt}
              className="aspect-video w-full"
              objectFit="cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
          </button>
        ) : (
          <AssetImage
            src={project.image}
            alt={project.imageAlt}
            className="aspect-video w-full"
            placeholderLabel={
              project.isHardware ? 'Add your prototype photo' : 'Project preview'
            }
          />
        )}
        {(project.isConcept || project.isHardware) && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground shadow">
            {project.isHardware ? (
              <Cpu className="h-3 w-3" />
            ) : (
              <Lightbulb className="h-3 w-3" />
            )}
            {project.isHardware ? 'Hardware Prototype' : 'Concept'}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-foreground">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary text-pretty">
          {project.tagline}
        </p>

        <div className="mt-4 space-y-3 text-sm leading-relaxed">
          <div className="flex gap-2">
            <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Problem: </span>
              {project.problem}
            </p>
          </div>
          <div className="flex gap-2">
            <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Solution: </span>
              {project.solution}
            </p>
          </div>
        </div>

        {hasGallery && (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Photos
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {gallery.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => onOpenGallery(gallery, i)}
                  aria-label={`View photo ${i + 1} of ${project.name}`}
                  className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg border border-border"
                >
                  <img
                    src={img.src || '/placeholder.svg'}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {project.isHardware ? 'Components' : 'Features'}
          </p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-1.5 text-sm text-muted-foreground"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [lightbox, setLightbox] = useState<{
    images: LightboxImage[]
    index: number
  } | null>(null)

  return (
    <section id="projects" className="scroll-mt-16 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of web, concept and hardware projects focused on solving real-life problems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpenGallery={(images, index) => setLightbox({ images, index })}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndexChange={(index) =>
            setLightbox((prev) => (prev ? { ...prev, index } : prev))
          }
        />
      )}
    </section>
  )
}
