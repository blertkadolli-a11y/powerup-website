"use client";

import { useEffect, useState } from "react";
import { brandName } from "@/lib/constants";

type Phase = "enter" | "move" | "exit" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("move"), 1200);
    const t2 = window.setTimeout(() => setPhase("exit"), 2200);
    const t3 = window.setTimeout(() => setPhase("done"), 3200);
    const t4 = window.setTimeout(() => setPhase("done"), 5000); // safety fallback

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-dark-base transition-opacity duration-700 ease-in-out ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute font-display tracking-wider text-white ${
          phase === "enter"
            ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl lg:text-8xl animate-[splash-pop-in_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            : "absolute animate-[splash-move-up_1s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
        }`}
      >
        {brandName}
      </div>
    </div>
  );
}
