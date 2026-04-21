"use client";

import { useMemo, useState } from "react";

import { SERVICE_CATEGORIES_LABELS } from "@/lib/services-data";
import { SERVICES } from "@/lib/services-data";
import { ServiceCard } from "@/components/services/ServiceCard";
import { buildWhatsAppUrl } from "@/lib/constants";

type FilterKey = "all" | "residential" | "commercial" | "specialized";

const FILTERS: FilterKey[] = ["all", "residential", "commercial", "specialized"];

export function ServiceFilters() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredServices = useMemo(() => {
    if (activeFilter === "all") {
      return SERVICES;
    }

    return SERVICES.filter((service) => service.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "bg-primary text-white shadow-md"
                : "border border-neutral-200 bg-white text-neutral-700 hover:border-primary/30 hover:text-primary"
            }`}
          >
            {SERVICE_CATEGORIES_LABELS[filter]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            ctaLabel="Book on WhatsApp"
            ctaHref={buildWhatsAppUrl(`Hi Brooomin, I want to book ${service.name}.`)}
          />
        ))}
      </div>
    </div>
  );
}
