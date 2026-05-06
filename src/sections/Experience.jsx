import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { expCards, testimonials } from "../constants";

// ── Testimonial Card ──────────────────────────────────────────────────────────
const TestimonialCard = ({ t }) => (
  <motion.div
    variants={staggerItem}
    style={{
      padding: "24px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "#111111",
      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      transition: "border-color 0.3s ease",
    }}
    whileHover={{
      borderColor: "rgba(163,255,63,0.28)",
      y: -4,
      transition: { type: "spring", stiffness: 280, damping: 22 },
    }}
  >
    {/* Quote mark */}
    <div
      style={{
        fontFamily: "Georgia, serif",
        fontSize: "3rem",
        fontWeight: 900,
        lineHeight: 1,
        marginBottom: "12px",
        color: "#A3FF3F",
        opacity: 0.28,
        userSelect: "none",
      }}
    >
      "
    </div>

    <p
      style={{
        color: "#d1d5db",
        fontSize: "0.875rem",
        lineHeight: 1.65,
        marginBottom: "20px",
      }}
    >
      {t.review}
    </p>

    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.14)",
          flexShrink: 0,
          background: "#1a1a1a",
        }}
      >
        <img
          src={t.imgPath}
          alt={t.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: "0.875rem",
            color: "white",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {t.name}
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b7280",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {t.mentions}
        </p>
      </div>
      <div style={{ display: "flex", gap: "2px", flexShrink: 0 }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "#facc15", fontSize: "0.75rem" }}>★</span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ── Timeline Entry ────────────────────────────────────────────────────────────
const TimelineEntry = ({ card, index, isLast }) => (
  <motion.div variants={staggerItem} style={{ display: "flex", gap: "20px" }}>
    {/* Dot + line */}
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #A3FF3F",
          background: "#0a0a0a",
          overflow: "hidden",
          boxShadow: "0 0 16px rgba(163,255,63,0.14)",
        }}
      >
        <img
          src={card.logoPath}
          alt=""
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = `<span style="color:#A3FF3F;font-weight:900;font-size:14px">${index + 1}</span>`;
          }}
        />
      </div>
      {!isLast && (
        <div
          style={{
            flex: 1,
            width: "1px",
            marginTop: "12px",
            background: "linear-gradient(to bottom, rgba(163,255,63,0.3), rgba(255,255,255,0.04))",
            minHeight: "56px",
          }}
        />
      )}
    </div>

    {/* Content */}
    <div style={{ paddingBottom: "40px", flex: 1 }}>
      <h3
        style={{
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          color: "white",
          marginBottom: "6px",
          lineHeight: 1.3,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#A3FF3F",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span>📅</span>
        {card.date}
      </p>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {card.responsibilities.map((r, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              color: "#d1d5db",
            }}
          >
            <span
              style={{
                marginTop: "8px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                flexShrink: 0,
                background: "#A3FF3F",
              }}
            />
            {r}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// ── Main Section ──────────────────────────────────────────────────────────────
const Experience = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-base">

        {/* Section header */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          style={{ marginBottom: "64px" }}
        >
          <motion.p variants={staggerItem} className="tagline">
            ◆ CAREER
          </motion.p>
          <motion.h2 variants={staggerItem} className="heading-md">
            EXPERIENCE
          </motion.h2>
        </motion.div>

        {/* Two-column: testimonials | timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT: Testimonial cards */}
          <motion.div
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <motion.p
              variants={staggerItem}
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6b7280",
              }}
            >
              What clients say
            </motion.p>
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </motion.div>

          {/* RIGHT: Timeline */}
          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <motion.p
              variants={staggerItem}
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "32px",
              }}
            >
              Work history
            </motion.p>
            {expCards.map((card, i) => (
              <TimelineEntry
                key={card.title}
                card={card}
                index={i}
                isLast={i === expCards.length - 1}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
