import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { socialImgs } from "../constants";

const Footer = () => (
  <footer
    style={{
      width: "100%",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      background: "#0a0a0a",
    }}
    className="section-padding"
  >
    <div className="container-base">
      {/* Top: Brand + CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "32px",
          marginBottom: "48px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Pratham<span style={{ color: "#A3FF3F" }}>.</span>
          </h2>
          <p
            className="body-text"
            style={{ marginTop: "16px", maxWidth: "340px", marginBottom: 0 }}
          >
            India-based video editor crafting cinematic stories for brands,
            creators &amp; media.
          </p>
        </div>

        <motion.a
          href="#contact"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Start a Project
        </motion.a>
      </div>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "32px",
          paddingBottom: "32px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#d1d5db",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <p style={{ fontSize: "0.78rem", color: "#6b7280" }}>
          © {new Date().getFullYear()} Pratham Singh. All rights reserved.
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {socialImgs.map((s, i) => (
            <motion.a
              key={i}
              href="#"
              aria-label={s.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#111111",
                transition: "border-color 0.25s ease",
                textDecoration: "none",
              }}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(163,255,63,0.45)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={s.imgPath}
                alt={s.name}
                style={{ width: "16px", height: "16px", objectFit: "contain" }}
              />
            </motion.a>
          ))}
        </div>

        <p style={{ fontSize: "0.78rem", color: "#6b7280" }}>
          Built with ❤️ &amp; Framer Motion
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
