import type { BlogPost } from '@/data/blogPosts'
import { getCoverImageUrl } from '@/data/blogPosts'
import { absoluteUrl, AUTHOR, SITE_NAME } from '@/lib/site'

interface ArticleStructuredDataProps {
  post: BlogPost
}

export default function ArticleStructuredData({ post }: ArticleStructuredDataProps) {
  const articleUrl = absoluteUrl(`/blogs/${post.slug}`)

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: getCoverImageUrl(post.slug),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: AUTHOR.url,
      sameAs: [
        'https://x.com/Shreyas_Pandeyy',
        'https://www.linkedin.com/in/shreyaspandeyy/',
        'https://github.com/Shreyas-prog108',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      url: absoluteUrl('/home'),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    keywords: post.tags.join(', '),
    inLanguage: 'en',
    isAccessibleForFree: true,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/home'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Articles',
        item: absoluteUrl('/blogs'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}
