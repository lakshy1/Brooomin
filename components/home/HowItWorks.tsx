import { BadgeCheck, CalendarCheck2, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

const steps = [
  {
    icon: Sparkles,
    title: "Choose Your Service",
    copy: "Pick from our home, office, or deep-clean packages - tailored to your space.",
  },
  {
    icon: CalendarCheck2,
    title: "Book on WhatsApp",
    copy: "Message us your preferred date, time, and address. We confirm within minutes.",
  },
  {
    icon: BadgeCheck,
    title: "Sit Back & Relax",
    copy: "Our trained team arrives on time, cleans to hotel standards, and leaves your space spotless.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad bg-neutral-100/70">
      <div className="section-shell">
        <SectionHeading
          tag="Simple Process"
          heading="Clean Home in 3 Easy Steps"
          subtext="We keep the booking flow frictionless so your clean can happen without the back-and-forth."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="card relative">
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                  0{index + 1}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{step.copy}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <WhatsAppButton message={WHATSAPP_MESSAGES.general} />
        </div>
      </div>
    </section>
  );
}
