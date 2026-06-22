import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * The signature visual: a warm reactor "core" — rotating arc rings, an emitting
 * orange current, expanding signal pulses and drifting sparks. 2D canvas (no
 * WebGL) so it runs anywhere, time-based so throttled rAF still looks right,
 * and a single static frame when reduced motion is requested.
 */
export default function EngineCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const EMBER = "238,123,71";
    const BRIGHT = "255,158,107";

    // Drifting sparks rise from the core.
    const sparks = Array.from({ length: 26 }, (_, i) => ({
      a: (i / 26) * Math.PI * 2,
      r: 0.2 + (i % 7) / 9,
      seed: i * 1.37,
    }));

    const draw = (tMs: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.42;
      const t = tMs / 1000;
      ctx.clearRect(0, 0, w, h);

      // Ambient glow halo
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.7);
      glow.addColorStop(0, `rgba(${EMBER},0.20)`);
      glow.addColorStop(0.5, `rgba(${EMBER},0.05)`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Expanding signal pulses
      for (let i = 0; i < 3; i++) {
        const p = (t * 0.34 + i / 3) % 1;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${EMBER},${(1 - p) * 0.36})`;
        ctx.lineWidth = 1.2 * dpr;
        ctx.arc(cx, cy, R * 0.18 + p * R * 1.15, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Rotating arc rings — the turbine
      const rings = [
        { r: R, speed: 0.16, span: 1.7, width: 2.4, op: 0.5 },
        { r: R * 0.8, speed: -0.26, span: 2.6, width: 1.6, op: 0.32 },
        { r: R * 0.58, speed: 0.42, span: 1.15, width: 2.8, op: 0.72 },
        { r: R * 0.36, speed: -0.62, span: 3.5, width: 1.4, op: 0.3 },
      ];
      for (const ring of rings) {
        const start = t * ring.speed + ring.r;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${BRIGHT},${ring.op})`;
        ctx.lineWidth = ring.width * dpr;
        ctx.lineCap = "round";
        ctx.arc(cx, cy, ring.r, start, start + ring.span);
        ctx.stroke();
        const ex = cx + Math.cos(start + ring.span) * ring.r;
        const ey = cy + Math.sin(start + ring.span) * ring.r;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${BRIGHT},0.95)`;
        ctx.arc(ex, ey, 3 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Drifting sparks
      for (const s of sparks) {
        const life = (t * 0.22 + s.seed) % 1;
        const rad = R * (s.r + life * 0.9);
        const ang = s.a + t * 0.1 + life * 0.5;
        const x = cx + Math.cos(ang) * rad;
        const y = cy + Math.sin(ang) * rad;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${BRIGHT},${(1 - life) * 0.6})`;
        ctx.arc(x, y, (1 - life) * 2.2 * dpr + 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Core orb
      const pulse = 1 + Math.sin(t * 1.7) * 0.07;
      const coreR = R * 0.2 * pulse;
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 2.6);
      core.addColorStop(0, "rgba(255,231,210,0.96)");
      core.addColorStop(0.34, `rgba(${BRIGHT},0.85)`);
      core.addColorStop(1, `rgba(${EMBER},0)`);
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 2.6, 0, Math.PI * 2);
      ctx.fill();

      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    if (reduced) draw(2400);
    else raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
