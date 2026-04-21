import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircleMore, Phone } from "lucide-react";

import {
  EMAIL,
  INSTAGRAM_URL,
  NAV_LINKS,
  SERVICE_ZONES,
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_BASE_URL,
  WHATSAPP_MESSAGES,
} from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const serviceLinks = [
  { label: "Regular Clean", href: "/services" },
  { label: "Deep Clean", href: "/services" },
  { label: "Office Cleaning", href: "/services" },
  { label: "Move-in / Move-out", href: "/services" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-dark text-white">
      <div className="section-shell section-pad py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo-white.svg"
              alt={`${SITE_NAME} logo`}
              width={160}
              height={44}
            />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              {SITE_TAGLINE}. Professional home and office cleaning with a fresh,
              hotel-like finish.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGES.general,
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <MessageCircleMore className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/80">
              <a
                href={WHATSAPP_BASE_URL}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp us directly</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="block transition hover:text-white">
                {EMAIL}
              </a>
              <div className="space-y-2">
                <p className="text-white/60">Serving areas</p>
                <p className="text-white/80">{SERVICE_ZONES.join(" | ")}</p>
              </div>
            </div>
            <div className="mt-6">
              <WhatsAppButton
                label="Book on WhatsApp"
                message={WHATSAPP_MESSAGES.general}
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Brooomin. All rights reserved.</p>
          <p>Made with love in Pune.</p>
        </div>
      </div>
    </footer>
  );
}
