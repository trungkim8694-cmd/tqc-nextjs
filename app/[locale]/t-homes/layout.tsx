import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});
  return {
    title: t('thomesTitle'),
    description: t('thomesDesc'),
    openGraph: {
      title: t('thomesTitle'),
      description: t('thomesDesc'),
      url: `https://tqc-jp.com/${locale}/t-homes`,
      siteName: 'TQC',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://tqc-jp.com/${locale}/t-homes`,
      languages: {
        'ja': 'https://tqc-jp.com/ja/t-homes',
        'en': 'https://tqc-jp.com/en/t-homes',
        'vi': 'https://tqc-jp.com/vi/t-homes',
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
