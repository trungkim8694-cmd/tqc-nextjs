"use client"; // Vì có sử dụng tương tác (nếu có nút bấm sau này)

import React from 'react';

// Cấu hình các bước trong sơ đồ để hiển thị giống hình
const steps = [
  { num: 1, title: '募集' },
  { num: 2, title: 'スクリーニング' },
  { num: 3, title: '書類選考' },
  { num: 6, title: '入社' }, // Cố tình đặt theo layout hình ảnh: 6-5-4
  { num: 5, title: 'ビザ申請' },
  { num: 4, title: '面接会・内定' },
];

export default function HumanResourcePage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          TQC 人材サービス
        </h1>
        <p className="text-yellow-500 text-lg md:text-xl font-light tracking-widest uppercase">
          MANPOWER SUPPLY
        </p>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">
          ベトナム人エンジニアが入社するまでの流れ
        </h2>

        {/* --- WORKFLOW STEPS (Layout theo hình ảnh) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="relative border-2 border-gray-300 rounded-lg p-6 text-center h-28 flex items-center justify-center bg-white shadow-sm"
            >
              {/* Vòng tròn số bước */}
              <span className="absolute -top-4 left-5 bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {step.num}
              </span>
              <p className="font-bold text-lg text-gray-900 mt-2">{step.title}</p>
            </div>
          ))}
        </div>

        {/* --- BOTTOM CONTENT SPLIT --- */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* --- COST BOX (Left) --- */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-8 text-gray-950">
              ベトナム人エンジニアを日本国内で採用するための費用
            </h3>
            
            <div className="space-y-5 text-gray-700">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="font-medium">紹介手数料</span>
                <span className="font-bold text-lg">25万円</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="font-medium">ビザ申請と事務手数料</span>
                <span className="font-bold text-lg">10万円</span>
              </div>
              <div className="flex justify-between items-center pt-5 text-3xl font-extrabold text-blue-700">
                <span>合計</span>
                <span>35万円<span className="text-xl font-medium text-gray-600">/1人</span></span>
              </div>
              <p className="text-xs text-gray-500 pt-3">
                ※紹介手数料は6回で分割お支払い可能
              </p>
            </div>
          </div>

          {/* --- DETAIL LIST & BUTTON (Right) --- */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-950 leading-snug">
              日本国内にベトナムの高度人材紹介 <br />
              <span className="text-base font-normal text-gray-600">
                (在留資格：技術・人文知識・国際業務)
              </span>
            </h3>
            
            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-700 mb-10 text-sm">
              <li>募集（広告や紹介など）</li>
              <li>応募書類スクリーニング</li>
              <li>書類選考</li>
              <li>面接（対面面接・WEB面接）</li>
              <li>就労ビザ申請</li>
              <li>入社</li>
            </ol>

            <div className="flex justify-end">
              <button className="border-2 border-yellow-500 text-yellow-600 font-bold py-3 px-12 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
        
      </div>
      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* --- SECTION 1: PROCEDURES (B2B/B2C Flow) --- */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Left: Process Flow Box */}
          <div className="md:col-span-3 border border-gray-200 rounded-xl p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-8 flex items-center text-gray-950">
              <span className="w-1.5 h-8 bg-blue-600 mr-3 rounded"></span>
              手続き流れ (PROCESS FLOW)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-sm text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 border-b pb-2">日本側 (Japan Side)</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>求人申込・雇用条件準備</li>
                  <li>海外人材紹介契約締結</li>
                  <li>候補者提案、面接設定</li>
                  <li>面接終了、双方合意の締結</li>
                  <li>大使館からのFAX受領後、書類準備</li>
                  <li>入国管理局への在留資格申請</li>
                  <li>在留資格証明書発行</li>
                  <li>入国手続、入社配属</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 border-b pb-2">ベトナム側 (Vietnam Side)</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>求人申込・雇用条件準備</li>
                  <li>海外人材紹介契約締結</li>
                  <li>デマンドレターを政府に提出</li>
                  <li>候補者提案、面接設定</li>
                  <li>面接終了、双方合意の締結</li>
                  <li>ベトナム政府より許可受領</li>
                  <li>スマートカードの取得</li>
                  <li>在外公館にビザ申請</li>
                  <li>ビザ発行</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right: Info Box */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-950">
              ベトナムから高度人材紹介
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              (在留資格：技術・人文知識・国際業務)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-10">
              海外高度人材は、基本的に国外にて、現地の大学や短大大学の卒業生（卒業見込生）を募集します。優秀な専門分野を学んだ人材、または社会経験を積んだ人材をご提案します。
            </p>
            
            {/* Cost Breakdown */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-5">現地採用費用概算</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>採用担当者の渡航費</span>
                  <span className="font-medium">5万円</span>
                </div>
                <div className="flex justify-between">
                  <span>宿泊費 (1泊あたり)</span>
                  <span className="font-medium">1万円</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span>就労ビザ取得費用</span>
                  <span className="font-medium">10万円 / 1人</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 text-blue-700 font-bold">
                  <span>紹介手数料</span>
                  <span>20万円</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: INTERVIEW METHOD (Dark Box) --- */}
        <div className="bg-[#1a202c] text-white rounded-2xl p-10 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            現地で対面面接、またはWEB面接
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="text-gray-300 leading-relaxed text-sm">
              ベトナムでの採用において、もっとも重要なのは企業担当者による面接といえます。ベトナムでは採用のためのテストはあまり行われません。また、面接1回で内定を出すのが通例です。もし日本式の採用にこだわり、「採用のためのテスト＋複数回の面接」にこだわると、欲しい候補者が他社からどんどん内定をもらってしまい、辞退される可能性が高まります。
            </p>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-200 leading-relaxed text-sm">
                面接には渡航して現地で行う対面面接と、インターネットを利用したオンラインのWEB面接があります。それぞれのメリットを理解して使い分けるようにしてください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}