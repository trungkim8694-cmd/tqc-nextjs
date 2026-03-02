// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Phone, Mail, Facebook, Music2 } from 'lucide-react';
// 1. Import Navbar mới
import Navbar from '@/components/Navbar'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TQC株式会社 | 外国人不動産・ベトナム人材・日越B2B調達",
  description: "TQC株式会社は、日本在住の外国人向け不動産仲介、優秀なベトナム人材紹介、そして日越B2Bサプライチェーン構築・購買代行を提供します。",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        
        {/* --- TOP BAR --- */}
        <div className="hidden md:flex bg-white border-b py-2 px-10 justify-between items-center text-sm text-gray-600">
            {/* ... giữ nguyên phần Top Bar ... */}
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <Phone size={14} className="text-blue-600" />
                    <span>(03) 6907-1219</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={14} className="text-blue-600" />
                    <span>info@tqc-jp.com</span>
                    <Mail size={14} className="text-blue-600" />
                    <span>tqcjapan2022@gmail.com</span>
                </div>
            </div>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/bdsthomenhatban" target="_blank" rel="noopener noreferrer">
                    <Facebook size={18} className="cursor-pointer hover:text-blue-600 transition" />
                </a>
                <a href="https://www.tiktok.com/@tqc.japan" target="_blank" rel="noopener noreferrer">
                    <Music2 size={18} className="cursor-pointer hover:text-black transition" />
                </a>
            </div>
        </div>

        {/* --- 2. SỬ DỤNG NAVBAR COMPONENT TẠI ĐÂY --- */}
        <Navbar />

        {/* --- CHILDREN (PAGE CONTENT) --- */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-[#4a4a4a] text-white py-12 px-6 mt-auto">
            {/* ... giữ nguyên phần Footer ... */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">TQC株式会社</h2>
                    <div className="space-y-3 text-sm opacity-90">
                        <p><strong>日本Office:</strong> 東京都豊島区南池袋２丁目３３－６ 佐藤ビル３F</p>
                        <p><strong>VN Office:</strong> P3-17, khu đô thị Vinhomes Ocenpark 1, Hà Nội</p>
                        <p>Tel: (03) 6907-1219</p>
                        <p>Fax: (03) 6701-2399</p>
                        <p>Email: info@tqc-jp.com</p>
                        <p>Email: tqcjapan2022@gmail.com</p>
                    </div>
                </div>
                <div className="w-full h-64 md:h-80 bg-gray-300 rounded-sm overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.800378036975!2d139.71539201526364!3d35.72886708018742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6b4122d14b%3A0xea52d793836d5b06!2sTQC%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="TQC株式会社 Access Map"
                    ></iframe>
                </div>
            </div>
            <div className="text-center text-xs opacity-60 mt-10 pt-6 border-t border-gray-500">
                © 2026 TQC CO., LTD. ALL RIGHTS RESERVED.
            </div>
        </footer>
      </body>
    </html>
  );
}