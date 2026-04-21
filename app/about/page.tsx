import type { Metadata } from "next";
import {
  BadgeCheck,
  Clock3,
  Leaf,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

const values = [
  {
    icon: Sparkles,
    title: "Hotel Standard",
    copy: "Every clean is held to hotel-grade quality benchmarks.",
  },
  { icon: Leaf, title: "Eco First", copy: "Only biodegradable, non-toxic products." },
  { icon: Clock3, title: "Always On Time", copy: "We respect your schedule - always." },
  {
    icon: MessageCircleMore,
    title: "Transparent",
    copy: "No hidden costs, no surprises.",
  },
  { icon: ShieldCheck, title: "Reliable", copy: "Background-verified, trained staff." },
];

export const metadata: Metadata = {
  title: "About Brooomin - Our Story & Mission",
  description:
    "Brooomin was built to bring hotel-quality cleaning to everyday Pune homes. Learn about our mission, values, and eco-friendly approach.",
};

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="section-shell space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              tag="Brand Story"
              heading="Why We Started Brooomin"
              subtext="Most cleaning services in Pune are inconsistent, expensive, or unreliable. We saw a gap - homes in Pune&apos;s growing neighbourhoods deserved better. Brooomin was built on a simple belief: everyone deserves to come home to a clean, fresh space - just like a hotel room."
            />
            <p className="mt-6 text-base leading-8 text-neutral-700">
              We combined professional training, eco-certified products, and straightforward
              pricing to make that a reality.
            </p>
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              The Brooomin promise
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Professional training",
                "Eco-certified products",
                "Straightforward pricing",
                "Reliable service windows",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-3"
                >
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            tag="What Drives Us"
            heading="Mission & Values"
            subtext="The principles that shape how we show up for every home and workspace."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-dark">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{value.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              tag="Sustainability"
              heading="Cleaning That Cares"
              subtext="We made a conscious choice to build Brooomin around sustainability from day one."
            />
            <p className="mt-5 text-base leading-8 text-neutral-700">
              All our products are certified eco-friendly and safe for families and pets.
              Our microfibre tools reduce water consumption significantly compared to
              conventional cleaning methods. Sustainability isn&apos;t a badge for us - it&apos;s
              how we operate.
            </p>
          </div>

          <div className="rounded-3xl bg-primary-light p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Team note
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Brooomin is intentionally approachable. We want every booking to feel
              calm, clear, and easy from the first WhatsApp message to the final polish.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-dark px-8 py-10 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Ready for a cleaner home?
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Let&apos;s make it happen.
              </h2>
            </div>
            <WhatsAppButton message={WHATSAPP_MESSAGES.general} />
          </div>
        </section>
      </div>
    </div>
  );
}
