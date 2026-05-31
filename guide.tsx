import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Download } from "lucide-react";
import { SiteShell, Section, Eyebrow } from "@/components/site/SiteShell";
import guideCover from "@/assets/guide-cover.jpg";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "The Time Management Guide — Mindful Practice" },
      { name: "description", content: "A practical 75-page guide to designing a week that actually fits how your brain works. Instant PDF download." },
      { property: "og:title", content: "The Time Management Guide" },
      { property: "og:description", content: "75 pages. Real systems. Lifetime updates. $29 instant download." },
      { property: "og:image", content: "/og-guide.jpg" },
    ],
  }),
  component: GuidePage,
});

const learnings = [
  "Design your week around energy, not just hours",
  "The 3-tier task system that ends overwhelm",
  "How to make hard work feel obvious to start",
  "Build a deep-work block that actually holds",
  "End-of-day shutdown ritual (so you stop ruminating)",
  "Weekly review template — 15 minutes, every Friday",
];

const outcomes = [
  "Finish what you start — without sacrificing evenings",
  "Stop confusing being busy with being effective",
  "Reclaim 8–12 hours of deep focus per week",
  "Feel calmer about your to-do list, not heavier",
];

const testimonials = [
  { quote: "I've bought every productivity book. This is the only one I still open every Sunday.", name: "Yara H." },
  { quote: "Tactical, kind, and short enough to actually finish. My team did it together.", name: "Karim D." },
];

function GuidePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <div style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-[1fr_1fr] md:pb-24 md:pt-24">
          <div className="order-2 md:order-1">
            <Eyebrow>The Guide</Eyebrow>
            <h1 className="mt-3 font-serif text-5xl leading-[1.05] md:text-6xl">
              A week that finally <span className="italic text-accent">works for you</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              A 75-page practical guide to time management, focus, and follow-through — built from years of CBT-informed coaching with real clients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl">$29</span>
                <span className="text-sm text-muted-foreground line-through">$49</span>
              </div>
              <Link to="/payment" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Buy now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Instant download · Lifetime updates · 14-day refund if it's not for you.</p>
          </div>
          <div className="order-1 md:order-2">
            <div className="mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img src={guideCover} alt="The Time Management Guide cover" className="h-full w-full object-cover" width={1200} height={1500} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* What you'll learn */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>What you'll learn</Eyebrow>
            <h2 className="mt-3 text-4xl">Six chapters. Zero filler.</h2>
            <p className="mt-4 text-muted-foreground">Each chapter is short, practical, and ends with an exercise you can do in under 20 minutes.</p>
          </div>
          <ul className="space-y-4">
            {learnings.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-none text-accent" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Outcomes */}
      <div className="bg-secondary/50">
        <Section>
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className="mt-3 text-4xl">What changes after week one.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {outcomes.map((o) => (
              <div key={o} className="rounded-2xl border border-border bg-background p-6">
                <p className="font-serif text-xl leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Testimonials */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <blockquote className="font-serif text-xl leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Pricing + buy */}
      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground">
          <div className="grid items-center gap-8 p-10 md:grid-cols-[2fr_1fr] md:p-14">
            <div>
              <Eyebrow>One simple price</Eyebrow>
              <h2 className="mt-3 text-4xl md:text-5xl">$29 · Instant PDF download</h2>
              <p className="mt-4 max-w-lg text-primary-foreground/80">Pay by credit card, bank transfer, Whish, OMT, or Western Union. You'll receive your guide by email as soon as payment is confirmed.</p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
                {["75-page PDF + templates", "Lifetime updates", "14-day refund"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/payment" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
                <Download className="h-4 w-4" /> Buy now — $29
              </Link>
              <Link to="/contact" className="text-center text-xs text-primary-foreground/70 underline-offset-4 hover:underline">Have a question first?</Link>
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}