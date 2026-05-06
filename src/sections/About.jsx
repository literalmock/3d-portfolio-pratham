import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { aboutStats } from "../constants";

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

            {/* Stats row */}
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
              {aboutStats.map(({ value, label }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 900,
                      color: "#A3FF3F",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {value}
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
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              variants={staggerItem}
              style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}
            >
              <a href="#contact" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                My Story
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

          {/* RIGHT: floating card placeholder */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: "300px", aspectRatio: "4/5", position: "relative" }}>
              <div id="about-card-placeholder" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
