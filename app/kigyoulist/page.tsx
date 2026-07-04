import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Database, Search, Handshake } from "lucide-react";

export const metadata = {
  title: "Kigyoulist - 日本全国の企業データベースとB2Bマッチング | TQC株式会社",
  description: "TQC株式会社が提供する「Kigyoulist（企業リスト）」のご紹介。日本全国の企業データを活用した営業リスト自動作成から、日越間のB2Bマッチングまで強力にサポートします。",
};

export default function KigyoulistPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-24">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm border border-blue-500/30 mb-6">
            B2Bマッチング・企業データプラットフォーム
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            ビジネスの可能性を広げる <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Kigyoulist (企業リスト)</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            圧倒的なデータ量とAI技術を駆使し、新規開拓営業からパートナー探しまで、あなたのビジネスを次のステージへ導きます。
          </p>
          <a
            href="https://kigyoulist.com/ja"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 text-lg"
          >
            Kigyoulist 公式サイトへ
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* --- MAIN CONTENT & SEO TEXT --- */}
      <section className="max-w-4xl mx-auto px-6 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <article className="prose prose-lg prose-blue max-w-none text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 inline-block pb-2">
            Kigyoulistとは？
          </h2>
          <p className="leading-relaxed mb-6">
            現代のビジネスにおいて、質の高い情報は成功の鍵です。TQC株式会社が強く推奨する
            <a 
              href="https://kigyoulist.com/ja" 
              target="_blank" 
              rel="noopener"
              className="text-blue-600 font-bold hover:underline mx-1"
            >
              Kigyoulist（日本全国の企業リスト）
            </a>
            は、日本国内の膨大な企業データを一元管理し、瞬時に検索・抽出できる革新的なプラットフォームです。
          </p>
          <p className="leading-relaxed mb-8">
            営業活動におけるターゲットリストの作成から、日越（日本・ベトナム）間の新たなビジネスパートナーの発掘まで、
            あらゆるB2Bニーズに応える強力なツールとして機能します。
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8 flex items-center gap-2">
            <Database className="text-blue-500" />
            3つのコアバリュー
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Search className="text-blue-500 mb-4 w-8 h-8" />
              <h4 className="font-bold text-gray-900 mb-2">高精度な企業検索</h4>
              <p className="text-sm">業種、規模、地域など多様な条件で瞬時にターゲット企業を絞り込みます。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Database className="text-cyan-500 mb-4 w-8 h-8" />
              <h4 className="font-bold text-gray-900 mb-2">営業リスト自動生成</h4>
              <p className="text-sm">ボタン一つでアプローチ用のリストを生成。営業チームの工数を大幅に削減します。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Handshake className="text-green-500 mb-4 w-8 h-8" />
              <h4 className="font-bold text-gray-900 mb-2">B2Bマッチング</h4>
              <p className="text-sm">日越のサプライチェーン構築を支援し、最適なパートナーシップを実現します。</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-cyan-500 inline-block pb-2 mt-8">
            なぜTQCはKigyoulistを推奨するのか？
          </h2>
          <p className="leading-relaxed mb-6">
            私たちTQC株式会社は、「日越B2Bサプライチェーン構築」や「ベトナム人材紹介」といった事業を展開する中で、
            企業間のミスマッチを防ぎ、信頼できるデータを元にしたアプローチが不可欠だと痛感してきました。
            そこで、
            <a 
              href="https://kigyoulist.com/ja" 
              target="_blank" 
              rel="noopener"
              className="text-blue-600 font-bold hover:underline mx-1"
            >
              B2Bマッチングプラットフォーム
            </a>
            としてのKigyoulistを活用することで、クライアント企業様に対し、より精度の高い提案とスピーディなマッチングを提供できるようになりました。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
            <h4 className="font-bold text-blue-900 mb-2">今すぐビジネスを加速させましょう</h4>
            <p className="text-blue-800 text-sm mb-4">
              新規顧客の開拓に悩んでいる方、信頼できるパートナーを探している方は、ぜひ一度Kigyoulistの強力なデータベースをお試しください。
            </p>
            <a 
              href="https://kigyoulist.com/ja" 
              target="_blank" 
              rel="noopener"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors text-sm"
            >
              営業リスト自動作成ツールを試す
            </a>
          </div>

        </article>
      </section>
    </div>
  );
}
