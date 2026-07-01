import type { Metadata } from 'next'
import { absoluteUrl, AUTHOR, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: `${SITE_NAME} — AIML Engineer & Full-Stack Developer`,
  description:
    'AIML Engineer at Fills AI. Portfolio, projects, and articles on AI engineering, agentic systems, and full-stack development. Based in India.',
  keywords: [
    'AIML Engineer',
    'AI Engineer India',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'Python',
    'Machine Learning',
    'Shreyas Pandey',
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  alternates: { canonical: absoluteUrl('/home') },
  openGraph: {
    title: `${SITE_NAME} — AIML Engineer & Full-Stack Developer`,
    description:
      'AIML Engineer specializing in AI/ML solutions, agentic systems, and full-stack development.',
    url: absoluteUrl('/home'),
    type: 'profile',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — AIML Engineer`,
    description:
      'AIML Engineer specializing in AI/ML solutions, agentic systems, and full-stack development.',
    creator: AUTHOR.twitter,
  },
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children
}
