import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emstudios.com"),
  title: {
    default: "EM Studios — Timeless Moments. Preserved Forever.",
    template: "%s — EM Studios",
  },
  description:
    "EM Studios is a creative photography studio specializing in fashion, portrait, lifestyle, brand, and event photography. Timeless visual storytelling that preserves emotion, identity, and human connection.",
  keywords: [
    "Fashion Photographer",
    "Portrait Photographer",
    "Visual Storytelling",
    "Creative Photography Studio",
    "Brand Photography",
    "Editorial Photography",
    "Lifestyle Photography",
    "Professional Photography Studio",
    "Photography Services",
    "Timeless Photography",
  ],
  openGraph: {
    title: "EM Studios — Timeless Moments. Preserved Forever.",
    description:
      "Where stories are preserved, emotions are celebrated, and time becomes timeless.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <div className="grain" aria-hidden />
        <Loader />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
