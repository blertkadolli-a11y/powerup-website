"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/constants";
import { FigureFallback } from "./FigureFallback";

// Replace /public/trainer-hero.jpg with Oktaj's photo later

const bullets = [
  "Program i personalizuar",
  "Plan ushqimi i përfshirë",
  "Monitorim i progresit",
];

export function Hero() {
  const [heroError, setHeroError] = useState(false);

  return (
    <section
      id="ballina"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Neon lighting - RED left, BLUE right - vibrant colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-power-red/50 via-power-red-glow/20 to-transparent animate-[gradient-shift_8s_ease-in-out_infinite]" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-power-blue/50 via-power-blue-glow/20 to-transparent animate-[gradient-shift_8s_ease-in-out_infinite]" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Diagonal overlay shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-dark-base/0 via-dark-base/60 to-dark-base" />
        <div className="absolute right-0 top-0 w-full h-96 bg-gradient-to-bl from-transparent via-power-blue/10 to-transparent" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }} />
      </div>

      {/* Hero image container - reserved for Oktaj's photo */}
      <div className="absolute inset-0">
        {heroError ? (
          <FigureFallback />
        ) : (
          <Image
            src="/trainer-hero.jpg"
            alt="Power Up Trainer"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            onError={() => setHeroError(true)}
          />
        )}
        <div className="absolute inset-0 bg-dark-base/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[0.95] mb-6">
            Power Up{" "}
            <span className="text-power-red drop-shadow-[0_0_20px_rgba(255,0,64,0.5)]">Transformimin</span>{" "}
            Tënd në Prizren
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
            Trajnim personal + plan ushqimi i personalizuar. Disiplinë, teknikë e saktë dhe progres real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center px-8 py-4 bg-power-red text-white font-bold text-lg rounded-2xl hover:bg-power-red-glow hover:shadow-glow-red transition-all duration-300 ease-out"
            >
              Rezervo Konsultë Falas
            </a>
            <a
              href={getWhatsAppUrl("Pershendetje Oktaj, jam i interesuar për trajnim personal në Prizren.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-dark-base transition-all duration-300 ease-out"
            >
              Shkruaj në WhatsApp
            </a>
          </div>

          <ul className="flex flex-wrap gap-6">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 rounded-full bg-power-green" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
