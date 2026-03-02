// components/Navbar.tsx
"use client"; // Bắt buộc phải là Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import hook
import Image from 'next/image';
import MobileMenu from './MobileMenu'; // Đảm bảo đường dẫn import đúng

export default function Navbar() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại (ví dụ: '/t-homes')

  // Định nghĩa các liên kết để giảm lặp code
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'T-HOMES 不動産', href: '/t-homes' },
    { name: '人材', href: '/human-resource' },
    { name: 'B2B調達', href: '/b2b-supply' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center border-b">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-[150px] h-[50px]">
          <Image 
            src="/logo.png"
            alt="TQC Logo" 
            fill
            sizes="150px"
            className="object-contain"
            priority
          />
        </div>
        <span className="font-bold text-xl tracking-tighter">TQC株式会社</span>
      </Link>
  

      {/* Menu cho Desktop */}
      <ul className="hidden lg:flex gap-6 font-bold text-[12px] xl:text-[13px] uppercase tracking-tighter">
        {navItems.map((item) => {
          // KIỂM TRA ACTIVE STATE
          const isActive = pathname === item.href;
          
          return (
            <li key={item.name}>
              <Link 
                href={item.href} 
                // THÊM LOGIC MÀU XANH TẠI ĐÂY
                className={`transition ${
                  isActive ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="text-red-600 hover:opacity-80 cursor-pointer transition border-l pl-4">
          <a href="https://aka-pla.com" target="_blank" rel="noopener noreferrer">日本-ベトナム架け橋</a>
        </li>
      </ul>

      {/* --- MENU DI ĐỘNG --- */}
      <MobileMenu />
    </nav>
  );
}