import { motion } from "framer-motion";
import EngineCore from "./EngineCore";
import { SITE } from "../lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

const ORBIT = [
  { label: "Websites", x: "6%", y: "16%" },
  { label: "AI Calling", x: "78%", y: "9%" },
  { label: "SEO", x: "90%", y: "54%" },
  { label: "Ad Films", x: "70%", y: "88%" },
  { label: "Automation", x: "8%", y: "78%" },
  { label: "Branding", x: "-2%", y: "48%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[68px]"
      aria-label="Introduction"
    >
      {/* Instrument-panel mesh + warm wash */}
      <div className="grid-mesh pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 82% 12%, rgba(238,123,71,0.16), transparent 52%), radial-gradient(90% 70% at 0% 100%, rgba(238,123,71,0.07), transparent 60%)",
        }}
      />

      <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/50 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="eyebrow text-ink-dim">{SITE.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease }}
            className="type-mega mt-6 text-balance"
          >
            Everything your business needs to{" "}
            <span className="ember-text">get found, get calls, and grow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease }}
            className="type-lead mt-7 max-w-xl text-pretty"
          >
            One team for your website, branding, SEO, ads, and social — wired to
            an AI that answers your phone, automations that handle the busywork,
            and ad films that look impossibly real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.44, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href={SITE.phoneHref} className="btn-primary">
              Book a free audit call
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#ai-studio" className="btn-ghost">Explore what we build</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.16em] text-slate"
          >
            <span className="flex items-center gap-2"><Dot /> Always-on servicing</span>
            <span className="flex items-center gap-2"><Dot /> No lock-in</span>
            <span className="flex items-center gap-2"><Dot /> Humans + AI</span>
          </motion.div>
        </div>

        {/* Engine visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="relative mx-auto aspect-square w-full max-w-[460px] lg:max-w-none"
        >
          <EngineCore />
          {ORBIT.map((o, i) => (
            <motion.span
              key={o.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.08, ease }}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line-strong bg-white/70 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-dim shadow-sm backdrop-blur-sm animate-drift"
              style={{ left: o.x, top: o.y, animationDelay: `${i * 0.6}s` }}
            >
              {o.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Soft seam into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />;
}
