// app/t-homes/page.tsx
"use client"; // BẮT BUỘC: Biến thành client component để dùng useEffect

import React, { useEffect } from 'react';
import { ClipboardCheck, Users, ShieldCheck, Building2, Wrench, BarChart3, Sofa, GraduationCap } from 'lucide-react';

export default function THomesPage() {
  
  // Mã nhúng TikTok (Giữ nguyên như cũ)
  const tiktokEmbedCodes = [
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7506456319164042504" data-video-id="7506456319164042504" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> Ngoài tuy.ể.n nhân viên, bên mình còn tu.y.ể.n cả ny cho nhân viên nữa ạ 🥰🥰 có b nào qua Nhật lâu rùi mà vẫn chưa có ny hôngggg 😎 <a title="timviec" target="_blank" href="https://www.tiktok.com/tag/timviec?refer=embed">#timviec</a> <a title="正社員" target="_blank" href="https://www.tiktok.com/tag/%E6%AD%A3%E7%A4%BE%E5%93%A1?refer=embed">#正社員</a> <a title="nhanvienchinhthuc" target="_blank" href="https://www.tiktok.com/tag/nhanvienchinhthuc?refer=embed">#nhanvienchinhthuc</a> <a title="bđs" target="_blank" href="https://www.tiktok.com/tag/b%C4%91s?refer=embed">#bđs</a> <a title="t_homes" target="_blank" href="https://www.tiktok.com/tag/t_homes?refer=embed">#t_homes</a> <a title="ikebukuro" target="_blank" href="https://www.tiktok.com/tag/ikebukuro?refer=embed">#ikebukuro</a> <a title="tuyendung" target="_blank" href="https://www.tiktok.com/tag/tuyendung?refer=embed">#tuyendung</a> <a title="tuyennhanvien" target="_blank" href="https://www.tiktok.com/tag/tuyennhanvien?refer=embed">#tuyennhanvien</a> <a title="genz" target="_blank" href="https://www.tiktok.com/tag/genz?refer=embed">#genz</a> <a title="2025" target="_blank" href="https://www.tiktok.com/tag/2025?refer=embed">#2025</a> <a title="capcut" target="_blank" href="https://www.tiktok.com/tag/capcut?refer=embed">#CapCut</a> <a target="_blank" title="♬ Very cute melody by marimba tone(39813) - Mitsu Sound" href="https://www.tiktok.com/music/Very-cute-melody-by-marimba-tone-39813-6849968592285337602?refer=embed">♬ Very cute melody by marimba tone(39813) - Mitsu Sound</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7570278080732744968" data-video-id="7570278080732744968" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> <p>Nghề nào cũng có áp lực, nhưng nếu gặp đúng đồng đội thì áp lực cũng thành… năng lượng 💪 Không quan trọng làm gì, quan trọng là làm ở đâu và làm với aiiiii  Bọn mình vẫn đang tìm đồng đội mới để chèo thuyền chung đó nhaaaa</p> <a target="_blank" title="♬ Music for your live streaming(1398141) - Tamari" href="https://www.tiktok.com/music/Music-for-your-live-streaming-1398141-7200474584276011010?refer=embed">♬ Music for your live streaming(1398141) - Tamari</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7523516311243197704" data-video-id="7523516311243197704" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> Tokyo nhà đẹp, giá rẻ thì không thiếu. Quan trọng là các bạn có chịu khó ngồi đổi tàu xíu không thôi ạ 🥰 <a title="nhatban" target="_blank" href="https://www.tiktok.com/tag/nhatban?refer=embed">#nhatban</a> <a title="baito" target="_blank" href="https://www.tiktok.com/tag/baito?refer=embed">#baito</a> <a title="timnhaotokyo" target="_blank" href="https://www.tiktok.com/tag/timnhaotokyo?refer=embed">#timnhaotokyo</a> <a title="2025" target="_blank" href="https://www.tiktok.com/tag/2025?refer=embed">#2025</a> <a title="thomes" target="_blank" href="https://www.tiktok.com/tag/thomes?refer=embed">#thomes</a> <a title="salenhadat" target="_blank" href="https://www.tiktok.com/tag/salenhadat?refer=embed">#salenhadat</a> <a title="bđs" target="_blank" href="https://www.tiktok.com/tag/b%C4%91s?refer=embed">#bđs</a> <a title="duhocsinhnhatban" target="_blank" href="https://www.tiktok.com/tag/duhocsinhnhatban?refer=embed">#duhocsinhnhatban</a> <a title="bđstainhat" target="_blank" href="https://www.tiktok.com/tag/b%C4%91stainhat?refer=embed">#bđstainhat</a> <a title="sale" target="_blank" href="https://www.tiktok.com/tag/sale?refer=embed">#sale</a> <a title="nhadatnhatban" target="_blank" href="https://www.tiktok.com/tag/nhadatnhatban?refer=embed">#nhadatnhatban</a> <a title="nhaleopalace21" target="_blank" href="https://www.tiktok.com/tag/nhaleopalace21?refer=embed">#nhaleopalace21</a> <a target="_blank" title="♬ nhạc nền  - INOVA MUSIC" href="https://www.tiktok.com/music/nhạc-nền-INOVA-MUSIC-7467532716867635985?refer=embed">♬ nhạc nền  - INOVA MUSIC</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`
  ];

  // KHẮC PHỤC: Chạy lại script TikTok khi component được mount (chuyển trang)
  useEffect(() => {
    // Tìm script cũ nếu có và xóa đi
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Tạo script mới và chèn vào body
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Dọn dẹp script khi component bị hủy
      const scriptToRemove = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <title>T-HOMES 不動産 | 外国人向け賃貸・売買サポート | TQC株式会社</title>
      <meta name="description" content="T-HOMES不動産は、外国人向けの賃貸・売買物件をトータルサポート。入居者ファーストの精神で、審査の通しやすい物件や安心の管理体制を提供します。" />

      {/* --- HERO BANNER --- */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">T-HOMES 不動産</h1>
        <p className="text-yellow-500 text-lg md:text-xl font-light tracking-widest uppercase">REAL ESTATE</p>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
              What underpins TQC (T-homes) <br/>
              <span className="text-blue-600">“Residents come first policy”</span>
            </h2>
            <p className="text-gray-500 italic">TQC(T-HOMES)の入居者ファーストへの想い</p>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed bg-gray-50 p-8 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-gray-950">TQC株式会社では、</h3>
            <p>
              賃貸物件を契約する際の判断基準である「家賃や間取り、地域」という既成概念に、
              <strong>「管理会社」</strong>で賃貸物件を選ぶという新たな基準が加わることを志し、
              独自のビジネスモデルを構築しております。
            </p>
            <p>
              当社管理物件にお住まい頂いた方には、暮らしを楽しむイベントやキャンペーン、
              お困りごとに迅速に駆けつけるために細やかに配置された管理拠点など、
              「TQC(T-Homes)の管理する物件に住みたい」と思って頂ける、
              <strong>「入居者ファースト」</strong>のサービス提供を今後も行ってまいります。
            </p>
          </div>
        </div>
      </section>

      {/* --- TIKTOK UPDATES SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-950 mb-16">TQC TIKTOK チャンネル</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {tiktokEmbedCodes.map((embedCode, index) => (
              <div key={index} className="flex justify-center" dangerouslySetInnerHTML={{ __html: embedCode }} />
            ))}
          </div>
          <a 
            href="https://www.tiktok.com/@tqc.japan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-gray-900 text-gray-900 font-bold py-3 px-10 rounded-none hover:bg-gray-900 hover:text-white transition-all"
          >
            VIEW ALL VIDEOS
          </a>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">私たちの不動産サービスの特徴</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <Users size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">外国人専用サポート</h4>
              <p className="text-sm text-gray-600">ベトナム語をはじめ、多言語で物件探しから契約まで完全サポート。</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <ClipboardCheck size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">審査通過率向上</h4>
              <p className="text-sm text-gray-600">独自のネットワークで、外国人の方も審査の通りやすい物件を厳選。</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <ShieldCheck size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">安心の管理体制</h4>
              <p className="text-sm text-gray-600">入居後のトラブルも迅速に対応。安心してお住まいいただけます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOR OWNER SECTION --- */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">賃貸マンションのオーナー様</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building2 size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">TQCの賃貸管理</h4>
              <p className="text-sm text-gray-600">「オーナー様に寄り添って考える」創業以来、管理を専門にしてきた経験 và 実績。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Wrench size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">リフォーム・修繕</h4>
              <p className="text-sm text-gray-600">管理会社だからこそできる費用対効果を考えたリフォーム提案を行っています。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BarChart3 size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">投資・収益物件売買</h4>
              <p className="text-sm text-gray-600">売りたい・買いたい、投資・収益など、不動産売買のご相談なら何でもどうぞ。</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OTHER SERVICES SECTION --- */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">その他サービス</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <Sofa size={40} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">家具家電レンタル</h4>
              <p className="text-sm text-gray-600">大阪・京都・兵庫・滋賀・東京・神奈川の家具家電レンタルシステム。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <Building2 size={40} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">トランクルーム</h4>
              <p className="text-sm text-gray-600">お部屋をより快適に。荷物の整理はTQC(T-Homes)のトランクルーム。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <GraduationCap size={40} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">外国人(留学生)住居支援</h4>
              <p className="text-sm text-gray-600">日本で生活される外国人の方々をサポートする専門窓口。学校法人からのご相談も受け付けております。</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}