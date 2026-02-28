"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#0a0a0f",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Diçka shkoi keq</h1>
      <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>Ju lutemi provoni përsëri.</p>
      <button
        onClick={reset}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ff0040",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Provoni përsëri
      </button>
    </div>
  );
}
