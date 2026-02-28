"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { brandName, getWhatsAppUrl } from "@/lib/constants";

const navLinks = [
  { href: "#ballina", label: "Ballina" },
  { href: "#rreth", label: "Rreth" },
  { href: "#sherbimet", label: "Shërbimet" },
  { href: "#per-ke-eshte", label: "Për kë është" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakti", label: "Kontakti" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-base/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="#ballina"
            className="flex items-center gap-2 font-display text-2xl lg:text-3xl tracking-wider text-white hover:text-power-red transition-colors duration-300"
          >
            <Image
              src="/logo.png"
              alt="Power Up"
              width={40}
              height={40}
              className="h-10 w-auto object-contain flex-shrink-0 invert"
            />
            {brandName}
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-power-red transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppUrl("Pershendetje Oktaj, jam i interesuar për trajnim personal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-power-green text-dark-base font-bold text-sm rounded-2xl hover:bg-power-green/90 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white rounded-xl hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-white/5 animate-[fade-in_0.3s_ease-out]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-power-red transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={getWhatsAppUrl("Pershendetje Oktaj, jam i interesuar për trajnim personal.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-power-green text-dark-base font-bold text-sm rounded-2xl w-fit hover:bg-power-green/90 transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
