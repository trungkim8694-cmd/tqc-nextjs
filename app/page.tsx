"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Thêm Image từ next/image để tối ưu hình ảnh
import Image from 'next/image';
// Thêm icon mới: UserPlus, Building2, TrendingUp, Flag, Quote
import { Phone, Mail, Facebook, Music2, Home, Users, Zap, Menu, ChevronLeft, ChevronRight, Flag, UserPlus, Building2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TQCHomepage() {
  
  const slides = [
    {
      id: 1,
      image: "/hero-1.jpg", 
      title: "外国人向け不動産サービス",
      subTitle: "日本での賃貸・売買物件探しをトータルサポート"
    },
    {
      id: 2,
      image: "/hero-2.jpg",
      title: "ベトナム人Source供給・人材紹介",
      subTitle: "優秀なベトナム人財と日本企業を繋ぐパートナー"
    },
    {
      id: 3,
      image: "/hero-3.jpg",
      title: "日越B2Bサプライチェーン構築",
      subTitle: "ベトナム製造業とのマッチング・購買代行サービス"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn .... V",
      role: "留学生",
      avatar: "/avatar-1.jpg",
      text: "迅速なレスポンスで、急な引っ越しもスムーズでした。「急な転勤で早急に物件を探していたのですが、問い合わせ後の返信が非常に速く、内見から契約まであっという間でした。こちらの無理な要望にも柔軟に対応していただき、本当に感謝しています。サポート体制も万全で、信頼できる不動産会社さんです。」"
    },
    {
      name: "Trần ... C",
      role: "Web Designer",
      avatar: "/avatar-2.jpg",
      text: "人生の一度の大きな買い物を安心してお任せできました。「不動産購入という大きな決断でしたが、T-homesさんの専門的な知識と迅速な対応のおかげで、安心して進めることができました。物件のメリットだけでなく、注意点も正直に説明してくれたのが信頼の決め手でした。日本での家探しに不安がある方には、自信を持ってT-homesさんをおすすめします。」"
    },
    {
      name: "Hà ... T",
      role: "正社員",
      avatar: "/avatar-3.jpg",
      text: "迅速なレスポンスで、急な引っ越しもスムーズでした。「急な転勤で早急に物件を探していたのですが、問い合わせ後の返信が非常に速く、内見から契約まであっという間でした。こちらの無理な要望にも柔軟に対応していただき、本当に感謝しています。サポート体制も万全で、信頼できる不動産会社さんです。」"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* --- SEO METADATA --- */}
      <title>TQC株式会社 | 外国人不動産・ベトナム人材・日越B2B調達</title>
      <meta name="description" content="TQC株式会社は、日本在住の外国人向け不動産仲介、優秀なベトナム人材紹介、そして日越B2Bサプライチェーン構築・購買代行を提供します。" />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 5000 }} pagination={{ clickable: true }} navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }} className="h-full">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority 
                  className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                  <h1 className="text-3xl md:text-6xl font-extrabold text-yellow-500 mb-6 max-w-4xl tracking-tight">{slide.title}</h1>
                  <p className="text-white text-lg md:text-2xl font-light tracking-widest">{slide.subTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white"><ChevronLeft size={50}/></button>
          <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white"><ChevronRight size={50}/></button>
        </Swiper>
      </section>

      {/* --- SERVICES (SEO FOCUS) --- */}
      <section className="py-20 px-4 md:px-20 bg-gray-50">
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
      </section>

      {/* --- CUSTOMER STATISTICS SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
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
      </section>

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
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <span className="text-gray-950 font-bold text-sm tracking-tight">不動産<br/>サービス</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Home, title: '賃貸不動産' },
              { icon: UserPlus, title: '引っ越しお手伝い' },
              { icon: Building2, title: '不動産の売買' },
              { icon: TrendingUp, title: '不動産投資コンサルティング' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-950">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION (New) --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b-2 border-yellow-500 w-fit mx-auto pb-2">顧客レビュー</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl shadow-sm relative">
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
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <h4 className="text-lg font-bold text-gray-950">{testimonial.name}</h4>
                  <p className="text-sm text-yellow-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .swiper-pagination-bullet-active { background: #eab308 !important; }
      `}</style>
    </div>
  );
}