"use client";

import React from 'react';
import { ShieldCheck, Search, Banknote, Gavel, ChevronRight, Globe } from 'lucide-react';
import Image from 'next/image';

export default function KeibaiKoubaiPage() {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-emerald-500" />,
      title: '物件検索サポート',
      description: '全国の競売・公売情報を独自システムで収集。条件に合う優良物件をいち早くお届けします。'
    },
    {
      icon: <Gavel className="w-10 h-10 text-emerald-500" />,
      title: '入札代行・手続き支援',
      description: '煩雑な裁判所や行政機関での手続き、書類作成をプロフェッショナルが代行します。'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
      title: 'リスク調査・法務確認',
      description: '権利関係のトラブルや物件の隠れた瑕疵を事前に調査し、安全な取引を実現します。'
    },
    {
      icon: <Banknote className="w-10 h-10 text-emerald-500" />,
      title: '資金計画コンサルティング',
      description: '落札後のリノベーション費用や利回り計算など、総合的な投資プランを提案します。'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 text-white pt-20 pb-28 px-6 md:px-20 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-green-600/20 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-sm border border-emerald-500/30 mb-6">
                <Globe className="w-4 h-4" />
                Real Estate Auction Portal
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                不動産投資の<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">新しいアプローチ</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                TQC株式会社は、市場価格よりも大幅に安く不動産を取得できる
                <a 
                  href="https://www.keibai-koubai.com/" 
                  target="_blank" 
                  rel="noopener"
                  className="text-emerald-400 font-bold hover:underline hover:text-emerald-300 mx-1 transition-colors"
                >
                  競売・公売物件ポータル
                </a>
                の活用を推奨しています。プロのサポートで、安全かつ確実な不動産投資を始めましょう。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.keibai-koubai.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 text-lg"
                >
                  公式サイトを見る
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white transition-all border-2 border-gray-600 rounded-full hover:bg-gray-800 hover:border-gray-500"
                >
                  サービス詳細
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative mt-10 md:mt-0 perspective-1000">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform md:rotate-y-[-5deg] md:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
                <Image
                  src="/keibaikoubai1.png"
                  alt="Keibai-Koubai App Mockup"
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
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <p className="font-bold text-sm tracking-widest">REAL ESTATE</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEO ARTICLE & OVERVIEW --- */}
      <section className="max-w-4xl mx-auto px-6 mt-[-40px] relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <article className="prose prose-lg prose-emerald max-w-none text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-emerald-500 inline-block pb-2">
              競売・公売物件とは？
            </h2>
            <p className="leading-relaxed mb-6">
              競売（けいばい）や公売（こうばい）とは、住宅ローンや税金の滞納などにより、裁判所や行政機関が強制的に売却を行う不動産のことです。
              最大のメリットは、<strong>市場価格の約7割〜5割という低価格</strong>で物件を取得できる可能性がある点にあります。
            </p>
            <p className="leading-relaxed mb-8">
              しかし、通常の不動産取引とは異なり、内見ができない、権利関係が複雑などのリスクも存在します。
              だからこそ、私たちが提携する
              <a 
                href="https://www.keibai-koubai.com/" 
                target="_blank" 
                rel="noopener"
                className="text-emerald-600 font-bold hover:underline mx-1"
              >
                Keibai-Koubai（競売・公売物件ポータル）
              </a>
              のような専門プラットフォームと、TQCのサポートが必要不可欠です。専門家の目利きと法務サポートにより、リスクを最小限に抑え、高い利回りを実現します。
            </p>
          </article>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto mt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">提供サービス</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">物件探しから落札後のフォローまで、不動産投資の全プロセスをサポートします。</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-20 bg-white px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">TQCが選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl font-black text-emerald-500">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">豊富なデータ網</h4>
              <p className="text-gray-600">全国の裁判所や官公庁から独自ルートで情報を収集し、未公開に近い優良物件をご案内します。</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl font-black text-emerald-500">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">法務リスクの徹底排除</h4>
              <p className="text-gray-600">専門家と連携し、複雑な権利関係や占有者の問題を事前にクリアにします。</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl font-black text-emerald-500">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">外国人投資家対応</h4>
              <p className="text-gray-600">外国籍の方の不動産投資も、多言語対応スタッフがビザや法務面からフルサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-slate-900 relative overflow-hidden mt-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">不動産投資を、もっと賢く。</h3>
          <p className="text-gray-400 mb-10 text-lg">
            全国の競売・公売物件情報を今すぐチェックして、理想の投資物件を見つけましょう。
          </p>
          <a href="https://www.keibai-koubai.com/" target="_blank" rel="noopener">
            <button className="bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold py-4 px-12 rounded-full hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300 text-lg">
              Keibai-Koubai で物件を探す
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
