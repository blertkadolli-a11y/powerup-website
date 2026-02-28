"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl, trainerName, address, mapEmbedUrl } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { FigureFallback } from "./FigureFallback";

// Smoke overlay: /public/smoke-overlay.png – gradients below simulate smoke if file missing

export function Kontakti() {
  const [form, setForm] = useState({ emri: "", qellimi: "", koha: "" });
  const [figureError, setFigureError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Pershendetje ${trainerName}, jam ${form.emri}. Qellimi: ${form.qellimi}. Koha e preferuar: ${form.koha}. Lokacioni: ${address}.`;
    if (typeof window !== "undefined") {
      window.open(getWhatsAppUrl(message), "_blank");
    }
  };

  return (
    <section id="kontakti" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Figure 1 - subtle background left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 lg:w-2/5 opacity-[0.25] pointer-events-none overflow-hidden">
        {figureError ? (
          <FigureFallback />
        ) : (
          <Image
            src="/figure-1.jpg"
            alt=""
            fill
            loading="lazy"
            className="object-cover object-right rounded-r-3xl"
            sizes="40vw"
            onError={() => setFigureError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-base to-transparent" />
      </div>
      {/* Smoke overlay - gradients simulate smoky atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-base/30 to-dark-base" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - pitch */}
          <div>
            <AnimateOnScroll>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                Kontakti
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={80}>
              <p className="text-white/90 text-lg mb-4">
                Gati për të filluar? Rezervo një konsultë falas dhe flasim për qëllimin tënd.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <p className="text-power-red font-medium mb-8">
                Vendet janë të limituara çdo javë.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={160}>
              <div className="text-white/80 space-y-2">
                <p className="font-medium text-white">{address}</p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right - form */}
          <AnimateOnScroll direction="right" delay={100}>
            <div className="bg-dark-navy/95 backdrop-blur border border-white/10 rounded-2xl p-6 lg:p-8 shadow-soft-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="emri" className="block text-sm font-medium text-white/90 mb-2">
                    Emri
                  </label>
                  <input
                    id="emri"
                    type="text"
                    required
                    value={form.emri}
                    onChange={(e) => setForm({ ...form, emri: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-base border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-power-red focus:ring-1 focus:ring-power-red transition-all duration-300"
                    placeholder="Emri yt"
                  />
                </div>
                <div>
                  <label htmlFor="qellimi" className="block text-sm font-medium text-white/90 mb-2">
                    Qëllimi
                  </label>
                  <input
                    id="qellimi"
                    type="text"
                    required
                    value={form.qellimi}
                    onChange={(e) => setForm({ ...form, qellimi: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-base border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-power-red focus:ring-1 focus:ring-power-red transition-all duration-300"
                    placeholder="P.sh. humbje peshe, shtim mase, forcë"
                  />
                </div>
                <div>
                  <label htmlFor="koha" className="block text-sm font-medium text-white/90 mb-2">
                    Koha e preferuar
                  </label>
                  <input
                    id="koha"
                    type="text"
                    required
                    value={form.koha}
                    onChange={(e) => setForm({ ...form, koha: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-base border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-power-red focus:ring-1 focus:ring-power-red transition-all duration-300"
                    placeholder="P.sh. mëngjes, pasdite"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Dërgo në WhatsApp
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Map */}
        <AnimateOnScroll delay={150}>
          <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-soft">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lets Go Gym - Abi Qarshia, Prizren"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
