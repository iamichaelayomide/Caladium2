"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site-data";

const inputClass =
  "w-full rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/28 focus:border-accent/55 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(217,154,43,0.08)]";

export function ContactForm({ includeService = false }: { includeService?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const serviceMenuRef = useRef<HTMLDivElement | null>(null);
  const serviceOptions = useMemo(
    () => [...services.map((service) => service.name), "General Inquiry"],
    []
  );

  useEffect(() => {
    if (!serviceOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!serviceMenuRef.current?.contains(event.target as Node)) {
        setServiceOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServiceOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [serviceOpen]);

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
        <div ref={serviceMenuRef} className="relative">
          <input name="serviceInterest" type="hidden" value={selectedService} />
          <button
            type="button"
            className={`${inputClass} flex items-center justify-between gap-3 text-left`}
            aria-expanded={serviceOpen}
            aria-haspopup="listbox"
            onClick={() => setServiceOpen((open) => !open)}
          >
            <span className={selectedService ? "text-white" : "text-white/48"}>
              {selectedService || "Service of Interest"}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-white/48 transition-transform ${serviceOpen ? "rotate-180" : ""}`}
            />
          </button>
          {serviceOpen ? (
            <div
              role="listbox"
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-[22px] border border-white/10 bg-[#111621] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            >
              {serviceOptions.map((option) => {
                const active = option === selectedService;

                return (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={`flex w-full rounded-[16px] px-4 py-3 text-left text-sm transition ${
                      active
                        ? "bg-accent/18 text-white"
                        : "text-white/72 hover:bg-white/[0.05] hover:text-white"
                    }`}
                    onClick={() => {
                      setSelectedService(option);
                      setServiceOpen(false);
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
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
