module.exports = {
  locales: ['pl', 'en'],
  defaultLocale: 'en',
  localeDetection: true,
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/404': ['common'],
    '/wineList': ['wineList'],
    '/recipes': ['recipes'],
    '/pizzeria': ['pizzeria'],
    '/orderOnline': ['orderOnline'],
    '/giftCard': ['giftCard'],
    '/contactUs': ['contactUs'],
    '/catering': ['catering'],
  },
}
