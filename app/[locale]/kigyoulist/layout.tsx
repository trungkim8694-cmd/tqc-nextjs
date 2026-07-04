import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});
  return {
    title: t('kigyoulistTitle'),
    description: t('kigyoulistDesc'),
    openGraph: {
      title: t('kigyoulistTitle'),
      description: t('kigyoulistDesc'),
      url: `https://tqc-jp.com/${locale}/kigyoulist`,
      siteName: 'TQC',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://tqc-jp.com/${locale}/kigyoulist`,
      languages: {
        'ja': 'https://tqc-jp.com/ja/kigyoulist',
        'en': 'https://tqc-jp.com/en/kigyoulist',
        'vi': 'https://tqc-jp.com/vi/kigyoulist',
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
