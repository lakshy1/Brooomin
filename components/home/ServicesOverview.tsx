import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES } from "@/lib/services-data";
import { ServiceCard } from "@/components/services/ServiceCard";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

const featured = SERVICES.slice(0, 4);

export function ServicesOverview() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          tag="What We Clean"
          heading="Every Corner, Spotless."
          subtext="Our core services are built to keep daily life easy and every room looking its best."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              ctaLabel="Learn More"
              ctaHref="/services"
              ctaMessage={WHATSAPP_MESSAGES.general}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="btn-outline">
            <span>Explore all services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
