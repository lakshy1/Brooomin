"use client";

import { useState } from "react";

import { COMMERCIAL_PLANS, RESIDENTIAL_PLANS } from "@/lib/pricing-data";
import { PricingCard } from "@/components/pricing/PricingCard";

type Tab = "residential" | "commercial";

export function PricingToggle() {
  const [tab, setTab] = useState<Tab>("residential");
  const plans = tab === "residential" ? RESIDENTIAL_PLANS : COMMERCIAL_PLANS;

  return (
    <div>
      <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
        {(["residential", "commercial"] as Tab[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setTab(option)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              tab === option ? "bg-primary text-white shadow-md" : "text-neutral-700 hover:text-primary"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
