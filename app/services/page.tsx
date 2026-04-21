import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceFilters } from "@/components/services/ServiceFilters";

export const metadata: Metadata = {
  title: "Our Cleaning Services — Brooomin Pune",
  description:
    "Explore Brooomin's home cleaning, deep cleaning, office cleaning and move-in/out services in Pune. Trained staff, eco-products.",
};

export default function ServicesPage() {
  return (
    <div className="section-pad">
      <div className="section-shell">
        <section className="card overflow-hidden bg-dark text-white">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="p-8 lg:p-12">
              <span className="section-tag border border-white/15 bg-white/10 text-white">
                Our Services
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Cleaning services built for Pune homes and workplaces.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Every service is delivered by our trained, background-verified cleaning
                professionals using eco-certified products.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/pricing" className="btn-accent">
                  <span>View Packages</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="btn-outline border-white/35 text-white hover:bg-white hover:text-dark">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
                <Sparkles className="h-10 w-10 text-accent" />
                <p className="mt-4 text-xl font-semibold">Filter by category</p>
                <p className="mt-2 text-sm leading-6 text-white/78">
                  Quickly browse residential, commercial, or specialised cleaning
                  services and book the one that fits your space.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            tag="Browse"
            heading="Find the right cleaning service"
            subtext="Use the tabs below to filter the full service list."
          />
          <div className="mt-8">
            <ServiceFilters />
          </div>
        </section>
      </div>
    </div>
  );
}
