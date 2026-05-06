import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { services } from "../constants";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="services"
      style={{ background: "#121212", overflow: "hidden", position: "relative", zIndex: 10 }}
      className="section-padding"
    >
      <div className="container-base">
        {/* Two-column layout: text+accordion | image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT: heading + description + accordion */}
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
              WHAT I CAN
              <br />
              DO FOR YOU
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="body-text"
              style={{ marginBottom: "40px" }}
            >
              I offer end-to-end video editing solutions, including motion
              graphics, podcast editing, and short-form content. Whether it's a
              brand video, social content, or long-form storytelling, I deliver
              edits that are clean, impactful, and intentional.
            </motion.p>

            {/* Accordion */}
            <motion.div
              variants={staggerItem}
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {services.map((svc, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={svc.number}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <button
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 0",
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        cursor: "none",
                      }}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 900,
                            letterSpacing: "0.2em",
                            color: "var(--fg-subtle)",
                          }}
                        >
                          {svc.number}
                        </span>
                        <span
                          style={{
                            fontSize: "1rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "-0.01em",
                            color: isOpen ? "var(--accent)" : "var(--fg)",
                            transition: "color 0.25s ease",
                          }}
                        >
                          {svc.title}
                        </span>
                      </div>

                      {/* Toggle indicator */}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        {isOpen && (
                          <div
                            style={{
                              width: "44px",
                              height: "24px",
                              borderRadius: "9999px",
                              background: "var(--accent)",
                              display: "flex",
                              alignItems: "center",
                              padding: "4px",
                              boxShadow: "0 0 14px rgba(163,255,63,0.3)",
                            }}
                          >
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                background: "black",
                                marginLeft: "auto",
                              }}
                            />
                          </div>
                        )}
                        <span
                          style={{
                            fontSize: "1.25rem",
                            color: "#6b7280",
                            lineHeight: 1,
                            userSelect: "none",
                          }}
                        >
                          {isOpen ? "−" : "+"}
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
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            style={{
                              paddingBottom: "20px",
                              fontSize: "0.95rem",
                              lineHeight: 1.65,
                              color: "#9ca3af",
                            }}
                          >
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

          {/* RIGHT: Floating card placeholder (FloatingCard fills this) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <div id="services-card-placeholder" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
