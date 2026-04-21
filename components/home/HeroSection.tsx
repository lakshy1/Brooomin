import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark via-dark/88 to-dark/50" />
      <div className="section-shell relative py-24 lg:min-h-[92vh] lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <span className="section-tag border border-white/15 bg-white/10 text-white">
              Pune&apos;s Cleanest Homes Start Here
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hotel-Like Cleaning, Right at Your Doorstep.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Affordable, eco-friendly cleaning for homes and offices across Pune.
              Daily, weekly, or monthly - on your schedule.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton message={WHATSAPP_MESSAGES.general} />
              <a
                href="/pricing"
                className="btn-outline border-white/40 text-white hover:bg-white hover:text-dark"
              >
                <span>See Our Packages</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                Trusted by 500+ homes in Pune
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Background-verified staff
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Hotel-grade finish
              </span>
            </div>
          </div>

          <div className="animate-float">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 text-dark shadow-2xl shadow-black/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary-light/60" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    Premium. Affordable. Sustainable.
                  </p>
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-dark">
                    Pune
                  </span>
                </div>

                <div className="mt-6 rounded-3xl bg-dark p-5 text-white shadow-lg">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/65">
                    Weekly highlight
                  </p>
                  <p className="mt-3 text-2xl font-display font-semibold leading-tight">
                    Fresh homes, faster bookings, and a clean finish that feels like a hotel stay.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      Response time
                    </p>
                    <p className="mt-2 text-xl font-semibold text-dark">Under 5 minutes</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      Products
                    </p>
                    <p className="mt-2 text-xl font-semibold text-dark">Eco-certified</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-primary/10 bg-white/80 p-4">
                  <p className="text-sm font-medium text-neutral-700">
                    Daily, weekly, or monthly schedules built around your routine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
