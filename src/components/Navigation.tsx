"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="heading-md tracking-wider group">
          <span className="inline-block transition-transform duration-300 group-hover:scale-105">
            Sertoria
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-12 text-sm tracking-wide">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover-line transition-opacity duration-300 ${
                  pathname === item.href ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="btn-glow border border-white/20 px-5 py-2.5 text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative w-8 h-8 items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-px bg-white transition-all duration-300 absolute ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`} 
          />
          <span 
            className={`w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            }`} 
          />
          <span 
            className={`w-6 h-px bg-white transition-all duration-300 absolute ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`} 
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10 transition-all duration-300 ${
          isOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navItems.map((item, index) => (
            <li 
              key={item.href}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              className={`transition-all duration-300 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <Link
                href={item.href}
                className="block py-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li 
            className="pt-4 border-t border-white/10"
            style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
          >
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
    </header>
  );
}
