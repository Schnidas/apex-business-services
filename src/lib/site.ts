/** Single source of truth for contact details and nav. */
export const SITE = {
  name: "Apex Business Services",
  shortName: "Apex",
  phoneDisplay: "425-495-1331",
  phoneHref: "tel:+14254951331",
  email: "leodbaker08@gmail.com",
  emailHref: "mailto:leodbaker08@gmail.com",
  tagline: "Full-service digital & AI growth studio",
} as const;

export const NAV_LINKS = [
  { label: "AI Studio", href: "#ai-studio" },
  { label: "What we do", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
