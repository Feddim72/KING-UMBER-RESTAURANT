/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')
module.exports = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },

  images: {
    domains: ['picsum.photos'],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}
