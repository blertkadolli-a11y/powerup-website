"use client";

/** Styled fallback when figure/hero images fail to load - neon gradient overlay */
export function FigureFallback({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br from-power-red/20 via-dark-navy to-power-blue/20 ${className}`}
      aria-hidden="true"
    />
  );
}
