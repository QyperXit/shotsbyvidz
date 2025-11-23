import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import Navigation from "./components/Navigation";
import ScrollObserver from "./components/ScrollObserver";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShotsByVidz - Birmingham Drone & Commercial Photographer",
    template: "%s | ShotsByVidz",
  },
  description: "Professional FPV drone pilot and commercial photographer in Birmingham, UK. Specializing in wedding videos, events, real estate, and immersive cinematic fly-throughs. CAA-certified.",
  keywords: ["Birmingham photographer", "FPV drone pilot", "wedding videography", "event photography", "real estate drone", "cinematic wedding video", "Shaun ShotsByVidz"],
  openGraph: {
    title: "ShotsByVidz - Birmingham Drone & Commercial Photographer",
    description: "Professional FPV drone pilot and commercial photographer in Birmingham, UK. Specializing in wedding videos, events, and immersive cinematic fly-throughs.",
    url: "https://shotsbyvidz.com",
    siteName: "ShotsByVidz",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShotsByVidz - Birmingham Drone & Commercial Photographer",
    description: "Professional FPV drone pilot and commercial photographer in Birmingham, UK. Specializing in wedding videos, events, and immersive cinematic fly-throughs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`min-h-screen text-neutral-100 font-sans antialiased selection:bg-pink-500/30 ${inter.variable}`}>
        <JsonLd />
        <AnimatedBackground />
        <ScrollObserver />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
