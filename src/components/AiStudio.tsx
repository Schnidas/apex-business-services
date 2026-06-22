import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SITE } from "../lib/site";

/* ---------------- Visual 1 — AI voice agent waveform ---------------- */
function VoiceWave({ still }: { still: boolean }) {
  const bars = Array.from({ length: 34 });
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-coal-soft p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ember-bright">
          <span className="relative flex h-2 w-2">
            {!still && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-70" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          Live call
        </span>
        <span className="font-mono text-[11px] tracking-widest text-white/40">00:14</span>
      </div>

      <div className="mt-6 flex h-24 items-center justify-center gap-[3px]">
        {bars.map((_, i) => {
          const h = 24 + (Math.sin(i * 1.7) * 0.5 + 0.5) * 60;
          return (
            <span
              key={i}
              className="w-[3.5px] origin-bottom rounded-full bg-gradient-to-t from-ember to-ember-bright"
              style={{
                height: `${h}%`,
                animation: still ? "none" : `eq ${0.7 + (i % 5) * 0.12}s ease-in-out ${i * 0.045}s infinite`,
              }}
            />
          );
        })}
      </div>

      <div className="mt-5 space-y-2 font-mono text-[11.5px]">
        <p className="text-white/40">
          <span className="text-ember-bright">caller</span> — “Are you open Saturday?”
        </p>
        <p className="text-white/70">
          <span className="text-ember-bright">apex ai</span> — “We are, 9 to 4. Want me to book you in?”
        </p>
      </div>
    </div>
  );
}

/* ---------------- Visual 2 — automation node graph ---------------- */
function NodeFlow({ still }: { still: boolean }) {
  const nodes = [
    { x: 38, y: 40, label: "Site" },
    { x: 38, y: 122, label: "CRM" },
    { x: 38, y: 204, label: "Inbox" },
    { x: 268, y: 56, label: "Booking" },
    { x: 268, y: 140, label: "Invoice" },
    { x: 268, y: 200, label: "Texts" },
  ];
  const hub = { x: 153, y: 122 };
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-coal-soft p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember-bright">
          Automation running
        </span>
        <span className="font-mono text-[11px] tracking-widest text-white/40">24 / 7</span>
      </div>
      <svg viewBox="0 0 306 244" className="mt-2 w-full" aria-hidden="true">
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
            stroke="#EE7B47"
            strokeWidth="1.4"
            strokeDasharray="3 6"
            opacity="0.55"
            style={{ animation: still ? "none" : `flowdash ${1.4 + i * 0.2}s linear infinite` }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={`n${i}`}>
            <circle cx={n.x} cy={n.y} r="5" fill="#211B16" stroke="#EE7B47" strokeWidth="1.4" />
            <text
              x={n.x < hub.x ? n.x + 12 : n.x - 12}
              y={n.y + 3.5}
              fill="rgba(255,255,255,0.6)"
              fontSize="10"
              fontFamily="'Geist Mono', monospace"
              textAnchor={n.x < hub.x ? "start" : "end"}
            >
              {n.label}
            </text>
          </g>
        ))}
        {/* hub */}
        <circle cx={hub.x} cy={hub.y} r="22" fill="rgba(238,123,71,0.12)" />
        <circle cx={hub.x} cy={hub.y} r="13" fill="#EE7B47" />
        <text
          x={hub.x}
          y={hub.y + 3.5}
          fill="#171310"
          fontSize="9"
          fontWeight="700"
          fontFamily="'Geist Mono', monospace"
          textAnchor="middle"
        >
          APEX
        </text>
      </svg>
    </div>
  );
}

/* ---------------- Visual 3 — AI ad film reel ---------------- */
function FilmReel({ still }: { still: boolean }) {
  const frames = [
    "linear-gradient(135deg,#3a2a1f,#ee7b47)",
    "linear-gradient(135deg,#241c16,#c9551f)",
    "linear-gradient(160deg,#43321f,#ff9e6b)",
    "linear-gradient(135deg,#1d1712,#9c5a32)",
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-coal-soft p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember-bright">
          AI render · 4K
        </span>
        <span className="font-mono text-[11px] tracking-widest text-white/40">00:06</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {frames.map((g, i) => (
          <div
            key={i}
            className="relative aspect-video overflow-hidden rounded-lg"
            style={{ background: g }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />
            {!still && (
              <div
                className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                style={{ animation: `scanx ${2.6 + i * 0.25}s ease-in-out ${i * 0.3}s infinite` }}
              />
            )}
            <span className="absolute bottom-1.5 left-2 font-mono text-[8.5px] tracking-widest text-white/70">
              SC{String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Section ---------------- */
const FEATURES = [
  {
    tag: "AI · Voice",
    name: "AI Bot Calling",
    headline: "An AI that answers every call — and books the job.",
    body: "We train a voice agent on your business: your services, hours, pricing, the questions people actually ask. It picks up 24/7, sounds natural, captures the lead, and hands off to you when it matters.",
    points: [
      "Answers and places calls around the clock",
      "Knows your services, hours, and pricing",
      "Books appointments and captures every lead",
      "Transfers to a human the moment it should",
    ],
    Visual: VoiceWave,
  },
  {
    tag: "AI · Systems",
    name: "Custom Automation & Apps",
    headline: "The system your business actually needs, built to run itself.",
    body: "Need an app, an internal tool, or a workflow that ties your stack together? We build it. The repetitive work — bookings, follow-ups, invoices, data moving between tools — runs on its own while you focus on the job.",
    points: [
      "Custom web apps and internal tools",
      "Workflow and data automation",
      "Booking, CRM, and invoicing hooks",
      "Integrations across the tools you already use",
    ],
    Visual: NodeFlow,
  },
  {
    tag: "AI · Film",
    name: "Super-Realistic AI Ad Videos",
    headline: "Ad films that look impossibly real — without the film crew.",
    body: "Scroll-stopping, photoreal video ads generated with AI, at a fraction of the cost and turnaround of a production shoot. We script it, render it, and cut it for every platform you run.",
    points: [
      "Photoreal AI ad spots and product films",
      "Social-ready cuts for Reels, TikTok, and Shorts",
      "Scripting and voiceover included",
      "Revisions until it's right",
    ],
    Visual: FilmReel,
  },
];

export default function AiStudio() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="ai-studio" className="relative overflow-hidden bg-coal text-bone">
      <div className="grid-mesh-dark pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 50% 0%, rgba(238,123,71,0.16), transparent 60%)",
        }}
      />

      <div className="container-x relative py-24 sm:py-28">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-ember-bright">The Apex AI Studio</span>
          <h2 className="type-h1 mt-5 text-balance text-bone">
            Three machines that work while you sleep.
          </h2>
          <p className="type-lead mt-6 text-white/60">
            This is what sets Apex apart. Beyond a great website, we put real AI
            to work inside your business — answering calls, running operations,
            and producing ads that stop the scroll.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          {FEATURES.map((f, i) => {
            const Visual = f.Visual;
            const flip = i % 2 === 1;
            return (
              <article
                key={f.name}
                className="reveal panel-dark grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-2 lg:gap-12"
                data-delay={i * 60}
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <span className="inline-flex rounded-full border border-ember/30 bg-ember/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ember-bright">
                    {f.tag}
                  </span>
                  <h3 className="mt-5 font-display text-[1.7rem] font-bold leading-[1.04] tracking-tight text-bone sm:text-[2rem]">
                    {f.headline}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/60">{f.body}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-white/75">
                        <Check />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SITE.phoneHref}
                    className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ember-bright transition-colors hover:text-bone"
                  >
                    Get this set up <Arrow />
                  </a>
                </div>
                <div className={flip ? "lg:order-1" : ""}>
                  <Visual still={reduced} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-ember" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
