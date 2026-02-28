"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

const methodBullets = [
  "Teknikë e saktë dhe formë e sigurt – për të shmangur dëmtimet dhe për të maksimizuar rezultatet.",
  "Programi ndërtuar për të – jo kopje të përgjithshme, por plan që përshtatet me të.",
  "Disiplinë dhe konsistencë – progresi vjen nga stërvitë e përditshme, jo nga magjia.",
];

export function Rreth() {
  return (
    <section id="rreth" className="relative py-24 lg:py-32 bg-dark-navy">
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-8">
              Metoda <span className="text-power-red">ime</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-lg text-white/90 mb-12">
              Nuk ka shortcut. Ka vetëm punë të palodhur, plan të mirë dhe përmbajtje. Në Power Up, fokusi është në teknikë e saktë, progresion të matur dhe plan ushqimi që përshtatet me qëllimin tënd.
            </p>
          </AnimateOnScroll>
          <ul className="space-y-4">
            {methodBullets.map((bullet, i) => (
              <AnimateOnScroll key={bullet} delay={150 + i * 80} direction="left">
                <li className="flex gap-4 text-white/90">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-power-red flex items-center justify-center text-power-red text-sm font-bold">✓</span>
                  {bullet}
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
