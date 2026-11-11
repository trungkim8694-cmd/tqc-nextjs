// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const getHref = (path: string) => {
    if (locale === "ja") return path;
    return `/${locale}${path === "/" ? "" : path}`;
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-800 hover:text-blue-700 hover:bg-slate-100 rounded-md transition-colors"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-md shadow-lg border-b border-slate-200 z-50">
          <ul className="flex flex-col py-3 px-4 divide-y divide-slate-100 font-semibold text-sm">
            {navItems.map((item) => {
              const itemHref = getHref(item.href);
              const isActive =
                pathname === itemHref ||
                (pathname === `/${locale}` && item.href === "/") ||
                (locale === "ja" && pathname === "" && item.href === "/");

              return (
                <li key={item.name}>
                  <Link
                    href={itemHref}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-2 rounded-md transition-colors ${
                      isActive
                        ? "text-blue-700 font-bold bg-blue-50/60"
                        : "text-slate-800 hover:text-blue-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <Link
              href={getHref("/contact")}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-xs"
            >
              <Mail size={16} />
              <span>{t("contact")}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
