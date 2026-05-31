import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Clock, Sparkles, Check } from "lucide-react";
import { SiteShell, Section, Eyebrow } from "@/components/site/SiteShell";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mindful Practice — CBT, Time Management & Beating Procrastination" },
      { name: "description", content: "Online CBT consultations, a practical time-management guide, and a mentorship program to help you beat procrastination — for good." },
      { property: "og:title", content: "Mindful Practice" },
      { property: "og:description", content: "Evidence-based coaching and CBT to help you focus, finish, and feel better." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: BrainCircuit, title: "Online CBT Consultations", desc: "1:1 evidence-based sessions for anxiety, low mood, and unhelpful thought patterns." },
  { icon: Clock, title: "Time Management Guide", desc: "A practical downloadable guide to plan your week and reclaim deep focus." },
  { icon: Sparkles, title: "Beat Procrastination Program", desc: "8-week mentorship to build the systems and identity of someone who follows through." },
];

const testimonials = [
  { quote: "Three sessions in and I finally understand the patterns I've been stuck in for years. Calm, structured, genuinely warm.", name: "Layla R.", role: "Marketing Lead" },
  { quote: "The procrastination program rewired how I start my day. I shipped a project that sat untouched for 8 months.", name: "Omar K.", role: "Software Engineer" },
  { quote: "The guide is the only planning system that actually stuck. Worth ten times the price.", name: "Sara M.", role: "Product Designer" },
];

const faqs = [
  { q: "Are sessions confidential?", a: "Yes. Everything discussed in session is strictly confidential, in line with professional ethical guidelines." },
  { q: "Do you work with clients internationally?", a: "Yes — sessions are held online over secure video and I work with clients across multiple time zones." },
  { q: "Is CBT right for me?", a: "CBT is well-evidenced for anxiety, low mood, stress, sleep, perfectionism, and procrastination. We'll explore fit in your first call." },
  { q: "How do I pay?", a: "I accept credit card, bank transfer, Whish, OMT, and Western Union. Full details on the payment page." },
];

function Index() {
  return (
    <SiteShell>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
          <div>
            <Eyebrow>CBT · Coaching · Mentorship</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-6xl">
              Quiet the noise. <br />
              <span className="italic text-accent">Do the work that matters.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Evidence-based CBT consultations and practical coaching to help you focus, finish, and feel better — without burning yourself out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a free intro call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/guide"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Read about the guide
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Licensed CBT Practice</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>200+ Clients Helped</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img src={heroImg} alt="Calm consultation space" className="h-full w-full object-cover" width={1600} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-soft)] md:block">
              <div className="text-2xl font-serif">8 weeks</div>
              <div className="text-xs text-muted-foreground">to a procrastination-free routine</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>What I offer</Eyebrow>
          <h2 className="mt-3 text-4xl md:text-5xl">Three ways to work together</h2>
          <p className="mt-4 text-muted-foreground">Pick the level of support that fits where you are right now.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
            See full services & pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <div className="bg-secondary/50">
        <Section>
          <Eyebrow>Client stories</Eyebrow>
          <h2 className="mt-3 text-4xl md:text-5xl">Small shifts. Real changes.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-background p-8">
                <blockquote className="font-serif text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-4xl">Questions, answered</h2>
            <p className="mt-4 text-muted-foreground">Still unsure? Send a message — I reply within one working day.</p>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-medium">
                  {f.q}
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-4xl md:text-5xl">Ready to start? Let's have a conversation.</h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/75">Book a free 15-minute intro call — no pressure, no commitment.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
              Book intro call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              Explore services
            </Link>
          </div>
          <ul className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            {["Confidential", "Online & flexible", "Evidence-based"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4" /> {t}</li>
            ))}
          </ul>
        </div>
      </Section>
    </SiteShell>
  );
}
