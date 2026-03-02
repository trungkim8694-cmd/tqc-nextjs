import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Phone, Mail, Facebook, Music2 } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu'; // Đảm bảo bạn đã tạo file component này
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TQC株式会社 | 外国人不動産・ベトナム人材・日越B2B調達",
  description: "TQC株式会社は、日本在住の外国人向け不動産仲介、優秀なベトナム人材紹介、そして日越B2Bサプライチェーン構築・購買代行を提供します。",
  icons: {
    icon: '/favicon.ico', // Đường dẫn tới file favicon trong thư mục public
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
          
          {/* --- SOCIAL LINKS --- */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/bdsthomenhatban" target="_blank" rel="noopener noreferrer">
              <Facebook size={18} className="cursor-pointer hover:text-blue-600 transition" />
            </a>
            <a href="https://www.tiktok.com/@tqc.japan" target="_blank" rel="noopener noreferrer">
              <Music2 size={18} className="cursor-pointer hover:text-black transition" />
            </a>
          </div>
        </div>

        {/* --- NAVIGATION --- */}
        <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center border-b">
          <Link href="/" className="flex items-center gap-2">
          {/* --- THAY THẾ LOGO TẠI ĐÂY --- */}
          <div className="relative w-[150px] h-[50px]">
            <Image 
              src="/logo.png"
              alt="TQC Logo" 
              fill
              sizes="150px" // THÊM DÒNG NÀY ĐỂ SỬA CẢNH BÁO
              className="object-contain"
              priority
            />
          </div>
          {/* Xóa dòng chữ TQC株式会社 nếu logo đã bao gồm tên công ty */}
          <span className="font-bold text-xl tracking-tighter">TQC株式会社</span>
        </Link>
      

          {/* Menu cho Desktop */}
          <ul className="hidden lg:flex gap-6 font-bold text-[12px] xl:text-[13px] uppercase tracking-tighter">
            <li><Link href="/" className="hover:text-blue-600 transition">HOME</Link></li>
            <li><Link href="/t-homes" className="hover:text-blue-600 transition">T-HOMES 不動産</Link></li>
            <li><Link href="/human-resource" className="hover:text-blue-600 transition">人材</Link></li>
            <li><Link href="/b2b-supply" className="hover:text-blue-600 transition">B2B調達</Link></li>
            <li className="text-red-600 hover:opacity-opacity-80 cursor-pointer transition border-l pl-4">
              <a href="https://aka-pla.com" target="_blank" rel="noopener noreferrer">日本-ベトナム架け橋</a>
            </li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">CONTACT</Link></li>
          </ul>

          {/* --- MENU DI ĐỘNG (Đã sửa lỗi không bấm được) --- */}
          <MobileMenu />
        </nav>

        {/* --- CHILDREN (PAGE CONTENT) --- */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-[#4a4a4a] text-white py-12 px-6 mt-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">TQC株式会社</h2>
              <div className="space-y-3 text-sm opacity-90">
                <p>
                  <strong>日本Office:</strong> 東京都豊島区南池袋２丁目３３－６ 佐藤ビル３F
                </p>
                <p>
                  <strong>VN Office:</strong> P3-17, khu đô thị Vinhomes Ocenpark 1, Hà Nội
                </p>
                <p>Tel: (03) 6907-1219</p>
                <p>Fax: (03) 6701-2399</p>
                <p>Email: info@tqc-jp.com</p>
                <p>Email: tqcjapan2022@gmail.com</p>
              </div>
            </div>

            {/* Right: Map Placeholder */}
            {/* --- ĐOẠN IRAME MỚI --- */}
              <div className="w-full h-64 md:h-80 bg-gray-300 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5401927344795!2d139.71395581561726!3d35.72758103445831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6b1d4a13e9%3A0x6b835e07664684a0!2z44CSMTcxLTAwMTQg5p2y5YyX55yM6KaW6Zu75Yiw5YyX5Yy65Y2X5rWc5YyX77yR5LiB55uu77yS77yQ4oiS4oiS!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp"
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

          {/* Bottom copyright */}
          <div className="text-center text-xs opacity-60 mt-10 pt-6 border-t border-gray-500">
            © 2026 TQC CO., LTD. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </body>
    </html>
  );
}