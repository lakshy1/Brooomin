import type { Metadata } from "next";

import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AREAS } from "@/lib/areas-data";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning Services in Viman Nagar, Kharadi & Koregaon Park - Pune",
  description:
    "Brooomin provides professional home and office cleaning in Viman Nagar, Keshav Nagar, Koregaon Park, Kharadi, and Kalyani Nagar. Local SEO for Pune neighbourhood cleaning services.",
  keywords: [
    "cleaning services Viman Nagar",
    "cleaning services Kharadi",
    "cleaning services Koregaon Park",
    "cleaning services Kalyani Nagar",
    "cleaning services Keshav Nagar",
    "Pune local cleaning services",
    "neighbourhood cleaning Pune",
    "apartment cleaning Viman Nagar",
  ],
};

export default function AreasPage() {
  return (
    <div className="section-pad">
      <div className="section-shell space-y-12">
        <section className="card bg-dark text-white">
          <span className="section-tag border border-white/15 bg-white/10 text-white">
            Serving the Heart of Pune
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Professional cleaning, right in your neighbourhood.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            Currently covering Pune&apos;s eastern and central growth corridors while we
            expand to more localities.
          </p>
        </section>

        <div className="space-y-6">
          {AREAS.map((area) => (
            <section key={area.zone} className="card">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    {area.zone}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-dark">
                    {area.descriptor}
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-base leading-8 text-neutral-700">{area.copy}</p>
                  <p className="text-sm font-medium text-primary">{area.services}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
  ];
        <section className="rounded-3xl bg-primary-light p-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-dark">
            Don&apos;t see your area?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-700">
            WhatsApp us - we&apos;re expanding fast and can tell you whether your location is
            on the list.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton message={WHATSAPP_MESSAGES.quote} />
          </div>
        </section>
      </div>
    </div>
  );
}
