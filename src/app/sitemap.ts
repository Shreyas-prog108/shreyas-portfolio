import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/home`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
