"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-xl tracking-wide hover:opacity-100 transition-opacity"
            >
              Sertoria
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 hover:text-white ${
                    pathname === link.href
                      ? "text-white"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="btn-primary text-sm px-5 py-2.5 font-medium tracking-wide"
              >
                Hablemos
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl tracking-wide transition-all duration-500 hover:text-white ${
                pathname === link.href ? "text-white" : "text-muted"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn-primary text-sm px-8 py-4 mt-4 font-medium tracking-wide"
            style={{
              transitionDelay: isMobileMenuOpen ? `${links.length * 100}ms` : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Hablemos →
          </Link>
          
          {/* Contact info in mobile menu */}
          <div 
            className="mt-12 text-center"
            style={{
              transitionDelay: isMobileMenuOpen ? `${(links.length + 1) * 100}ms` : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease",
            }}
          >
            <a href="mailto:hola@sertoria.com" className="text-sm text-muted hover:text-white transition-colors">
              hola@sertoria.com
            </a>
            <p className="text-xs text-muted mt-2">Madrid, España</p>
          </div>
        </div>
      </div>
    </>
  );
}
