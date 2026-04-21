import { SectionHeading } from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-neutral-100/60">
      <div className="section-shell">
        <SectionHeading
          tag="What Our Customers Say"
          heading="Real Homes. Real Reviews."
          subtext="A clean that feels polished, dependable, and worth repeating."
          align="center"
        />

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="card min-w-[320px] snap-start lg:min-w-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-dark">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-400">{testimonial.area}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-accent">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                {testimonial.review}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
