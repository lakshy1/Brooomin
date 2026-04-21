export const SITE_NAME = "Brooomin";
export const SITE_TAGLINE = "Hotel-like cleaning services at your doorstep";
export const SITE_URL = "https://brooomin.in";
export const WHATSAPP_NUMBER = "917972339876";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "hello@brooomin.in";
export const INSTAGRAM_HANDLE = "@brooomin";
export const INSTAGRAM_URL = "https://instagram.com/brooomin";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/replace-me";

export const SERVICE_ZONES = [
  "Viman Nagar",
  "Keshav Nagar",
  "Koregaon Park",
  "Kharadi",
  "Kalyani Nagar",
] as const;

export type Zone = (typeof SERVICE_ZONES)[number];

export const WHATSAPP_MESSAGES = {
  general: "Hi Brooomin, I'd like to book a cleaning session.",
  deepClean: "Hi Brooomin, I'm interested in a Deep Cleaning service.",
  monthly: "Hi Brooomin, I'd like to know more about monthly packages.",
  office: "Hi Brooomin, I need office/commercial cleaning. Can you help?",
  quote: "Hi Brooomin, I'd like a custom quote for my property.",
  pricing: "Hi Brooomin, I'm interested in Brooomin's pricing plans.",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Areas", href: "/areas" },
] as const;

export function buildWhatsAppUrl(message = WHATSAPP_MESSAGES.general) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
