export type ServiceCategory = "residential" | "commercial" | "specialized";

export type Service = {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  includes: string[];
  idealFor: string;
  priceFrom: string;
  isPopular?: boolean;
};

export const SERVICE_CATEGORIES_LABELS: Record<
  "all" | ServiceCategory,
  string
> = {
  all: "All",
  residential: "Residential",
  commercial: "Commercial",
  specialized: "Specialized",
};

export const SERVICES: Service[] = [
  {
    id: "regular-clean",
    name: "Regular Home Cleaning",
    slug: "regular-cleaning",
    category: "residential",
    icon: "Sparkles",
    shortDescription: "Daily upkeep for a consistently fresh home.",
    fullDescription:
      "Scheduled cleaning that keeps your home neat, hygienic, and ready for the day with hotel-like attention to detail.",
    duration: "1-3 hours",
    includes: [
      "Sweeping and mopping",
      "Dusting surfaces",
      "Kitchen counter wipe",
      "Bathroom floor mop",
    ],
    idealFor: "Households wanting daily cleanliness",
    priceFrom: "₹499/visit",
    isPopular: true,
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    category: "residential",
    icon: "Sparkle",
    shortDescription: "Top-to-bottom scrub for a complete refresh.",
    fullDescription:
      "A detailed one-time clean that reaches the places regular cleaning cannot, perfect before events or after long gaps.",
    duration: "4-8 hours",
    includes: [
      "Inside cupboards",
      "Bathroom tile scrubbing",
      "Appliance exterior clean",
      "Sofa wipe",
      "Balcony clean",
    ],
    idealFor: "Annual refresh and post-renovation",
    priceFrom: "₹999 onwards",
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    slug: "office-cleaning",
    category: "commercial",
    icon: "Building2",
    shortDescription: "Reliable cleaning for offices and workspaces.",
    fullDescription:
      "Commercial cleaning designed for startups, SMEs, and co-working spaces that need a polished environment every day.",
    duration: "Depends on sq. footage",
    includes: [
      "Workstations",
      "Floors and meeting rooms",
      "Pantry cleaning",
      "Washrooms",
    ],
    idealFor: "Startups, co-working spaces, SMEs",
    priceFrom: "Custom quote",
  },
  {
    id: "move-cleaning",
    name: "Move-in / Move-out Cleaning",
    slug: "move-in-move-out-cleaning",
    category: "specialized",
    icon: "ArrowLeftRight",
    shortDescription: "Pre and post tenancy cleaning made easy.",
    fullDescription:
      "An empty-property deep clean that prepares homes for handover, inspection, and a fresh start for the next resident.",
    duration: "6-10 hours",
    includes: [
      "Full deep clean of empty flat",
      "Inside all cabinets",
      "Kitchen appliances",
      "Bathroom and balcony",
      "Window sills",
    ],
    idealFor: "Tenants and landlords",
    priceFrom: "₹1,499 onwards",
  },
  {
    id: "kitchen-deep-clean",
    name: "Kitchen Deep Clean",
    slug: "kitchen-deep-clean",
    category: "specialized",
    icon: "ShowerHead",
    shortDescription: "Grease-busting cleaning for the hardest-working room.",
    fullDescription:
      "Focused cleaning for kitchens with special attention to grease, tiles, chimney areas, and high-touch surfaces.",
    duration: "2-4 hours",
    includes: [
      "Chimney degreasing",
      "Burner cleaning",
      "Tile scrub",
      "Cabinet exteriors",
      "Sink descaling",
    ],
    idealFor: "Festival prep and periodic reset",
    priceFrom: "₹599 onwards",
  },
  {
    id: "bathroom-deep-clean",
    name: "Bathroom Deep Clean",
    slug: "bathroom-deep-clean",
    category: "specialized",
    icon: "Droplets",
    shortDescription: "A restorative clean for bathrooms and wet areas.",
    fullDescription:
      "Removes soap scum, scale, and grime from bathroom surfaces for a fresher, brighter finish.",
    duration: "1-2 hours",
    includes: [
      "Tile wash",
      "Commode descaling",
      "Shower glass clean",
      "Exhaust fan clean",
      "Tap polishing",
    ],
    idealFor: "Single-room refreshes",
    priceFrom: "₹399/bathroom",
  },
  {
    id: "post-construction",
    name: "Post-Construction Cleaning",
    slug: "post-construction-cleaning",
    category: "specialized",
    icon: "Construction",
    shortDescription: "Dust and debris cleanup after renovation work.",
    fullDescription:
      "A heavier-duty cleaning service that removes cement dust, paint residue, and construction debris from completed spaces.",
    duration: "Full day or multi-day",
    includes: [
      "Cement and paint dust removal",
      "Window frames",
      "Floors",
      "Debris cleanup",
    ],
    idealFor: "Newly finished or renovated homes",
    priceFrom: "₹1,999 onwards",
  },
];
