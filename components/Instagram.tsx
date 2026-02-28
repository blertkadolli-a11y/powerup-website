"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { instagramUrl } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { FigureFallback } from "./FigureFallback";

const instagramGallery = [
  { src: "/ig/1.jpg", alt: "Power Up — Post 1" },
  { src: "/ig/2.jpg", alt: "Power Up — Post 2" },
  { src: "/ig/3.jpg", alt: "Power Up — Post 3" },
  { src: "/ig/4.jpg", alt: "Power Up — Post 4" },
  { src: "/ig/5.jpg", alt: "Power Up — Post 5" },
  { src: "/ig/6.jpg", alt: "Power Up — Post 6" },
];

export function Instagram() {
  const [failedIndices, setFailedIndices] = useState<Set<number>>(new Set());

  const handleError = useCallback((i: number) => {
    setFailedIndices((prev) => new Set(prev).add(i));
  }, []);

  return (
    <section id="instagram" className="relative py-24 lg:py-32 bg-dark-navy grain-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Instagram
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <p className="text-white/80 mb-8 max-w-2xl">
            Ndiqni për momente nga stërvitjet dhe përditësime.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={120}>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:opacity-90 transition-all duration-300 mb-12"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ndiqni në Instagram
          </a>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {instagramGallery.map((item, i) => (
            <AnimateOnScroll key={item.src} delay={i * 80} direction="up">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-soft hover:border-power-red/30 transition-all duration-300 relative"
              >
                <div className="relative w-full h-full">
                  {failedIndices.has(i) ? (
                    <FigureFallback className="group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleError(i)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-power-red/20 via-transparent to-power-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
