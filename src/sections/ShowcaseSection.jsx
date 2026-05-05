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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10"
          style={{ background: "#121212" }}
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video area */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", background: "#000" }}>
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={project.title}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "var(--accent)" }}
                  >
                    <svg className="w-7 h-7 ml-1" fill="var(--bg)" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">Video preview coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "var(--accent)", color: "#0a0a0a" }}
                >
                  {project.category}
                </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-white/10"
                style={{ background: "#1a1a1a", color: "white" }}
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-gray-400">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-white/15 text-gray-400"
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
    className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#0f0f0f]"
    style={{ aspectRatio: "16/9" }}
    whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 22 } }}
    onClick={() => onClick(project)}
  >
    {/* Placeholder gradient (shown when no image / image fails) */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #111 100%)`,
      }}
    />

    {/* Thumbnail */}
    <img
      src={project.thumbnail}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      style={{ opacity: 0.6 }}
      onError={(e) => { e.target.style.display = "none"; }}
    />

    {/* Bottom gradient */}
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }}
    />

    {/* Hover border glow */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#A3FF3F]/40 transition-colors duration-400" />

    {/* Category badge — top left */}
    <div className="absolute top-4 left-4">
      <span
        className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
        style={{ background: "#A3FF3F", color: "#0a0a0a" }}
      >
        {project.category}
      </span>
    </div>

    {/* Play button — center */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
      >
        <Play fill="white" size={22} className="ml-1" />
      </div>
    </div>

    {/* Title — bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="text-white font-black uppercase text-lg md:text-xl leading-tight tracking-tight">
        {project.title}
      </h3>
      <p className="text-white/50 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.desc.slice(0, 70)}…
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

      <section id="work" className="section-padding bg-[#0a0a0a]">
        <div className="container-base">

          {/* Header */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="mb-14"
          >
            <motion.p variants={staggerItem} className="tagline">
              ◆ SELECTED WORK
            </motion.p>
            <motion.h2 variants={staggerItem} className="heading-md">
              FEATURED<br />PROJECTS
            </motion.h2>
            <motion.p variants={staggerItem} className="body-text max-w-xl">
              Handpicked work that reflects my approach to cinematic storytelling — precision editing with intention and impact.
            </motion.p>
          </motion.div>

          {/* Uniform 2×2 grid */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
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
            className="mt-14 flex justify-center"
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
