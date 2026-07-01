import { absoluteUrl, AUTHOR, SITE_NAME } from '@/lib/site'

const projects = [
  {
    name: 'Citecrawler',
    description: 'AI Powered Comprehensive Research Paper Searching Platform',
    url: 'https://citecrawler.vercel.app/',
    keywords: ['RAG', 'Next.js', 'FastAPI', 'PineconeDB'],
  },
  {
    name: 'Finalpha',
    description: 'A Deep Financial Analysis Agent',
    url: 'https://github.com/Shreyas-prog108/fin-alpha',
    keywords: ['Langchain', 'Langgraph', 'FastAPI'],
  },
  {
    name: 'Data Analyst Agent',
    description: 'AI Powered Data Analysis Agent',
    url: 'https://github.com/Shreyas-prog108/data-analysis-agent',
    keywords: ['FastAPI', 'Langchain', 'DuckDB'],
  },
  {
    name: 'Cinema Audience Forecasting Challenge',
    description: 'Time Series ML Model',
    url: 'https://github.com/Shreyas-prog108/Cinema-Audience-Forecasting-Challenge',
    keywords: ['Scikit-learn', 'Xgboost', 'Pandas'],
  },
  {
    name: 'Doxtract',
    description: 'PDF, DOCX, TXT to JSON Converter',
    url: 'https://doxtract.vercel.app/',
    keywords: ['FastAPI', 'Next.js', 'GCP'],
  },
  {
    name: 'Nasa Space Biology Engine',
    description: 'A customised platform for Nasa Space Biology Archive',
    url: 'https://github.com/Shreyas-prog108/nasa-biology-engine',
    keywords: ['FastAPI', 'Next.js', 'MongoDB'],
  },
  {
    name: 'Envilo',
    description: 'Secure Environment Variables and Secrets Management Platform',
    url: 'https://github.com/Shreyas-prog108/envilo',
    keywords: ['Next.js', 'PostgreSQL', 'Cloudflare'],
  },
  {
    name: 'Parkpro',
    description: 'A Parking management Application',
    url: 'https://parkpro-backend.onrender.com/',
    keywords: ['Flask', 'PostgreSQL'],
  },
  {
    name: 'Coffee Roasting Algorithm',
    description: 'A neural network algorithm written in python',
    url: 'https://github.com/Shreyas-prog108/coffee-roasting',
    keywords: ['Python', 'Neural Network'],
  },
  {
    name: 'HealthEase',
    description: 'Hospital Management System',
    url: absoluteUrl('/projects'),
    keywords: ['Vue.js', 'Flask', 'PostgreSQL'],
  },
]

export default function ProjectsStructuredData() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} — Projects`,
    description: 'Portfolio of AI/ML and full-stack projects by Shreyas Pandey.',
    url: absoluteUrl('/projects'),
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        url: project.url,
        author: {
          '@type': 'Person',
          name: AUTHOR.name,
          url: AUTHOR.url,
        },
        keywords: project.keywords.join(', '),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
    />
  )
}
