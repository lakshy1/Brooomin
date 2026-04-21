import Link from "next/link";
import {
  ArrowLeftRight,
  Building2,
  Construction,
  Droplets,
  Sparkle,
  Sparkles,
  ShowerHead,
} from "lucide-react";

import type { Service } from "@/lib/services-data";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const ICON_MAP = {
  Sparkles,
  Sparkle,
  Building2,
  ArrowLeftRight,
  ShowerHead,
  Droplets,
  Construction,
} as const;

type ServiceCardProps = {
  service: Service;
  ctaLabel?: string;
  ctaHref?: string;
  ctaMessage?: string;
};

export function ServiceCard({
  service,
  ctaLabel = "Book on WhatsApp",
  ctaHref,
  ctaMessage,
}: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Sparkles;
  const href = ctaHref ?? buildWhatsAppUrl(ctaMessage ?? `${WHATSAPP_MESSAGES.general} Service: ${service.name}.`);
  const isExternal = href.startsWith("http");

  return (
    <article className={`card flex h-full flex-col ${service.isPopular ? "border-primary/20 ring-1 ring-primary/10" : ""}`}>
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-dark">{service.name}</h3>
            {service.isPopular ? (
              <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-dark">
                Popular
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-neutral-700">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-neutral-700">{service.fullDescription}</p>

      <div className="mt-5 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
        <div className="rounded-2xl bg-neutral-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Duration
          </p>
          <p className="mt-1 font-semibold text-dark">{service.duration}</p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Starting from
          </p>
          <p className="mt-1 font-semibold text-dark">{service.priceFrom}</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Includes
        </p>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-sm font-medium text-neutral-700">
        Ideal for {service.idealFor}.
      </p>

      <div className="mt-6">
        {!isExternal ? (
          <Link href={href} className="btn-outline w-full justify-center">
            {ctaLabel}
          </Link>
        ) : (
          <a href={href} target="_blank" rel="noreferrer" className="btn-outline w-full justify-center">
            {ctaLabel}
          </a>
        )}
      </div>
    </article>
  );
}
