import type { Zone } from "./constants";

export type Area = {
  zone: Zone;
  descriptor: string;
  copy: string;
  services: string;
};

export const AREAS: Area[] = [
  {
    zone: "Viman Nagar",
    descriptor: "Airport Road's cleanest homes",
    copy:
      "Home to Pune's vibrant professional community - from IT workers to young families. Brooomin provides daily and deep cleaning services across Viman Nagar's apartments, villas, and residential complexes.",
    services: "All residential + commercial available",
  },
  {
    zone: "Keshav Nagar",
    descriptor: "Modern apartment societies",
    copy:
      "One of Pune's fastest-growing residential neighbourhoods with modern apartment societies. Our teams are regulars here - trusted by hundreds of households.",
    services: "All residential available",
  },
  {
    zone: "Koregaon Park",
    descriptor: "Premium bungalows & residences",
    copy:
      "Pune's most premium address - bungalows, heritage properties, and luxury apartments. Our Hotel Mode plan was built for spaces like these.",
    services: "Residential focus + commercial",
  },
  {
    zone: "Kharadi",
    descriptor: "IT corridor offices & housing",
    copy:
      "The IT corridor that never slows down. We serve both the office spaces along the EON strip and the residential complexes housing Pune's tech workforce.",
    services: "All residential + commercial",
  },
  {
    zone: "Kalyani Nagar",
    descriptor: "Homes, societies, and businesses",
    copy:
      "Established neighbourhood with a mix of independent homes, societies, and businesses. Brooomin provides reliable weekly and monthly plans across Kalyani Nagar.",
    services: "All residential + commercial",
  },
];
