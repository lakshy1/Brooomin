import { Check, Minus } from "lucide-react";

import type { PricingPlan } from "@/lib/pricing-data";
import { buildWhatsAppUrl } from "@/lib/constants";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  const href = buildWhatsAppUrl(plan.whatsappMessage);
  const popular = plan.isPopular || plan.tier === "standard";

  return (
    <article
      className={`flex h-full flex-col rounded-3xl border p-6 shadow-md transition-shadow duration-300 hover:shadow-xl ${
        popular
          ? "border-primary bg-primary text-white"
          : "border-neutral-100 bg-white text-neutral-700"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.24em] ${
              popular ? "text-white/75" : "text-neutral-400"
            }`}
          >
            {plan.tier}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">{plan.name}</h3>
          <p className={`mt-2 text-sm leading-6 ${popular ? "text-white/80" : "text-neutral-700"}`}>
            {plan.tagline}
          </p>
        </div>
        {plan.isPopular ? (
          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-dark">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="mt-6">
        <p className={`text-sm font-medium ${popular ? "text-white/75" : "text-neutral-400"}`}>
          {plan.frequency}
        </p>
        <p className="mt-2 text-3xl font-semibold tracking-tight">
          {plan.priceLabel}
        </p>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            {feature.included ? (
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${popular ? "text-accent" : "text-primary"}`} />
            ) : (
              <Minus className={`mt-0.5 h-4 w-4 shrink-0 ${popular ? "text-white/55" : "text-neutral-400"}`} />
            )}
            <span className={feature.included ? "" : "line-through opacity-60"}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`btn-accent w-full justify-center ${popular ? "bg-accent text-dark hover:brightness-105" : ""}`}
        >
          Book on WhatsApp
        </a>
      </div>
    </article>
  );
}
