"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, SunMedium, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { NAV_LINKS, SITE_NAME, WHATSAPP_MESSAGES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

type ThemeMode = "light" | "dark";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("brooomin-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("brooomin-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const elevated = !isHome || isScrolled || menuOpen;

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b bg-[color:var(--nav-bg)] text-[color:var(--nav-fg)] backdrop-blur-xl transition-all duration-300 ${
          elevated ? "shadow-sm" : "shadow-none"
        } border-[color:var(--nav-border)]`}
      >
        <div className="section-shell">
          <div className="flex h-24 items-center justify-between gap-4">
            <Link href="/" className="navbar-brand" aria-label={`${SITE_NAME} home`}>
              <span className="navbar-brand-mark">
                <Image
                  src="/Brooomin.webp"
                  alt=""
                  width={64}
                  height={64}
                  priority
                  className="navbar-brand-mark-image"
                />
              </span>
              <span className="navbar-brand-wordmark" aria-hidden="true">
                <Image
                  src="/Logo text.png"
                  alt=""
                  width={280}
                  height={76}
                  priority
                  className="navbar-brand-wordmark-image"
                />
              </span>
              <span className="sr-only">Brooomin</span>
            </Link>

            <nav className="hidden items-center gap-3 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-link"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
                className="theme-pill"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                aria-pressed={theme === "dark"}
              >
                <SunMedium className="theme-pill-icon theme-pill-sun" />
                <Moon className="theme-pill-icon theme-pill-moon" />
                <span className="theme-pill-thumb">
                  {theme === "light" ? (
                    <SunMedium className="theme-pill-active-icon text-[#e8c96e]" />
                  ) : (
                    <Moon className="theme-pill-active-icon text-primary" />
                  )}
                </span>
              </button>

              <WhatsAppButton
                label="Book Now"
                message={WHATSAPP_MESSAGES.general}
                className="bg-accent text-dark hover:brightness-105"
              />
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
                className="theme-pill"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                aria-pressed={theme === "dark"}
              >
                <SunMedium className="theme-pill-icon theme-pill-sun" />
                <Moon className="theme-pill-icon theme-pill-moon" />
                <span className="theme-pill-thumb">
                  {theme === "light" ? (
                    <SunMedium className="theme-pill-active-icon text-[#e8c96e]" />
                  ) : (
                    <Moon className="theme-pill-active-icon text-primary" />
                  )}
                </span>
              </button>

              <button
                type="button"
                className="navbar-toggle-button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((value) => !value)}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-0 top-24 z-40 bg-[color:var(--surface)] px-4 py-6 text-[color:var(--foreground)] lg:hidden"
        >
          <div className="section-shell flex h-full flex-col">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-elevated)] px-4 py-3 text-base font-semibold text-[color:var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <WhatsAppButton
                label="Book on WhatsApp"
                message={WHATSAPP_MESSAGES.general}
                className="w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
