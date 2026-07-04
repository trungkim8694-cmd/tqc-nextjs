// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      {/* Nút Hamburger hoặc Nút đóng */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu thả xuống */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-b z-50">
          <ul className="flex flex-col gap-4 p-6 font-bold text-sm uppercase tracking-tighter">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={pathname === "/" ? "text-blue-600" : "text-black hover:text-blue-600"}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/t-homes"
                onClick={() => setIsOpen(false)}
                className={pathname === "/t-homes" ? "text-blue-600" : "text-black hover:text-blue-600"}
              >
                T-HOMES 不動産
              </Link>
            </li>
            <li>
              <Link
                href="/keibai-koubai"
                onClick={() => setIsOpen(false)}
                className={pathname === "/keibai-koubai" ? "text-blue-600" : "text-black hover:text-blue-600"}
              >
                競売・公売物件
              </Link>
            </li>
            {/* <li><Link href="/human-resource" onClick={() => setIsOpen(false)}>人材</Link></li> */}
            <li>
              <Link
                href="/b2b-supply"
                onClick={() => setIsOpen(false)}
                className={pathname === "/b2b-supply" ? "text-blue-600" : "text-black hover:text-blue-600"}
              >
                B2B調達
              </Link>
            </li>
            <li>
              <Link
                href="/kigyoulist"
                onClick={() => setIsOpen(false)}
                className={pathname === "/kigyoulist" ? "text-blue-600" : "text-black hover:text-blue-600"}
              >
                企業データベース
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={pathname === "/contact" ? "text-blue-600" : "text-black hover:text-blue-600"}
              >
                CONTACT
              </Link>
            </li>
            {/* Aka-pla link removed */}
          </ul>
        </div>
      )}
    </div>
  );
}
