import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell, Section, Eyebrow } from "@/components/site/SiteShell";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mindful Practice" },
      { name: "description", content: "About the practice — credentials, training, and how I work with clients on CBT, time management, and procrastination." },
      { property: "og:title", content: "About — Mindful Practice" },
      { property: "og:description", content: "Trained in CBT, 10+ years of practice. Warm, structured, evidence-based." },
    ],
  }),
  component: AboutPage,
});

const credentials = [
  "MSc Clinical Psychology",
  "Accredited CBT Practitioner",
  "10+ years in clinical & coaching practice",
  "Member, International CBT Association",
];

function AboutPage() {
  return (
    <SiteShell>
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-3 font-serif text-5xl leading-[1.05] md:text-6xl">Practical, evidence-based — and warm.</h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>I'm an accredited CBT practitioner and time-management coach. For the past decade I've worked with high-functioning professionals — engineers, designers, founders, doctors — who outwardly look fine but feel stuck, scattered, or quietly burning out.</p>
              <p>My approach blends two things that don't always meet: the rigour of cognitive behavioural therapy, and the practicality of operator-grade time management. The goal is never just "feel better." It's: build a week, and a relationship with your mind, that you can actually live with.</p>
              <p>Outside of practice I write, mentor early-career therapists, and walk a small but enthusiastic dog.</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Training & Credentials</h3>
              <ul className="mt-4 grid gap-2 text-sm">
                {credentials.map((c) => (
                  <li key={c} className="border-l-2 border-accent pl-3">{c}</li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Book a free intro call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img src={portrait} alt="Portrait" className="h-full w-full object-cover" width={1200} height={1500} loading="lazy" />
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}