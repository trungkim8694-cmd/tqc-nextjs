// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";
import { Mail } from "lucide-react";

export default function Navbar() {
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
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center gap-4">
        {/* Logo & Corporate Name */}
        <Link href={getHref("/")} className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-[130px] h-[40px] md:w-[155px] md:h-[46px]">
            <Image
              src="/logo.png"
              alt="TQC Logo"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
            <span className="font-bold text-base md:text-lg tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              株式会社ＴＱＣ
            </span>
            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">
              Real Estate &amp; B2B Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6 text-[13px] font-semibold tracking-tight">
            {navItems.map((item) => {
              const itemHref = getHref(item.href);
              const isActive =
                pathname === itemHref ||
                (pathname === `/${locale}` && item.href === "/") ||
                (locale === "ja" && pathname === "" && item.href === "/");

              return (
                <li key={item.name} className="relative py-1">
                  <Link
                    href={itemHref}
                    className={`transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-blue-700 font-bold"
                        : "text-slate-700 hover:text-blue-700 font-medium"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-700 rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
            <LanguageSwitcher />

            {/* Contact CTA Button */}
            <Link
              href={getHref("/contact")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold transition-all shadow-xs ${
                pathname === getHref("/contact")
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <Mail size={13} />
              <span>{t("contact")}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
