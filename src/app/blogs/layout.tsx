import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/site'
import './blogs.css'

export const metadata: Metadata = {
  title: 'Articles | Shreyas Pandey',
  description:
    'Long-form articles on AI, software engineering, agentic systems, LLMs, and the tech landscape by Shreyas Pandey.',
  keywords: ['AI articles', 'AI engineering', 'LLM', 'tech blog', 'Shreyas Pandey'],
  alternates: {
    canonical: absoluteUrl('/blogs'),
  },
  openGraph: {
    title: 'Articles | Shreyas Pandey',
    description:
      'Long-form articles on AI, software engineering, agentic systems, LLMs, and the tech landscape.',
    url: absoluteUrl('/blogs'),
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Articles | Shreyas Pandey',
    description:
      'Long-form articles on AI, software engineering, agentic systems, LLMs, and the tech landscape.',
  },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
