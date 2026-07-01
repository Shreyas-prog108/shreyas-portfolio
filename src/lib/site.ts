/** Canonical origin — matches Vercel primary domain (apex redirects to www). */
export const SITE_URL = 'https://www.shreyaspandey.me'
export const SITE_NAME = 'Shreyas Pandey'
export const AUTHOR = {
  name: 'Shreyas Pandey',
  url: `${SITE_URL}/home`,
  twitter: '@Shreyas_Pandeyy',
}

export const GEO = {
  country: 'IN',
  locality: 'India',
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
