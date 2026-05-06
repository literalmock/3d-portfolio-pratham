import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { viewportConfig } from "../utils/animations";
import { testimonials } from "../constants";

// ─── Experience data ──────────────────────────────────────────────────────────
const workHistory = [
  {
    company: "CureSkin",
    period: "2022 – Present",
    role: "Lead Video Content Producer / Editor",
    bullets: [
      "Directed brand and performance ad campaigns across Instagram, YouTube, and Facebook",
      "Conceptualized celebrity ad shoots leading to 6× business growth",
      "Managed high-viewership podcast series",
      "Led cross-functional creative team",
      "Aligned storytelling with acquisition & retention goals",
      "Built scalable production systems",
      "Used performance insights + automation tools",
    ],
  },
  {
    company: "Emoha Eldercare",
    period: "2021 – 2022",
    role: "Executive Video Content Producer",
    bullets: [
      "Owned end-to-end production (films, testimonials, live shows)",
      "Managed creative briefs & client communication",
      "Collaborated across marketing, design, and product",
      "Executed digital campaigns",
      "Built awareness campaigns",
    ],
  },
  {
    company: "NDTV News",
    period: "2018 – 2021",
    role: "Junior Video Producer / Editor",
    bullets: [
      "Helped launch NDTV Hop Live",
      "Produced multi-genre shows",
      "Worked on NDTV Food YouTube growth",
      "Managed post-production workflows",
    ],
  },
];

// ─── Reusable animation variants ─────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  show:   { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "backOut" } },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

const bulletContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

// ─── Testimonial Card ─────────────────────────────────────────────────────────
const TestimonialCard = ({ t }) => (
  <motion.div
    variants={fadeUpVariants}
    whileHover={{
      y: -4,
      borderColor: "rgba(163,255,63,0.28)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 20px rgba(163,255,63,0.06)",
      transition: { type: "spring", stiffness: 280, damping: 22 },
    }}
    style={{
      padding: "24px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "#111111",
      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      willChange: "transform",
    }}
  >
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

    <p style={{ color: "#d1d5db", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "20px" }}>
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
        <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "white", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {t.name}
        </p>
        <p style={{ fontSize: "0.75rem", color: "#6b7280", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
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

// ─── Timeline Entry ───────────────────────────────────────────────────────────
const TimelineEntry = ({ entry, isLast }) => (
  <motion.div
    variants={fadeUpVariants}
    whileHover={{
      // subtle card lift only on the right-column content
    }}
    style={{ display: "flex", gap: "0" }}
  >
    {/* Left column: year + dot + line — UNCHANGED positions */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100px",
        flexShrink: 0,
        paddingTop: "4px",
      }}
    >
      {/* Year label */}
      <motion.span
        variants={fadeUpVariants}
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#A3FF3F",
          textTransform: "uppercase",
          marginBottom: "10px",
          whiteSpace: "nowrap",
        }}
      >
        {entry.period}
      </motion.span>

      {/* Dot — scales in + pulse glow */}
      <motion.div
        variants={dotVariants}
        animate={{
          boxShadow: [
            "0 0 6px rgba(163,255,63,0.4)",
            "0 0 14px rgba(163,255,63,0.75)",
            "0 0 6px rgba(163,255,63,0.4)",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#A3FF3F",
          flexShrink: 0,
        }}
      />

      {/* Connector line — UNCHANGED */}
      {!isLast && (
        <div
          style={{
            flex: 1,
            width: "1px",
            marginTop: "8px",
            background: "linear-gradient(to bottom, rgba(163,255,63,0.35), rgba(255,255,255,0.04))",
            minHeight: "48px",
          }}
        />
      )}
    </div>

    {/* Right column: company + role + bullets */}
    <motion.div
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 24 },
      }}
      style={{
        paddingLeft: "24px",
        paddingBottom: isLast ? "0" : "48px",
        flex: 1,
        willChange: "transform",
      }}
    >
      <motion.h3
        variants={fadeUpVariants}
        style={{
          fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
          fontWeight: 900,
          color: "white",
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
          marginBottom: "4px",
        }}
      >
        {entry.company}
      </motion.h3>
      <motion.p
        variants={fadeUpVariants}
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#9ca3af",
          marginBottom: "16px",
          letterSpacing: "0.02em",
        }}
      >
        {entry.role}
      </motion.p>

      {/* Bullets — staggered one by one */}
      <motion.ul
        variants={bulletContainer}
        style={{ display: "flex", flexDirection: "column", gap: "9px", margin: 0, padding: 0, listStyle: "none" }}
      >
        {entry.bullets.map((b, i) => (
          <motion.li
            key={i}
            variants={bulletVariants}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: "0.845rem",
              lineHeight: 1.6,
              color: "#d1d5db",
            }}
          >
            <span
              style={{
                marginTop: "7px",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#A3FF3F",
                flexShrink: 0,
                opacity: 0.75,
              }}
            />
            {b}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </motion.div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const Experience = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  // Scroll-driven line animation
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 85%", "end 20%"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useSpring(rawScale, { stiffness: 60, damping: 20, mass: 0.6 });

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-base">

        {/* Section header — unchanged structure, enhanced animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          style={{ marginBottom: "64px" }}
        >
          <motion.p variants={fadeUpVariants} className="tagline">
            ◆ CAREER
          </motion.p>
          <motion.h2 variants={fadeUpVariants} className="heading-md">
            EXPERIENCE
          </motion.h2>
        </motion.div>

        {/* Two-column layout — UNCHANGED grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="experience-grid"
        >
          {/* LEFT: Testimonial cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <motion.p
              variants={fadeUpVariants}
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

          {/* RIGHT: Vertical timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <motion.p
              variants={fadeUpVariants}
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

            {/* Timeline list — relative container for the animated line */}
            <div ref={lineRef} style={{ position: "relative" }}>

              {/* Background static line (shows full height immediately) */}
              <div
                style={{
                  position: "absolute",
                  left: "49px",       // center of the 100px left column
                  top: "32px",
                  bottom: 0,
                  width: "1px",
                  background: "rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                }}
              />

              {/* Animated foreground line (scales from top as you scroll) */}
              <motion.div
                style={{
                  position: "absolute",
                  left: "49px",
                  top: "32px",
                  bottom: 0,
                  width: "1px",
                  background: "linear-gradient(to bottom, #A3FF3F, rgba(163,255,63,0.15))",
                  boxShadow: "0 0 8px rgba(163,255,63,0.4)",
                  transformOrigin: "top",
                  scaleY,
                  pointerEvents: "none",
                  willChange: "transform",
                }}
              />

              {workHistory.map((entry, i) => (
                <TimelineEntry
                  key={entry.company}
                  entry={entry}
                  index={i}
                  isLast={i === workHistory.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
