# Apex Business Services

Marketing site for **Apex Business Services** — a full-service digital & AI growth
studio. Built as a single-page experience with a soft orange + warm grey palette,
a signature animated "current," and a dramatic AI "engine room."

**Live:** https://apex-business-services.vercel.app

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (custom token system in `tailwind.config.ts` + `src/index.css`)
- Framer Motion (loader, accordion, chat widget, reveals) + GSAP available
- Zero binary assets — all visuals are canvas / SVG / CSS

## Run it

```bash
npm install
npm run dev      # local dev (http://localhost:5180)
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Where things live

| Section | File |
|---|---|
| Sticky nav + mobile menu | `src/components/Nav.tsx` |
| Hero + animated reactor | `src/components/Hero.tsx`, `EngineCore.tsx` |
| Scroll "current" spine | `src/components/CurrentRail.tsx` |
| Power-on loader | `src/components/Loader.tsx` |
| Flagship AI studio (bot calling / automation / ad films) | `src/components/AiStudio.tsx` |
| Core services grid | `src/components/Services.tsx` |
| Process timeline | `src/components/Process.tsx` |
| Why Apex | `src/components/WhyApex.tsx` |
| Pricing (3 plans) | `src/components/Pricing.tsx` |
| FAQ accordion | `src/components/FAQ.tsx` |
| Contact + lead form | `src/components/Contact.tsx` |
| "Ask Apex AI" chat demo | `src/components/ChatWidget.tsx` |
| Footer | `src/components/Footer.tsx` |
| Contact + nav constants | `src/lib/site.ts` |

## Before / after launch

- **Lead form endpoint.** The contact form posts to `VITE_FORM_ENDPOINT` when set.
  Until then it falls back to opening the visitor's email client addressed to
  `leodbaker08@gmail.com`. To capture leads in an inbox/dashboard, create a free
  form endpoint (Formspree, Web3Forms, Basin), add `VITE_FORM_ENDPOINT` in the
  Vercel project's Environment Variables, and redeploy. See `.env.example`.
- **Contact details** (phone `425-495-1331`, email `leodbaker08@gmail.com`) and the
  three pricing plans are real and live. Update them in `src/lib/site.ts` and
  `src/components/Pricing.tsx` if they ever change.
- **AI chat widget** is a front-end demo of the AI Bot Calling service (scripted
  answers). Wire it to a real assistant backend when ready.

## Accessibility & performance

- `prefers-reduced-motion` disables the loader, canvas animation, marquee, chat
  typing, and all reveals (global damper in `src/index.css`).
- Visible keyboard focus rings on every interactive element.
- Code-split vendor / motion chunks; critical shell CSS inlined in `index.html`.
