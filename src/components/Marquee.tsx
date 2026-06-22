const ITEMS = [
  "Websites",
  "AI Bot Calling",
  "SEO & Local Search",
  "Branding",
  "Google & Meta Ads",
  "Custom Automation",
  "Hosting & Security",
  "AI Ad Films",
  "Social Media",
  "E-commerce",
  "Reputation",
  "Always-on Servicing",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-line bg-canvas-raised py-4">
      <div className="mask-fade-x flex overflow-hidden">
        <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {row.map((item, i) => (
            <li key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-dim">
                {item}
              </span>
              <span className="h-1 w-1 rotate-45 bg-ember" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
