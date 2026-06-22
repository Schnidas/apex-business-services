import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SITE } from "../lib/site";

type Msg = { from: "ai" | "user"; text: string };

const QA: { q: string; a: string }[] = [
  {
    q: "What does Apex do?",
    a: "We're a full-service studio: websites, branding, SEO, ads, and social — plus AI that answers your phone, custom automation, and photoreal AI ad videos. One team for all of it.",
  },
  {
    q: "How much is a website?",
    a: "Three ways to pay: $3,000 once with no monthly fees, $500 + $85/mo, or $0 down + $120/mo. Every plan includes always-on servicing.",
  },
  {
    q: "Tell me about AI phone calling",
    a: "We train a voice agent on your business so it answers calls 24/7, books jobs, and captures leads — then hands off to a human when needed. Basically a smarter version of me, on your phone line.",
  },
  {
    q: "Can you make AI ad videos?",
    a: "Yes — photoreal video ads, scripted and cut for Reels, TikTok, and Shorts, at a fraction of the cost of a film crew.",
  },
  {
    q: "How do I get started?",
    a: `Easiest is a quick call: ${SITE.phoneDisplay}. Or fill out the form and we'll reach out. It's a free audit, no pressure.`,
  },
];

export default function ChatWidget() {
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "ai", text: "Hey! I'm Apex AI — a quick demo of the assistants we build. Ask me anything 👇" },
  ]);
  const [asked, setAsked] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [msgs, typing, reduced]);

  const remaining = QA.filter((x) => !asked.includes(x.q));

  function ask(item: { q: string; a: string }) {
    setMsgs((m) => [...m, { from: "user", text: item.q }]);
    setAsked((a) => [...a, item.q]);
    setTyping(true);
    const delay = reduced ? 120 : 650;
    window.setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "ai", text: item.a }]);
    }, delay);
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[80] flex items-center gap-2.5 rounded-full bg-ember py-3 pl-3.5 pr-5 text-coal shadow-emberglow"
        whileHover={{ scale: reduced ? 1 : 1.04 }}
        whileTap={{ scale: 0.97 }}
        aria-label={open ? "Close Apex AI chat" : "Open Apex AI chat"}
      >
        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-coal text-ember-bright">
          {!reduced && !open && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coal opacity-40" />
          )}
          <svg viewBox="0 0 24 24" className="relative h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="font-semibold text-[14px]">{open ? "Close" : "Ask Apex AI"}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[86px] right-5 z-[80] flex max-h-[70vh] w-[min(370px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[22px] border border-line-strong bg-bone shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-coal px-5 py-4 text-bone">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ember text-coal font-display font-extrabold">
                A
              </span>
              <div className="leading-tight">
                <div className="flex items-center gap-2 font-semibold">
                  Apex AI
                  <span className="flex items-center gap-1 font-mono text-[10px] font-normal uppercase tracking-widest text-ember-bright">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember-bright" /> online
                  </span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                  Live demo assistant
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-snug ${
                      m.from === "user"
                        ? "rounded-br-md bg-ember text-coal"
                        : "rounded-bl-md bg-canvas-deep text-ink"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-canvas-deep px-3.5 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-slate"
                        style={{ animation: `eq 0.9s ease-in-out ${d * 0.15}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Suggested questions */}
            {remaining.length > 0 && (
              <div className="flex flex-wrap gap-1.5 border-t border-line px-4 py-3">
                {remaining.slice(0, 3).map((item) => (
                  <button
                    key={item.q}
                    onClick={() => ask(item)}
                    className="rounded-full border border-line-strong bg-canvas-raised px-3 py-1.5 text-[12px] font-medium text-ink-dim transition-colors hover:border-ember hover:text-ink"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            )}

            {/* Call CTA */}
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 bg-ember py-3.5 text-[14px] font-semibold text-coal transition-colors hover:bg-ember-bright"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              Talk to a human — {SITE.phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
