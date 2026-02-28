"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="sq">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#0a0a0f", color: "white" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Diçka shkoi keq</h1>
          <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>Ju lutemi rifreskoni faqen.</p>
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
      </body>
    </html>
  );
}
