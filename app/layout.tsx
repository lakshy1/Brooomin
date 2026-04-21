import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brooomin - Hotel-Like Cleaning Services in Pune",
    template: "%s | Brooomin",
  },
  description:
    "Brooomin offers premium, affordable, eco-friendly home and office cleaning in Pune. Book cleaning services in Viman Nagar, Keshav Nagar, Koregaon Park, Kharadi and Kalyani Nagar.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Brooomin - Hotel-Like Cleaning Services in Pune",
    description:
      "Premium, affordable, eco-friendly home and office cleaning in Pune. Available across Viman Nagar, Keshav Nagar, Koregaon Park, Kharadi and Kalyani Nagar.",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooomin - Hotel-Like Cleaning Services in Pune",
    description:
      "Premium, affordable, eco-friendly home and office cleaning in Pune. Book on WhatsApp.",
  },
  keywords: [
    "home cleaning Pune",
    "cleaning services Pune",
    "book cleaning on WhatsApp",
    "cleaning services Viman Nagar",
    "deep cleaning Koregaon Park",
    "office cleaning Kharadi",
    "monthly cleaning packages Pune",
    "maid service Pune",
    "eco-friendly cleaning Pune",
    "cleaning services Kalyani Nagar",
    "home deep cleaning Pune",
    "commercial cleaning Pune",
    "move in move out cleaning Pune",
    "apartment cleaning Pune",
    "residential cleaning Pune",
    "trusted cleaning service Pune",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-neutral-50 font-body text-neutral-700">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
