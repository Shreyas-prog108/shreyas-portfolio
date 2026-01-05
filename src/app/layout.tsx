import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import StructuredData from '../components/StructuredData'

// Optimize font loading with geo-optimization
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap', // Better font loading - prevents invisible text
  preload: true, // Preload critical font
  fallback: ['monospace'], // Fallback font for better performance
  adjustFontFallback: true, // Better font fallback rendering
})

export const metadata: Metadata = {
  title: 'Shreyas Pandey - Full-Stack Developer & AI Engineer',
  description: 'Experienced Full-Stack Developer and AI Engineer specializing in Next.js, React, Python, and AI/ML solutions. Currently working at Fills AI and 21 Spheres. Explore my projects, blog, and technical expertise.',
  keywords: ['Full-Stack Developer', 'AI Engineer', 'Next.js', 'React', 'Python', 'Machine Learning', 'Web Development', 'Shreyas Pandey'],
  authors: [{ name: 'Shreyas Pandey' }],
  creator: 'Shreyas Pandey',
  publisher: 'Shreyas Pandey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shreyaspandey.dev',
    title: 'Shreyas Pandey - Full-Stack Developer & AI Engineer',
    description: 'Experienced Full-Stack Developer and AI Engineer specializing in Next.js, React, Python, and AI/ML solutions.',
    siteName: 'Shreyas Pandey - Whoami',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Pandey - Full-Stack Developer & AI Engineer',
    description: 'Experienced Full-Stack Developer and AI Engineer specializing in Next.js, React, Python, and AI/ML solutions.',
    creator: '@Shreyas_Pandeyy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={jetbrainsMono.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
