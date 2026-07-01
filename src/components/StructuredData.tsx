import { absoluteUrl, AUTHOR, GEO, SITE_NAME, SITE_URL } from '@/lib/site'

export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR.name,
    jobTitle: ['AIML Engineer', 'Full-Stack Developer', 'AI Engineer'],
    description:
      'AIML Engineer specializing in AI/ML solutions, agentic systems, and full-stack development.',
    url: absoluteUrl('/home'),
    sameAs: [
      'https://github.com/Shreyas-prog108',
      'https://www.linkedin.com/in/shreyaspandeyy/',
      'https://x.com/Shreyas_Pandeyy',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: GEO.country,
      addressLocality: GEO.locality,
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Cellyn',
        description: 'AI Engineer Intern',
      },
      {
        '@type': 'Organization',
        name: 'Fills AI',
        description: 'AI Engineer Intern',
      },
    ],
    knowsAbout: [
      'Agentic AI',
      'MCP Servers',
      'Full-Stack Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Next.js',
      'React',
      'Python',
      'TypeScript',
      'Node.js',
      'AWS',
      'GCP',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Technology, Madras',
        description: 'B.S. - Data Science and Applications',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'KIET Group of Institutions, Ghaziabad',
        description: 'B.Tech - Computer Science and Engineering',
      },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE_NAME} — Portfolio`,
    url: SITE_URL,
    description:
      'Personal portfolio, projects, and articles by Shreyas Pandey — AIML Engineer based in India.',
    inLanguage: 'en-IN',
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: absoluteUrl('/home'),
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blogs?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
