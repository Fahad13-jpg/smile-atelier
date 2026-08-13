"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-1 py-3 focus:outline-none focus:border-accent transition-colors";

  return (
    <main>
      <PageHero
        eyebrow="Book a Visit"
        title="Ready when you are."
        description="Tell us a little about what you're looking for, and we'll follow up to confirm a time."
      />
      <section className="section">
        <Container>
          {submitted ? (
            <div className="max-w-md">
              <p className="font-display text-2xl mb-3">Thank you.</p>
              <p className="text-foreground-muted">
                This is a demo form — no data was actually sent.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-foreground-muted mb-2">
                  Full name
                </label>
                <input id="name" type="text" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-foreground-muted mb-2">
                  Email
                </label>
                <input id="email" type="email" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs uppercase tracking-widest text-foreground-muted mb-2">
                  What are you interested in?
                </label>
                <select id="service" className={inputClass}>
                  <option>General checkup</option>
                  <option>Cosmetic consultation</option>
                  <option>Implants</option>
                  <option>Aligners</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-foreground-muted mb-2">
                  Anything else?
                </label>
                <textarea id="message" rows={3} className={inputClass} />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-sm text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Request appointment
              </button>
            </form>
          )}
        </Container>
      </section>
    </main>
  );
}