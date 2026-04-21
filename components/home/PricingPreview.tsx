import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { PricingCard } from "@/components/pricing/PricingCard";
import { RESIDENTIAL_PLANS } from "@/lib/pricing-data";

export function PricingPreview() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          tag="Transparent Pricing"
          heading="Plans for Every Home"
          subtext="No hidden charges. Cancel anytime."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {RESIDENTIAL_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/pricing" className="btn-outline">
            <span>See Full Pricing</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
