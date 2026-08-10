"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration comes in Phase 6 (Django REST endpoint).
    setSubmitted(true);
  };

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
                This is a demo form — no data was actually sent. Once the
                backend is connected, this confirms a real appointment
                request.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Full name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 bg-surface focus:outline-2 focus:outline-offset-2"
                  style={{ outlineColor: "#B8863E" }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 bg-surface focus:outline-2 focus:outline-offset-2"
                  style={{ outlineColor: "#B8863E" }}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm mb-2">What are you interested in?</label>
                <select
                  id="service"
                  className="w-full border border-border rounded-lg px-4 py-3 bg-surface focus:outline-2 focus:outline-offset-2"
                  style={{ outlineColor: "#B8863E" }}
                >
                  <option>General checkup</option>
                  <option>Cosmetic consultation</option>
                  <option>Implants</option>
                  <option>Aligners</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Anything else?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-border rounded-lg px-4 py-3 bg-surface focus:outline-2 focus:outline-offset-2"
                  style={{ outlineColor: "#B8863E" }}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground"
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