import type { Metadata } from "next";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQs — Brooomin Cleaning Services Pune",
  description:
    "Answers to common questions about Brooomin's cleaning packages, scheduling, products, and service coverage in Pune.",
};

export default function FaqPage() {
  return (
    <div className="section-pad">
      <div className="section-shell">
        <SectionHeading
          tag="FAQs"
          heading="Frequently Asked Questions"
          subtext="Quick answers to the most common booking and service questions."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.id} className="card">
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-dark">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-neutral-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
