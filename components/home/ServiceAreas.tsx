import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { AREAS } from "@/lib/areas-data";

export function ServiceAreas() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          tag="Where We Operate"
          heading="Serving Pune's Best Neighbourhoods"
          subtext="Currently operating in the eastern and central growth corridors of Pune - with more areas coming soon."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {AREAS.map((area) => (
            <article key={area.zone} className="card flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {area.zone}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-dark">{area.descriptor}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-neutral-700">
                {area.copy}
              </p>
              <p className="mt-5 text-sm font-medium text-primary">{area.services}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/areas" className="btn-outline">
            <span>Check if we serve your area</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
