import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { SiteShell, Section, Eyebrow } from "@/components/site/SiteShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Mindful Practice" },
      { name: "description", content: "Online CBT consultations, the time-management guide, and the beat-procrastination mentorship program. Transparent pricing and easy booking." },
      { property: "og:title", content: "Services & Pricing — Mindful Practice" },
      { property: "og:description", content: "Three ways to work with me — CBT consultations, the time-management guide, and the procrastination program." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Online CBT Consultation",
    price: "$90",
    unit: "per 50-min session",
    desc: "1:1 evidence-based cognitive behavioural therapy held online over secure video.",
    benefits: ["Personalised treatment plan", "Practical between-session work", "Tools you can use for life", "Available evenings & weekends"],
  },
  {
    title: "Time Management Guide",
    price: "$29",
    unit: "instant PDF download",
    desc: "A clear, practical guide to designing a week that actually fits how your brain works.",
    benefits: ["75-page workbook", "Weekly & daily templates", "The focus-block system", "Lifetime updates"],
    href: "/guide",
    ctaLabel: "View guide",
  },
  {
    title: "Beat Procrastination Program",
    price: "$480",
    unit: "8-week mentorship",
    desc: "A structured program combining weekly coaching, written feedback, and a private accountability rhythm.",
    benefits: ["8 × 50-min coaching calls", "Async support between sessions", "Custom systems for your work", "Lifetime alumni community"],
    featured: true,
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <Section className="pb-10">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">Pick the kind of support you need.</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">Clear pricing. No long-term commitments. Cancel or pause anytime.</p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`flex flex-col rounded-2xl border p-8 ${
                s.featured
                  ? "border-accent bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
                  : "border-border bg-card"
              }`}
            >
              <h2 className="font-serif text-2xl">{s.title}</h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-4xl">{s.price}</span>
                <span className={`text-sm ${s.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{s.unit}</span>
              </div>
              <p className={`mt-4 text-sm ${s.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 flex-none ${s.featured ? "text-accent" : "text-accent"}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to={s.href ?? "/contact"}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                    s.featured
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {s.ctaLabel ?? "Book now"} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-secondary/50">
        <Section>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Inquiry</Eyebrow>
              <h2 className="mt-3 text-4xl">Not sure which one fits?</h2>
              <p className="mt-4 text-muted-foreground">
                Tell me a little about what's going on. I'll reply within one working day with a recommendation — no pressure, no upsell.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {["Confidential and judgement-free", "Reply within 1 working day", "No commitment until you book"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {t}</li>
                ))}
              </ul>
            </div>
            <InquiryForm />
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}

function InquiryForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="rounded-2xl border border-border bg-background p-6 md:p-8"
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
          <h3 className="mt-4 font-serif text-2xl">Thank you</h3>
          <p className="mt-2 text-sm text-muted-foreground">I'll be in touch within one working day.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          <Field label="Your name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="mb-1 block text-sm font-medium">I'm interested in</label>
            <select required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">Select a service…</option>
              <option>CBT Consultations</option>
              <option>Time Management Guide</option>
              <option>Beat Procrastination Program</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">A few words about what's going on</label>
            <textarea rows={4} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Send inquiry <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}