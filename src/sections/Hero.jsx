import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full relative bg-[#0a0a0a] pt-[100px] pb-[80px] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container-base relative z-10 w-full">

        {/* Top row: Available badge + Let's Talk */}
        <div className="flex items-center justify-between mb-10 md:mb-14 relative z-[60]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#A3FF3F]/30 bg-[#A3FF3F]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#A3FF3F] animate-pulse" />
            <span className="text-[#A3FF3F] text-sm font-semibold tracking-wide">Available</span>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/8 border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
          >
            Let's Talk <span className="text-[#A3FF3F]">→</span>
          </motion.a>
        </div>

        {/* Three-column hero: VIDEO | Photo | EDITOR (responsive stacking) */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_280px_1fr] xl:grid-cols-[1fr_320px_1fr] gap-6 lg:gap-8 items-center relative">

          {/* LEFT: PRATHAM SINGH + VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-center justify-center relative z-10 w-full"
          >
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-2">
              Pratham Singh
            </p>
            <h1
              className="font-black leading-[0.82] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(50px, 8.5vw, 110px)" }}
            >
              VIDEO
            </h1>
          </motion.div>

          {/* CENTER: Floating Portrait card placeholder - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center w-full"
          >
            {/* 
              This is an invisible placeholder. 
              The FloatingCard component will use its exact coordinates to perfectly align the 3D flipping card over it. 
            */}
            <div id="hero-card-placeholder" className="w-full aspect-[3/4]" />
          </motion.div>

          {/* RIGHT: EDITOR + descriptor + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-center justify-center items-center relative z-10 w-full"
          >
            <h1
              className="font-black leading-[0.82] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(50px, 8.5vw, 110px)" }}
            >
              EDITOR
            </h1>

            <p className="mt-4 md:mt-6 text-gray-400 text-sm md:text-base max-w-[280px] font-medium leading-relaxed">
              Crafting stories and engaging visuals that turn viewers into lifelong audiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
              <a href="#showcase" className="btn-primary group">
                <span className="relative z-10 flex items-center gap-2">
                  <Play size={16} className="fill-black" />
                  See My Work
                </span>
              </a>
              <a href="#contact" className="btn-secondary group px-4">
                <span className="relative z-10">
                  <Mail size={18} />
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
