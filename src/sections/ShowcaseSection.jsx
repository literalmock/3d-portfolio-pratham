import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from "../utils/animations";
import { videoProjects } from "../constants";
import { Play, X } from "lucide-react";

// ── Video Modal ───────────────────────────────────────────────────────────────
const VideoModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "880px",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#121212",
          }}
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video area */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000" }}>
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="autoplay; fullscreen"
                allowFullScreen
                title={project.title}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.4,
                  }}
                />
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg style={{ width: "28px", height: "28px", marginLeft: "4px" }} fill="#0a0a0a" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
                    Video preview coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Info panel */}
          <div style={{ padding: "28px 32px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "12px" }}>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    background: "#A3FF3F",
                    color: "#0a0a0a",
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    marginTop: "12px",
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "#1a1a1a",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}
              >
                <X size={16} />
              </button>
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#9ca3af" }}>
              {project.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
              {project.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "#9ca3af",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ── Project Card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    variants={staggerItem}
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "16px",
      cursor: "pointer",
      background: "#0f0f0f",
      aspectRatio: "16/9",
    }}
    whileHover={{ scale: 1.025, transition: { type: "spring", stiffness: 280, damping: 22 } }}
    onClick={() => onClick(project)}
  >
    {/* Gradient base */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #111 100%)",
      }}
    />

    {/* Thumbnail */}
    <img
      src={project.thumbnail}
      alt={project.title}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.62,
        transition: "transform 0.6s ease, opacity 0.3s ease",
      }}
      onError={(e) => { e.target.style.display = "none"; }}
    />

    {/* Bottom fade */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
      }}
    />

    {/* Hover border glow */}
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "16px",
        border: "2px solid transparent",
        transition: "border-color 0.35s ease",
      }}
      whileHover={{ borderColor: "rgba(163,255,63,0.45)" }}
    />

    {/* Category badge — top left */}
    <div style={{ position: "absolute", top: "16px", left: "16px" }}>
      <span
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          padding: "4px 12px",
          borderRadius: "9999px",
          background: "#A3FF3F",
          color: "#0a0a0a",
        }}
      >
        {project.category}
      </span>
    </div>

    {/* Play button — center on hover */}
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      whileHover={{ opacity: 1, scale: 1 }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <Play fill="white" size={20} style={{ marginLeft: "3px" }} />
      </div>
    </motion.div>

    {/* Title — bottom */}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
      <h3
        style={{
          color: "white",
          fontWeight: 900,
          textTransform: "uppercase",
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.78rem",
          marginTop: "6px",
          lineHeight: 1.5,
        }}
      >
        {project.desc.slice(0, 72)}…
      </p>
    </div>
  </motion.div>
);

// ── Main Section ──────────────────────────────────────────────────────────────
const ShowcaseSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <VideoModal project={selected} onClose={() => setSelected(null)} />

      <section
        id="work"
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
            style={{ marginBottom: "56px" }}
          >
            <motion.p variants={staggerItem} className="tagline">
              ◆ SELECTED WORK
            </motion.p>
            <motion.h2 variants={staggerItem} className="heading-md">
              FEATURED
              <br />
              PROJECTS
            </motion.h2>
            <motion.p variants={staggerItem} className="body-text">
              Handpicked work that reflects my approach to cinematic
              storytelling — precision editing with intention and impact.
            </motion.p>
          </motion.div>

          {/* 2-column project grid */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {videoProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelected}
              />
            ))}
          </motion.div>

          {/* View all CTA */}
          <motion.div
            style={{ marginTop: "56px", display: "flex", justifyContent: "center" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <a href="#contact" className="btn-secondary">
              Discuss a Project →
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ShowcaseSection;
