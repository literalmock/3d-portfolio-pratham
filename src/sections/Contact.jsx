import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, scaleIn, viewportConfig } from "../utils/animations";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const inputStyle = {
  width: "100%",
  background: "#0a0a0a",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: "0.9rem",
  color: "white",
  outline: "none",
  transition: "border-color 0.25s ease",
  fontFamily: "Inter, sans-serif",
};

const labelStyle = {
  display: "block",
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#6b7280",
  marginBottom: "8px",
};

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ background: "#0a0a0a", overflow: "hidden" }}
    >
      {/* ── CTA Banner ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "100px 0",
        }}
      >
        <div className="container-base" style={{ textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.55 }}
            className="tagline"
            style={{ textAlign: "center" }}
          >
            ◆ LET'S CONNECT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            LET&apos;S CREATE
            <br />
            <span style={{ color: "#A3FF3F" }}>SOMETHING GREAT</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
              fontSize: "0.875rem",
              color: "#9ca3af",
            }}
          >
            <a
              href="mailto:Bjprathamsingh@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#9ca3af",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Mail size={15} style={{ color: "#A3FF3F" }} />
              Bjprathamsingh@gmail.com
            </a>
            <span style={{ color: "#374151" }}>·</span>
            <a
              href="tel:+919958192319"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#9ca3af",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Phone size={15} style={{ color: "#A3FF3F" }} />
              +91 9958192319
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Form Section ── */}
      <div className="section-padding">
        <div className="container-base">
          {/* 2-column: info | form */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            {/* LEFT: Info */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              <motion.p variants={staggerItem} className="tagline">
                ✦ Let's Talk
              </motion.p>
              <motion.h2 variants={staggerItem} className="heading-md">
                GET IN
                <br />
                TOUCH
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="body-text"
                style={{ marginBottom: "40px" }}
              >
                Have a project in mind or want to collaborate? Shoot me a
                message and I'll get back to you within 24 hours.
              </motion.p>

              {/* Contact details */}
              {[
                {
                  label: "Email",
                  value: "Bjprathamsingh@gmail.com",
                  icon: <Mail size={16} />,
                  href: "mailto:Bjprathamsingh@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+91 9958192319",
                  icon: <Phone size={16} />,
                  href: "tel:+919958192319",
                },
                {
                  label: "Location",
                  value: "India · Remote Available",
                  icon: <MapPin size={16} />,
                  href: null,
                },
              ].map(({ label, value, icon, href }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#A3FF3F",
                      background: "rgba(163,255,63,0.08)",
                      border: "1px solid rgba(163,255,63,0.18)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "white",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#A3FF3F")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT: Form card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              <div
                style={{
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "#111111",
                }}
              >
                {sent ? (
                  <motion.div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "64px 0",
                      gap: "16px",
                      textAlign: "center",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        background: "#A3FF3F",
                        color: "#0a0a0a",
                      }}
                    >
                      ✓
                    </div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        color: "white",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                      I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      style={{
                        marginTop: "8px",
                        fontSize: "0.875rem",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        color: "#A3FF3F",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                  >
                    <div>
                      <label htmlFor="contact-name" style={labelStyle}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your good name?"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(163,255,63,0.4)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" style={labelStyle}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email address?"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(163,255,63,0.4)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" style={labelStyle}>
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows="5"
                        required
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(163,255,63,0.4)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary"
                      disabled={loading}
                      style={{ width: "100%", marginTop: "8px", justifyContent: "center" }}
                      whileHover={{ scale: loading ? 1 : 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {loading ? (
                        <>
                          <span
                            style={{
                              width: "16px",
                              height: "16px",
                              border: "2px solid currentColor",
                              borderTopColor: "transparent",
                              borderRadius: "50%",
                              display: "inline-block",
                              animation: "spin 0.7s linear infinite",
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
