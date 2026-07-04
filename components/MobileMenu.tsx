// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === 'ja') return path;
    return `/${locale}${path === '/' ? '' : path}`;
  };

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("thomes"), href: "/t-homes" },
    { name: t("keibai"), href: "/keibai-koubai" },
    { name: t("b2bsupply"), href: "/b2b-supply" },
    { name: t("kigyoulist"), href: "/kigyoulist" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <div className="lg:hidden flex items-center">
      {/* Nút Hamburger hoặc Nút đóng */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu thả xuống */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-b z-50">
          <ul className="flex flex-col gap-4 p-6 font-bold text-sm uppercase tracking-tighter">
            {navItems.map((item) => {
              const itemHref = getHref(item.href);
              const isActive = pathname === itemHref || (pathname === `/${locale}` && item.href === '/');

              return (
                <li key={item.name}>
                  <Link
                    href={itemHref}
                    onClick={() => setIsOpen(false)}
                    className={isActive ? "text-blue-600" : "text-black hover:text-blue-600"}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
