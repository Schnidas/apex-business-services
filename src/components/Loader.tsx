import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/** Brief "power-on" overlay that ignites the current, then lifts away. */
export default function Loader() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 1500);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-coal"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="eyebrow text-ember-bright"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Apex Business Services
          </motion.div>
          <div className="mt-5 font-display text-5xl font-extrabold tracking-tight text-bone sm:text-6xl">
            APEX
          </div>
          <div className="mt-6 h-px w-44 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-ember to-ember-bright"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <motion.div
            className="mt-4 font-mono text-[11px] tracking-widest text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            powering the engine
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
