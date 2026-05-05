import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";
import { socialImgs } from "../constants";

const Footer = () => (
  <footer className="w-full py-14 md:py-20 border-t border-[#ffffff1a] bg-[#0a0a0a]">
    <div className="container-base">
      {/* Top: Brand + CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="heading-md m-0">
            Pratham<span className="text-[#A3FF3F]">.</span>
          </h2>
          <p className="body-text mt-4 max-w-sm">
            India-based video editor crafting cinematic stories for brands, creators &amp; media.
          </p>
        </div>
        <motion.a href="#contact" className="btn-primary">
          Start a Project
        </motion.a>
      </div>

      {/* Nav links */}
      <div
        className="flex flex-wrap gap-6 mb-10 pb-10 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={(e) => (e.target.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--fg-muted)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
          © {new Date().getFullYear()} Pratham Singh. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socialImgs.map((s, i) => (
            <motion.a
              key={i}
              href="#"
              aria-label={s.name}
              className="icon flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
              whileHover={{
                scale: 1.1,
                borderColor: "var(--accent)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={s.imgPath} alt={s.name} className="w-4 h-4 object-contain" />
            </motion.a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
          Built with ❤️ &amp; Framer Motion
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
