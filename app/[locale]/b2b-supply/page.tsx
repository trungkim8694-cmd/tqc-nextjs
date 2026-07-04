"use client";

import React from 'react';
import { Target, ShieldCheck, Truck, BarChart3, ChevronRight, Globe, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from "next-intl";

export default function B2BSupplyPage() {
  const t = useTranslations("B2BSupplyPage");

  const services = [
    {
      icon: <Target className="w-10 h-10 text-red-500" />,
      title: t("s1Title"),
      description: t("s1Desc")
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      title: t("s2Title"),
      description: t("s2Desc")
    },
    {
      icon: <Truck className="w-10 h-10 text-red-500" />,
      title: t("s3Title"),
      description: t("s3Desc")
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-red-500" />,
      title: t("s4Title"),
      description: t("s4Desc")
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 text-white pt-20 pb-28 px-6 md:px-20 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 font-semibold text-sm border border-red-500/30 mb-6">
                <Globe className="w-4 h-4" />
                {t("badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                {t("title1")}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t("title2")}</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t("desc")}
                <a 
                  href="https://www.aka-pla.com/" 
                  target="_blank" 
                  rel="noopener"
                  className="text-red-400 font-bold hover:underline hover:text-red-300 mx-1 transition-colors"
                >
                  {t("desc_link")}
                </a>
                {t("desc_after")}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.aka-pla.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-red-500/30 transition-all hover:scale-105 text-lg"
                >
                  {t("btn1")}
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white transition-all border-2 border-gray-600 rounded-full hover:bg-gray-800 hover:border-gray-500"
                >
                  {t("btn2")}
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative mt-10 md:mt-0 perspective-1000">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform md:rotate-y-[-5deg] md:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
                <Image
                  src="/akapla1.png"
                  alt="Aka-pla B2B Trading Platform Mockup"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-xl shadow-xl animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  <p className="font-bold text-sm tracking-widest">{t("floatingBadge")}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEO ARTICLE & OVERVIEW --- */}
      <section className="max-w-4xl mx-auto px-6 mt-[-40px] relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <article className="prose prose-lg prose-red max-w-none text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 inline-block pb-2">
              {t("h2_1")}
            </h2>
            <p className="leading-relaxed mb-6">
              {t("p1")}
            </p>
            <p className="leading-relaxed mb-8">
              {t("p2")}
              <a 
                href="https://www.aka-pla.com/" 
                target="_blank" 
                rel="noopener"
                className="text-red-600 font-bold hover:underline mx-1"
              >
                {t("p2_link")}
              </a>
              {t("p2_after")}
            </p>
          </article>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto mt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t("servicesTitle")}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t("servicesDesc")}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="mb-6 p-4 bg-red-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY TQC SECTION --- */}
      <section className="py-20 bg-white px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">{t("whyTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl font-black text-red-500">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t("w1Title")}</h4>
              <p className="text-gray-600">{t("w1Desc")}</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl font-black text-red-500">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t("w2Title")}</h4>
              <p className="text-gray-600">{t("w2Desc")}</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl font-black text-red-500">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t("w3Title")}</h4>
              <p className="text-gray-600">{t("w3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-slate-900 relative overflow-hidden mt-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-10 text-lg">
            {t("ctaDesc")}
          </p>
          <a href="https://www.aka-pla.com/" target="_blank" rel="noopener">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-4 px-12 rounded-full hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:scale-105 transition-all duration-300 text-lg">
              {t("ctaBtn")}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}