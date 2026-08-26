import { Code2, Globe, Lightbulb, Puzzle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const HIGHLIGHTS = [
  {
    icon: Globe,
    title: 'Web Development',
    text: 'Building responsive, practical websites and web interfaces.',
  },
  {
    icon: Code2,
    title: 'Programming',
    text: 'Writing solutions in Python and C/C++, and learning more.',
  },
  {
    icon: Puzzle,
    title: 'Problem Solving & DSA',
    text: 'Practicing data structures and algorithms to think logically.',
  },
  {
    icon: Lightbulb,
    title: 'Real-World Projects',
    text: 'Turning everyday problems into useful project ideas.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I am a B.Tech Computer Science and Engineering student at Lovely
              Professional University, and an aspiring Full Stack Developer.
            </p>
            <p>
              I enjoy solving real-life problems through technology and building
              practical projects that can be useful in everyday situations.
            </p>
            <p>
              My main interests are web development, programming, problem
              solving, data structures and algorithms, and real-world project
              development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
