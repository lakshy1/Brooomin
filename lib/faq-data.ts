export type FAQCategory = "booking" | "services" | "products" | "pricing" | "general";

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: FAQCategory;
};

export const FAQS: FAQ[] = [
  {
    id: "areas-served",
    question: "Which areas in Pune do you currently serve?",
    answer:
      "We currently operate in Viman Nagar, Keshav Nagar, Koregaon Park, Kharadi, and Kalyani Nagar. We're expanding to more areas soon - WhatsApp us to check if we've reached your locality.",
    category: "general",
  },
  {
    id: "how-to-book",
    question: "How do I book a cleaning session?",
    answer:
      "The easiest way is to WhatsApp us directly. Tell us your address, preferred date and time, and the type of service - and we'll confirm within minutes.",
    category: "booking",
  },
  {
    id: "products-equipment",
    question: "Do you bring your own cleaning products and equipment?",
    answer:
      "Yes. Our team arrives fully equipped with all tools and eco-certified cleaning products. You don't need to arrange anything.",
    category: "products",
  },
  {
    id: "safe-for-kids-pets",
    question: "Are your cleaning products safe for kids and pets?",
    answer:
      "Absolutely. We only use biodegradable, non-toxic cleaning products that are completely safe for children, pets, and people with sensitivities.",
    category: "products",
  },
  {
    id: "monthly-packages",
    question: "What is included in the monthly packages?",
    answer:
      "Monthly packages include regular daily cleaning (Mon-Sat or Mon-Sun depending on the tier) along with scheduled deep-clean sessions. See our Pricing page for a detailed breakdown.",
    category: "pricing",
  },
  {
    id: "one-time-bookings",
    question: "Can I book a one-time deep clean without committing to a monthly plan?",
    answer:
      "Yes, absolutely. We offer one-time deep cleaning, kitchen cleans, bathroom cleans, and move-in/move-out cleaning without any subscription commitment.",
    category: "services",
  },
  {
    id: "reschedule-cancel",
    question: "What if I need to reschedule or cancel?",
    answer:
      "Just WhatsApp us at least a few hours before your scheduled time and we'll sort it out. We're flexible.",
    category: "booking",
  },
  {
    id: "background-verification",
    question: "Do your staff have background verification?",
    answer:
      "Yes. All our cleaning professionals go through identity verification and training before joining the Brooomin team.",
    category: "general",
  },
  {
    id: "weekends",
    question: "Do you offer services on weekends?",
    answer:
      "Our Premium Hotel Mode plan includes Sunday service. For other plans, we operate Monday to Saturday. One-time bookings on weekends are available - just ask when booking.",
    category: "services",
  },
  {
    id: "minimum-booking",
    question: "What is the minimum booking for a one-time clean?",
    answer:
      "One-time cleans start from 1BHK or equivalent scope. We do not take bookings for single-room spot cleaning.",
    category: "services",
  },
  {
    id: "how-pricing-works",
    question: "How are your prices determined?",
    answer:
      "Pricing is based on the size of the property (BHK type) and the type of service. Our pricing page has the full table. Final price is confirmed via WhatsApp after a quick chat about your space.",
    category: "pricing",
  },
  {
    id: "commercial",
    question: "Do you offer commercial or office cleaning?",
    answer:
      "Yes. We clean offices, co-working spaces, and commercial establishments. Pricing is custom based on sq footage and frequency. Reach out for a quote.",
    category: "services",
  },
];
