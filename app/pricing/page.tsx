import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { PricingToggle } from "@/components/pricing/PricingToggle";
import { ONE_TIME_PRICING } from "@/lib/pricing-data";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning Packages in Pune - Daily, Monthly & One-Time Cleaning",
  description:
    "Affordable daily, monthly, and one-time cleaning packages for Pune homes. Compare residential and commercial options with transparent pricing starting from Rs. 499.",
  keywords: [
    "cleaning packages Pune",
    "pricing for cleaning services Pune",
    "daily cleaning package Pune",
    "monthly cleaning package Pune",
    "one time cleaning Pune",
    "affordable cleaning Pune",
    "residential cleaning pricing Pune",
    "commercial cleaning quote Pune",
  ],
};

export default function PricingPage() {
  return (
    <div className="section-pad">
      <div className="section-shell">
        <SectionHeading
          tag="Simple Pricing"
          heading="Plans That Fit Your Life (and Budget)"
          subtext="Switch between residential and commercial options to see the right packages for your property."
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <PricingToggle />
        </div>

        <section className="mt-16">
          <SectionHeading
            tag="One-Time Services"
            heading="No commitment. Book as you need."
            subtext="Indicative pricing for standard layouts."
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid grid-cols-5 bg-neutral-100 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              <span>Service</span>
              <span>1BHK</span>
              <span>2BHK</span>
              <span>3BHK</span>
              <span>4BHK+</span>
            </div>
            <div className="divide-y divide-neutral-100">
              {ONE_TIME_PRICING.map((row) => (
                <div key={row.service} className="grid grid-cols-5 gap-4 px-4 py-4 text-sm">
                  <span className="font-semibold text-dark">{row.service}</span>
                  <span>{row.oneBHK}</span>
                  <span>{row.twoBHK}</span>
                  <span>{row.threeBHK}</span>
                  <span>{row.fourBHKPlus}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  ];
        <section className="mt-16 grid gap-6 rounded-3xl bg-primary-light p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-dark">
              Commercial cleaning is priced per site.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
              We offer custom pricing for offices, co-working spaces, and commercial
              establishments based on square footage and frequency.
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              Prices are indicative for standard layouts. Final price is shared after
              WhatsApp consultation. GST may apply as per norms. Add-ons like balcony,
              fridge, and oven cleaning are priced separately.
            </p>
          </div>
          <Link href={buildWhatsAppUrl(WHATSAPP_MESSAGES.quote)} className="btn-accent">
            Request a Quote on WhatsApp
          </Link>
        </section>
      </div>
    </div>
  );
}
