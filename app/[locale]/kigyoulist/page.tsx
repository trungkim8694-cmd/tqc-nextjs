import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Database, Search, Handshake } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function KigyoulistPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'ja';
  const t = await getTranslations({ locale, namespace: "KigyoulistPage" });

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 text-white pt-20 pb-28 px-6 md:px-20 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-cyan-600/20 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm border border-blue-500/30 mb-6">
                {t("badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                {t("title1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t("title2")}</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t("desc")}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://kigyoulist.com/ja"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 text-lg"
                >
                  {t("btn")}
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative mt-10 md:mt-0 perspective-1000">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform md:rotate-y-[-5deg] md:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
                <Image
                  src="/kigyoulist.png"
                  alt="Kigyoulist App Mockup"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-bounce z-20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                  <p className="font-bold text-sm">{t("floatingBadge")}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT & SEO TEXT --- */}
      <section className="max-w-4xl mx-auto px-6 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <article className="prose prose-lg prose-blue max-w-none text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 inline-block pb-2">
            {t("h2_1")}
          </h2>
          <p className="leading-relaxed mb-6">
            {t("p1")}
            <a 
              href="https://kigyoulist.com/ja" 
              target="_blank" 
              rel="noopener"
              className="text-blue-600 font-bold hover:underline mx-1"
            >
              {t("p1_link")}
            </a>
            {t("p1_after")}
          </p>
          <p className="leading-relaxed mb-8">
            {t("p2")}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8 flex items-center gap-2">
            <Database className="text-blue-500" />
            {t("h3")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Search className="text-blue-500 mb-4 w-8 h-8" />
              <h4 className="font-bold text-gray-900 mb-2">{t("v1Title")}</h4>
              <p className="text-sm">{t("v1Desc")}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Database className="text-cyan-500 mb-4 w-8 h-8" />
              <h4 className="font-bold text-gray-900 mb-2">{t("v2Title")}</h4>
              <p className="text-sm">{t("v2Desc")}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Handshake className="text-green-500 mb-4 w-8 h-8" />
              <h4 className="font-bold text-gray-900 mb-2">{t("v3Title")}</h4>
              <p className="text-sm">{t("v3Desc")}</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-cyan-500 inline-block pb-2 mt-8">
            {t("h2_2")}
          </h2>
          <p className="leading-relaxed mb-6">
            {t("p3")}
            <a 
              href="https://kigyoulist.com/ja" 
              target="_blank" 
              rel="noopener"
              className="text-blue-600 font-bold hover:underline mx-1"
            >
              {t("p3_link")}
            </a>
            {t("p3_after")}
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
            <h4 className="font-bold text-blue-900 mb-2">{t("boxTitle")}</h4>
            <p className="text-blue-800 text-sm mb-4">
              {t("boxDesc")}
            </p>
            <a 
              href="https://kigyoulist.com/ja" 
              target="_blank" 
              rel="noopener"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors text-sm"
            >
              {t("boxBtn")}
            </a>
          </div>

        </article>
      </section>
    </div>
  );
}
