import { motion } from "framer-motion";

const TitleHeader = ({ title, sub }) => (
  <motion.div
    className="flex flex-col items-center gap-4 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <p className="section-tag">{sub}</p>
    <h2
      className="font-black md:text-5xl text-3xl tracking-tight uppercase"
      style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
    >
      {title}
    </h2>
  </motion.div>
);

export default TitleHeader;
