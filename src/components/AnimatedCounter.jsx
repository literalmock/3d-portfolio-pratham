import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { counterItems } from "../constants";

const CounterItem = ({ value, suffix, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-2xl p-8 border"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        borderColor: "var(--accent)",
        y: -4,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
    >
      <motion.span
        className="font-black text-5xl md:text-6xl"
        style={{ fontFamily: "Syne, sans-serif", color: "var(--accent)" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        {value}{suffix}
      </motion.span>
      <span className="mt-2 text-sm font-medium text-center" style={{ color: "var(--fg-muted)" }}>
        {label}
      </span>
    </motion.div>
  );
};

const AnimatedCounter = () => (
  <div
    id="counter"
    className="w-full px-6 md:px-12 xl:px-20 py-16 md:py-20"
    style={{ background: "var(--bg-muted)" }}
  >
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
      {counterItems.map((item, i) => (
        <CounterItem
          key={item.label}
          value={item.value}
          suffix={item.suffix}
          label={item.label}
          delay={i * 0.12}
        />
      ))}
    </div>
  </div>
);

export default AnimatedCounter;
