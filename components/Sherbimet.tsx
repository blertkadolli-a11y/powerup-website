"use client";

import { useState, useCallback } from "react";
import { getWhatsAppUrl } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { FigureFallback } from "./FigureFallback";

const services = [
  {
    title: "Trajnim Personal 1-me-1",
    forWho: "Për të gjithë nga fillestarët deri te atletët e avancuar.",
    bullets: [
      "Sesione 1-me-1 të personalizuara",
      "Plan ushqimi i personalizuar",
      "Monitorim i progresit çdo javë",
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    title: "Humbje Peshe (Cut)",
    forWho: "Për ata që duan të humbin yndyrë dhe të ruajnë muskujt.",
    bullets: [
      "Deficit kalorik i kontrolluar",
      "Plan ushqimi i personalizuar",
      "Kardio dhe forcë të balancuar",
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    title: "Shtim Mase Muskulore (Bulk)",
    forWho: "Për ata që duan të shtojnë masë dhe forcë.",
    bullets: [
      "Surtim progresiv me pesha",
      "Plan ushqimi i personalizuar",
      "Riposje dhe rekuperim",
    ],
    image: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?w=600&q=80",
  },
  {
    title: "Forcë & Kondicion",
    forWho: "Për atletë dhe amatorë që duan të përmirësojnë performancën.",
    bullets: [
      "Programe forcë dhe fuqi",
      "Plan ushqimi i personalizuar",
      "Kondicionim i integruar",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
];

export function Sherbimet() {
  const [failedIndices, setFailedIndices] = useState<Set<number>>(new Set());

  const handleError = useCallback((i: number) => {
    setFailedIndices((prev) => new Set(prev).add(i));
  }, []);

  return (
    <section id="sherbimet" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background - no image dependency to avoid load failures */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-power-red/20 via-power-blue/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Shërbimet
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <p className="text-white/80 mb-12 max-w-2xl">
            Çdo program është i ndërtuar për të – jo kopje të përgjithshme.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 100} direction="up">
              <div className="group relative bg-dark-navy/95 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:border-power-red/30 transition-all duration-300">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  {failedIndices.has(i) ? (
                    <FigureFallback className="group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element -- Remote images use <img> for robustness (no next/image optimization)
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleError(i)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/30 to-transparent" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-2xl text-power-red mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.forWho}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-white/90 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-power-green" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppUrl(`Pershendetje Oktaj, jam i interesuar për: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-power-green text-dark-base font-bold text-sm rounded-2xl hover:bg-power-green/90 transition-all duration-300"
                >
                  Kontakto në WhatsApp
                </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
