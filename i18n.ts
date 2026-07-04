import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['ja', 'en', 'vi'];

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = locale || 'ja';
  console.log('getRequestConfig locale:', resolvedLocale);
  if (!locales.includes(resolvedLocale as any)) notFound();

  return {
    locale: resolvedLocale as string,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  };
});
