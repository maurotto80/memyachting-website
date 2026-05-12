//app/en/americas-cup-naples/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "America's Cup Naples 2027 | Luxury Yacht Experiences | M & M Yachting",

  description:
    "Experience the America's Cup Naples 2027 from the sea with exclusive yacht experiences, sunset aperitifs and immersive regatta days in the Gulf of Naples.",

  alternates: {
    canonical: "https://memyachting.com/en/americas-cup-naples",
  },

  openGraph: {
    title:
      "America's Cup Naples 2027 | M & M Yachting",

    description:
      "Exclusive yacht experiences during the America's Cup Naples 2027.",

    url: "https://memyachting.com/en/americas-cup-naples",

    images: [
      {
        url: "https://memyachting.com/americas-cup/hero.jpg",
        width: 1200,
        height: 630,
        alt: "America's Cup Naples 2027",
      },
    ],
  },
};

export default function AmericasCupNaplesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* TOP BAR */}
      <div className="absolute top-6 left-0 right-0 z-20 max-w-7xl mx-auto px-6 flex justify-between items-center">

        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] opacity-70 hover:opacity-100"
        >
          ← Home
        </Link>

        <Link
          href="/americas-cup-napoli"
          className="text-sm uppercase tracking-[0.2em] opacity-70 hover:opacity-100"
        >
          IT
        </Link>

      </div>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
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
            Naples 2027
          </h1>

          <p className="text-lg md:text-2xl font-light leading-relaxed opacity-90 mb-10">
            Experience the America&apos;s Cup from the sea
            with exclusive yachts, sunset aperitifs
            and immersive regatta days
            in the Gulf of Naples.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">

            <Link
              href="https://app.memyachting.com"
              className="border border-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
            >
              Discover Experiences
            </Link>

            <Link
              href="/en/blog"
              className="border border-white/40 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
            >
              Read the Blog
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}