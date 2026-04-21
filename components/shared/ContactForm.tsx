"use client";

import { useState, type FormEvent } from "react";

import {
  FORMSPREE_ENDPOINT,
  SERVICE_ZONES,
  type Zone,
  buildWhatsAppUrl,
} from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

type ContactValues = {
  name: string;
  phone: string;
  area: Zone | "Other";
  service: string;
  message: string;
};

const initialForm: ContactValues = {
  name: "",
  phone: "",
  area: SERVICE_ZONES[0],
  service: "Regular Cleaning",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const endpointConfigured =
    FORMSPREE_ENDPOINT.includes("formspree.io/f/") &&
    !FORMSPREE_ENDPOINT.includes("replace-me");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error");
      setFeedback("Please add your name and phone number.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      area: form.area,
      service: form.service,
      message: form.message.trim(),
    };

    if (!endpointConfigured) {
      window.location.href = buildWhatsAppUrl(
        `Hi Brooomin, my name is ${payload.name}. I need ${payload.service} in ${payload.area}. ${payload.message}`,
      );
      setStatus("success");
      setFeedback("Opening WhatsApp so you can send the enquiry directly.");
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFeedback("Thanks! We'll reach out within a few hours.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try WhatsApp for immediate help.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark">Full Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            type="text"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark">Phone Number</span>
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            type="tel"
            placeholder="+91..."
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark">Service Area</span>
          <select
            value={form.area}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                area: event.target.value as ContactValues["area"],
              }))
            }
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
          >
            {SERVICE_ZONES.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-dark">Service Needed</span>
          <select
            value={form.service}
            onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
            className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
          >
            <option>Regular Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Office Cleaning</option>
            <option>Move-in / Move-out</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-dark">Message</span>
        <textarea
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="min-h-32 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
          placeholder="Tell us more about your space..."
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-accent w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      <div className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
        {feedback || "For immediate booking, WhatsApp us directly."}
      </div>
    </form>
  );
}
