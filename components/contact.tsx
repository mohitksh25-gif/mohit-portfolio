'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, Send, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { SOCIAL_LINKS } from '@/lib/portfolio-data'

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: SOCIAL_LINKS.phone,
    href: `tel:${SOCIAL_LINKS.phone}`,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'MOHIT-21-OFF',
    href: SOCIAL_LINKS.github,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: SOCIAL_LINKS.linkedin,
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'View my profile',
    href: SOCIAL_LINKS.leetcode,
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to internships, collaborations and learning opportunities. Feel free to reach out."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            {CONTACT_METHODS.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  method.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-accent/50"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <method.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {method.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">
                    {method.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  placeholder="Write your message..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                This opens your email app with the message pre-filled.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
