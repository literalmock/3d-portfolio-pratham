import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { testimonials } from "../constants";

const TestimonialCard = ({ t, index }) => (
  <motion.div
    variants={staggerItem}
    className="group relative break-inside-avoid mb-6 overflow-hidden rounded-2xl p-6 border transition-all duration-500"
    style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    whileHover={{
      y: -5,
      borderColor: "var(--accent)",
      boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 280, damping: 22 },
    }}
  >
    {/* Quote mark */}
    <div
      className="text-6xl font-black leading-none mb-2 select-none"
      style={{ fontFamily: "Georgia, serif", color: "var(--accent)", opacity: 0.25 }}
    >
      "
    </div>

    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--fg-muted)" }}>
      {t.review}
    </p>

    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border"
        style={{ borderColor: "var(--border-mid)" }}
      >
        <img
          src={t.imgPath}
          alt={t.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background = "var(--bg-muted)";
          }}
        />
      </div>
      <div>
        <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>{t.name}</p>
        <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>{t.mentions}</p>
      </div>
      {/* Star rating */}
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xs">★</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-[#0a0a0a]">
    <div className="container-base">
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="mb-16"
      >
        <motion.p variants={staggerItem} className="tagline">
          ✦ Reviews
        </motion.p>
        <motion.h2 variants={staggerItem} className="heading-md">
          WHAT PEOPLE<br />SAY
        </motion.h2>
        <motion.p variants={staggerItem} className="body-text max-w-xl">
          Feedback from clients and collaborators I've had the privilege of working with.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="lg:columns-3 md:columns-2 columns-1"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
