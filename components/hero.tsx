'use client'

import { useState } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="home" className="scroll-mt-16 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-3 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary">
            Aspiring Full Stack Developer
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
            Mohit Singh
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">
            B.Tech CSE Student | Aspiring Full Stack Developer
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Building practical technology solutions for real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/Mohit-Singh-Resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl bg-primary/10"
              aria-hidden="true"
            />
            <div className="relative h-60 w-60 overflow-hidden rounded-3xl border-4 border-background bg-muted shadow-lg sm:h-72 sm:w-72">
              {!photoFailed ? (
                <img
                  src="/profile.jpg"
                  alt="Mohit Singh"
                  onError={() => setPhotoFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-primary/5 p-4 text-center">
                  <span className="font-heading text-5xl font-bold text-primary">
                    MS
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Add your photo at public/profile.jpg
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
