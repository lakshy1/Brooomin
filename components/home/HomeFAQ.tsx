import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS } from "@/lib/faq-data";

const previewFaqs = FAQS.slice(0, 4);

export function HomeFAQ() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <SectionHeading
          tag="Quick Answers"
          heading="Frequently Asked Questions"
          subtext="A fast way to clear up the basics before you book."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {previewFaqs.map((faq) => (
            <details key={faq.id} className="card group">
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-dark">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-neutral-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/faq" className="btn-outline">
            <span>See all FAQs</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
