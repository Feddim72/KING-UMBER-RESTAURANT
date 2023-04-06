/** @type {import('next').NextConfig} */

const withTranslateRoutes = require('next-translate-routes/plugin')
const nextTranslate = require('next-translate')
module.exports = nextTranslate(
  withTranslateRoutes({
    i18n: {
      locales: ['en', 'pl'],
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
  })
)
