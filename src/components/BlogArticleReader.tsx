'use client'

import Image from 'next/image'
import type { BlogPost } from '@/data/blogPosts'
import BlogReaderShell, { BlogReaderToolbar } from './BlogReaderShell'

interface BlogArticleReaderProps {
  post: BlogPost
  contentHtml: string
}

export default function BlogArticleReader({ post, contentHtml }: BlogArticleReaderProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <BlogReaderShell showFullscreen>
      <BlogReaderToolbar backHref="/blogs" showFullscreen />
      <main className="blog-reader-main">
        <article className="blog-reader-article">
          {post.coverImage && (
            <figure className="blog-reader-cover">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1983}
                height={793}
                priority
                quality={85}
                sizes="(max-width: 600px) 100vw, 600px"
              />
            </figure>
          )}

          <h1 className="blog-reader-title">{post.title}</h1>
          <p className="blog-reader-meta">
            Shreyas Pandey · {formattedDate} · {post.readTime}
          </p>

          <div className="blog-reader-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-reader-tag">
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>

          <hr className="blog-reader-header-rule" />

          <div
            className="blog-reader-body"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <hr className="blog-reader-footer-rule" />

          <a
            href={post.xUrl}
            className="blog-reader-footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Originally published on X →
          </a>
        </article>
      </main>
    </BlogReaderShell>
  )
}
