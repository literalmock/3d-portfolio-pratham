import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { abilities } from "../constants";

const FeatureCards = () => (
  <section className="section-padding bg-[#0a0a0a]">
    <div className="container-base">
      <motion.div
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {abilities.map(({ imgPath, title, desc }) => (
          <motion.div
            key={title}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-2xl p-8 flex flex-col gap-5 border transition-all duration-500"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              borderColor: "var(--accent)",
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
          >
            {/* Glow bg on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background: "radial-gradient(ellipse at top left, var(--accent) 0%, transparent 65%)",
                opacity: 0,
              }}
            />

            <div
              className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "var(--bg-muted)" }}
            >
              <img src={imgPath} alt={title} className="w-6 h-6 object-contain" />
            </div>

            <div className="relative z-10">
              <h3 className="heading-sm mb-2 group-hover:text-[#A3FF3F] transition-colors duration-300">
                {title}
              </h3>
              <p className="body-text text-sm">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeatureCards;