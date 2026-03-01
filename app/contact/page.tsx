// app/contact/page.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- HÀM XỬ LÝ GỬI FORM VỀ GOOGLE SHEET ---
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    // DÁN URL APP SCRIPT CỦA BẠN VÀO ĐÂY
    const webAppUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!webAppUrl) {
    console.error("Google Script URL is not defined");
    return;
    }

    try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      // Gửi trực tiếp FormData, không dùng URLSearchParams nếu có file
      body: formData, 
    });

    if (response.ok) {
      alert("送信完了しました！"); // Gửi thành công
    } else {
      alert("エラーが発生しました。"); // Lỗi
    }
  } catch (error) {
    console.error("Error:", error);
    alert("エラーが発生しました。");
  }
};

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          CONTACT US
        </h1>
        <p className="text-yellow-500 text-lg md:text-xl font-light tracking-widest uppercase">
          お問い合わせ
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* --- LEFT: COMPANY PROFILE --- */}
        <div>
          <h2 className="text-xl font-bold mb-8 flex items-center text-gray-950">
            <span className="w-1.5 h-7 bg-red-600 mr-3 rounded"></span>
            会社概要 (COMPANY PROFILE)
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border rounded-lg overflow-hidden h-40 relative">
              <Image src="/company-building.jpg" alt="Building" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="border rounded-lg overflow-hidden h-40 relative">
              <Image src="/company-team.jpg" alt="Team" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <p><strong className="text-gray-950 w-24 inline-block">会社名</strong> TQC株式会社 (TQC Corporation)</p>
            <p><strong className="text-gray-950 w-24 inline-block">所在地</strong> 〒171-0022 東京都豊島区南池袋２丁目３３－６ 佐藤ビル３F</p>
            <p><strong className="text-gray-950 w-24 inline-block">TEL / FAX</strong> (03) 6907-1219 / (03) 6701-2399</p>
            <p><strong className="text-gray-950 w-24 inline-block">営業時間</strong> 9:00～18:00 (定休日: 水・日)</p>
            <p className="border-t pt-4 text-xs text-gray-500">
              宅地建物取引業者免許：東京都知事（1）第107650号<br />
              有料職業紹介事業所：許可番号 13－ユ－314273
            </p>
          </div>
        </div>

        {/* --- RIGHT: INQUIRY FORM --- */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-8 text-gray-950">INQUIRY FORM</h3>
          
          {submitted ? (
            <div className="text-center py-10 bg-white rounded-lg border border-green-200">
              <p className="text-green-600 text-lg font-bold">お問い合わせありがとうございます！</p>
              <p className="text-gray-600 mt-2">ご入力いただいたメールアドレスへ確認メールを送信しました。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Lưu ý: name="Name", name="Email",... phải trùng với tên cột trong Sheet */}
              <div>
                <label className="block text-sm font-medium mb-1.5">USER NAME / お名前</label>
                <input type="text" name="Name" required className="w-full p-3 border rounded-lg" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1.5">EMAIL / メール</label>
                <input type="email" name="Email" required className="w-full p-3 border rounded-lg" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">SUBJECT / 件名</label>
                <select name="Subject" className="w-full p-3 border rounded-lg bg-white">
                  <option>T-Homes (不動産)</option>
                  <option>人材紹介</option>
                  <option>B2B調達</option>
                  <option>その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">MESSAGE / 内容</label>
                <textarea name="Message" rows={5} className="w-full p-3 border rounded-lg"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-slate-950 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition disabled:bg-gray-400"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}