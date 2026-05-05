import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4">
      {/* Centered pill capsule */}
      <nav
        className={`flex items-center gap-1 pl-2 pr-2 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0d0d]/85 backdrop-blur-xl border border-white/12 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "bg-[#0d0d0d]/65 backdrop-blur-lg border border-white/10"
        }`}
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0 mr-2">
          <img
            src="https://framerusercontent.com/images/ZOsXBqudWl7eZUxADVkX74xgU.png"
            alt="Pratham"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center px-2">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3.5 py-1.5 text-[13px] font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200 whitespace-nowrap"
              style={{ marginLeft: index > 0 ? "16px" : "0" }}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-4 bg-white/15 mx-2" />

        {/* Contact CTA pill */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-semibold bg-white text-black hover:bg-[#A3FF3F] transition-colors duration-200 whitespace-nowrap"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 ml-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-[2px] w-full bg-white transition-transform duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`h-[2px] w-full bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-full bg-white transition-transform duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`absolute top-[68px] left-4 right-4 rounded-2xl border border-white/10 bg-[#0d0d0d]/96 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-72 opacity-100 py-3" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-0.5 px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/6 rounded-xl transition-colors"
            >
              {link.title}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-[#A3FF3F] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
