// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import { Phone, Mail, Facebook, Music2, ShieldCheck, MapPin, Building2, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "ja" }, { locale: "en" }, { locale: "vi" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "ja";
  const t = await getTranslations({ locale, namespace: "SEO" });

  const canonicalUrl = locale === "ja" ? "https://tqc-jp.com" : `https://tqc-jp.com/${locale}`;

  return {
    metadataBase: new URL("https://tqc-jp.com"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      siteName: "TQC株式会社",
      locale: locale,
      type: "website",
      images: [
        {
          url: "https://tqc-jp.com/logo.png",
          width: 800,
          height: 600,
          alt: "TQC株式会社",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ja: "https://tqc-jp.com",
        en: "https://tqc-jp.com/en",
        vi: "https://tqc-jp.com/vi",
        "x-default": "https://tqc-jp.com",
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "ja";
  const messages = await getMessages({ locale });
  const tFooter = await getTranslations({ locale, namespace: "Footer" });
  const tProfile = await getTranslations({ locale, namespace: "CompanyProfile" });
  const tNav = await getTranslations({ locale, namespace: "Navbar" });

  const currentYear = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tqc-jp.com/#organization",
        "name": "株式会社ＴＱＣ",
        "alternateName": ["TQC株式会社", "TQC Co., Ltd."],
        "url": "https://tqc-jp.com",
        "logo": "https://tqc-jp.com/logo.png",
        "taxID": "4013301048678",
        "foundingDate": "2022-02-09",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "南池袋二丁目３３−６ 佐藤ビルディング３Ｆ",
          "addressLocality": "豊島区",
          "addressRegion": "東京都",
          "postalCode": "171-0022",
          "addressCountry": "JP"
        },
        "telephone": "+81-3-6907-1219"
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://tqc-jp.com/#realestate",
        "name": "T-Homes 不動産 (TQC株式会社)",
        "url": "https://tqc-jp.com",
        "telephone": "+81-3-6907-1219",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "南池袋二丁目３３−６ 佐藤ビルディング３Ｆ",
          "addressLocality": "豊島区",
          "addressRegion": "東京都",
          "postalCode": "171-0022",
          "addressCountry": "JP"
        }
      }
    ]
  };

  const getHref = (path: string) => {
    if (locale === "ja") return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  return (
    <html lang={locale} className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* --- TOP BAR (LIGHT B2B TRUST STRIP) --- */}
          <header className="bg-slate-50 text-slate-600 text-xs border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-3">
              <div className="flex items-center flex-wrap gap-3 sm:gap-6">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  <ShieldCheck size={13} className="text-blue-600 shrink-0" />
                  <span>東京都知事 (1) 第107650号</span>
                </span>
                <span className="hidden md:inline-flex items-center gap-1.5 text-slate-500">
                  <span>法人番号: 4-0133-0104-8678</span>
                </span>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Phone size={13} className="text-blue-600 shrink-0" />
                  <a href="tel:0369071219" className="hover:text-blue-700 transition-colors">
                    (03) 6907-1219
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
                  <Mail size={13} className="text-blue-600 shrink-0" />
                  <a href="mailto:info@tqc-jp.com" className="hover:text-blue-700 transition-colors font-medium">
                    info@tqc-jp.com
                  </a>
                </div>
                <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
                  <a
                    href="https://www.facebook.com/bdsthomenhatban"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    aria-label="Facebook"
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <Facebook size={15} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@tqc.japan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="TikTok"
                    aria-label="TikTok"
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <Music2 size={15} />
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* --- NAVBAR --- */}
          <Navbar />

          {/* --- MAIN PAGE CONTENT --- */}
          <main className="flex-1">{children}</main>

          {/* --- FOOTER (LIGHT, REFINED JAPANESE CORPORATE B2B DESIGN) --- */}
          <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Col 1: Corporate Profile & Licenses */}
                <div className="md:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-sm"></span>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">株式会社ＴＱＣ</h2>
                    <span className="text-xs px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-300 font-medium">
                      TQC Co., Ltd.
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    日本における外国人向け不動産仲介（T-Homes）、裁判所競売・公売物件ポータル（Keibai-Koubai）、日越B2Bサプライチェーン（Aka-pla）、企業データベース（Kigyoulist）を展開する総合ソリューション企業。
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-slate-700 border-t border-slate-200">
                    <p className="flex items-center gap-2">
                      <span className="text-slate-500 w-24 shrink-0 font-medium">{tProfile("rep")}:</span>
                      <strong className="text-slate-900 font-semibold">栗本 賢之 (Kurimoto Masayuki)</strong>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-500 w-24 shrink-0 font-medium">{tProfile("corpNo")}:</span>
                      <span className="font-mono text-slate-800 font-medium">4-0133-0104-8678</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-500 w-24 shrink-0 font-medium">{tProfile("license")}:</span>
                      <span className="text-blue-700 font-semibold">東京都知事 (1) 第107650号</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-500 w-24 shrink-0 font-medium">{tProfile("capital")}:</span>
                      <span className="text-slate-800 font-medium">2,055万円 | 設立: 2022年2月9日</span>
                    </p>
                    <p className="flex items-start gap-2 pt-1">
                      <MapPin size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{tProfile("hqVal")}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Building2 size={14} className="text-slate-500 shrink-0 mt-0.5" />
                      <span>VN Office: P3-17, Vinhomes Ocean Park 1, Hà Nội</span>
                    </p>
                  </div>
                </div>

                {/* Col 2: Services & Quick Links */}
                <div className="md:col-span-3 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    事業内容・サービス
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li>
                      <Link href={getHref("/t-homes")} className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                        <span className="text-blue-600">›</span> {tNav("thomes")}
                      </Link>
                    </li>
                    <li>
                      <Link href={getHref("/keibai-koubai")} className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                        <span className="text-blue-600">›</span> {tNav("keibai")}
                      </Link>
                    </li>
                    <li>
                      <Link href={getHref("/b2b-supply")} className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                        <span className="text-blue-600">›</span> {tNav("b2bsupply")} (Aka-pla)
                      </Link>
                    </li>
                    <li>
                      <Link href={getHref("/kigyoulist")} className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                        <span className="text-blue-600">›</span> {tNav("kigyoulist")}
                      </Link>
                    </li>
                    <li>
                      <Link href={getHref("/contact")} className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                        <span className="text-blue-600">›</span> {tNav("contact")}
                      </Link>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <p className="text-xs font-semibold text-slate-500">{tFooter("relatedServices")}</p>
                    <div className="flex flex-col gap-1.5 text-xs">
                      <a
                        href="https://www.keibai-koubai.com/"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors font-medium"
                      >
                        <span>keibai-koubai.com</span>
                        <ExternalLink size={12} className="text-slate-400" />
                      </a>
                      <a
                        href="https://kigyoulist.com/ja"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors font-medium"
                      >
                        <span>kigyoulist.com</span>
                        <ExternalLink size={12} className="text-slate-400" />
                      </a>
                      <a
                        href="https://www.aka-pla.com/"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors font-medium"
                      >
                        <span>aka-pla.com</span>
                        <ExternalLink size={12} className="text-slate-400" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Col 3: Map & Contact Info */}
                <div className="md:col-span-4 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    アクセス (本社・池袋)
                  </h3>
                  <div className="w-full h-48 bg-white rounded-lg overflow-hidden border border-slate-200 shadow-xs">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0014485254!2d139.7154117!3d35.7261829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3499c00959%3A0x7d958434b44609ba!2zVFFD5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="株式会社ＴＱＣ 本社アクセスマップ"
                    ></iframe>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">
                      JR・東京メトロ「池袋駅」東口 徒歩6分 / 有楽町線「東池袋駅」徒歩3分
                    </p>
                    <a
                      href="https://maps.google.com/?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E5%8D%97%E6%B1%A0%E8%A2%8B2-33-6+%E4%BD%90%E8%97%A4%E3%83%93%E3%83%AB%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <span>Google マップで大きな地図を見る</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p className="font-medium text-slate-600">{tFooter("legalNotice")}</p>
                <p>&copy; 2022 - {currentYear} TQC CO., LTD. {tFooter("rights")}</p>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
