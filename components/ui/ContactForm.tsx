"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site-data";

const inputClass =
  "w-full rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/28 focus:border-accent/55 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(217,154,43,0.08)]";

export function ContactForm({ includeService = false }: { includeService?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="First Name" />
        <input className={inputClass} placeholder="Last Name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="Email Address" type="email" />
        <input className={inputClass} placeholder="Phone Number" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="Company Name" />
        <input className={inputClass} placeholder="Job Title" />
      </div>
      {includeService ? (
        <select className={inputClass} defaultValue="Service of Interest">
          <option disabled>Service of Interest</option>
          {services.map((service) => (
            <option key={service.slug}>{service.name}</option>
          ))}
          <option>General Inquiry</option>
        </select>
      ) : null}
      <textarea className={inputClass} placeholder="Tell us about the decision, challenge, or growth opportunity in front of you." rows={5} />
      <Button type="submit" className="w-full" size="lg">
        Send Message
      </Button>
      <p className="text-xs leading-6 text-white/42">
        By submitting this form, you agree to our Privacy Policy. Caladium may contact you by
        email or phone to coordinate the next conversation.
      </p>
      {submitted ? (
        <p aria-live="polite" className="text-sm font-medium text-accent">
          Thanks. This demo form captured your message locally.
        </p>
      ) : null}
    </form>
  );
}
