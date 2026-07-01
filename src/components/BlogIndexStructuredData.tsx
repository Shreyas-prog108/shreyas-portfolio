import { blogPosts } from '@/data/blogPosts'
import { absoluteUrl, AUTHOR, SITE_NAME } from '@/lib/site'

export default function BlogIndexStructuredData() {
  const blog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} — Articles`,
    description: 'Long-form articles on AI, software engineering, agents, and the tech landscape.',
    url: absoluteUrl('/blogs'),
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: AUTHOR.url,
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blogs/${post.slug}`),
      datePublished: post.date,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }}
    />
  )
}
