import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});
  return {
    title: t('b2bTitle'),
    description: t('b2bDesc'),
    openGraph: {
      title: t('b2bTitle'),
      description: t('b2bDesc'),
      url: `https://tqc-jp.com/${locale}/b2b-supply`,
      siteName: 'TQC',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://tqc-jp.com/${locale}/b2b-supply`,
      languages: {
        'ja': 'https://tqc-jp.com/ja/b2b-supply',
        'en': 'https://tqc-jp.com/en/b2b-supply',
        'vi': 'https://tqc-jp.com/vi/b2b-supply',
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
