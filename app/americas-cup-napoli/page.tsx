//app/americas-cup-napoli/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import ScrollButtons from "@/components/ScrollButtons";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "America's Cup Napoli 2027 | Yacht Experiences & Regatta Viewing | M & M Yachting",

  description:
    "Vivi l’America’s Cup Napoli 2027 dal mare con esperienze esclusive in yacht, aperitivi al tramonto e giornate tra i campi di regata nel Golfo di Napoli.",

        keywords: [
  "America's Cup Napoli 2027",
  "America's Cup Naples 2027",
  "America's Cup yacht experience",
  "Napoli yacht charter",
  "Luxury yacht Naples",
  "Regatta viewing Naples",
  "Gulf of Naples yacht experience",
  "Capri yacht experience",
  "America's Cup hospitality",
  "Luxury boat experience Naples"
],

  alternates: {
  canonical: "https://memyachting.com/americas-cup-napoli",

  languages: {
    it: "https://memyachting.com/americas-cup-napoli",
    en: "https://memyachting.com/en/americas-cup-naples",
  },
},

  openGraph: {
    title:
      "America's Cup Napoli 2027 | M & M Yachting",

    description:
      "Esperienze esclusive in yacht durante l’America’s Cup Napoli 2027.",



    url: "https://memyachting.com/americas-cup-napoli",

    images: [
      {
        url: "https://memyachting.com/americas-cup/hero.jpg",
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
        <Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",

      name: "America's Cup Napoli 2027",

      description:
        "Luxury yacht experiences and regatta viewing during the America's Cup Naples 2027 in the Gulf of Naples.",

      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",

      eventStatus:
        "https://schema.org/EventScheduled",

      location: {
        "@type": "Place",

        name: "Gulf of Naples",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Naples",
          addressCountry: "IT",
        },
      },

      image: [
        "https://memyachting.com/americas-cup/hero.jpg",
      ],

      organizer: {
        "@type": "Organization",

        name: "M & M Yachting",

        url: "https://memyachting.com",
      },

      performer: {
        "@type": "SportsOrganization",
        name: "America's Cup",
      },

      offers: {
        "@type": "Offer",

        url: "https://memyachting.com/americas-cup-napoli",

        availability:
          "https://schema.org/PreOrder",

        price: "0",

        priceCurrency: "EUR",
      },
    }),
  }}
></Script>
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
    href="/en/americas-cup-naples"
    className="text-sm uppercase tracking-[0.2em] opacity-70 hover:opacity-100"
  >
    EN
  </Link>

</div>

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

            <a
  href="#experiences"
  className="border border-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
>
  Scopri le Esperienze
</a>

            <Link
              href="/blog"
              className="border border-white/40 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
            >
              Leggi il Blog
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
        Esperienze Esclusive
      </p>

      <h2 className="text-4xl md:text-6xl font-light mb-8">
        Vivi l&apos;America&apos;s Cup dal Mare
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-80">
        Durante le settimane dell&apos;America&apos;s Cup Napoli 2027,
        M & M Yachting offrirà esperienze esclusive in yacht
        per vivere le regate da una prospettiva unica,
        immersi nel Golfo di Napoli.
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
          Aperitivi esclusivi al tramonto nel Golfo di Napoli
          durante le giornate di regata,
          con musica, drink premium e vista sul mare.
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
          Vivi le emozioni dell&apos;America&apos;s Cup
          direttamente dal mare,
          navigando attorno ai campi di regata
          a bordo delle nostre imbarcazioni.
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
          Intere giornate in yacht tra regate,
          relax, panorami esclusivi
          e itinerari tra Napoli, Capri e la Costiera Amalfitana.
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
      Un Punto di Vista
      <br />
      Totalmente Diverso
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed opacity-80 mb-8">
      Vivere l&apos;America&apos;s Cup dal mare significa
      immergersi completamente nell&apos;energia delle regate,
      circondati dal panorama unico del Golfo di Napoli.
    </p>

    <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed opacity-70">
      Lontano dalla folla, a bordo delle nostre imbarcazioni,
      sarà possibile vivere giornate esclusive tra sport,
      mare, relax, aperitivi al tramonto e viste spettacolari
      sui campi di regata con Capri, Posillipo e il Vesuvio sullo sfondo.
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
        Una delle imbarcazioni selezionate per vivere
        l&apos;America&apos;s Cup Napoli 2027
        attraverso esperienze luxury tra mare,
        regate e hospitality esclusiva.
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
      America&apos;s Cup Napoli 2027
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
      Prenota il Tuo
      <br />
      Posto sul Mare
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed opacity-80 mb-12">
      Contattaci per ricevere informazioni in anteprima
      sulle esperienze disponibili durante
      l&apos;America&apos;s Cup Napoli 2027.
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

{/* THE NAPLES ATMOSPHERE */}
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
      Napoli • Capri • Costiera Amalfitana
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
      Molto Più
      <br />
      di Una Regata
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed opacity-80 mb-8">
      L&apos;America&apos;s Cup Napoli 2027
      non sarà soltanto un evento sportivo,
      ma una delle esperienze più emozionanti
      del Mediterraneo.
    </p>

    <p className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed opacity-70">
      Tra yacht esclusivi, aperitivi al tramonto,
      panorami mozzafiato e l&apos;energia del Golfo di Napoli,
      M & M Yachting vuole creare momenti unici
      pensati per ospiti provenienti da tutto il mondo.
    </p>

  </div>

</section>

    </main>
  );
}