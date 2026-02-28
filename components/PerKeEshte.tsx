"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { FigureFallback } from "./FigureFallback";

const bullets = [
  "Fillestarë që nuk kanë hyrë kurrë në palestër – fillojmë nga zero.",
  "Të zënë që duan rezultate pa humbur kohë – sesione të fokusuara.",
  "Rikthim pas pauzës – kthehu në formë me siguri.",
  "Ata që duan të humbin peshë – pa dietë ekstreme.",
  "Ata që duan të shtojnë masë dhe forcë – plan i qartë.",
  "Atletë që duan të përmirësojnë performancën – forcë dhe kondicion.",
];

export function PerKeEshte() {
  const [figureError, setFigureError] = useState(false);

  return (
    <section id="per-ke-eshte" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Figure 2 - wide background banner with diagonal overlay */}
      <div className="absolute inset-0">
        {figureError ? (
          <FigureFallback />
        ) : (
          <Image
            src="/figure-2.jpg"
            alt=""
            fill
            loading="lazy"
            className="object-cover object-center"
            sizes="100vw"
            onError={() => setFigureError(true)}
          />
        )}
        <div
          className="absolute inset-0 bg-dark-base/85"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-power-red/25 via-transparent to-power-blue/25"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Për kë <span className="text-power-red">është</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <p className="text-white/80 mb-12 max-w-2xl">
            Çdo njeri ka një fillim. Power Up është për ata që janë gati të fillojnë.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {bullets.map((bullet, i) => (
            <AnimateOnScroll key={bullet} delay={i * 60} direction="up">
              <div className="flex items-start gap-3 bg-dark-navy/70 backdrop-blur border border-white/10 rounded-2xl p-4 lg:p-5 shadow-soft hover:border-power-blue/30 transition-all duration-300">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-power-blue flex items-center justify-center text-power-blue text-sm font-bold">✓</span>
                <span className="text-white/90">{bullet}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
