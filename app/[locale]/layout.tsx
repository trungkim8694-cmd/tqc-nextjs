// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Phone, Mail, Facebook, Music2 } from 'lucide-react';
// 1. Import Navbar mới
import Navbar from '@/components/Navbar'; 
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }, { locale: 'vi' }];
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'ja';
  const t = await getTranslations({locale, namespace: 'SEO'});
  return {
    metadataBase: new URL('https://tqc-jp.com'),
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://tqc-jp.com/${locale}`,
      siteName: 'TQC',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://tqc-jp.com/${locale}`,
      languages: {
        'ja': 'https://tqc-jp.com/ja',
        'en': 'https://tqc-jp.com/en',
        'vi': 'https://tqc-jp.com/vi',
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'ja';
  const messages = await getMessages({locale});
  const t = await getTranslations({locale, namespace: 'Footer'});

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* --- TOP BAR --- */}
          <div className="hidden md:flex bg-white border-b py-2 px-10 justify-between items-center text-sm text-gray-600">
              <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                      <Phone size={14} className="text-blue-600" />
                      <span>(03) 6907-1219</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Mail size={14} className="text-blue-600" />
                      <span>info@tqc-jp.com</span>
                      <Mail size={14} className="text-blue-600" />
                      <span>tqcjapan2022@gmail.com</span>
                  </div>
              </div>
              <div className="flex gap-4">
                  <a href="https://www.facebook.com/bdsthomenhatban" target="_blank" rel="noopener noreferrer">
                      <Facebook size={18} className="cursor-pointer hover:text-blue-600 transition" />
                  </a>
                  <a href="https://www.tiktok.com/@tqc.japan" target="_blank" rel="noopener noreferrer">
                      <Music2 size={18} className="cursor-pointer hover:text-black transition" />
                  </a>
              </div>
          </div>

          {/* --- 2. SỬ DỤNG NAVBAR COMPONENT TẠI ĐÂY --- */}
          <Navbar />

          {/* --- CHILDREN (PAGE CONTENT) --- */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* --- FOOTER --- */}
          <footer className="bg-[#4a4a4a] text-white py-12 px-6 mt-auto">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                  <div>
                      <h2 className="text-xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">TQC株式会社</h2>
                      <div className="space-y-3 text-sm opacity-90">
                          <p><strong>日本Office:</strong> 東京都豊島区南池袋２丁目３３－６ 佐藤ビル３F</p>
                          <p><strong>VN Office:</strong> P3-17, khu đô thị Vinhomes Ocenpark 1, Hà Nội</p>
                          <p>Tel: (03) 6907-1219</p>
                          <p>Fax: (03) 6701-2399</p>
                          <p>Email: info@tqc-jp.com</p>
                          <p>Email: tqcjapan2022@gmail.com</p>
                      </div>
                  </div>
                  <div className="w-full h-64 md:h-80 bg-gray-300 rounded-sm overflow-hidden">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0014485254!2d139.71541170000003!3d35.7261829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3499c00959%3A0x7d958434b44609ba!2zVFFD5qCq5byP5Lya56S-!5e0!3m2!1svi!2s!4v1783168563908!5m2!1svi!2s"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="TQC株式会社 Access Map"
                      ></iframe>
                  </div>
              </div>
              <div className="text-center text-xs opacity-60 mt-10 pt-6 border-t border-gray-500 space-y-2">
                  <p>{t('disclaimer')}</p>
                  <p className="text-gray-400 mt-2 text-sm">
                    {t('relatedServices')}
                    <a href="https://kigyoulist.com/ja" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors underline mx-1">{t('kigyoulist')}</a>
                    {' | '}
                    <a href="https://www.keibai-koubai.com/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors underline mx-1">{t('keibaikoubai')}</a>
                  </p>
                  <p>&copy;2022 - {new Date().getFullYear()} TQC CO., LTD. ALL RIGHTS RESERVED.</p>
              </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}