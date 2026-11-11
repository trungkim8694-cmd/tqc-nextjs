"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Building2,
  TrendingUp,
  ShieldCheck,
  Search,
  Database,
  Truck,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useTranslations, useLocale } from "next-intl";

export default function TQCHomepage() {
  const t = useTranslations("Homepage");
  const tNav = useTranslations("Navbar");
  const tProfile = useTranslations("CompanyProfile");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === "ja") return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  const slides = [
    {
      id: 1,
      image: "/hero-1.jpg",
      title: t("hero.slide1Title"),
      subTitle: t("hero.slide1Sub"),
      tag: "REAL ESTATE",
      ctaHref: "/t-homes",
      ctaText: tNav("thomes"),
    },
    {
      id: 2,
      image: "/hero-2.jpg",
      title: t("hero.slide2Title"),
      subTitle: t("hero.slide2Sub"),
      tag: "AUCTIONS & DATA",
      ctaHref: "/keibai-koubai",
      ctaText: tNav("keibai"),
    },
    {
      id: 3,
      image: "/hero-3.jpg",
      title: t("hero.slide3Title"),
      subTitle: t("hero.slide3Sub"),
      tag: "B2B SUPPLY CHAIN",
      ctaHref: "/b2b-supply",
      ctaText: tNav("b2bsupply"),
    },
  ];

  const testimonials = [
    {
      name: "Nguyễn V.",
      role: t("testimonials.t1Role"),
      avatar: "/avatar-1.jpg",
      text: t("testimonials.t1Text"),
    },
    {
      name: "Trần C.",
      role: t("testimonials.t2Role"),
      avatar: "/avatar-2.jpg",
      text: t("testimonials.t2Text"),
    },
    {
      name: "Hà T.",
      role: t("testimonials.t3Role"),
      avatar: "/avatar-3.jpg",
      text: t("testimonials.t3Text"),
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* --- HERO SECTION CAROUSEL --- */}
      <section className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full bg-slate-800 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".hero-next-btn", prevEl: ".hero-prev-btn" }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title || "TQC Header Banner"}
                  fill
                  priority={slide.id === 1}
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 max-w-5xl mx-auto">
                  <span className="inline-block px-3 py-1 rounded bg-blue-600/90 text-white font-mono text-xs tracking-widest font-semibold uppercase mb-4 shadow-xs">
                    {slide.tag}
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-slate-100 text-sm sm:text-base md:text-xl font-normal max-w-3xl leading-relaxed mb-8">
                    {slide.subTitle}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href={getHref(slide.ctaHref)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md hover:scale-[1.02]"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href={getHref("/contact")}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/20 hover:bg-white/30 text-white border border-white/40 font-semibold text-sm backdrop-blur-xs transition-all"
                    >
                      <Mail size={16} />
                      <span>{tNav("contact")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            className="hero-prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="hero-next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </Swiper>
      </section>

      {/* --- CORPORATE TRUST & CREDENTIALS STRIP (会社概要・許認可) --- */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">宅地建物取引業免許</span>
            <strong className="text-slate-900 text-sm sm:text-base font-bold flex items-center justify-center gap-1.5 mt-1 text-blue-700">
              <ShieldCheck size={16} className="shrink-0" />
              <span>東京都知事 (1) 第107650号</span>
            </strong>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">法人番号 / 国税庁登記</span>
            <strong className="text-slate-900 text-sm sm:text-base font-mono font-bold block mt-1">
              4-0133-0104-8678
            </strong>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">代表取締役 (CEO)</span>
            <strong className="text-slate-900 text-sm sm:text-base font-bold block mt-1">
              栗本 賢之 (Kurimoto)
            </strong>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">資本金 / 設立</span>
            <strong className="text-slate-900 text-sm sm:text-base font-bold block mt-1">
              2,055万円 / 2022年2月
            </strong>
          </div>
        </div>
      </section>

      {/* --- 1. T-HOMES PROPERTY SERVICES --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">
                CORE PILLAR 01 • REAL ESTATE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {tNav("thomes")}
              </h2>
            </div>
            <Link
              href={getHref("/t-homes")}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
            >
              <span>{t("keibai.btn2")}</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/property-services.jpg"
                alt="TQC Real Estate Services"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-semibold text-blue-300">入居者ファースト精神</span>
                <p className="text-white text-lg font-bold mt-1">
                  東京都・首都圏の賃貸仲介から収益不動産売買まで
                </p>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Home,
                  title: t("services.chintai"),
                  desc: "外国人向け審査サポート・多言語対応・敷金礼金優遇物件の厳選案内",
                },
                {
                  icon: UserPlus,
                  title: t("services.hikkoshi"),
                  desc: "家具家電レンタル・ライフライン開通・引っ越し手続きの一貫支援",
                },
                {
                  icon: Building2,
                  title: t("services.baibai"),
                  desc: "マンション・一戸建ての購入相談、住宅ローン審査の専門コーディネート",
                },
                {
                  icon: TrendingUp,
                  title: t("services.toushi"),
                  desc: "高利回り収益物件の選定、賃貸管理代行、オーナー様資産の最大化",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200/90 rounded-lg p-6 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
                >
                  <div className="w-11 h-11 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center mb-4 border border-blue-100">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. KEIBAI-KOUBAI SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <Search size={14} className="text-emerald-600" />
                <span>CORE PILLAR 02 • AUCTION ADVISORY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t("keibai.title1")}{" "}
                <span className="text-emerald-700">{t("keibai.title2")}</span>
                <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-1">
                  {t("keibai.title3")}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t("keibai.desc1")}
                <a
                  href="https://www.keibai-koubai.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-emerald-700 font-bold hover:underline mx-1"
                >
                  {t("keibai.desc2")}
                </a>
                {t("keibai.desc3")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.keibai-koubai.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>{t("keibai.btn1")}</span>
                  <ExternalLink size={15} />
                </a>
                <Link
                  href={getHref("/keibai-koubai")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-white font-semibold text-sm transition-colors"
                >
                  {t("keibai.btn2")}
                </Link>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-50">
                  <Image
                    src="/keibaikoubai1.png"
                    alt="Keibai-Koubai Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <CheckCircle2 size={14} /> 全国裁判所・税務公売データ連携
                  </span>
                  <span className="font-mono text-slate-400">keibai-koubai.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. KIGYOULIST SECTION (LIGHT, SOFT ON THE EYES AS REQUESTED) --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100/80 text-blue-800 text-xs font-bold border border-blue-200">
                <Database size={14} className="text-blue-700" />
                <span>CORE PILLAR 03 • CORPORATE INTELLIGENCE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t("kigyoulist.title1")}{" "}
                <span className="text-blue-700">{t("kigyoulist.title2")}</span>
                <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-1">
                  {t("kigyoulist.title3")}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t("kigyoulist.desc1")}
                <a
                  href="https://kigyoulist.com/ja"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 font-bold hover:underline mx-1"
                >
                  {t("kigyoulist.desc2")}
                </a>
                {t("kigyoulist.desc3")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://kigyoulist.com/ja"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>{t("kigyoulist.btn1")}</span>
                  <ExternalLink size={15} />
                </a>
                <Link
                  href={getHref("/kigyoulist")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-white font-semibold text-sm transition-colors"
                >
                  {t("keibai.btn2")}
                </Link>
              </div>
            </div>

            <div className="md:col-span-6 md:order-1">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-50">
                  <Image
                    src="/kigyoulist.png"
                    alt="Kigyoulist Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-blue-700">
                    <CheckCircle2 size={14} /> 日本全国 法人企業データ即時抽出
                  </span>
                  <span className="font-mono text-slate-400">kigyoulist.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. B2B SUPPLY (AKA-PLA) SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                <Truck size={14} className="text-slate-700" />
                <span>CORE PILLAR 04 • CROSS-BORDER TRADE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t("akapla.title1")}{" "}
                <span className="text-blue-700">{t("akapla.title2")}</span>
                <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-1">
                  {t("akapla.title3")}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t("akapla.desc1")}
                <a
                  href="https://www.aka-pla.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 font-bold hover:underline mx-1"
                >
                  {t("akapla.desc2")}
                </a>
                {t("akapla.desc3")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.aka-pla.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>{t("akapla.btn1")}</span>
                  <ExternalLink size={15} />
                </a>
                <Link
                  href={getHref("/b2b-supply")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-colors"
                >
                  {t("akapla.btn2")}
                </Link>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-xs">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white">
                  <Image
                    src="/akapla1.png"
                    alt="Aka-pla B2B Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-800">
                    <CheckCircle2 size={14} /> 日越直結・工場直接調達＆品質検品
                  </span>
                  <span className="font-mono text-slate-400">aka-pla.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CLIENT TESTIMONIALS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <span className="text-xs text-blue-700 font-medium">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA CONSULTATION BANNER (LIGHT, INVITING TONE) --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border-t border-slate-200 text-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-block px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold font-mono border border-blue-200">
            CONSULTATION &amp; INQUIRY
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            不動産・競売投資・B2B調達のご相談はTQCへ
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            日本での物件探し、裁判所競売入札サポート、日越間での製品調達まで、経験豊富な専門チームが誠心誠意サポートいたします。
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href={getHref("/contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <Mail size={16} />
              <span>{tNav("contact")}</span>
            </Link>
            <a
              href="tel:0369071219"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-colors shadow-xs"
            >
              <Phone size={16} className="text-blue-600" />
              <span>(03) 6907-1219</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
