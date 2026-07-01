/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSG at build time — all pages pre-rendered, Vercel handles image optimization at the edge
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [120, 160, 256, 384, 512],
    minimumCacheTTL: 31536000,
  },

  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ['react-icons', '@emailjs/browser'],
  },
}

module.exports = nextConfig
