import type { ReactNode } from "react";

type Service = {
  title: string;
  blurb: string;
  points: string[];
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Website Design & Development",
    blurb: "A fast, modern site built to turn visitors into customers.",
    points: [
      "Custom responsive websites",
      "WordPress & Shopify builds",
      "Landing pages & e-commerce",
      "Mobile-first, UI/UX tuned",
    ],
    icon: (
      <path d="M3 5h18v14H3zM3 9h18M7 13h6M7 16h4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Hosting & Maintenance",
    blurb: "Your site stays fast, secure, and online — we handle it.",
    points: [
      "Managed cloud hosting",
      "Daily backups & security",
      "Speed optimization, SSL",
      "Monthly updates & patches",
    ],
    icon: (
      <path d="M4 5h16v5H4zM4 14h16v5H4zM7.5 7.5h.01M7.5 16.5h.01M12 7.5h5M12 16.5h5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "SEO & Local Search",
    blurb: "Get found first when nearby customers search for you.",
    points: [
      "Google Business optimization",
      "On-page & technical SEO",
      "Local citations & keywords",
      "Monthly ranking reports",
    ],
    icon: (
      <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM16 16l4 4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Branding & Design",
    blurb: "A look people remember — consistent everywhere you show up.",
    points: [
      "Logo & brand identity",
      "Stationery & style guides",
      "Marketing collateral",
      "Vehicle & signage wraps",
    ],
    icon: (
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.8-1.5-.8-2.4c0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8zM7.5 12h.01M10 8h.01M14.5 8h.01" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Paid Advertising",
    blurb: "Ad budgets that bring back more than they spend.",
    points: [
      "Google Ads management",
      "Facebook & Instagram ads",
      "Retargeting & ad creative",
      "Budget & performance reports",
    ],
    icon: (
      <path d="M3 11l16-6v14L3 13zM3 11v2M8 12.5V18l3 1v-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Social Media & Marketing",
    blurb: "Always-on presence that keeps your brand top of mind.",
    points: [
      "Content creation & scheduling",
      "Platform & community management",
      "Email marketing campaigns",
      "Analytics & reputation",
    ],
    icon: (
      <path d="M7 9h10a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-2l-4 3v-3H7a3 3 0 0 1-3-3 3 3 0 0 1 3-3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      <div className="grid-mesh pointer-events-none absolute inset-0 opacity-50" />

      <div className="container-x relative">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow ember-text">The full stack</span>
            <h2 className="type-h1 mt-5 text-balance">The rest of your growth engine.</h2>
          </div>
          <p className="type-body max-w-sm text-ink-dim">
            Everything a growing business needs under one roof — and every plan
            includes ongoing servicing, so it stays handled.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-delay={(i % 3) * 70}
              className="reveal group relative overflow-hidden rounded-card border border-line bg-canvas-raised p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember-line hover:shadow-lift"
            >
              {/* hover accent line */}
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-ember to-ember-bright transition-transform duration-500 group-hover:scale-x-100" />

              <span className="grid h-12 w-12 place-items-center rounded-xl bg-coal text-ember-bright transition-colors duration-500 group-hover:bg-ember group-hover:text-coal">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {s.icon}
                </svg>
              </span>

              <h3 className="type-h3 mt-6">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-dim">{s.blurb}</p>

              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-ink">
                    <span className="h-1.5 w-1.5 flex-none rotate-45 bg-ember" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
