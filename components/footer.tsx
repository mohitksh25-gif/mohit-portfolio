import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SOCIAL_LINKS } from '@/lib/portfolio-data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-heading text-base font-bold text-primary">
            Mohit Singh
          </p>
          <p className="text-sm text-muted-foreground">
            B.Tech CSE Student &amp; Aspiring Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {year} Mohit Singh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
