"use client";

import { useState } from "react";
import { address } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

const faqs = [
  {
    q: "A është i përfshirë plani ushqimor?",
    a: "Po. Çdo program përfshin plan ushqimi të personalizuar bazuar në qëllimin tënd – humbje peshe, shtim mase ose forcë.",
  },
  {
    q: "Ku zhvillohen stërvitjet?",
    a: `${address}`,
  },
  {
    q: "Sa kohë zgjat një sesion?",
    a: "Sesionet zakonisht zgjasin 60–75 minuta, varësisht nga programi dhe qëllimi.",
  },
  {
    q: "A duhet të kem përvojë në palestër?",
    a: "Jo. Programet janë të përshtatshme për fillestarë dhe të avancuar – fillojmë nga niveli yt.",
  },
  {
    q: "Si rezervoj një konsultë falas?",
    a: "Plotësoni formularin e kontaktit ose shkruani direkt në WhatsApp. Do të ju përgjigjem shpejt.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-dark-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            FAQ
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <p className="text-white/80 mb-12">
            Pyetje të shpeshta rreth trajnimit dhe shërbimeve.
          </p>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 50} direction="up">
              <div className="border border-white/10 rounded-2xl overflow-hidden shadow-soft hover:border-power-blue/20 transition-all duration-300">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:bg-white/5 transition-colors duration-300"
                >
                  {faq.q}
                  <span className={`transition-transform duration-300 ease-out ${openIndex === i ? "rotate-180" : ""}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 py-4 bg-dark-navy/50 border-t border-white/10 text-white/90 transition-all duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
