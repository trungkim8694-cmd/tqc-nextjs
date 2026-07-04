"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

const locales = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeLocale = locales.find((l) => l.code === locale) || locales[0];

  const switchLocale = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale === locale) return;

    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

      // Very basic logic for as-needed locale prefix
      // In production, next-intl/navigation is preferred, but this works well for simple cases.
      let newPath = pathname;
      
      // Remove current locale prefix if it exists
      if (pathname.startsWith('/en/') || pathname === '/en') {
        newPath = pathname.replace(/^\/en/, '');
      } else if (pathname.startsWith('/vi/') || pathname === '/vi') {
        newPath = pathname.replace(/^\/vi/, '');
      }
      
      // Ensure it starts with /
      if (!newPath.startsWith('/')) newPath = '/' + newPath;

      // Add new locale prefix if it's not the default (ja)
      if (newLocale !== 'ja') {
        newPath = `/${newLocale}${newPath === '/' ? '' : newPath}`;
      }
      
      if (newPath === '') newPath = '/';

      router.push(newPath);
      router.refresh();
    });
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none transition-colors"
      >
        <span>{activeLocale.flag} {activeLocale.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {locales.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => switchLocale(l.code)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 ${locale === l.code ? 'font-bold bg-gray-50 text-blue-600' : 'text-gray-700'}`}
                >
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
