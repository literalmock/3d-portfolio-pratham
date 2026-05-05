import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "../utils/animations";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] py-24 md:py-32 relative z-10">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* LEFT: Text & Stats */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="flex flex-col justify-center"
          >
            <motion.h2
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 md:mb-10 tracking-tight leading-none uppercase"
            >
              About Me
            </motion.h2>

            <motion.h3
              variants={staggerItem}
              className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Crafting Stories<br />
              <span className="text-[#A3FF3F]">Frame by Frame</span>
            </motion.h3>

            <motion.div
              variants={staggerItem}
              className="text-gray-300 leading-relaxed text-base md:text-lg space-y-4 mb-10"
            >
              <p>
                Hi, I'm Pratham — a creative video editor and visual storyteller with 7+ years turning raw footage into cinematic narratives.
              </p>
              <p>
                From NDTV's live broadcasts to Cureskin's social campaigns, I've built content across live, digital, and brand platforms.
              </p>
              <p>
                I craft intentional videos that connect, engage, and last — always delivered on time.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-8 mb-10 py-8 border-y border-white/10"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-black text-[#A3FF3F] mb-1">
                    {value}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA + contact info */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
                My Story
                <ArrowRight size={14} />
              </a>
              <div className="text-sm text-gray-400 space-y-1.5">
                <p>
                  📞{" "}
                  <a href="tel:+919958192319" className="text-white hover:text-[#A3FF3F] transition-colors">
                    +91 9958192319
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a href="mailto:Bjprathamsingh@gmail.com" className="text-white hover:text-[#A3FF3F] transition-colors">
                    Bjprathamsingh@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Image Placeholder */}
          <div className="hidden lg:flex w-full justify-end items-center perspective-1000">
            <div className="w-full max-w-[320px] aspect-[4/5] relative">
              {/* 
                This is an invisible placeholder. 
                The FloatingCard component will measure it and stick over it. 
              */}
              <div id="about-card-placeholder" className="w-full h-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
