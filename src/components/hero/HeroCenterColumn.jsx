import { motion } from "framer-motion";
import HeroAvailability from "./HeroAvailability";

const HeroCenterColumn = ({ availability, talkCta }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Image placeholder — FloatingCard fills this */}
      <div
        id="hero-card-placeholder"
        style={{ width: "100%", aspectRatio: "3/4" }}
      />

      <HeroAvailability
        label={availability}
        ctaLabel={talkCta.label}
        ctaHref={talkCta.href}
      />
    </motion.div>
  );
};

export default HeroCenterColumn;
