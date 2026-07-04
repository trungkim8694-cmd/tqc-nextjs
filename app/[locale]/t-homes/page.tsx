// app/t-homes/page.tsx
"use client"; // BẮT BUỘC: Biến thành client component để dùng useEffect

import React, { useEffect } from 'react';
import { ClipboardCheck, Users, ShieldCheck, Building2, Wrench, BarChart3, Sofa, GraduationCap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function THomesPage() {
  const t = useTranslations("THomesPage");

  // Mã nhúng TikTok (Giữ nguyên như cũ)
  const tiktokEmbedCodes = [
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7506456319164042504" data-video-id="7506456319164042504" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> Ngoài tuy.ể.n nhân viên, bên mình còn tu.y.ể.n cả ny cho nhân viên nữa ạ 🥰🥰 có b nào qua Nhật lâu rùi mà vẫn chưa có ny hôngggg 😎 <a title="timviec" target="_blank" href="https://www.tiktok.com/tag/timviec?refer=embed">#timviec</a> <a title="正社員" target="_blank" href="https://www.tiktok.com/tag/%E6%AD%A3%E7%A4%BE%E5%93%A1?refer=embed">#正社員</a> <a title="nhanvienchinhthuc" target="_blank" href="https://www.tiktok.com/tag/nhanvienchinhthuc?refer=embed">#nhanvienchinhthuc</a> <a title="bđs" target="_blank" href="https://www.tiktok.com/tag/b%C4%91s?refer=embed">#bđs</a> <a title="t_homes" target="_blank" href="https://www.tiktok.com/tag/t_homes?refer=embed">#t_homes</a> <a title="ikebukuro" target="_blank" href="https://www.tiktok.com/tag/ikebukuro?refer=embed">#ikebukuro</a> <a title="tuyendung" target="_blank" href="https://www.tiktok.com/tag/tuyendung?refer=embed">#tuyendung</a> <a title="tuyennhanvien" target="_blank" href="https://www.tiktok.com/tag/tuyennhanvien?refer=embed">#tuyennhanvien</a> <a title="genz" target="_blank" href="https://www.tiktok.com/tag/genz?refer=embed">#genz</a> <a title="2025" target="_blank" href="https://www.tiktok.com/tag/2025?refer=embed">#2025</a> <a title="capcut" target="_blank" href="https://www.tiktok.com/tag/capcut?refer=embed">#CapCut</a> <a target="_blank" title="♬ Very cute melody by marimba tone(39813) - Mitsu Sound" href="https://www.tiktok.com/music/Very-cute-melody-by-marimba-tone-39813-6849968592285337602?refer=embed">♬ Very cute melody by marimba tone(39813) - Mitsu Sound</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7570278080732744968" data-video-id="7570278080732744968" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> <p>Nghề nào cũng có áp lực, nhưng nếu gặp đúng đồng đội thì áp lực cũng thành… năng lượng 💪 Không quan trọng làm gì, quan trọng là làm ở đâu và làm với aiiiii  Bọn mình vẫn đang tìm đồng đội mới để chèo thuyền chung đó nhaaaa</p> <a target="_blank" title="♬ Music for your live streaming(1398141) - Tamari" href="https://www.tiktok.com/music/Music-for-your-live-streaming-1398141-7200474584276011010?refer=embed">♬ Music for your live streaming(1398141) - Tamari</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@tqc.japan/video/7523516311243197704" data-video-id="7523516311243197704" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@tqc.japan" href="https://www.tiktok.com/@tqc.japan?refer=embed">@tqc.japan</a> Tokyo nhà đẹp, giá rẻ thì không thiếu. Quan trọng là các bạn có chịu khó ngồi đổi tàu xíu không thôi ạ 🥰 <a title="nhatban" target="_blank" href="https://www.tiktok.com/tag/nhatban?refer=embed">#nhatban</a> <a title="baito" target="_blank" href="https://www.tiktok.com/tag/baito?refer=embed">#baito</a> <a title="timnhaotokyo" target="_blank" href="https://www.tiktok.com/tag/timnhaotokyo?refer=embed">#timnhaotokyo</a> <a title="2025" target="_blank" href="https://www.tiktok.com/tag/2025?refer=embed">#2025</a> <a title="thomes" target="_blank" href="https://www.tiktok.com/tag/thomes?refer=embed">#thomes</a> <a title="salenhadat" target="_blank" href="https://www.tiktok.com/tag/salenhadat?refer=embed">#salenhadat</a> <a title="bđs" target="_blank" href="https://www.tiktok.com/tag/b%C4%91s?refer=embed">#bđs</a> <a title="duhocsinhnhatban" target="_blank" href="https://www.tiktok.com/tag/duhocsinhnhatban?refer=embed">#duhocsinhnhatban</a> <a title="bđstainhat" target="_blank" href="https://www.tiktok.com/tag/b%C4%91stainhat?refer=embed">#bđstainhat</a> <a title="sale" target="_blank" href="https://www.tiktok.com/tag/sale?refer=embed">#sale</a> <a title="nhadatnhatban" target="_blank" href="https://www.tiktok.com/tag/nhadatnhatban?refer=embed">#nhadatnhatban</a> <a title="nhaleopalace21" target="_blank" href="https://www.tiktok.com/tag/nhaleopalace21?refer=embed">#nhaleopalace21</a> <a target="_blank" title="♬ nhạc nền  - INOVA MUSIC" href="https://www.tiktok.com/music/nhạc-nền-INOVA-MUSIC-7467532716867635985?refer=embed">♬ nhạc nền  - INOVA MUSIC</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`
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
      {/* --- HERO BANNER --- */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">{t("title")}</h1>
        <p className="text-yellow-500 text-lg md:text-xl font-light tracking-widest uppercase">{t("badge")}</p>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
              {t("h2_1")} <br/>
              <span className="text-blue-600">{t("h2_2")}</span>
            </h2>
            <p className="text-gray-500 italic">{t("h2_sub")}</p>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed bg-gray-50 p-8 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-gray-950">{t("p1_title")}</h3>
            <p dangerouslySetInnerHTML={{ __html: t.raw("p1_desc") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t.raw("p2_desc") }}></p>
          </div>
        </div>
      </section>

      {/* --- TIKTOK UPDATES SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-950 mb-16">{t("tiktokTitle")}</h2>
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
            {t("tiktokBtn")}
          </a>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">{t("featuresTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <Users size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">{t("f1Title")}</h4>
              <p className="text-sm text-gray-600">{t("f1Desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <ClipboardCheck size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">{t("f2Title")}</h4>
              <p className="text-sm text-gray-600">{t("f2Desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <ShieldCheck size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-lg font-bold mb-2">{t("f3Title")}</h4>
              <p className="text-sm text-gray-600">{t("f3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOR OWNER SECTION --- */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("ownerTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building2 size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{t("o1Title")}</h4>
              <p className="text-sm text-gray-600">{t("o1Desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Wrench size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{t("o2Title")}</h4>
              <p className="text-sm text-gray-600">{t("o2Desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BarChart3 size={40} className="mx-auto text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{t("o3Title")}</h4>
              <p className="text-sm text-gray-600">{t("o3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OTHER SERVICES SECTION --- */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("othersTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <Sofa size={40} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{t("ot1Title")}</h4>
              <p className="text-sm text-gray-600">{t("ot1Desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <Building2 size={40} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{t("ot2Title")}</h4>
              <p className="text-sm text-gray-600">{t("ot2Desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <GraduationCap size={40} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{t("ot3Title")}</h4>
              <p className="text-sm text-gray-600">{t("ot3Desc")}</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}