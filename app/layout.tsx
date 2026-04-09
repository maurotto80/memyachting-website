//app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M & M Yachting | Noleggio Yacht Napoli e Costiera Amalfitana",
  description:
    "Noleggio yacht e barche di lusso nel Golfo di Napoli e Costiera Amalfitana. Esperienze esclusive tra Capri, Ischia e Positano con M & M Yachting.",
  metadataBase: new URL("https://memyachting.com"),
    icons: {
  icon: "/favicon.png",
  shortcut: "/favicon.png",
  apple: "/favicon.png",
},
  openGraph: {
    title: "M & M Yachting | Luxury Yacht Charter Napoli",
    description:
      "Esperienze esclusive in yacht nel Golfo di Napoli, Capri, Ischia e Costiera Amalfitana.",
    url: "https://memyachting.com",
    siteName: "M & M Yachting",
    images: [
      {
        url: "https://memyachting.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M & M Yachting - Yacht Charter Napoli",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M & M Yachting",
    description:
      "Luxury Yacht Experience nel Golfo di Napoli e Costiera Amalfitana.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://memyachting.com",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">

      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8LDCY09NVY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LDCY09NVY');

            window.trackEvent = function(name, params){
              gtag('event', name, params);
            }
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

    </html>
  );
}