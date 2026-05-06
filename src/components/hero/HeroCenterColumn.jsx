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
      {/* Image placeholder — FloatingCard fills this on desktop */}
      <div
        id="hero-card-placeholder"
        className="desktop-only"
        style={{ width: "100%", aspectRatio: "3/4" }}
      />
      <div className="mobile-only" style={{ width: "100%", aspectRatio: "3/4", marginBottom: "32px" }}>
        <img src="https://framerusercontent.com/images/ZOsXBqudWl7eZUxADVkX74xgU.png" alt="Pratham" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }} />
      </div>

      <HeroAvailability
        label={availability}
        ctaLabel={talkCta.label}
        ctaHref={talkCta.href}
      />
    </motion.div>
  );
};

export default HeroCenterColumn;
