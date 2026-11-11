import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Database, Search, Handshake, ExternalLink, CheckCircle2, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function KigyoulistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "ja";
  const t = await getTranslations({ locale, namespace: "KigyoulistPage" });
  const tNav = await getTranslations({ locale, namespace: "Navbar" });

  const getHref = (path: string) => {
    if (locale === "ja") return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* --- HERO BANNER (LIGHT, SOFT BLUE/SLATE THEME) --- */}
      <section className="bg-gradient-to-b from-blue-50/70 via-slate-50 to-white text-slate-900 pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="md:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold tracking-wider uppercase border border-blue-200">
                <Database size={13} className="text-blue-700" />
                <span>{t("badge")}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t("title1")}<br />
                <span className="text-blue-700">{t("title2")}</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t("desc")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://kigyoulist.com/ja"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>{t("btn")}</span>
                  <ExternalLink size={15} />
                </a>
                <Link
                  href={getHref("/contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-colors shadow-xs"
                >
                  <Mail size={15} className="text-blue-600" />
                  <span>{tNav("contact")}</span>
                </Link>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="md:col-span-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-50">
                  <Image
                    src="/kigyoulist.png"
                    alt="Kigyoulist Platform Mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-blue-700">
                    <CheckCircle2 size={14} /> 日本全国 法人企業データプラットフォーム
                  </span>
                  <span className="font-mono text-slate-400">kigyoulist.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OVERVIEW & SEO ARTICLE --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white p-7 sm:p-10 rounded-xl shadow-xs border border-slate-200">
          <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-slate-100">
            <span className="w-1.5 h-5 bg-blue-700 rounded-sm"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t("h2_1")}
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            {t("p1")}{" "}
            <a
              href="https://kigyoulist.com/ja"
              target="_blank"
              rel="noopener"
              className="text-blue-700 font-bold hover:underline mx-1"
            >
              {t("p1_link")}
            </a>
            {t("p1_after")}
          </p>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
            {t("p2")}
          </p>

          {/* 3 Core Values Grid */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Database size={18} className="text-blue-700" />
              <span>{t("h3")}</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <Search size={22} className="text-blue-700 mb-3" />
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{t("v1Title")}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{t("v1Desc")}</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <Database size={22} className="text-blue-700 mb-3" />
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{t("v2Title")}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{t("v2Desc")}</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <Handshake size={22} className="text-blue-700 mb-3" />
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{t("v3Title")}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{t("v3Desc")}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Why TQC Recommends */}
          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {t("h2_2")}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {t("p3")}{" "}
              <a
                href="https://kigyoulist.com/ja"
                target="_blank"
                rel="noopener"
                className="text-blue-700 font-bold hover:underline mx-1"
              >
                {t("p3_link")}
              </a>
              {t("p3_after")}
            </p>

            <div className="bg-blue-50/70 border-l-4 border-blue-700 p-5 rounded-r-lg">
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">{t("boxTitle")}</h4>
              <p className="text-xs text-slate-700 mb-4 leading-relaxed">{t("boxDesc")}</p>
              <a
                href="https://kigyoulist.com/ja"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-2.5 px-5 rounded-md transition-colors"
              >
                <span>{t("boxBtn")}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA (SOFT, LIGHT THEME) --- */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border-t border-slate-200 text-slate-900 text-center mt-16">
        <div className="max-w-3xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            企業の営業DXとデータ活用を支援
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            日本市場における新規開拓や日越提携をお考えの企業様は、お気軽にご相談ください。
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://kigyoulist.com/ja"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <span>Kigyoulist 公式サイト</span>
              <ExternalLink size={15} />
            </a>
            <Link
              href={getHref("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-colors shadow-xs"
            >
              <Mail size={15} className="text-blue-600" />
              <span>{tNav("contact")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
