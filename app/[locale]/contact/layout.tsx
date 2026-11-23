import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' });
  const tSeo = await getTranslations({ locale, namespace: 'SEO' });

  const canonicalUrl = locale === 'ja' ? 'https://tqc-jp.com/contact' : `https://tqc-jp.com/${locale}/contact`;
  const companyName = locale === 'vi' ? 'Công ty TQC株式会社' : locale === 'en' ? 'TQC Co., Ltd.' : 'TQC株式会社';

  return {
    title: `${t('title')} | ${companyName}`,
    description: t('formSubtitle'),
    openGraph: {
      title: `${t('title')} | ${companyName}`,
      description: t('formSubtitle'),
      url: canonicalUrl,
      siteName: companyName,
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ja: 'https://tqc-jp.com/contact',
        en: 'https://tqc-jp.com/en/contact',
        vi: 'https://tqc-jp.com/vi/contact',
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

