import { Droplets, Leaf, PawPrint, Recycle } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";

const features = [
  { icon: Leaf, label: "Eco-certified products" },
  { icon: Droplets, label: "60% less water usage" },
  { icon: Recycle, label: "Reusable microfibre cloths" },
  { icon: PawPrint, label: "Safe for kids & pets" },
];

export function SustainabilitySection() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              tag="We Care"
              heading="Clean Homes. Cleaner Planet."
              subtext="We only use eco-certified, biodegradable cleaning products - safe for your kids, pets, and the environment. Our microfibre equipment cuts water usage by 60% compared to traditional methods."
            />
            <div className="mt-8 rounded-3xl bg-primary-light p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Why it matters
              </p>
              <p className="mt-3 max-w-xl text-base leading-7 text-neutral-700">
                Sustainability is part of the service experience, not an afterthought.
                The result is a healthier home and a lighter footprint.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.label} className="card flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-dark">{feature.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
