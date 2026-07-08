import { absoluteUrl } from '@/lib/site'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  xUrl: string
  coverImage: string
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function getStatusId(xUrl: string): string {
  return xUrl.split('/status/')[1]?.split('?')[0] ?? ''
}

export function getCoverImagePath(slug: string): string {
  return `/blog-covers/${slug}.jpg`
}

export function getCoverImageUrl(slug: string): string {
  return absoluteUrl(getCoverImagePath(slug))
}

export const blogPosts: BlogPost[] = [
  {
    slug: slugify('Dear First Year: Nobody Will Tell You This, So I Will'),
    title: 'Dear First Year: Nobody Will Tell You This, So I Will',
    excerpt:
      'Yaar listen, first year is the most wasted year for 90% of engineering students, and nobody warns you about it. A senior letter on what actually matters before the four years run away.',
    date: '2026-07-04',
    readTime: '8 min read',
    tags: ['Career', 'Students', 'Advice'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2073422233197060235',
    coverImage: '/blog-covers/dear-first-year-nobody-will-tell-you-this-so-i-will.jpg',
  },
  {
    slug: slugify('The Last 30 Days of AI Multiverse'),
    title: 'The Last 30 Days of AI Multiverse',
    excerpt:
      'June 2026 was wild. Not in the "another GPT wrapper" way, but in the "wait, what just happened?" way. China quietly dropped a bunch of open-source models that made frontier labs sweat.',
    date: '2026-06-18',
    readTime: '12 min read',
    tags: ['AI', 'Open Source', 'Industry'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2067615097477083408',
    coverImage: '/blog-covers/the-last-30-days-of-ai-multiverse.jpg',
  },
  {
    slug: slugify("The $60 Question: Are Cursor's AI Tokens Actually Subsidized?"),
    title: "The $60 Question: Are Cursor's AI Tokens Actually Subsidized?",
    excerpt:
      'An investigation using one month of real usage data — June 2026. I pay $60 a month for Cursor Pro+. One billing cycle, instead of asking whether the tool made me productive, I asked a different question.',
    date: '2026-06-09',
    readTime: '10 min read',
    tags: ['Cursor', 'AI Tools', 'Analysis'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2064371342892560416',
    coverImage: '/blog-covers/the-60-question-are-cursors-ai-tokens-actually-subsidized.jpg',
  },
  {
    slug: slugify("MiniMax's M2 Series: The clearest public blueprints for agent-native LLMs"),
    title: "MiniMax's M2 Series: The clearest public blueprints for agent-native LLMs",
    excerpt:
      'Not just another MoE release: M2, M2.5, and M2.7 combine mini activations, long-context full attention, verifiable agentdata, and an RL stack built for tools, code, browsers, and office work.',
    date: '2026-05-28',
    readTime: '15 min read',
    tags: ['MiniMax', 'LLMs', 'Agents'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2060012257724264797',
    coverImage: '/blog-covers/minimaxs-m2-series-the-clearest-public-blueprints-for-agent-native-llms.jpg',
  },
  {
    slug: slugify('The AI Engineering Roadmap'),
    title: 'The AI Engineering Roadmap',
    excerpt:
      '2026 Edition · Agentic AI. A structured path from Python developer to production-ready AI engineer — with a strong focus on agentic systems, LLMs, and real-world tooling.',
    date: '2026-05-17',
    readTime: '20 min read',
    tags: ['AI Engineering', 'Roadmap', 'Career'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2056101948420759650',
    coverImage: '/blog-covers/the-ai-engineering-roadmap.jpg',
  },
  {
    slug: slugify('AI Engineering Roadmap for Software Engineers'),
    title: 'AI Engineering Roadmap for Software Engineers',
    excerpt:
      'Fast-Track · For Software Engineers. Already know Python and FastAPI? Skip the theory-heavy track. This is your direct path to building and deploying agentic AI systems — in weeks, not months.',
    date: '2026-05-17',
    readTime: '15 min read',
    tags: ['AI Engineering', 'Roadmap', 'Software Engineers'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2056101751632416853',
    coverImage: '/blog-covers/ai-engineering-roadmap-for-software-engineers.jpg',
  },
  {
    slug: slugify(
      'I Made Claude Opus 4.6 Max and GPT-5.5 Analyze the X Algorithm. Then I Made Them Judge Each Other.'
    ),
    title:
      'I Made Claude Opus 4.6 Max and GPT-5.5 Analyze the X Algorithm. Then I Made Them Judge Each Other.',
    excerpt:
      'Claude vs GPT: X Algorithm Analysis. Both models analyzed the same open-source X "For You" algorithm repository (May 2026 release). Same codebase. Same task. Independent runs. Then they judged each other.',
    date: '2026-05-17',
    readTime: '12 min read',
    tags: ['Claude', 'GPT', 'X Algorithm'],
    xUrl: 'https://x.com/Shreyas_Pandeyy/status/2056044969916596702',
    coverImage: '/blog-covers/i-made-claude-opus-46-max-and-gpt-55-analyze-the-x-algorithm-then-i-made-them-judge-each-other.jpg',
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
