import { SITE } from "../lib/site";

type Plan = {
  name: string;
  tag?: string;
  price: string;
  unit: string;
  then?: string;
  note: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Pay Once",
    tag: "Best long-term value",
    price: "$3,000",
    unit: "one-time",
    note: "Pay upfront and you're done — no monthly fees, ever.",
  },
  {
    name: "Low Start",
    tag: "Most popular",
    price: "$500",
    unit: "today",
    then: "+ $85 / month",
    note: "A lower upfront, then a steady monthly. The easy middle ground.",
    featured: true,
  },
  {
    name: "No Upfront",
    tag: "Lowest to start",
    price: "$0",
    unit: "to start",
    then: "$120 / month",
    note: "Nothing down. Pay monthly and cancel any time you like.",
  },
];

const INCLUDED = [
  "Custom website, designed & built",
  "Hosting, security & daily backups",
  "Constant servicing — updates, changes & additions anytime",
  "Speed & SEO foundations",
  "A direct line to a real human",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow ember-text">Simple plans</span>
          <h2 className="type-h1 mt-5 text-balance">
            One website, three ways to pay.
          </h2>
          <p className="type-lead mt-6 text-ink-dim">
            Every plan is the same build and the same always-on servicing — only
            the payment shape changes. Growth services layer on top, quoted to fit.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <article
              key={p.name}
              data-delay={i * 70}
              className={`reveal relative flex flex-col rounded-card border p-7 transition-all duration-500 ${
                p.featured
                  ? "border-ember/60 bg-coal text-bone shadow-emberglow lg:-mt-4 lg:mb-0"
                  : "border-line bg-canvas-raised hover:-translate-y-1 hover:border-ember-line hover:shadow-lift"
              }`}
            >
              {p.tag && (
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] ${
                    p.featured
                      ? "bg-ember text-coal"
                      : "border border-line-strong text-ink-dim"
                  }`}
                >
                  {p.tag}
                </span>
              )}

              <h3
                className={`mt-5 font-display text-2xl font-bold tracking-tight ${
                  p.featured ? "text-bone" : "text-ink"
                }`}
              >
                {p.name}
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight">
                  {p.price}
                </span>
                <span
                  className={`pb-2 font-mono text-[12px] uppercase tracking-widest ${
                    p.featured ? "text-white/50" : "text-slate"
                  }`}
                >
                  {p.unit}
                </span>
              </div>
              <p
                className={`mt-1 h-6 font-display text-lg font-semibold ${
                  p.featured ? "text-ember-bright" : "text-ember-deep"
                }`}
              >
                {p.then ?? ""}
              </p>

              <p
                className={`mt-3 text-[14px] leading-relaxed ${
                  p.featured ? "text-white/60" : "text-ink-dim"
                }`}
              >
                {p.note}
              </p>

              <a
                href={SITE.phoneHref}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold transition-all duration-300 ${
                  p.featured
                    ? "bg-ember text-coal hover:bg-ember-bright"
                    : "border border-ink/15 text-ink hover:border-ink/35"
                }`}
              >
                Start this plan
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Shared inclusions */}
        <div className="reveal mt-8 rounded-card border border-line bg-canvas-raised p-7 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
            <div>
              <p className="eyebrow ember-text">Every plan includes</p>
              <p className="mt-2 max-w-xs font-display text-xl font-bold tracking-tight text-ink">
                The same build. Servicing that never stops.
              </p>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-ember" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="reveal mt-5 text-center text-[13px] text-slate">
          Want AI calling, automation, ad films, ads, or social added on?{" "}
          <a href={SITE.phoneHref} className="ember-text font-semibold ember-underline">
            Call {SITE.phoneDisplay}
          </a>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
}
