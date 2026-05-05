import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, scaleIn, viewportConfig } from "../utils/animations";
import { services } from "../constants";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="services" className="section-padding bg-[#121212] overflow-hidden relative z-10">
      <div className="container-base grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">

        {/* LEFT: text + accordion */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.p variants={staggerItem} className="tagline">
            ✦ What I Offer
          </motion.p>
          <motion.h2 variants={staggerItem} className="heading-md">
            WHAT I CAN<br />DO FOR YOU
          </motion.h2>
          <motion.p variants={staggerItem} className="body-text mb-12 max-w-[500px]">
            I offer end-to-end video editing solutions, including motion graphics,
            podcast editing, and short-form content. Whether it's a brand video,
            social content, or long-form storytelling, I deliver edits that are
            clean, impactful, and intentional.
          </motion.p>

          {/* Accordion */}
          <motion.div variants={staggerItem} className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {services.map((svc, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={svc.number} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left group"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{ cursor: "none" }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="text-xs font-black tracking-widest"
                        style={{ color: "var(--fg-subtle)" }}
                      >
                        {svc.number}
                      </span>
                      <span
                        className="text-base md:text-lg font-black uppercase tracking-tight transition-colors duration-300"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          color: isOpen ? "var(--accent)" : "var(--fg)",
                        }}
                      >
                        {svc.title}
                      </span>
                    </div>
                    {/* Toggle Icon */}
                    <div className="flex items-center gap-4">
                      {isOpen && (
                        <div className="w-12 h-6 rounded-full flex items-center px-1 shadow-[0_0_15px_rgba(163,255,63,0.3)]"
                             style={{ background: "var(--accent)" }}>
                          <div className="w-4 h-4 rounded-full bg-black translate-x-6 transition-transform" />
                        </div>
                      )}
                      <span className="text-gray-500 text-2xl font-light flex-shrink-0">
                        {isOpen ? "∧" : "∨"}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm md:text-base leading-relaxed text-gray-400">
                          {svc.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT: Floating Image Placeholder */}
        <div className="hidden xl:flex justify-end perspective-1000">
          <div className="w-full max-w-[320px] aspect-[4/5] relative">
            {/* 
              This is an invisible placeholder. 
              The FloatingCard component will measure it and stick over it. 
              Note: I reduced the ratio/size to match the user's request.
            */}
            <div id="services-card-placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
