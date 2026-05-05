import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { expCards, testimonials } from "../constants";

// ── Testimonial Card (clean bordered, no blur) ────────────────────────────────
const TestimonialCard = ({ t }) => (
  <motion.div
    variants={staggerItem}
    className="p-6 rounded-2xl border border-white/10 bg-[#111111] hover:border-[#A3FF3F]/30 transition-all duration-300"
    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
    whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } }}
  >
    {/* Quote mark */}
    <div
      className="text-5xl font-black leading-none mb-3 select-none"
      style={{ fontFamily: "Georgia, serif", color: "#A3FF3F", opacity: 0.3 }}
    >
      "
    </div>

    <p className="text-gray-300 text-sm leading-relaxed mb-5">
      {t.review}
    </p>

    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/15 flex-shrink-0 bg-[#1a1a1a]">
        <img
          src={t.imgPath}
          alt={t.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-white truncate">{t.name}</p>
        <p className="text-xs text-gray-500 truncate">{t.mentions}</p>
      </div>
      <div className="flex gap-0.5 flex-shrink-0">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xs">★</span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ── Timeline Entry ─────────────────────────────────────────────────────────────
const TimelineEntry = ({ card, index, isLast }) => (
  <motion.div variants={staggerItem} className="flex gap-5">
    {/* Dot + line */}
    <div className="flex flex-col items-center flex-shrink-0">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center border-2 border-[#A3FF3F] bg-[#0a0a0a] overflow-hidden shadow-[0_0_16px_rgba(163,255,63,0.15)]"
      >
        <img
          src={card.logoPath}
          alt=""
          className="w-6 h-6 object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = `<span style="color:#A3FF3F;font-weight:900;font-size:14px">${index + 1}</span>`;
          }}
        />
      </div>
      {!isLast && (
        <div className="flex-1 w-px mt-3 mb-0 min-h-[60px]" style={{ background: "linear-gradient(to bottom, rgba(163,255,63,0.3), rgba(255,255,255,0.05))" }} />
      )}
    </div>

    {/* Content */}
    <div className="pb-10 flex-1">
      <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-1">
        {card.title}
      </h3>
      <p className="text-xs font-semibold tracking-widest text-[#A3FF3F] mb-4 flex items-center gap-2">
        <span>📅</span>
        {card.date}
      </p>
      <ul className="flex flex-col gap-2.5">
        {card.responsibilities.map((r, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#A3FF3F]" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// ── Main Section ──────────────────────────────────────────────────────────────
const Experience = () => {
  // Use first 3 testimonials for left column
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section id="experience" className="section-padding bg-[#0a0a0a]">
      <div className="container-base">

        {/* Section header */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.p variants={staggerItem} className="tagline">
            ◆ CAREER
          </motion.p>
          <motion.h2 variants={staggerItem} className="heading-md">
            EXPERIENCE
          </motion.h2>
        </motion.div>

        {/* Two-column: Testimonials left | Timeline right */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-16 xl:gap-20 items-start">

          {/* LEFT: Testimonial cards */}
          <motion.div
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="flex flex-col gap-5"
          >
            <motion.p variants={staggerItem} className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">
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
            <motion.p variants={staggerItem} className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-8">
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
