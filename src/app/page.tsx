import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/site'
import SplashClient from './SplashClient'

export const metadata: Metadata = {
  title: 'Shreyas Pandey',
  robots: { index: false, follow: true },
  alternates: { canonical: absoluteUrl('/home') },
}

export default function Home() {
  return <SplashClient />
}
