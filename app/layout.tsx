import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { Bebas_Neue, Inter } from "next/font/google";
import { brandName, trainerName, city, gymName, address } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const SplashScreen = dynamic(() => import("@/components/SplashScreen").then((m) => ({ default: m.SplashScreen })), {
  ssr: false,
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brandName} | Trajnim Personal në ${city} – ${trainerName}`,
  description: `Trajnim personal dhe plan ushqimi i personalizuar në ${city}. ${trainerName} – disiplinë, teknikë e saktë dhe progres real.`,
  openGraph: {
    title: `${brandName} | Trajnim Personal në ${city}`,
    description: `Trajnim personal + plan ushqimi i personalizuar. Disiplinë, teknikë e saktë dhe progres real.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className={`${bebas.variable} ${inter.variable}`} suppressHydrationWarning style={{ backgroundColor: "#0a0a0f" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: trainerName,
                jobTitle: "Personal Trainer",
                worksFor: { "@type": "Organization", name: brandName },
                address: { "@type": "PostalAddress", streetAddress: address, addressLocality: city, addressCountry: "XK" },
                telephone: "+38345802788",
                url: "https://powerup-prizren.com",
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: gymName,
                address: { "@type": "PostalAddress", streetAddress: address, addressLocality: city, addressCountry: "XK" },
                url: "https://powerup-prizren.com",
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-screen font-sans bg-[#0a0a0f] text-white" style={{ backgroundColor: "#0a0a0f", color: "white" }}>
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
