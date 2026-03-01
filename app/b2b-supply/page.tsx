"use client";

import React from 'react';
import { Target, ShieldCheck, Truck, BarChart3 } from 'lucide-react';
import Image from 'next/image'; // Import Image từ Next.js

export default function B2BSupplyPage() {
  const services = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'サプライヤー発掘',
      description: 'ベトナムの高品質な製造パートナーを見つけ出し、最適な価格交渉を行います。'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: '品質管理',
      description: '日本基準の厳しい品質チェック体制を現地工場で実施し、不良品率を最小限に抑えます。'
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: '物流・通関サポート',
      description: 'ベトナムから日本への輸送、複雑な通関手続きを一括して引き受けます。'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: '貿易コンサルティング',
      description: '現地市場動向の調査や、契約トラブルの回避など、包括的なコンサルティングを提供します。'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          B2B 調達サポート
        </h1>
        <p className="text-yellow-500 text-lg md:text-xl font-light tracking-widest uppercase mt-4">
          Vietnam - Japan Supply Chain Solution
        </p>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-950">提供サービス</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-950">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- IMAGE SECTION (THÊM HÌNH ẢNH VÀO ĐÂY) --- */}
      <section className="py-10 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50">
          <h3 className="text-2xl font-bold mb-6 text-gray-950">サプライチェーンの全体像</h3>
          
          {/* Thay đổi src thành đường dẫn ảnh thực tế của bạn */}
          <div className="relative w-full h-[600px]"> {/* Container cần có chiều rộng/cao */}
            <Image 
              src="/supply-chain-diagram.jpg"
              alt="Supply Chain Diagram"
              fill
              className="object-contain" // Hoặc object-cover
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <p className="text-gray-600 mt-4 text-sm">TQCはサプライチェーンの各段階で貴社をサポートします。</p>
        </div>
      </section>

      {/* --- WHY TQC SECTION --- */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-950">TQCが選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* ... giữ nguyên nội dung cũ ... */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-blue-600 mb-3">コスト削減</h4>
              <p className="text-sm text-gray-600">中間業者をカットし、ベトナムの工場価格で直接調達を可能にします。</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-blue-600 mb-3">安心の品質管理</h4>
              <p className="text-sm text-gray-600">日本人スタッフが現地工場に直接訪問し、検品を行います。</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold text-blue-600 mb-3">迅速な対応</h4>
              <p className="text-sm text-gray-600">言語の壁を解消し、即時対応で円滑なコミュニケーションを実現します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8 text-gray-950">調達に関する課題を解決しませんか？</h3>
        <a href="https://aka-pla.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-slate-900 text-white font-bold py-4 px-12 rounded-full hover:bg-slate-700 transition duration-300">
            お問い合わせはこちら
          </button>
        </a>
      </section>
    </div>
  );
}