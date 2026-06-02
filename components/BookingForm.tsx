"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-warmgray/60 focus:border-gold focus:outline-none transition-colors";
const LABEL = "block text-xs uppercase tracking-luxe text-warmgray mb-1";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        setServerMessage(json.message);
        form.reset();
      } else if (json.errors) {
        setErrors(json.errors);
        setStatus("error");
        setServerMessage("Please review the highlighted fields.");
      } else {
        setStatus("error");
        setServerMessage(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("We couldn't reach the studio. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-sm border border-gold/30 bg-beige/40 p-12 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold">
          ✓
        </div>
        <h3 className="mt-6 font-serif text-3xl text-ink">Your Story Begins.</h3>
        <p className="mt-4 max-w-md text-warmgray">{serverMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="link-underline mt-8 text-gold"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" className={FIELD} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-bronze">{errors.name}</p>}
        </div>
        <div>
          <label className={LABEL} htmlFor="email">
            Email *
          </label>
          <input id="email" name="email" type="email" className={FIELD} placeholder="you@email.com" />
          {errors.email && <p className="mt-1 text-xs text-bronze">{errors.email}</p>}
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className={FIELD} placeholder="Optional" />
        </div>
        <div>
          <label className={LABEL} htmlFor="service">
            Service Needed *
          </label>
          <select id="service" name="service" defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-bronze">{errors.service}</p>}
        </div>
        <div>
          <label className={LABEL} htmlFor="date">
            Preferred Date
          </label>
          <input id="date" name="date" type="date" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="location">
            Location
          </label>
          <input id="location" name="location" className={FIELD} placeholder="City / venue" />
        </div>
        <div className="md:col-span-2">
          <label className={LABEL} htmlFor="budget">
            Budget Range
          </label>
          <select id="budget" name="budget" defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="message">
          Project Description *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${FIELD} resize-none`}
          placeholder="Tell us about your vision, the story you want to tell, and anything else we should know."
        />
        {errors.message && <p className="mt-1 text-xs text-bronze">{errors.message}</p>}
      </div>

      <AnimatePresence>
        {status === "error" && serverMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-bronze"
          >
            {serverMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <button type="submit" disabled={status === "submitting"} className="btn-gold disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
