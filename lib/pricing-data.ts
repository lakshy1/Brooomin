export type PricingFeature = {
  text: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  tier: "basic" | "standard" | "premium" | "commercial";
  name: string;
  tagline: string;
  priceMonthly: number | null;
  priceLabel: string;
  frequency: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaLabel: string;
  whatsappMessage: string;
};

export type OneTimePriceRow = {
  service: string;
  oneBHK: string;
  twoBHK: string;
  threeBHK: string;
  fourBHKPlus: string;
};

export const RESIDENTIAL_PLANS: PricingPlan[] = [
  {
    id: "daily-sweep",
    tier: "basic",
    name: "Daily Sweep",
    tagline: "A dependable daily reset for compact homes.",
    priceMonthly: 1499,
    priceLabel: "Starting ₹1,499/month",
    frequency: "Daily (Mon-Sat)",
    features: [
      { text: "Sweeping and mopping all rooms", included: true },
      { text: "Dusting surfaces", included: true },
      { text: "Kitchen counter and sink wipe", included: true },
      { text: "Bathroom floor mop", included: true },
      { text: "Eco-friendly products", included: true },
    ],
    ctaLabel: "Book on WhatsApp",
    whatsappMessage: "Hi Brooomin, I'd like to book the Daily Sweep plan.",
  },
  {
    id: "sparkle-plan",
    tier: "standard",
    name: "Sparkle Plan",
    tagline: "Daily care plus weekly deep cleaning.",
    priceMonthly: 2999,
    priceLabel: "Starting ₹2,999/month",
    frequency: "Daily (Mon-Sat) + Weekly Deep Clean",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Weekly full kitchen cleaning", included: true },
      { text: "Weekly bathroom scrub", included: true },
      { text: "Weekly balcony sweep", included: true },
      { text: "Fortnightly inside-cabinet wipe", included: true },
    ],
    isPopular: true,
    ctaLabel: "Book on WhatsApp",
    whatsappMessage: "Hi Brooomin, I'm interested in the Sparkle Plan.",
  },
  {
    id: "hotel-mode",
    tier: "premium",
    name: "Hotel Mode",
    tagline: "The premium choice for homes that want more.",
    priceMonthly: 4999,
    priceLabel: "Starting ₹4,999/month",
    frequency: "Daily (Mon-Sun) + Bi-weekly Deep Clean",
    features: [
      { text: "Everything in Standard", included: true },
      { text: "Sunday service included", included: true },
      { text: "Bi-weekly full deep clean", included: true },
      { text: "Sofa and upholstery wipe", included: true },
      { text: "Priority time slot booking", included: true },
      { text: "Dedicated cleaning team", included: true },
      { text: "Monthly quality check report", included: true },
    ],
    ctaLabel: "Book on WhatsApp",
    whatsappMessage: "Hi Brooomin, I'm interested in the Hotel Mode plan.",
  },
];

export const COMMERCIAL_PLANS: PricingPlan[] = [
  {
    id: "office-cleaning",
    tier: "commercial",
    name: "Office Cleaning",
    tagline: "Custom schedules for productive workspaces.",
    priceMonthly: null,
    priceLabel: "Custom quote",
    frequency: "Daily or weekly",
    features: [
      { text: "Workstations and floors", included: true },
      { text: "Meeting rooms and pantry", included: true },
      { text: "Washrooms", included: true },
      { text: "Frequency based on your workflow", included: true },
    ],
    ctaLabel: "Request a Quote",
    whatsappMessage: "Hi Brooomin, I need office/commercial cleaning. Can you help?",
  },
  {
    id: "post-construction",
    tier: "commercial",
    name: "Post-Construction",
    tagline: "A reset after renovation or fit-out work.",
    priceMonthly: null,
    priceLabel: "Starting ₹1,999",
    frequency: "One-time",
    features: [
      { text: "Cement and paint dust removal", included: true },
      { text: "Window frames and floors", included: true },
      { text: "Full debris cleanup", included: true },
      { text: "Available for larger spaces too", included: true },
    ],
    ctaLabel: "Book on WhatsApp",
    whatsappMessage: "Hi Brooomin, I'm interested in post-construction cleaning.",
  },
];

export const ONE_TIME_PRICING: OneTimePriceRow[] = [
  {
    service: "Regular Clean",
    oneBHK: "₹499",
    twoBHK: "₹699",
    threeBHK: "₹899",
    fourBHKPlus: "₹1,099",
  },
  {
    service: "Deep Cleaning",
    oneBHK: "₹999",
    twoBHK: "₹1,499",
    threeBHK: "₹1,999",
    fourBHKPlus: "₹2,499",
  },
  {
    service: "Kitchen Deep Clean",
    oneBHK: "₹599",
    twoBHK: "₹699",
    threeBHK: "₹799",
    fourBHKPlus: "₹999",
  },
  {
    service: "Bathroom Clean",
    oneBHK: "₹399",
    twoBHK: "—",
    threeBHK: "—",
    fourBHKPlus: "— (per bathroom)",
  },
  {
    service: "Move-in / Move-out",
    oneBHK: "₹1,499",
    twoBHK: "₹2,199",
    threeBHK: "₹2,999",
    fourBHKPlus: "₹3,999",
  },
  {
    service: "Post-Construction",
    oneBHK: "₹1,999",
    twoBHK: "₹2,999",
    threeBHK: "₹3,999",
    fourBHKPlus: "Custom",
  },
];
