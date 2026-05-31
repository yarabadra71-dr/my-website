import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Mail, Instagram, Linkedin } from "lucide-react";
import { SiteShell, Section, Eyebrow } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mindful Practice" },
      { name: "description", content: "Get in touch to book a free 15-minute intro call, or ask a question about services and the guide." },
      { property: "og:title", content: "Contact — Mindful Practice" },
      { property: "og:description", content: "Book a free 15-minute intro call. I reply within one working day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">Let's talk.</h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Send a message and I'll reply within one working day. Or book a free 15-minute intro call — no pressure, no commitment.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <a href="mailto:hello@yourdomain.com" className="flex items-center gap-3 text-foreground hover:text-accent">
                <Mail className="h-4 w-4" /> hello@yourdomain.com
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent">
                <Instagram className="h-4 w-4" /> @mindful.practice
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent">
                <Linkedin className="h-4 w-4" /> Mindful Practice
              </a>
            </div>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-2xl">Message received</h3>
                <p className="mt-2 text-sm text-muted-foreground">I'll reply within one working day.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Your name</label>
                  <input required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input required type="email" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Message</label>
                  <textarea rows={5} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </Section>
    </SiteShell>
  );
}