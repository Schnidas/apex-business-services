import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "../lib/site";

type Status = "idle" | "sending" | "done" | "error";

const SERVICES = [
  "A new website",
  "AI bot calling",
  "Custom automation / app",
  "AI ad videos",
  "SEO & local search",
  "Ads & social media",
  "Branding & design",
  "Not sure — help me figure it out",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    setStatus("sending");

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, _source: "apexbusinessservices.com" }),
        });
        if (!res.ok) throw new Error("bad status");
      } else {
        // No endpoint configured yet — hand off to the visitor's email client.
        const body = encodeURIComponent(
          `Name: ${data.name || ""}\nBusiness: ${data.business || ""}\nPhone: ${data.phone || ""}\nEmail: ${data.email || ""}\nInterested in: ${data.service || ""}\n\n${data.message || ""}`
        );
        window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(
          "New inquiry from the Apex website"
        )}&body=${body}`;
      }
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-coal py-24 text-bone sm:py-28">
      <div className="grid-mesh-dark pointer-events-none absolute inset-0 opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(238,123,71,0.2), transparent 60%)",
        }}
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — invitation + direct lines */}
        <div className="reveal">
          <span className="eyebrow text-ember-bright">Let's talk</span>
          <h2 className="type-h1 mt-5 text-balance text-bone">
            Ready to grow? Let's build your engine.
          </h2>
          <p className="type-lead mt-6 max-w-md text-white/60">
            Book a free, no-pressure audit call. We'll look at where you're
            losing customers and show you exactly what we'd do about it.
          </p>

          <div className="mt-9 space-y-3">
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-ember/50 hover:bg-white/[0.06]"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-ember text-coal">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
                  Call anytime
                </span>
                <span className="block font-display text-xl font-bold text-bone">
                  {SITE.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={SITE.emailHref}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-ember/50 hover:bg-white/[0.06]"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-white/10 text-ember-bright">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 6h18v12H3zM3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
                  Email
                </span>
                <span className="block font-display text-lg font-bold text-bone break-all">
                  {SITE.email}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right — lead form */}
        <div className="reveal">
          {status === "done" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-start justify-center rounded-card border border-ember/40 bg-white/[0.04] p-8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-ember text-coal">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M4 12.5l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-bone">You're in. Talk soon.</h3>
              <p className="mt-2 text-[15px] text-white/60">
                Thanks for reaching out — we'll get back to you fast. Need an
                answer now? Call {SITE.phoneDisplay}.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-card border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Your name" placeholder="Jordan Smith" required />
                <Field name="business" label="Business" placeholder="Smith Plumbing" />
                <Field name="phone" type="tel" label="Phone" placeholder="(425) 555-0123" />
                <Field name="email" type="email" label="Email" placeholder="you@business.com" />
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                  What do you need?
                </span>
                <select
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-white/12 bg-coal-soft px-4 py-3 text-[15px] text-bone outline-none transition-colors focus:border-ember"
                >
                  <option value="" disabled>Choose one…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                  Anything else? <span className="text-white/25">(optional)</span>
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a little about your business and goals…"
                  className="w-full resize-none rounded-xl border border-white/12 bg-coal-soft px-4 py-3 text-[15px] text-bone placeholder:text-white/25 outline-none transition-colors focus:border-ember"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full justify-center disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send & get my free audit"}
              </button>

              {status === "error" && (
                <p className="mt-3 text-center text-[13px] text-ember-bright">
                  Something went wrong — please call {SITE.phoneDisplay} and we'll sort it out.
                </p>
              )}
              <p className="mt-3 text-center text-[12px] text-white/35">
                No spam, ever. We'll only use this to get back to you.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
        {label} {required && <span className="text-ember-bright">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/12 bg-coal-soft px-4 py-3 text-[15px] text-bone placeholder:text-white/25 outline-none transition-colors focus:border-ember"
      />
    </label>
  );
}
