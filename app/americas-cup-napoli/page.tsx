//app/americas-cup-napoli

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "America's Cup Napoli 2027 | Luxury Yacht Experiences | M & M Yachting",

  description:
    "Vivi l’America’s Cup Napoli 2027 dal mare con esperienze esclusive in yacht, aperitivi al tramonto e giornate tra i campi di regata nel Golfo di Napoli.",

  alternates: {
    canonical: "https://memyachting.com/americas-cup-napoli",
  },

  openGraph: {
    title:
      "America's Cup Napoli 2027 | M & M Yachting",

    description:
      "Esperienze esclusive in yacht durante l’America’s Cup Napoli 2027.",

    url: "https://memyachting.com/americas-cup-napoli",

    images: [
      {
        url: "https://memyachting.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "America's Cup Napoli 2027",
      },
    ],
  },
};

export default function AmericasCupNapoliPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/americas-cup/hero.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] opacity-70">
            M & M Yachting
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            America&apos;s Cup
            <br />
            Napoli 2027
          </h1>

          <p className="text-lg md:text-2xl font-light leading-relaxed opacity-90 mb-10">
            Vivi l&apos;America&apos;s Cup dal mare tra yacht esclusivi,
            aperitivi al tramonto e giornate immersive
            attorno ai campi di regata nel Golfo di Napoli.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">

            <Link
              href="https://app.memyachting.com"
              className="border border-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
            >
              Scopri le Esperienze
            </Link>

            <Link
              href="/blog"
              className="border border-white/40 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
            >
              Leggi il Blog
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}