import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "../lib/site";

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-[11px] bg-coal">
        <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden="true">
          <path
            d="M32 13 L50 51 H41.5 L38.7 44.5 H25.3 L22.5 51 H14 Z M28.4 36.5 H35.6 L32 27.8 Z"
            fill="#EE7B47"
          />
        </svg>
        <span className="absolute -inset-px rounded-[11px] ring-1 ring-ember/0 transition group-hover:ring-ember/40" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold tracking-tight text-ink">Apex</span>
        <span className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-slate">
          Business Services
        </span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[68px] items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-dim transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a href={SITE.phoneHref} className="btn-primary hidden h-[42px] !px-5 !py-0 sm:inline-flex">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {SITE.phoneDisplay}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-line-strong text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-4">
              <span className={`absolute left-0 block h-0.5 w-4 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-ink transition-all ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-4 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink-dim transition-colors hover:bg-canvas-deep hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a href={SITE.phoneHref} className="btn-primary mt-2 justify-center">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
