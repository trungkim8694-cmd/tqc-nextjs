// components/Navbar.tsx
"use client"; // Bắt buộc phải là Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import hook
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // Đảm bảo đường dẫn import đúng
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại (ví dụ: '/t-homes')
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === 'ja') return path;
    return `/${locale}${path === '/' ? '' : path}`;
  };

  // Định nghĩa các liên kết để giảm lặp code
  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("thomes"), href: "/t-homes" },
    { name: t("keibai"), href: "/keibai-koubai" },
    { name: t("b2bsupply"), href: "/b2b-supply" },
    { name: t("kigyoulist"), href: "/kigyoulist" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center border-b gap-4">
      <Link href={getHref("/")} className="flex items-center gap-2">
        <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
          <Image
            src="/logo.png"
            alt="TQC Logo"
            fill
            sizes="150px"
            className="object-contain"
            priority
          />
        </div>
        <span className="font-bold text-lg md:text-xl tracking-tighter text-black hidden sm:block">TQC株式会社</span>
      </Link>

      {/* Menu cho Desktop */}
      <ul className="hidden lg:flex gap-6 font-bold text-[12px] xl:text-[13px] uppercase tracking-tighter items-center">
        {navItems.map((item) => {
          // KIỂM TRA ACTIVE STATE
          const itemHref = getHref(item.href);
          const isActive = pathname === itemHref || (pathname === `/${locale}` && item.href === '/');

          return (
            <li key={item.name}>
              <Link
                href={itemHref}
                // THÊM LOGIC MÀU XANH TẠI ĐÂY
                className={`transition whitespace-nowrap ${
                  isActive ? "text-blue-600" : "text-black hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>

      {/* --- MENU DI ĐỘNG --- */}
      <div className="flex lg:hidden items-center gap-2">
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </nav>
  );
}
