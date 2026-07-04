"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Thêm Image từ next/image để tối ưu hình ảnh
import Image from "next/image";
import Link from "next/link";
// Thêm icon mới: UserPlus, Building2, TrendingUp, Flag, Quote
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TQCHomepage() {
  const slides = [
    {
      id: 1,
      image: "/hero-1.jpg",
      title: "外国人向け不動産サービス",
      subTitle: "日本での賃貸・売買物件探しをトータルサポート",
    },
    {
      id: 2,
      image: "/hero-2.jpg",
      // title: "ベトナム人Source供給・人材紹介",
      // subTitle: "優秀なベトナム人財と日本企業を繋ぐパートナー"
    },
    {
      id: 3,
      image: "/hero-3.jpg",
      title: "日越B2Bサプライチェーン構築",
      subTitle: "ベトナム製造業とのマッチング・購買代行サービス",
    },
  ];

  const testimonials = [
    {
      name: "Nguyễn .... V",
      role: "留学生",
      avatar: "/avatar-1.jpg",
      text: "迅速なレスポンスで、急な引っ越しもスムーズでした。「急な転勤で早急に物件を探していたのですが、問い合わせ後の返信が非常に速く、内見から契約まであっという間でした。こちらの無理な要望にも柔軟に対応していただき、本当に感謝しています。サポート体制も万全で、信頼できる不動産会社さんです。」",
    },
    {
      name: "Trần ... C",
      role: "Web Designer",
      avatar: "/avatar-2.jpg",
      text: "人生の一度の大きな買い物を安心してお任せできました。「不動産購入という大きな決断でしたが、T-homesさんの専門的な知識と迅速な対応のおかげで、安心して進めることができました。物件のメリットだけでなく、注意点も正直に説明してくれたのが信頼の決め手でした。日本での家探しに不安がある方には、自信を持ってT-homesさんをおすすめします。」",
    },
    {
      name: "Hà ... T",
      role: "正社員",
      avatar: "/avatar-3.jpg",
      text: "迅速なレスポンスで、急な引っ越しもスムーズでした。「急な転勤で早急に物件を探していたのですが、問い合わせ後の返信が非常に速く、内見から契約まであっという間でした。こちらの無理な要望にも柔軟に対応していただき、本当に感謝しています。サポート体制も万全で、信頼できる不動産会社さんです。」",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* --- SEO METADATA --- */}
      <title>TQC株式会社 | 外国人向け不動産・日越B2Bサプライチェーン</title>
      <meta
        name="description"
        content="TQC株式会社は、日本在住の外国人向け不動産仲介、そして日越B2Bサプライチェーン構築・購買代行を提供します。"
      />

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
                  alt={slide.title || "Hình ảnh slider"}
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

      {/* --- SERVICES (SEO FOCUS) --- */}
      {/* <section className="py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b-2 border-yellow-500 w-fit mx-auto pb-2">事業内容</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-8 shadow-lg rounded-sm hover:-translate-y-2 transition-transform border-t-4 border-blue-500">
              <Home className="text-blue-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">外国人向け不動産仲介</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                ベトナム人をはじめとする外国籍の方へ、賃貸物件のご紹介から購入サポートまで対応。審査から契約まで母国語で完全サポートし、安心の住まい探しをお手伝いします。
              </p>
            </article>
            <article className="bg-white p-8 shadow-lg rounded-sm hover:-translate-y-2 transition-transform border-t-4 border-red-500">
              <Users className="text-red-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">ベトナム人材紹介</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                特定技能、エンジニア、技能実習生まで、企業様のニーズに最適な人財をマッチング。採用面接からビザ申請、入社後のフォローまで一貫したプロのサービスを提供します。
              </p>
            </article>
            <article className="bg-white p-8 shadow-lg rounded-sm hover:-translate-y-2 transition-transform border-t-4 border-yellow-500">
              <Zap className="text-yellow-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">日越B2Bサプライチェーン</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                日本企業様のベトナムでの購買代行、OEM製造パートナーの開拓を支援。現地工場とのB2Bマッチング、品質管理、物流まで、確かな専門知識でビジネスを成功へ導きます。
              </p>
            </article>
          </div>
        </div>
      </section> */}

      {/* --- CUSTOMER STATISTICS SECTION --- */}
      {/* <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b-2 border-yellow-500 w-fit mx-auto pb-2">私たちのお客様</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-200 rounded-full p-6 mb-6">
                <Users className="text-gray-500" size={50} />
              </div>
              <p className="text-5xl font-extrabold text-gray-900 mb-2">1008</p>
              <p className="text-lg font-medium text-gray-700">外国人求職者</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 border-yellow-400 rounded-full p-6 mb-6">
                <Home className="text-yellow-500" size={50} />
              </div>
              <p className="text-5xl font-extrabold text-gray-900 mb-2">1 300</p>
              <p className="text-lg font-medium text-gray-700">お客様の住宅購入</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-200 rounded-full p-6 mb-6">
                <Flag className="text-gray-500" size={50} />
              </div>
              <p className="text-5xl font-extrabold text-gray-900 mb-2">146</p>
              <p className="text-lg font-medium text-gray-700">不動産投資のお客様</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- PROPERTY SERVICES SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/property-services.jpg" // Hoặc "/property-services.jpg" tùy cấu trúc thư mục
              alt="Property Services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Thêm thuộc tính này
              className="object-cover"
              loading="eager"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <span className="text-gray-950 font-bold text-sm tracking-tight">
                不動産
                <br />
                サービス
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Home, title: "賃貸不動産" },
              { icon: UserPlus, title: "引っ越しお手伝い" },
              { icon: Building2, title: "不動産の売買" },
              { icon: TrendingUp, title: "不動産投資コンサルティング" },
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

      {/* --- KEIBAI-KOUBAI SECTION (REAL ESTATE AUCTION & SEO BACKLINK) --- */}
      <section className="py-24 px-4 md:px-20 bg-white text-gray-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-400/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 font-semibold text-sm border border-emerald-500/20">
              新サービス・不動産投資
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2">安全・安心な</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400">競売・公売物件ポータル</span>
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-gray-600">優良な不動産投資の第一歩</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              TQC株式会社は、不動産投資の新たな選択肢として、全国の競売・公売物件情報を集約した
              <a 
                href="https://www.keibai-koubai.com/" 
                target="_blank" 
                rel="noopener" 
                className="text-emerald-600 hover:text-emerald-500 font-bold underline decoration-emerald-500/50 underline-offset-4 mx-1 transition-colors"
                title="競売・公売物件ポータル - 不動産投資のKeibai-Koubai"
              >
                競売・公売物件ポータルサイト
              </a>
              を推奨しています。市場価格よりも安価に取得できる可能性が高い物件情報から、複雑な法的手続きのサポートまで、あなたの不動産投資を成功へと導きます。
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://www.keibai-koubai.com/" 
                target="_blank" 
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
              >
                公式サイトを見る
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="/keibai-koubai"
                className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-bold transition-all border-2 border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300"
              >
                詳細を見る
              </Link>
            </div>
          </div>

          {/* Right Mockup */}
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
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <p className="font-bold text-sm tracking-widest">REAL ESTATE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KIGYOULIST SECTION (B2B PLATFORM & SEO BACKLINK) --- */}
      <section className="py-24 px-4 md:px-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm border border-blue-500/30">
              新サービス・B2Bマッチング
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2">日本全国の</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">企業データプラットフォーム</span>
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-gray-300">営業リスト作成からB2Bマッチングまで</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              TQC株式会社は、日本市場でのビジネス拡大を目指す企業様を強力にサポートします。
              弊社の独自プラットフォームである
              <a 
                href="https://kigyoulist.com/ja" 
                target="_blank" 
                rel="noopener" 
                className="text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-500/50 underline-offset-4 mx-1 transition-colors"
                title="Kigyoulist（企業リスト）- 日本全国の企業データプラットフォーム"
              >
                Kigyoulist（企業リスト）
              </a>
              を活用することで、精度の高いアタックリストの自動生成や、日越企業間のスムーズなB2Bマッチングを実現します。膨大な企業データを分析し、あなたのビジネスに最適なパートナーを素早く見つけ出します。
            </p>

            <div className="pt-4">
              <a 
                href="https://kigyoulist.com/ja" 
                target="_blank" 
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                Kigyoulistを試してみる
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/kigyoulist.png"
                alt="Kigyoulist Dashboard Mockup"
                width={1024}
                height={1024}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                priority
              />
              {/* Optional Glass overlay for tech feel */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="font-bold text-sm">システム稼働中</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AKA-PLA SECTION (B2B SUPPLY CHAIN & SEO BACKLINK) --- */}
      <section className="py-24 px-4 md:px-20 bg-gray-50 text-gray-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Mockup (Swapped side for variety) */}
          <div className="relative order-2 md:order-1 perspective-1000">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/20 transform md:rotate-y-[5deg] md:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              <Image
                src="/akapla1.png"
                alt="Aka-pla B2B Trading Platform Mockup"
                width={1024}
                height={1024}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white border border-gray-100 text-gray-900 px-6 py-4 rounded-xl shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <p className="font-bold text-sm tracking-widest">GLOBAL B2B</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 font-semibold text-sm border border-red-500/20">
              B2B調達・サプライチェーン
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="block mb-2">日越をつなぐ</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">新しい架け橋</span>
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-gray-600">ベトナムでのB2B調達を強力サポート</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              コスト削減や生産拠点の分散化を目指す企業様に向けて、TQC株式会社が運営する
              <a 
                href="https://www.aka-pla.com/" 
                target="_blank" 
                rel="noopener" 
                className="text-red-500 hover:text-red-400 font-bold underline decoration-red-500/50 underline-offset-4 mx-1 transition-colors"
                title="日本-ベトナム架け橋 (Aka-pla) - B2B調達プラットフォーム"
              >
                日本-ベトナム架け橋 (Aka-pla)
              </a>
              は、最適なソリューションを提供します。ベトナムの優良サプライヤー発掘から、日本基準での品質管理、そして複雑な物流・通関手続きまで、あらゆるプロセスをワンストップで代行いたします。
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://www.aka-pla.com/" 
                target="_blank" 
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-red-500/30 transition-all hover:scale-105"
              >
                Aka-pla 公式サイトへ
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                href="/b2b-supply"
                className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-bold transition-all border-2 border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* --- TESTIMONIALS SECTION (New) --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b-2 border-yellow-500 w-fit mx-auto pb-2">
            顧客レビュー
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-sm relative"
              >
                {/* Ảnh đại diện */}
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

                {/* Nội dung */}
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
