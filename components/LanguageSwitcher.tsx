// components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";

const locales = [
  { code: "ja", name: "日本語", short: "JP" },
  { code: "en", name: "English", short: "EN" },
  { code: "vi", name: "Tiếng Việt", short: "VI" },
];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLocale = locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale === locale) return;

    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

      let newPath = pathname;
      if (pathname.startsWith("/en/") || pathname === "/en") {
        newPath = pathname.replace(/^\/en/, "");
      } else if (pathname.startsWith("/vi/") || pathname === "/vi") {
        newPath = pathname.replace(/^\/vi/, "");
      }

      if (!newPath.startsWith("/")) newPath = "/" + newPath;

      if (newLocale !== "ja") {
        newPath = `/${newLocale}${newPath === "/" ? "" : newPath}`;
      }

      if (newPath === "") newPath = "/";

      router.push(newPath);
      router.refresh();
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
        aria-label="言語選択"
      >
        <Globe size={13} className="text-slate-500" />
        <span>{activeLocale.short}</span>
        <ChevronDown size={12} className="text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white border border-slate-200 rounded-md shadow-md z-50 py-1 text-xs">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 transition-colors ${
                locale === l.code
                  ? "font-bold text-blue-700 bg-blue-50/50"
                  : "text-slate-700"
              }`}
            >
              <span>{l.name}</span>
              <span className="text-[10px] uppercase font-mono text-slate-400">{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
