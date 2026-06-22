import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "../lib/site";

const FAQS = [
  {
    q: "How fast can my website go live?",
    a: "Most sites launch within a couple of weeks, depending on how much content and how many pages you need. We'll give you a clear timeline on the first call.",
  },
  {
    q: "What does “always-on servicing” actually mean?",
    a: "It means updates, changes, and additions whenever you need them — new pages, fresh photos, price changes, seasonal promos — included on every plan. Your site keeps evolving with your business at no surprise cost.",
  },
  {
    q: "How does the AI phone agent work?",
    a: "We train a voice agent on your business — your services, hours, pricing, and the questions people actually ask. It answers calls 24/7, books appointments, captures leads, and hands off to you when a call needs a human.",
  },
  {
    q: "Can the AI ad videos really look real?",
    a: "Yes. We produce photoreal video ads with the latest AI tools, then script, edit, and cut them for each platform you run — at a fraction of the cost and time of a film crew. We revise until you're happy with the result.",
  },
  {
    q: "Do I own my website?",
    a: "Your brand, content, and domain are always yours. On the Pay Once plan there are no ongoing fees at all; on the monthly plans, hosting and servicing continue as long as you'd like them to.",
  },
  {
    q: "Can I cancel?",
    a: "The monthly plans are month-to-month — cancel any time. There's no long contract and no lock-in.",
  },
  {
    q: "What does it cost to add ads, SEO, or the AI services?",
    a: `Those layer on top of any website plan and are quoted to fit your goals and budget — there's no one-size-fits-all number. Call ${SITE.phoneDisplay} and we'll put together a plan that makes sense.`,
  },
];

function Item({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="reveal border-b border-line">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[18px] font-semibold tracking-tight text-ink sm:text-[20px]">
          {q}
        </span>
        <span
          className={`grid h-8 w-8 flex-none place-items-center rounded-full border transition-all duration-300 ${
            open ? "rotate-45 border-ember bg-ember text-coal" : "border-line-strong text-ink-dim"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-dim">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow ember-text">Questions</span>
          <h2 className="type-h1 mt-5 text-balance">Good to know.</h2>
          <p className="type-body mt-6 max-w-sm text-ink-dim">
            Still wondering something? The fastest answer is a quick call —{" "}
            <a href={SITE.phoneHref} className="ember-text font-semibold ember-underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <div>
          {FAQS.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
