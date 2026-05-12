//components/ScrollButtons.tsx

"use client";

import { useEffect, useState } from "react";

export default function ScrollButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

     
      

      {/* BACK TO TOP */}
      {showTop && (

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 border border-white/20 bg-black/60 backdrop-blur-md px-5 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition duration-300"
        >
          ↑ Top
        </button>

      )}

    </>
  );
}