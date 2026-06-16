"use client";

import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-y-auto">

     {/* HERO VIDEO */}
<video
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  preload="auto"
  poster="/hero-poster.jpg"
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>

      {/* OVERLAY DARK */}
      <div className="absolute inset-0 bg-black/75" />

      {/* CONTENT */}
<div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-6 py-16">

  <Image
  src="/logo-bianco.png"
  alt="M & M Yachting"
  width={220}
  height={80}
  className="mb-6"
/>

<h1 className="text-4xl md:text-6xl font-light tracking-[0.4em] mb-4">
  M & M YACHTING
</h1>

  <p className="text-sm tracking-[0.6em] uppercase opacity-70 mb-6">
    Luxury Yacht Charter in Naples, Capri & Amalfi Coast <br />
    Private Boat Tours and Exclusive Sea Experiences
  </p>

  
  <div className="flex flex-col gap-4 w-full max-w-md">

  <Link
    href="https://app.memyachting.com"
    onClick={() => {
      if (typeof window !== "undefined") {
        (window as any).trackEvent?.("access_app_click", {
          event_category: "navigation",
          event_label: "Accedi App Landing",
        });
      }
    }}
    className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
  >
    BOOK NOW
  </Link>

  <Link
  href="/americas-cup-napoli"
  className="border border-yellow-400 bg-yellow-400/10 px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-yellow-400 hover:text-black transition-all duration-300"
>
  America&apos;s Cup Napoli 2027
</Link>

  <Link
    href="/blog"
    className="border border-white/40 px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
  >
    BLOG NAUTICO
  </Link>

</div>

  <p className="absolute bottom-6 text-xs opacity-50">
  © {new Date().getFullYear()} M & M Yachting —
  
  <a
    href="https://app.memyachting.com/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
    className="underline ml-2"
  >
    Privacy
  </a>

  <a
    href="https://app.memyachting.com/terms"
    target="_blank"
    rel="noopener noreferrer"
    className="underline ml-4"
  >
    Termini
  </a>
</p>
</div>
    </div>
  );
}