"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Flag,
  UserPlus,
  Building2,
  TrendingUp,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useTranslations, useLocale } from "next-intl";

export default function TQCHomepage() {
  const t = useTranslations("Homepage");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === 'ja') return path;
    return `/${locale}${path === '/' ? '' : path}`;
  };

  const slides = [
    {
      id: 1,
      image: "/hero-1.jpg",
      title: t("hero.slide1Title"),
      subTitle: t("hero.slide1Sub"),
    },
    {
      id: 2,
      image: "/hero-2.jpg",
    },
    {
      id: 3,
      image: "/hero-3.jpg",
      title: t("hero.slide3Title"),
      subTitle: t("hero.slide3Sub"),
    },
  ];

  const testimonials = [
    {
      name: "Nguyễn .... V",
      role: t("testimonials.t1Role"),
      avatar: "/avatar-1.jpg",
      text: t("testimonials.t1Text"),
    },
    {
      name: "Trần ... C",
      role: t("testimonials.t2Role"),
      avatar: "/avatar-2.jpg",
      text: t("testimonials.t2Text"),
    },
    {
      name: "Hà ... T",
      role: t("testimonials.t3Role"),
      avatar: "/avatar-3.jpg",
      text: t("testimonials.t3Text"),
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title || "Hero Image"}
                  fill
                  priority
                  className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                  <h1 className="text-3xl md:text-6xl font-extrabold text-yellow-500 mb-6 max-w-4xl tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg md:text-2xl font-light tracking-widest">
                    {slide.subTitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white">
            <ChevronLeft size={50} />
          </button>
          <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white">
            <ChevronRight size={50} />
          </button>
        </Swiper>
      </section>

      {/* --- PROPERTY SERVICES SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/property-services.jpg" 
              alt="Property Services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover"
              loading="eager"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <span className="text-gray-950 font-bold text-sm tracking-tight" dangerouslySetInnerHTML={{__html: t("services.title").replace("不動産", "不動産<br/>")}}>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Home, title: t("services.chintai") },
              { icon: UserPlus, title: t("services.hikkoshi") },
              { icon: Building2, title: t("services.baibai") },
              { icon: TrendingUp, title: t("services.toushi") },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-950">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KEIBAI-KOUBAI SECTION --- */}
      <section className="py-24 px-4 md:px-20 bg-white text-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-400/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 font-semibold text-sm border border-emerald-500/20">
              {t("keibai.badge")}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2">{t("keibai.title1")}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400">{t("keibai.title2")}</span>
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-gray-600">{t("keibai.title3")}</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("keibai.desc1")}
              <a 
                href="https://www.keibai-koubai.com/" 
                target="_blank" 
                rel="noopener" 
                className="text-emerald-600 hover:text-emerald-500 font-bold underline decoration-emerald-500/50 underline-offset-4 mx-1 transition-colors"
                title="Keibai-Koubai"
              >
                {t("keibai.desc2")}
              </a>
              {t("keibai.desc3")}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://www.keibai-koubai.com/" 
                target="_blank" 
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
              >
                {t("keibai.btn1")}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href={getHref("/keibai-koubai")}
                className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-bold transition-all border-2 border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300"
              >
                {t("keibai.btn2")}
              </Link>
            </div>
          </div>

          <div className="relative perspective-1000">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 transform md:rotate-y-[-5deg] md:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              <Image
                src="/keibaikoubai1.png"
                alt="Keibai-Koubai App Mockup"
                width={1024}
                height={1024}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <p className="font-bold text-sm tracking-widest">{t("keibai.floatingBadge")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KIGYOULIST SECTION --- */}
      <section className="py-24 px-4 md:px-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm border border-blue-500/30">
              {t("kigyoulist.badge")}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2">{t("kigyoulist.title1")}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t("kigyoulist.title2")}</span>
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-gray-300">{t("kigyoulist.title3")}</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("kigyoulist.desc1")}
              <a 
                href="https://kigyoulist.com/ja" 
                target="_blank" 
                rel="noopener" 
                className="text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-500/50 underline-offset-4 mx-1 transition-colors"
              >
                {t("kigyoulist.desc2")}
              </a>
              {t("kigyoulist.desc3")}
            </p>

            <div className="pt-4">
              <a 
                href="https://kigyoulist.com/ja" 
                target="_blank" 
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                {t("kigyoulist.btn1")}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/kigyoulist.png"
                alt="Kigyoulist"
                width={1024}
                height={1024}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="font-bold text-sm">{t("kigyoulist.floatingBadge")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AKA-PLA SECTION --- */}
      <section className="py-24 px-4 md:px-20 bg-gray-50 text-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative order-2 md:order-1 perspective-1000">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/20 transform md:rotate-y-[5deg] md:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              <Image
                src="/akapla1.png"
                alt="Aka-pla"
                width={1024}
                height={1024}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white border border-gray-100 text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <p className="font-bold text-sm tracking-widest">{t("akapla.floatingBadge")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 font-semibold text-sm border border-red-500/20">
              {t("akapla.badge")}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2">{t("akapla.title1")}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">{t("akapla.title2")}</span>
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-gray-600">{t("akapla.title3")}</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("akapla.desc1")}
              <a 
                href="https://www.aka-pla.com/" 
                target="_blank" 
                rel="noopener" 
                className="text-red-500 hover:text-red-400 font-bold underline decoration-red-500/50 underline-offset-4 mx-1 transition-colors"
              >
                {t("akapla.desc2")}
              </a>
              {t("akapla.desc3")}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://www.aka-pla.com/" 
                target="_blank" 
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-red-500/30 transition-all hover:scale-105"
              >
                {t("akapla.btn1")}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href={getHref("/b2b-supply")}
                className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-bold transition-all border-2 border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300"
              >
                {t("akapla.btn2")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b-2 border-yellow-500 w-fit mx-auto pb-2">
            {t("testimonials.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-sm relative"
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center mt-12">
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <h4 className="text-lg font-bold text-gray-950">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-yellow-600 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #eab308 !important;
        }
      `}</style>
    </div>
  );
}
