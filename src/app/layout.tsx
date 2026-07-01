import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import StructuredData from '../components/StructuredData'
import { absoluteUrl, AUTHOR, SITE_NAME, SITE_URL } from '@/lib/site'

// Optimize font loading with geo-optimization
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap', // Better font loading - prevents invisible text
  preload: true, // Preload critical font
  fallback: ['monospace'], // Fallback font for better performance
  adjustFontFallback: true, // Better font fallback rendering
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Shreyas Pandey - AIML Engineer',
  description: 'Experienced AIML Engineer specializing in complex AI/ML solutions. Currently working at Fills AI. Explore my projects, blog, and technical expertise.',
  keywords: ['Full-Stack Developer', 'AI Engineer', 'Next.js', 'React', 'Python', 'Machine Learning', 'Web Development', 'Shreyas Pandey'],
  authors: [{ name: 'Shreyas Pandey' }],
  creator: 'Shreyas Pandey',
  publisher: 'Shreyas Pandey',
  alternates: {
    canonical: absoluteUrl('/home'),
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/home'),
    title: `${SITE_NAME} - Full-Stack Developer & AI Engineer`,
    description: 'Experienced Full-Stack Developer and AI Engineer specializing in Next.js, React, Python, and AI/ML solutions.',
    siteName: `${SITE_NAME} - Whoami`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Full-Stack Developer & AI Engineer`,
    description: 'Experienced Full-Stack Developer and AI Engineer specializing in Next.js, React, Python, and AI/ML solutions.',
    creator: AUTHOR.twitter,
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
