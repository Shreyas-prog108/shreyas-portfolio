import type { Metadata } from 'next'
import ProjectsStructuredData from '@/components/ProjectsStructuredData'
import { absoluteUrl, AUTHOR, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: `Projects | ${SITE_NAME}`,
  description:
    'Portfolio of AI/ML, full-stack, and data projects — RAG systems, financial agents, research tools, and more by Shreyas Pandey.',
  keywords: [
    'AI projects',
    'RAG',
    'Next.js projects',
    'FastAPI',
    'machine learning portfolio',
    'Shreyas Pandey projects',
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  alternates: { canonical: absoluteUrl('/projects') },
  openGraph: {
    title: `Projects | ${SITE_NAME}`,
    description:
      'Portfolio of AI/ML, full-stack, and data engineering projects.',
    url: absoluteUrl('/projects'),
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: `Projects | ${SITE_NAME}`,
    description: 'Portfolio of AI/ML, full-stack, and data engineering projects.',
    creator: AUTHOR.twitter,
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectsStructuredData />
      {children}
    </>
  )
}
