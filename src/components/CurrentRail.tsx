import { useEffect, useState } from "react";

/**
 * "The Current" — a fixed spine on the left edge that fills with the ember
 * current as you scroll, a glowing head dot riding the leading edge. Hidden on
 * smaller screens where it would crowd the content.
 */
export default function CurrentRail() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const pct = p * 100;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-0 z-30 hidden h-screen w-px xl:block"
    >
      <div className="absolute inset-y-0 w-px bg-line-strong" />
      <div
        className="absolute top-0 w-px"
        style={{
          height: `${pct}%`,
          background:
            "linear-gradient(to bottom, rgba(255,158,107,0), #ff9e6b 30%, #ee7b47)",
        }}
      />
      <div
        className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ember"
        style={{
          top: `calc(${pct}% - 5px)`,
          boxShadow: "0 0 0 4px rgba(238,123,71,0.18), 0 0 16px 2px rgba(238,123,71,0.7)",
        }}
      />
    </div>
  );
}
