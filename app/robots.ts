import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/human-resource'],
    },
    sitemap: 'https://tqc-jp.com/sitemap.xml',
  };
}

