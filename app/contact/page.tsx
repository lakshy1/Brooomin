import type { Metadata } from "next";
import { MessageCircleMore, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  SERVICE_ZONES,
  WHATSAPP_BASE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Brooomin - WhatsApp Cleaning Booking in Pune",
  description:
    "Contact Brooomin on WhatsApp for home cleaning, deep cleaning, office cleaning, and custom quotes in Pune. Fast replies and simple booking.",
  keywords: [
    "contact cleaning service Pune",
    "WhatsApp cleaning booking Pune",
    "book cleaning on WhatsApp Pune",
    "home cleaning inquiry Pune",
    "office cleaning inquiry Pune",
    "cleaning quote Pune",
    "Brooomin contact Pune",
  ],
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="section-shell">
        <SectionHeading
          tag="Contact"
          heading="Let's Get Your Space Sparkling"
          subtext="Reach out on WhatsApp for fastest response - we reply within minutes."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <MessageCircleMore className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark">Chat on WhatsApp</h3>
                  <a
                    href={WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-sm font-medium text-primary"
                  >
                    {`+${WHATSAPP_NUMBER}`}
                  </a>
                  <p className="mt-2 text-sm text-neutral-700">Typical response: under 5 minutes</p>
                </div>
              </div>
            </div>
  ];
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="mt-2 block text-sm font-medium text-primary">
                    {EMAIL}
                  </a>
                  <p className="mt-2 text-sm text-neutral-700">Best for non-urgent questions</p>
                </div>
              </div>
            </div>
  ];
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark">Service Areas</h3>
                  <p className="mt-2 text-sm text-neutral-700">We currently serve:</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICE_ZONES.map((zone) => (
                      <span
                        key={zone}
                        className="rounded-full bg-neutral-50 px-3 py-1 text-sm text-neutral-700"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  ];
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark">Instagram</h3>
                  <p className="mt-2 text-sm text-neutral-700">{INSTAGRAM_HANDLE}</p>
                </div>
              </div>
            </div>
          </aside>
  ];
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

