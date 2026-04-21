import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingPreview } from "@/components/home/PricingPreview";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustBar } from "@/components/home/TrustBar";

export const metadata: Metadata = {
  title: "Brooomin — Hotel-Like Cleaning Services in Pune",
  description:
    "Professional home & office cleaning services in Viman Nagar, Koregaon Park, Kharadi, Keshav Nagar & Kalyani Nagar. Affordable daily, weekly & monthly packages.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <PricingPreview />
      <SustainabilitySection />
      <TestimonialsSection />
      <ServiceAreas />
      <HomeFAQ />
    </>
  );
}
