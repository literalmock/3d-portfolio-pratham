import { useRef } from "react";
import { motion } from "framer-motion";

const GlowCard = ({ card, index, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    el.style.setProperty("--start", angle + 60);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card rounded-2xl p-7 mb-5 break-inside-avoid-column border relative overflow-hidden"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      whileHover={{
        y: -4,
        borderColor: "var(--accent)",
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
    >
      <div className="glow" />
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
      {/* Review text */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fg-muted)" }}>
        {card.review}
      </p>
      {children}
    </motion.div>
  );
};

export default GlowCard;
