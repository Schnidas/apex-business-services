import { SITE } from "../lib/site";

const STEPS = [
  {
    n: "01",
    title: "Free audit call",
    body: "We learn your business, your goals, and exactly where you're leaking customers today.",
  },
  {
    n: "02",
    title: "Plan & build",
    body: "We design the site, branding, and the AI and automation that fit — then build it fast.",
  },
  {
    n: "03",
    title: "Launch & automate",
    body: "We ship it live, point your phone at the AI agent, and put the busywork on autopilot.",
  },
  {
    n: "04",
    title: "Grow & service",
    body: "We run ads, SEO, and social — and keep refining everything. Servicing never stops.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-canvas-deep py-24 sm:py-28">
      <div className="container-x relative">
        <div className="reveal max-w-2xl">
          <span className="eyebrow ember-text">How it works</span>
          <h2 className="type-h1 mt-5 text-balance">From first call to fully automated.</h2>
          <p className="type-lead mt-6 text-ink-dim">
            A clear path, no jargon. Most businesses are live within weeks — and
            improving from there.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting current */}
          <span
            className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px md:left-0 md:right-0 md:top-[7px] md:h-px md:w-auto md:bottom-auto"
            style={{
              background:
                "linear-gradient(var(--dir,180deg), rgba(238,123,71,0.1), rgba(238,123,71,0.55), rgba(238,123,71,0.1))",
            }}
          />
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              data-delay={i * 80}
              className="reveal relative pl-8 md:pl-0 md:pt-8"
            >
              <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-ember bg-canvas-deep md:top-0" />
              <span className="font-mono text-[13px] font-medium tracking-[0.2em] text-ember">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-dim">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-14">
          <a href={SITE.phoneHref} className="btn-primary">
            Start with a free audit call
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
