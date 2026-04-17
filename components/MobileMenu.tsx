// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
              <Link href="/" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/t-homes" onClick={() => setIsOpen(false)}>
                T-HOMES 不動産
              </Link>
            </li>
            {/* <li><Link href="/human-resource" onClick={() => setIsOpen(false)}>人材</Link></li> */}
            <li>
              <Link href="/b2b-supply" onClick={() => setIsOpen(false)}>
                B2B調達
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                CONTACT
              </Link>
            </li>
            <li className="text-red-600 border-t pt-4">
              <a
                href="https://aka-pla.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                日本-ベトナム架け橋
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
