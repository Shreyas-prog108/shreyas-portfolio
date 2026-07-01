'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type BlogReaderContextValue = {
  dark: boolean
  fullscreen: boolean
  toggleDark: () => void
  toggleFullscreen: () => void
}

const BlogReaderContext = createContext<BlogReaderContextValue | null>(null)

export function useBlogReader() {
  const ctx = useContext(BlogReaderContext)
  if (!ctx) throw new Error('useBlogReader must be used within BlogReaderShell')
  return ctx
}

interface BlogReaderShellProps {
  children: React.ReactNode
  showFullscreen?: boolean
}

export default function BlogReaderShell({ children, showFullscreen = false }: BlogReaderShellProps) {
  const [dark, setDark] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('blog-reader-theme')
    if (saved === 'dark') setDark(true)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem('blog-reader-theme', dark ? 'dark' : 'light')
  }, [dark, mounted])

  const toggleDark = () => setDark((d) => !d)
  const toggleFullscreen = () => setFullscreen((f) => !f)

  const className = [
    'blog-reader',
    dark ? 'dark' : '',
    fullscreen && showFullscreen ? 'fullscreen' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <BlogReaderContext.Provider value={{ dark, fullscreen, toggleDark, toggleFullscreen }}>
      <div className={className}>
        {children}
      </div>
    </BlogReaderContext.Provider>
  )
}

interface BlogReaderToolbarProps {
  backHref?: string
  backLabel?: string
  showFullscreen?: boolean
}

export function BlogReaderToolbar({
  backHref = '/blogs',
  backLabel = '← All articles',
  showFullscreen = false,
}: BlogReaderToolbarProps) {
  const { dark, fullscreen, toggleDark, toggleFullscreen } = useBlogReader()

  return (
    <header className="blog-reader-toolbar">
      <div className="blog-reader-toolbar-left">
        <a href={backHref} className="blog-reader-back">
          {backLabel}
        </a>
      </div>
      <div className="blog-reader-toolbar-right">
        {showFullscreen && (
          <button
            type="button"
            className={`blog-reader-btn${fullscreen ? ' active' : ''}`}
            onClick={toggleFullscreen}
            aria-pressed={fullscreen}
          >
            {fullscreen ? 'Column' : 'Fullscreen'}
          </button>
        )}
        <button
          type="button"
          className={`blog-reader-btn${dark ? ' active' : ''}`}
          onClick={toggleDark}
          aria-pressed={dark}
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
