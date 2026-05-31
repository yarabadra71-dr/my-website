import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, Building2, Smartphone, Send, Globe2, Copy, Check } from "lucide-react";
import { useState, type ReactNode } from "react";
import { SiteShell, Section, Eyebrow } from "@/components/site/SiteShell";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment Instructions — Mindful Practice" },
      { name: "description", content: "Pay by credit card, bank transfer, Whish, OMT, or Western Union. Instructions and account details for each method." },
      { property: "og:title", content: "Payment Instructions" },
      { property: "og:description", content: "Multiple ways to pay — credit card, bank, Whish, OMT, Western Union." },
    ],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  return (
    <SiteShell>
      <Section className="pb-10">
        <Eyebrow>Payment</Eyebrow>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">Choose how you'd like to pay.</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Five secure options. Once you've paid, send me the receipt at <a href="mailto:hello@yourdomain.com" className="text-accent underline-offset-4 hover:underline">hello@yourdomain.com</a> and I'll send your guide / book your session within one working day.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Method icon={CreditCard} title="Credit / Debit Card" badge="Recommended">
            <p>Pay securely with any major card via the link below. Funds go directly to my bank.</p>
            <a href="mailto:hello@yourdomain.com?subject=Card%20payment%20link" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Request payment link
            </a>
            <p className="mt-3 text-xs text-muted-foreground">A secure checkout link will be emailed to you within minutes.</p>
          </Method>

          <Method icon={Building2} title="Bank Transfer">
            <Row label="Account name" value="[Your full name]" />
            <Row label="Bank" value="[Your bank name]" />
            <Row label="IBAN" value="LB00 0000 0000 0000 0000 0000 0000" />
            <Row label="SWIFT / BIC" value="XXXXLBBE" />
          </Method>

          <Method icon={Smartphone} title="Whish Money">
            <Row label="Phone number" value="+961 00 000 000" />
            <Row label="Name" value="[Your full name]" />
            <p className="mt-3 text-xs text-muted-foreground">Send via the Whish Money app, then forward the confirmation screenshot.</p>
          </Method>

          <Method icon={Send} title="OMT">
            <Row label="Recipient name" value="[Your full name]" />
            <Row label="Phone" value="+961 00 000 000" />
            <Row label="ID number" value="[Your ID number]" />
            <p className="mt-3 text-xs text-muted-foreground">Bring this info to any OMT branch and share the OMT receipt number with me.</p>
          </Method>

          <Method icon={Globe2} title="Western Union">
            <Row label="Recipient name" value="[Your full name]" />
            <Row label="City / Country" value="[City, Country]" />
            <Row label="Phone" value="+961 00 000 000" />
            <p className="mt-3 text-xs text-muted-foreground">After sending, email me the MTCN (10-digit tracking number) to confirm.</p>
          </Method>

          <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-8">
            <h3 className="font-serif text-2xl">Need help?</h3>
            <p className="mt-3 text-sm text-muted-foreground">Any questions about payment? Send a message and I'll walk you through it.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}

function Method({
  icon: Icon,
  title,
  badge,
  children,
}: {
  icon: typeof CreditCard;
  title: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-8">
      <div className="flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-5 w-5" />
        </div>
        {badge && (
          <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">{badge}</span>
        )}
      </div>
      <h3 className="mt-5 font-serif text-2xl">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-muted-foreground">{children}</div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 rounded-md bg-secondary/60 px-3 py-2">
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate font-mono text-sm text-foreground">{value}</div>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="flex h-8 w-8 flex-none items-center justify-center rounded-md text-muted-foreground hover:bg-background hover:text-foreground"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}