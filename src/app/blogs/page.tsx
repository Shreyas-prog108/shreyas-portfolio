'use client'

import Link from 'next/link'

export default function Blogs() {
  // Sample blog posts - you can replace this with your actual blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      excerpt: "A comprehensive guide to building modern web applications with Next.js 15 and the App Router.",
      date: "2025-01-05",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"]
    },
    {
      id: 2,
      title: "Building AI-Powered Applications",
      excerpt: "Exploring the integration of AI models into web applications using modern frameworks.",
      date: "2025-01-04",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "Web Development"]
    },
    {
      id: 3,
      title: "The Future of Full-Stack Development",
      excerpt: "Discussing emerging trends and technologies shaping the future of full-stack development.",
      date: "2025-01-03",
      readTime: "6 min read",
      tags: ["Full-Stack", "Technology", "Future"]
    }
  ]

  return (
    <div className="portfolio">
      <header>
        <div className="terminal-nav">
          <div className="terminal-buttons">
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">blogs.sh</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-title">shreyas@blog:~$</div>
            </div>
            <div className="terminal-content">
              <p>
                <span className="prompt">shreyas@blog:~$</span> 
                <span 
                  className="clickable-command" 
                  onClick={() => document.getElementById('latest-posts')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ cursor: 'pointer' }}
                >
                  ls -la posts
                </span>
                <span className="cursor1"></span>
              </p>
              <p className="output">total {blogPosts.length} posts</p>
              <p className="output">drwxr-xr-x  2 shreyas shreyas 4096 Jan  5 2025 .</p>
              <p className="output">drwxr-xr-x  3 shreyas shreyas 4096 Jan  5 2025 ..</p>
              {blogPosts.map((post) => (
                <p key={post.id} className="output">
                  <span 
                    className="clickable-file" 
                    onClick={() => document.getElementById(`blog-${post.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ cursor: 'pointer' }}
                  >
                    -rw-r--r--  1 shreyas shreyas 2048 {post.date} {post.title.toLowerCase().replace(/\s+/g, '-')}.md
                  </span>
                </p>
              ))}
              <p><span className="prompt">shreyas@blog:~$</span> cat README.md</p>
              <p className="output">Welcome to my daily blog! Here I share insights about technology, development, and my journey as a developer.</p>
              <p>
                <span className="prompt">shreyas@blog:~$</span> 
                <span 
                  className="clickable-command" 
                  onClick={() => window.location.href = '/home'}
                  style={{ cursor: 'pointer' }}
                >
                  cd ../home
                </span>
              </p>
              <p>
                <span className="prompt">shreyas@blog:~$</span> 
                <span 
                  className="clickable-command" 
                  onClick={() => window.location.href = '/projects'}
                  style={{ cursor: 'pointer' }}
                >
                  cd ../projects
                </span>
              </p>
              <p><span className="prompt">shreyas@blog:~$</span><span className="cursor">_</span></p>
            </div>
          </div>
        </section>

        <section id="latest-posts" className="about">
          <h2>Latest Posts</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} id={`blog-${post.id}`} className="blog-card">
                <div className="blog-header">
                  <h3>{post.title}</h3>
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <div className="blog-actions">
                  <Link href={`/blogs/${post.id}`} className="button">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>About This Blog</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Welcome to my daily blog where I share my thoughts, experiences, and insights about technology, software development, and my journey as a developer.</p>
              <p>Here you&apos;ll find posts about web development, AI/ML, cloud technologies, and various projects I&apos;m working on. I aim to post regularly and share valuable content for fellow developers and tech enthusiasts.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shreyas Pandey | Built with Love</p>
        <div className="social-links">
          <Link href="/home" className="social-link">Whoami</Link>
          <Link href="/projects" className="social-link">Projects</Link>
          <a href="https://x.com/Shreyas_Pandeyy" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/shreyaspandeyy/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Shreyas-prog108" className="social-link" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </footer>
    </div>
  )
}
