import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";

const tools = [
  {
    name: "Premiere Pro",
    icon: "🎬",
    color: "#9999FF",
    desc: "Primary editing suite for all long-form and short-form content",
    level: 95,
  },
  {
    name: "After Effects",
    icon: "✨",
    color: "#9FD5FF",
    desc: "Motion graphics, VFX, and animated title sequences",
    level: 88,
  },
  {
    name: "DaVinci Resolve",
    icon: "🎨",
    color: "#FFB347",
    desc: "Professional colour grading and finishing",
    level: 85,
  },
  {
    name: "Final Cut Pro",
    icon: "🎞",
    color: "#6EC6FF",
    desc: "Fast multicam editing and social-first workflows",
    level: 80,
  },
  {
    name: "Photoshop",
    icon: "🖼",
    color: "#31A8FF",
    desc: "Thumbnails, key art, and composite work",
    level: 82,
  },
  {
    name: "Audition",
    icon: "🎙",
    color: "#9FE6C9",
    desc: "Podcast editing, audio cleanup, and mastering",
    level: 78,
  },
];

const TechStack = () => (
  <section
    id="skills"
    className="section-padding"
    style={{ background: "#121212" }}
  >
    <div className="container-base">
      {/* Section header */}
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        style={{ marginBottom: "48px" }}
      >
        <motion.p variants={staggerItem} className="tagline">
          ◆ TOOLKIT
        </motion.p>
        <motion.h2 variants={staggerItem} className="heading-md">
          MY TOOLS &amp;
          <br />
          SKILLS
        </motion.h2>
        <motion.p variants={staggerItem} className="body-text">
          Industry-standard tools paired with a creative eye for storytelling
          and precision editing.
        </motion.p>
      </motion.div>

      {/* 3-column tools grid */}
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={staggerItem}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0f0f0f",
              transition: "border-color 0.3s ease, transform 0.3s ease",
            }}
            whileHover={{
              borderColor: tool.color + "45",
              y: -5,
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
          >
            {/* Icon + name row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                  background: tool.color + "15",
                  border: `1px solid ${tool.color}30`,
                }}
              >
                {tool.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "white",
                    fontSize: "0.9rem",
                    marginBottom: "4px",
                  }}
                >
                  {tool.name}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.78rem", lineHeight: 1.5 }}>
                  {tool.desc}
                </p>
              </div>
            </div>

            {/* Proficiency bar */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "0.72rem", color: "#6b7280", fontWeight: 600 }}>
                  Proficiency
                </span>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: tool.color }}>
                  {tool.level}%
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.05)",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    borderRadius: "9999px",
                    background: `linear-gradient(90deg, ${tool.color}80, ${tool.color})`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechStack;
