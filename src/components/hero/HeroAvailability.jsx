import { motion } from "framer-motion";

const HeroAvailability = ({ label, ctaLabel, ctaHref }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginTop: "24px",
        position: "relative",
        zIndex: 60,
      }}
    >
      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "9999px",
          border: "1px solid rgba(163,255,63,0.3)",
          background: "rgba(163,255,63,0.08)",
        }}
      >
        {/* Pulsing dot */}
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#A3FF3F",
            display: "inline-block",
            boxShadow: "0 0 0 0 rgba(163,255,63,0.6)",
            animation: "pulse-dot 1.8s ease-in-out infinite",
          }}
        />
        <span
          style={{
            color: "#A3FF3F",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
          }}
        >
          {label}
        </span>
      </motion.div>

      {/* CTA link */}
      <motion.a
        href={ctaHref}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.42 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 20px",
          borderRadius: "9999px",
          fontSize: "0.82rem",
          fontWeight: 600,
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "white",
          textDecoration: "none",
          transition: "background 0.25s ease, border-color 0.25s ease",
        }}
        whileHover={{ scale: 1.04 }}
      >
        {ctaLabel}{" "}
        <span style={{ color: "#A3FF3F" }}>→</span>
      </motion.a>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(163,255,63,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(163,255,63,0); }
        }
      `}</style>
    </div>
  );
};

export default HeroAvailability;
