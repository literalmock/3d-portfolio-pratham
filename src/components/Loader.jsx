import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        return p + Math.floor(Math.random() * 8) + 3;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-foreground/40 mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-foreground">
              Pratham<span className="text-accent">.</span>
            </h1>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 md:w-72">
            <div className="h-px bg-foreground/10 w-full relative overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-accent"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-xs text-foreground/30 tracking-widest uppercase">Loading</span>
              <span className="text-xs text-accent font-mono">{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
