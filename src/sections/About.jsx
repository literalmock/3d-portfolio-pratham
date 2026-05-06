import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { useCountUp } from "../hooks/useCountUp";

// ─── Stat values mapped to numeric targets ────────────────────────────────────
const statMeta = [
  { target: 7, suffix: "+", label: "Years Experience", delay: 0 },
  { target: 100, suffix: "+", label: "Projects", delay: 200 },
  { target: 50, suffix: "+", label: "Clients", delay: 400 },
];

// ─── Single animated stat ────────────────────────────────────────────────────
const AnimatedStat = ({ target, suffix, label, delay }) => {
  const { count, ref } = useCountUp(target, 1800, delay);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 900,
          color: "#A3FF3F",
          lineHeight: 1,
          marginBottom: "6px",
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.02em",
        }}
      >
        {count}{suffix}
      </span>
      <span
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          color: "#6b7280",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </span>
    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
const About = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "#0a0a0a", position: "relative", zIndex: 10 }}
    >
      <div className="container-base">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* LEFT: text content */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <motion.p variants={staggerItem} className="tagline">
              ◆ ABOUT ME
            </motion.p>

            <motion.h2 variants={staggerItem} className="heading-md">
              Crafting Stories
              <br />
              <span style={{ color: "#A3FF3F" }}>Frame by Frame</span>
            </motion.h2>

            <motion.div
              variants={staggerItem}
              style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}
            >
              <p className="body-text" style={{ marginBottom: 0 }}>
                Hi, I&apos;m Pratham — a creative video editor and visual
                storyteller with 7+ years turning raw footage into cinematic
                narratives.
              </p>
              <p className="body-text" style={{ marginBottom: 0 }}>
                From NDTV&apos;s live broadcasts to Cureskin&apos;s social
                campaigns, I&apos;ve built content across live, digital, and
                brand platforms.
              </p>
              <p className="body-text" style={{ marginBottom: 0 }}>
                I craft intentional videos that connect, engage, and last —
                always delivered on time.
              </p>
            </motion.div>

            {/* Stats row — animated counters */}
            <motion.div
              variants={staggerItem}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginBottom: "32px",
                padding: "24px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {statMeta.map((s) => (
                <AnimatedStat key={s.label} {...s} />
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              variants={staggerItem}
              style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}
            >
              <a
                href="#contact"
                className="btn-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                Let's Collaborate
                <ArrowRight size={14} />
              </a>
              <div style={{ fontSize: "0.875rem", color: "#9ca3af", display: "flex", flexDirection: "column", gap: "6px" }}>
                <p>
                  📞{" "}
                  <a
                    href="tel:+919958192319"
                    style={{ color: "white", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#A3FF3F")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    +91 9958192319
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a
                    href="mailto:Bjprathamsingh@gmail.com"
                    style={{ color: "white", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#A3FF3F")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Bjprathamsingh@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
