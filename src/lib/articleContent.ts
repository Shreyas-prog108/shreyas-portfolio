import fs from 'fs'
import path from 'path'

const ARTICLES_DIR = path.join(process.cwd(), 'src/content/articles')

export function getArticleHtml(slug: string): string | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.html`)
  if (!fs.existsSync(filePath)) {
    return null
  }
  return fs.readFileSync(filePath, 'utf-8')
}
