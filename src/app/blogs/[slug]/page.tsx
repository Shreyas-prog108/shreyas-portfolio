import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleStructuredData from '@/components/ArticleStructuredData'
import BlogArticleReader from '@/components/BlogArticleReader'
import { blogPosts, getBlogPost, getCoverImageUrl } from '@/data/blogPosts'
import { getArticleHtml } from '@/lib/articleContent'
import { absoluteUrl, AUTHOR } from '@/lib/site'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-static'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  const url = absoluteUrl(`/blogs/${post.slug}`)

  return {
    title: `${post.title} | Shreyas Pandey`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      url,
      siteName: 'Shreyas Pandey',
      locale: 'en_US',
      authors: [AUTHOR.name],
      tags: post.tags,
      images: [{ url: getCoverImageUrl(post.slug), alt: post.title, width: 1983, height: 793 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: AUTHOR.twitter,
      images: [getCoverImageUrl(post.slug)],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const contentHtml = getArticleHtml(slug)

  if (!post || !contentHtml) {
    notFound()
  }

  return (
    <>
      <ArticleStructuredData post={post} />
      <BlogArticleReader post={post} contentHtml={contentHtml} />
    </>
  )
}
