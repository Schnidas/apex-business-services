import { NAV_LINKS, SITE } from "../lib/site";

const SERVICES = [
  "Website Design",
  "AI Bot Calling",
  "Custom Automation",
  "AI Ad Videos",
  "SEO & Local Search",
  "Branding & Design",
  "Paid Advertising",
  "Social Media",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-coal text-bone">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-ember">
                <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M32 13 L50 51 H41.5 L38.7 44.5 H25.3 L22.5 51 H14 Z M28.4 36.5 H35.6 L32 27.8 Z"
                    fill="#171310"
                  />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] font-bold tracking-tight text-bone">Apex</span>
                <span className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-white/40">
                  Business Services
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/50">
              The whole growth engine — design, marketing, and real AI — built
              and serviced by one team that actually picks up the phone.
            </p>
            <a href={SITE.phoneHref} className="btn-primary mt-6">
              Book a free audit call
            </a>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14px] text-white/65 transition-colors hover:text-ember-bright">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-[14px] text-white/65 transition-colors hover:text-ember-bright">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">What we do</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s} className="text-[14px] text-white/65">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[12px] text-white/40">
            © {2026} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] text-white/50">
            <a href={SITE.phoneHref} className="transition-colors hover:text-ember-bright">
              {SITE.phoneDisplay}
            </a>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <a href={SITE.emailHref} className="transition-colors hover:text-ember-bright">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
