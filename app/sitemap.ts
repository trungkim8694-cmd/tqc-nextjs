import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tqc-jp.com';
  const currentDate = new Date().toISOString();

  const pages = [
    '',
    '/t-homes',
    '/keibai-koubai',
    '/b2b-supply',
    '/kigyoulist',
    '/contact',
  ];

  const locales = ['', '/en', '/vi'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}${locale}${page}`;
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}

