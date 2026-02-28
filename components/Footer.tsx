"use client";

import Link from "next/link";
import { brandName, whatsappDisplay, getWhatsAppUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark-navy border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl text-white/80">{brandName}</span>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-power-green transition-colors duration-300"
            >
              {whatsappDisplay}
            </a>
            <Link href="#ballina" className="hover:text-white transition-colors duration-300">
              Ballina
            </Link>
            <Link href="#kontakti" className="hover:text-white transition-colors duration-300">
              Kontakti
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center sm:text-left text-white/40 text-xs">
          © {new Date().getFullYear()} {brandName}. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
}
