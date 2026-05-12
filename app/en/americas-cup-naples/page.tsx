//app/en/americas-cup-naples/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import ScrollButtons from "@/components/ScrollButtons";

export const metadata: Metadata = {
  title:
    "America's Cup Naples 2027 | Yacht Experiences & Regatta Viewing | M & M Yachting",

  description:
    "Experience the America's Cup Naples 2027 from the sea with exclusive yacht experiences, sunset aperitifs and immersive regatta days in the Gulf of Naples.",
  
  keywords: [
  "America's Cup Naples 2027",
  "America's Cup yacht experience",
  "Naples yacht charter",
  "Luxury yacht Naples",
  "Regatta viewing Naples",
  "Gulf of Naples yacht experience",
  "Capri yacht experience",
  "America's Cup hospitality",
  "Luxury boat experience Italy",
  "America's Cup Mediterranean"
],
  alternates: {
  canonical: "https://memyachting.com/en/americas-cup-naples",

  languages: {
    it: "https://memyachting.com/americas-cup-napoli",
    en: "https://memyachting.com/en/americas-cup-naples",
  },
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
        <ScrollButtons />

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

            <a
  href="#experiences"
  className="border border-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
>
  Discover Experiences
</a>

            <Link
              href="/en/blog"
              className="border border-white/40 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
            >
              Read the Blog
            </Link>

          </div>

        </div>

      </section>

      {/* EXPERIENCES */}
<section
  id="experiences"
  className="bg-black py-24 px-6"
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-sm opacity-60 mb-4">
        Exclusive Experiences
      </p>

      <h2 className="text-4xl md:text-6xl font-light mb-8">
        Experience the America&apos;s Cup from the Sea
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-80">
        During the America&apos;s Cup Naples 2027,
        M & M Yachting will offer exclusive yacht experiences
        to enjoy the regattas from a unique perspective
        in the Gulf of Naples.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm">

        <div className="text-5xl mb-6">
          🍸
        </div>

        <h3 className="text-2xl font-light mb-4">
          Sunset Aperitif
        </h3>

        <p className="opacity-70 leading-relaxed">
          Exclusive sunset aperitifs in the Gulf of Naples
          during the regatta days,
          with premium drinks, music
          and unforgettable sea views.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm">

        <div className="text-5xl mb-6">
          ⛵
        </div>

        <h3 className="text-2xl font-light mb-4">
          Regatta Viewing
        </h3>

        <p className="opacity-70 leading-relaxed">
          Experience the excitement of the America&apos;s Cup
          directly from the sea,
          sailing around the regatta areas
          aboard our yachts.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm">

        <div className="text-5xl mb-6">
          🛥️
        </div>

        <h3 className="text-2xl font-light mb-4">
          Luxury Day Experience
        </h3>

        <p className="opacity-70 leading-relaxed">
          Full yacht days between regattas,
          relaxation, exclusive views
          and itineraries across Naples,
          Capri and the Amalfi Coast.
        </p>

      </div>

    </div>

  </div>

</section>

{/* WHY FROM THE SEA */}
<section className="relative py-32 px-6 overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: "url('/americas-cup/hero.jpg')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/80" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.4em] text-sm opacity-60 mb-6">
      Why From The Sea
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
      A Completely
      <br />
      Different Perspective
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed opacity-80 mb-8">
      Experiencing the America&apos;s Cup from the sea means
      being fully immersed in the energy of the regattas,
      surrounded by the unique scenery of the Gulf of Naples.
    </p>

    <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed opacity-70">
      Away from the crowds, aboard our yachts,
      guests will enjoy exclusive days combining sport,
      sea, relaxation, sunset aperitifs
      and spectacular views of the regatta areas
      with Capri, Posillipo and Mount Vesuvius in the background.
    </p>

  </div>

</section>

{/* FLEET PREVIEW */}
<section className="bg-black py-32 px-6">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-sm opacity-60 mb-6">
        Selected Fleet
      </p>

      <h2 className="text-4xl md:text-6xl font-light mb-8">
        Princess 65 Fly
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-75">
        One of the selected yachts designed
        to experience the America&apos;s Cup Naples 2027
        through exclusive luxury hospitality,
        regatta viewing and unforgettable moments at sea.
      </p>

    </div>

    {/* IMAGE GRID */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* IMAGE 1 */}
      <div className="relative overflow-hidden">

        <img
          src="/americas-cup/fleet/princess-65-1.jpg"
          alt="Princess 65 Fly"
          className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      </div>

      {/* IMAGE 2 */}
      <div className="relative overflow-hidden">

        <img
          src="/americas-cup/fleet/princess-65-2.jpg"
          alt="Princess 65 Fly"
          className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      </div>

    </div>

  </div>

</section>

{/* WAITLIST CTA */}
<section className="relative py-32 px-6 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.4em] text-sm opacity-60 mb-6">
      America&apos;s Cup Naples 2027
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
      Reserve Your
      <br />
      Place at Sea
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed opacity-80 mb-12">
      Contact us to receive early information
      about the exclusive experiences available
      during the America&apos;s Cup Naples 2027.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/393351004423"
        target="_blank"
        className="border border-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-300"
      >
        WhatsApp Concierge
      </a>

      {/* APP */}
      <a
        href="https://app.memyachting.com"
        target="_blank"
        className="border border-white/30 px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-300"
      >
        Open App
      </a>

    </div>

  </div>

</section>

{/* NAPLES ATMOSPHERE */}
<section className="relative py-40 px-6 overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: "url('/americas-cup/hero.jpg')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/85" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.4em] text-sm opacity-60 mb-6">
      Naples • Capri • Amalfi Coast
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
      More Than
      <br />
      A Regatta
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed opacity-80 mb-8">
      The America&apos;s Cup Naples 2027
      will not only be a sporting event,
      but an unforgettable Mediterranean experience.
    </p>

    <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed opacity-70">
      Between luxury yachts, sunset aperitifs,
      breathtaking coastlines and the atmosphere
      of Naples by the sea,
      M & M Yachting aims to create
      exclusive moments designed for guests
      from all over the world.
    </p>

  </div>

</section>

{/* SEO CONTENT */}
<section className="bg-black px-6 py-24 border-t border-white/10">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-light mb-10">
      America&apos;s Cup Naples 2027 Yacht Experiences
    </h2>

    <div className="space-y-8 text-white/70 leading-relaxed text-lg">

      <p>
        The America&apos;s Cup Naples 2027 will become
        one of the most important international events
        ever hosted in the Gulf of Naples.
      </p>

      <p>
        During the regatta weeks,
        M & M Yachting will offer luxury yacht experiences,
        exclusive aperitifs, regatta viewing days
        and unforgettable moments at sea.
      </p>

      <p>
        Guests will experience the races directly from the water
        between Naples, Capri, Posillipo
        and the Amalfi Coast aboard selected yachts
        and luxury boats.
      </p>

      <p>
        These experiences are designed
        for international guests looking
        for an exclusive way to enjoy
        the America&apos;s Cup Naples 2027.
      </p>

    </div>

  </div>

</section>

    </main>
  );
}