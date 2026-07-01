'use client'

import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'
import BlogReaderShell, { BlogReaderToolbar } from '@/components/BlogReaderShell'

export default function BlogsList() {
  return (
    <BlogReaderShell>
      <BlogReaderToolbar backHref="/home" backLabel="← Home" />
      <main className="blog-reader-main">
        <h1 className="blog-reader-heading">Articles</h1>
        <p className="blog-reader-subheading">
          Long-form writing on AI, engineering, and tech — published on{' '}
          <a href="https://x.com/Shreyas_Pandeyy" target="_blank" rel="noopener noreferrer">
            X
          </a>
          .
        </p>

        <ul className="blog-reader-list">
          {blogPosts.map((post) => (
            <li key={post.slug} className="blog-reader-list-item">
              <Link href={`/blogs/${post.slug}`} className="blog-reader-list-card">
                {post.coverImage && (
                  <div className="blog-reader-list-thumb">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={400}
                      height={160}
                      quality={80}
                      sizes="120px"
                    />
                  </div>
                )}
                <div className="blog-reader-list-content">
                  <span className="blog-reader-list-link">{post.title}</span>
                  <p className="blog-reader-list-meta">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    · {post.readTime}
                  </p>
                  <p className="blog-reader-list-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </BlogReaderShell>
  )
}
