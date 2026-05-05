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
  <section id="skills" className="section-padding bg-[#121212]">
    <div className="container-base">
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="mb-14"
      >
        <motion.p variants={staggerItem} className="tagline">
          ◆ TOOLKIT
        </motion.p>
        <motion.h2 variants={staggerItem} className="heading-md">
          MY TOOLS &amp;<br />SKILLS
        </motion.h2>
        <motion.p variants={staggerItem} className="body-text max-w-xl">
          Industry-standard tools paired with a creative eye for storytelling and precision editing.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={staggerItem}
            className="group flex flex-col gap-4 p-5 rounded-2xl border border-white/10 bg-[#0f0f0f] transition-all duration-300"
            whileHover={{
              borderColor: tool.color + "40",
              y: -4,
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
          >
            {/* Icon + Name row */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: tool.color + "15", border: `1px solid ${tool.color}30` }}
              >
                {tool.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{tool.name}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{tool.desc}</p>
              </div>
            </div>

            {/* Skill bar */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-500 font-medium">Proficiency</span>
                <span className="text-xs font-bold" style={{ color: tool.color }}>{tool.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${tool.color}80, ${tool.color})` }}
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
