import { SITE } from "../lib/site";

const REASONS = [
  {
    title: "One team, the whole engine",
    body: "Website, branding, SEO, ads, social, and AI — all under one roof. No juggling five different vendors who don't talk to each other.",
  },
  {
    title: "Always-on servicing, included",
    body: "Updates, changes, and additions anytime, on every plan. Your site is never “finished and forgotten.”",
  },
  {
    title: "A real AI advantage",
    body: "Voice agents that answer your phone, automation that runs operations, and photoreal ad films — things most agencies simply can't offer.",
  },
  {
    title: "No lock-in",
    body: "Pay once, or go month-to-month and cancel any time. You're here because it works, not because you're trapped.",
  },
  {
    title: "Built to convert",
    body: "Every page is designed to turn visitors into calls and customers — not just to look pretty in a portfolio.",
  },
];

export default function WhyApex() {
  return (
    <section className="relative overflow-hidden bg-coal py-24 text-bone sm:py-28">
      <div className="grid-mesh-dark pointer-events-none absolute inset-0 opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 100% 0%, rgba(238,123,71,0.14), transparent 55%)",
        }}
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow text-ember-bright">Why Apex</span>
          <h2 className="type-h1 mt-5 text-balance text-bone">
            Most agencies hand you a website. We hand you a system that runs.
          </h2>
          <p className="type-body mt-6 max-w-md text-white/55">
            We're a small studio that pairs real design and marketing with real
            AI — so your business looks sharp and runs itself at the same time.
          </p>
          <a href={SITE.phoneHref} className="btn-primary mt-8">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            Talk to a human — {SITE.phoneDisplay}
          </a>
        </div>

        <ol className="flex flex-col">
          {REASONS.map((r, i) => (
            <li
              key={r.title}
              data-delay={i * 50}
              className="reveal flex gap-5 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
            >
              <span className="font-mono text-[13px] font-medium tracking-widest text-ember-bright">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-bone">
                  {r.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
