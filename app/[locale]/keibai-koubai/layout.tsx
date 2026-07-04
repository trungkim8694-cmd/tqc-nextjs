import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'SEO'});
  return {
    title: t('keibaiTitle'),
    description: t('keibaiDesc'),
    openGraph: {
      title: t('keibaiTitle'),
      description: t('keibaiDesc'),
      url: `https://tqc-jp.com/${locale}/keibai-koubai`,
      siteName: 'TQC',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://tqc-jp.com/${locale}/keibai-koubai`,
      languages: {
        'ja': 'https://tqc-jp.com/ja/keibai-koubai',
        'en': 'https://tqc-jp.com/en/keibai-koubai',
        'vi': 'https://tqc-jp.com/vi/keibai-koubai',
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
