module.exports = {
  locales: ['pl', 'en'],
  defaultLocale: 'en',
  localeDetection: true,
  pages: {
    '*': ['common', 'layout', 'enums', 'policies'],
    '/': ['home'],
    '/404': ['common'],
    '/faqHelp': ['faq'],
    '/job-notifications': ['static-notifications', 'policies'], 
  },
}
