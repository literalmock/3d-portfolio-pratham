import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, scaleIn, viewportConfig } from "../utils/animations";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    <section id="contact" className="bg-[#0a0a0a] overflow-hidden">
      {/* Big CTA banner */}
      <div className="border-b border-white/10 py-20 md:py-28">
        <div className="container-base text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="tagline"
          >
            ◆ LET'S CONNECT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8 max-w-4xl mx-auto"
          >
            LET'S CREATE<br />
            <span className="text-[#A3FF3F]">SOMETHING GREAT</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400"
          >
            <a
              href="mailto:Bjprathamsingh@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} className="text-[#A3FF3F]" />
              Bjprathamsingh@gmail.com
            </a>
            <span className="hidden sm:block text-gray-600">·</span>
            <a
              href="tel:+919958192319"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={16} className="text-[#A3FF3F]" />
              +91 9958192319
            </a>
          </motion.div>
        </div>
      </div>

      {/* Form section */}
      <div className="section-padding">
        <div className="container-base grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">

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
              GET IN<br />TOUCH
            </motion.h2>
            <motion.p variants={staggerItem} className="body-text mb-12 max-w-md">
              Have a project in mind or want to collaborate? Shoot me a message and
              I'll get back to you within 24 hours.
            </motion.p>

            {/* Contact details */}
            {[
              { label: "Email", value: "Bjprathamsingh@gmail.com", icon: <Mail size={16} />, href: "mailto:Bjprathamsingh@gmail.com" },
              { label: "Phone", value: "+91 9958192319", icon: <Phone size={16} />, href: "tel:+919958192319" },
              { label: "Location", value: "India · Remote Available", icon: <MapPin size={16} />, href: null },
            ].map(({ label, value, icon, href }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="flex items-start gap-4 mb-6"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#A3FF3F]"
                  style={{ background: "rgba(163,255,63,0.1)", border: "1px solid rgba(163,255,63,0.2)" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-0.5 text-gray-500">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-white hover:text-[#A3FF3F] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <div
              className="rounded-3xl p-8 md:p-10 border border-white/10"
              style={{ background: "#111111" }}
            >
              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: "#A3FF3F", color: "#0a0a0a" }}
                  >
                    ✓
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm underline underline-offset-4 text-[#A3FF3F]"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
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
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#A3FF3F]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
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
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#A3FF3F]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
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
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#A3FF3F]/40 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn-primary w-full mt-2 justify-center"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
