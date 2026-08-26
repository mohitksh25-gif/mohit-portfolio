import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mohit Singh | B.Tech CSE Student & Aspiring Full Stack Developer',
  description:
    'Portfolio of Mohit Singh, a B.Tech Computer Science student at Lovely Professional University and aspiring Full Stack Developer building practical technology solutions for real-world problems.',
  generator: 'v0.app',
  keywords: [
    'Mohit Singh',
    'Full Stack Developer',
    'B.Tech CSE',
    'LPU',
    'Web Developer',
    'Portfolio',
    'Python',
    'JavaScript',
  ],
  openGraph: {
    title: 'Mohit Singh | Aspiring Full Stack Developer',
    description:
      'B.Tech CSE student focused on web development, programming, DSA and real-life problem-solving projects.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
