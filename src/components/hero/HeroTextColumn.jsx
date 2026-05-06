import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";

const HeroTextColumn = ({ side, headline, subtitle, ctas, person }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: isLeft ? "flex-start" : "flex-end",
        textAlign: isLeft ? "left" : "right",
        position: "relative",
        zIndex: 10,
      }}
    >
      {person && (
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#6b7280",
            marginBottom: "12px",
          }}
        >
          {person}
        </p>
      )}

      {headline && (
        <h1 className="heading-lg" style={{ marginBottom: 0 }}>
          {headline}
        </h1>
      )}

      {subtitle && (
        <p
          className="body-text"
          style={{
            marginTop: "16px",
            marginBottom: 0,
            maxWidth: "280px",
            textAlign: isLeft ? "left" : "right",
          }}
        >
          {subtitle}
        </p>
      )}

      {ctas && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "24px",
            flexDirection: isLeft ? "row" : "row",
            justifyContent: isLeft ? "flex-start" : "flex-end",
          }}
        >
          <a href={ctas.primary.href} className="btn-primary">
            <Play size={15} style={{ fill: "black" }} />
            {ctas.primary.label}
          </a>
          <a
            href={ctas.secondary.href}
            className="btn-secondary"
            aria-label={ctas.secondary.label}
            style={{ padding: "12px 16px" }}
          >
            <Mail size={17} />
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default HeroTextColumn;
