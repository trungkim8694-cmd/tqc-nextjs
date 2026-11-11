"use client";

import React, { useEffect } from "react";
import {
  ClipboardCheck,
  Users,
  ShieldCheck,
  Building2,
  Wrench,
  BarChart3,
  Sofa,
  GraduationCap,
  Home,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function THomesPage() {
  const t = useTranslations("THomesPage");
  const tNav = useTranslations("Navbar");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === "ja") return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  const tiktokEmbedCodes = [
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7523516311243197704" data-video-id="7523516311243197704" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> Tokyo nhà đẹp, giá hợp lý cho du học sinh và người đi làm tại Nhật Bản 🥰 <a title="nhatban" target="_blank" href="https://www.tiktok.com/tag/nhatban?refer=embed">#nhatban</a> <a title="timnhaotokyo" target="_blank" href="https://www.tiktok.com/tag/timnhaotokyo?refer=embed">#timnhaotokyo</a> <a title="thomes" target="_blank" href="https://www.tiktok.com/tag/thomes?refer=embed">#thomes</a> <a title="bđs" target="_blank" href="https://www.tiktok.com/tag/b%C4%91s?refer=embed">#bđs</a> <a title="nhadatnhatban" target="_blank" href="https://www.tiktok.com/tag/nhadatnhatban?refer=embed">#nhadatnhatban</a> </section> </blockquote>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7570278080732744968" data-video-id="7570278080732744968" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> <p>Không khí làm việc và đồng hành hỗ trợ khách hàng tìm nhà an cư tại Nhật Bản cùng TQC (T-Homes) 💪</p> </section> </blockquote>`,
  ];

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* --- HERO BANNER (LIGHT, AIRY B2B THEME) --- */}
      <section className="bg-gradient-to-b from-blue-50/70 via-slate-50 to-white text-slate-900 py-14 sm:py-18 px-4 sm:px-6 text-center border-b border-slate-200 relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold tracking-widest uppercase border border-blue-200">
            <Home size={14} className="text-blue-700" />
            <span>{t("badge")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("title")}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            日本在住の外国人向け賃貸仲介・売買・賃貸管理を「入居者ファースト」の精神でトータルサポート。
          </p>

          <div className="pt-1">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-blue-800 border border-blue-200 text-xs font-semibold shadow-xs">
              <ShieldCheck size={14} className="text-blue-600" />
              <span>{t("licenseNotice")}</span>
            </span>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              MANAGEMENT PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900">
              {t("h2_1")} <br />
              <span className="text-blue-700">{t("h2_2")}</span>
            </h2>
            <p className="text-sm text-slate-500 font-medium">{t("h2_sub")}</p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href={getHref("/contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <span>無料相談・物件を探す</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:0369071219"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-colors bg-white"
              >
                <Phone size={15} className="text-blue-700" />
                <span>(03) 6907-1219</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 bg-slate-50 p-7 sm:p-9 rounded-xl border border-slate-200 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-700 rounded-sm"></span>
              {t("p1_title")}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t.raw("p1_desc") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t.raw("p2_desc") }}></p>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
              WHY T-HOMES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("featuresTitle")}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-100">
                <Users size={24} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("f1Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("f1Desc")}</p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-100">
                <ClipboardCheck size={24} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("f2Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("f2Desc")}</p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-100">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("f3Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("f3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOR PROPERTY OWNERS --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
              PROPERTY MANAGEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("ownerTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-7 rounded-xl border border-slate-200 text-center">
              <Building2 size={32} className="mx-auto text-blue-700 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("o1Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("o1Desc")}</p>
            </div>
            <div className="bg-slate-50 p-7 rounded-xl border border-slate-200 text-center">
              <Wrench size={32} className="mx-auto text-blue-700 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("o2Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("o2Desc")}</p>
            </div>
            <div className="bg-slate-50 p-7 rounded-xl border border-slate-200 text-center">
              <BarChart3 size={32} className="mx-auto text-blue-700 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("o3Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("o3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OTHER SERVICES (FURNITURE, TRUNK ROOM, STUDENT HOUSING) --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
              LIFESTYLE SUPPORT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("othersTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-xl border border-slate-200 text-center shadow-xs">
              <Sofa size={32} className="mx-auto text-blue-700 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("ot1Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("ot1Desc")}</p>
            </div>
            <div className="bg-white p-7 rounded-xl border border-slate-200 text-center shadow-xs">
              <Building2 size={32} className="mx-auto text-blue-700 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("ot2Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("ot2Desc")}</p>
            </div>
            <div className="bg-white p-7 rounded-xl border border-slate-200 text-center shadow-xs">
              <GraduationCap size={32} className="mx-auto text-blue-700 mb-4" />
              <h4 className="text-base font-bold text-slate-900 mb-2">{t("ot3Title")}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t("ot3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TIKTOK CHANNEL SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
            {t("tiktokTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 justify-center max-w-3xl mx-auto">
            {tiktokEmbedCodes.map((embedCode, index) => (
              <div
                key={index}
                className="flex justify-center"
                dangerouslySetInnerHTML={{ __html: embedCode }}
              />
            ))}
          </div>
          <a
            href="https://www.tiktok.com/@tqc.japan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs tracking-wider uppercase transition-colors shadow-xs"
          >
            <span>{t("tiktokBtn")}</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* --- BOTTOM CTA (SOFT, LIGHT THEME) --- */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border-t border-slate-200 text-slate-900 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            日本でのお部屋探し・不動産売買のご相談
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            専門の多言語スタッフが、ご希望の条件に合わせて親身に物件をお探しいたします。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href={getHref("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <Mail size={16} />
              <span>{tNav("contact")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
