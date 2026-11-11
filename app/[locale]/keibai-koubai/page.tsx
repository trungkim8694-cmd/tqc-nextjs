"use client";

import React from "react";
import { ShieldCheck, Search, Banknote, Gavel, Globe, CheckCircle2, ExternalLink, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function KeibaiKoubaiPage() {
  const t = useTranslations("KeibaiKoubaiPage");
  const tNav = useTranslations("Navbar");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === "ja") return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  const services = [
    {
      icon: <Search className="w-8 h-8 text-emerald-700" />,
      title: t("s1Title"),
      description: t("s1Desc"),
    },
    {
      icon: <Gavel className="w-8 h-8 text-emerald-700" />,
      title: t("s2Title"),
      description: t("s2Desc"),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-700" />,
      title: t("s3Title"),
      description: t("s3Desc"),
    },
    {
      icon: <Banknote className="w-8 h-8 text-emerald-700" />,
      title: t("s4Title"),
      description: t("s4Desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* --- HERO BANNER (LIGHT, SOFT EMERALD/SLATE THEME) --- */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white text-slate-900 pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="md:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold tracking-wider uppercase border border-emerald-200">
                <Globe size={13} className="text-emerald-700" />
                <span>{t("badge")}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t("title1")}<br />
                <span className="text-emerald-700">{t("title2")}</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t("desc")}{" "}
                <a
                  href="https://www.keibai-koubai.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-emerald-700 font-bold hover:underline mx-1"
                >
                  {t("desc_link")}
                </a>
                {t("desc_after")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.keibai-koubai.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>{t("btn1")}</span>
                  <ExternalLink size={15} />
                </a>
                <Link
                  href={getHref("/contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-colors shadow-xs"
                >
                  <Mail size={15} className="text-emerald-700" />
                  <span>入札相談・問い合わせ</span>
                </Link>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="md:col-span-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-50">
                  <Image
                    src="/keibaikoubai1.png"
                    alt="Keibai-Koubai Platform Mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <CheckCircle2 size={14} /> 全国裁判所・税務公売データ集約
                  </span>
                  <span className="font-mono text-slate-400">keibai-koubai.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OVERVIEW & LEGAL CONTEXT --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white p-7 sm:p-10 rounded-xl shadow-xs border border-slate-200">
          <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-slate-100">
            <span className="w-1.5 h-5 bg-emerald-700 rounded-sm"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t("h2_1")}
            </h2>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: t.raw("p1") }}></p>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {t("p2")}{" "}
            <a
              href="https://www.keibai-koubai.com/"
              target="_blank"
              rel="noopener"
              className="text-emerald-700 font-bold hover:underline mx-1"
            >
              {t("p2_link")}
            </a>
            {t("p2_after")}
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
            OUR SUPPORT SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t("servicesTitle")}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">{t("servicesDesc")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-xs transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE TQC --- */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
              COMPETITIVE ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("whyTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
              <span className="inline-block text-emerald-700 font-mono font-extrabold text-2xl mb-3">01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("w1Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("w1Desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
              <span className="inline-block text-emerald-700 font-mono font-extrabold text-2xl mb-3">02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("w2Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("w2Desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
              <span className="inline-block text-emerald-700 font-mono font-extrabold text-2xl mb-3">03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("w3Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("w3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA (SOFT, LIGHT THEME) --- */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50 border-t border-slate-200 text-slate-900 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("ctaTitle")}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t("ctaDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://www.keibai-koubai.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <span>{t("ctaBtn")}</span>
              <ExternalLink size={15} />
            </a>
            <Link
              href={getHref("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-colors shadow-xs"
            >
              <Mail size={15} className="text-emerald-700" />
              <span>{tNav("contact")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
