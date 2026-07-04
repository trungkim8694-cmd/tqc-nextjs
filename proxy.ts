import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ja', 'en', 'vi'],

  // Used when no locale matches
  defaultLocale: 'ja',
  
  // Do not prefix the default locale (e.g. / instead of /ja)
  localePrefix: 'as-needed' 
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|favicon.ico|.*\\..*).*)']
};
