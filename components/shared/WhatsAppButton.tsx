import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  floating?: boolean;
  className?: string;
};

export function WhatsAppButton({
  message = WHATSAPP_MESSAGES.general,
  label = "Book on WhatsApp",
  floating = false,
  className = "",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message);

  if (floating) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-transform duration-200 hover:scale-105 ${className}`}
      >
        <MessageCircleMore className="h-7 w-7" />
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 rounded-full bg-dark px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:block group-hover:opacity-100">
          Chat with us
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`btn-accent ${className}`}
    >
      <MessageCircleMore className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
