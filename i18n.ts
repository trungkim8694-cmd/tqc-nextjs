import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['ja', 'en', 'vi'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = locale || 'ja';
  console.log('getRequestConfig locale:', resolvedLocale);
  if (!locales.includes(resolvedLocale as Locale)) notFound();

  return {
    locale: resolvedLocale as string,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  };
});
