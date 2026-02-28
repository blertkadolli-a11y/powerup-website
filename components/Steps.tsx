"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { FigureFallback } from "./FigureFallback";

const steps = [
  {
    num: "01",
    title: "Konsulto",
    desc: "Rezervo një konsultë falas dhe flasim për qëllimin tënd.",
    image: "/step-1.jpg",
  },
  {
    num: "02",
    title: "Zgjidh programin",
    desc: "Trajnim 1-me-1, humbje peshe, shtim mase ose forcë.",
    image: "/step-2.jpg",
  },
  {
    num: "03",
    title: "Fillo",
    desc: "Sesione në Lets Go Gym, Abi Qarshia – disiplinë dhe progres real.",
    image: "/step-3.jpg",
  },
];

export function Steps() {
  const [failedIndices, setFailedIndices] = useState<Set<number>>(new Set());

  const handleError = useCallback((i: number) => {
    setFailedIndices((prev) => new Set(prev).add(i));
  }, []);

  return (
    <section className="relative py-16 lg:py-24 bg-dark-base border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl text-white/90 mb-12 text-center">
            Si funksionon
          </h2>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 100} direction="up">
              <div className="group relative flex flex-col rounded-2xl bg-dark-navy/60 border border-white/10 shadow-soft hover:shadow-soft-lg hover:border-power-red/20 transition-all duration-300 overflow-hidden">
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  {failedIndices.has(i) ? (
                    <FigureFallback className="group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      onError={() => handleError(i)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/50 to-transparent" />
                  <span className="absolute top-3 left-3 font-display text-3xl text-power-red/80">{step.num}</span>
                </div>
                <div className="flex flex-col items-center text-center p-6 lg:p-8">
                  <h3 className="font-display text-xl text-power-blue mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm lg:text-base">{step.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
