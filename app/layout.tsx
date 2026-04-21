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
    "Professional home & office cleaning in Viman Nagar, Koregaon Park, Kharadi, Keshav Nagar & Kalyani Nagar. Affordable daily and monthly packages.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "home cleaning Pune",
    "cleaning services Viman Nagar",
    "deep cleaning Koregaon Park",
    "office cleaning Kharadi",
    "monthly cleaning packages Pune",
    "maid service Pune",
    "eco-friendly cleaning Pune",
    "cleaning services Kalyani Nagar",
  ],
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
