"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="heading-md tracking-wider">
          Sertoria
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-12 text-sm tracking-wide">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover-line transition-opacity ${
                  pathname === item.href ? "opacity-100" : "opacity-60"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <Link
                href="/contacto"
                className="block py-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
