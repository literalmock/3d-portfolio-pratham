const brandNames = [
  { name: "Shopify",   color: "#95BF47" },
  { name: "Microsoft", color: "#737373" },
  { name: "Adobe",     color: "#FF0000" },
  { name: "Adidas",    color: "#FFFFFF" },
  { name: "Docker",    color: "#2496ED" },
  { name: "NDTV",      color: "#CC0000" },
  { name: "Cureskin",  color: "#E8B86D" },
  { name: "YouTube",   color: "#FF0000" },
  { name: "Instagram", color: "#E4405F" },
  { name: "Netflix",   color: "#E50914" },
];

const LogoItem = ({ brand }) => (
  <div className="flex-none flex items-center px-6 py-2 opacity-40 hover:opacity-90 transition-opacity duration-300">
    <img
      src={`/images/logos/${brand.name.toLowerCase()}.png`}
      alt={brand.name}
      className="h-7 w-auto object-contain"
      style={{ filter: "grayscale(100%) brightness(200%)" }}
      onError={(e) => {
        // Fallback to text pill if logo image not found
        e.target.replaceWith(
          Object.assign(document.createElement("span"), {
            textContent: brand.name,
            style: `font-size:14px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${brand.color};opacity:1`,
          })
        );
      }}
    />
  </div>
);

const LogoShowcase = () => (
  <div className="relative py-14 md:py-20 overflow-hidden" style={{ background: "#111111" }}>
    {/* Border lines */}
    <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />

    {/* Label */}
    <p className="text-center text-xs tracking-[0.3em] uppercase font-semibold mb-10 text-gray-500">
      Trusted by Brands &amp; Creators
    </p>

    {/* Marquee wrapper — clips to section bounds */}
    <div className="relative overflow-hidden">
      {/* Left/right fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #111111, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #111111, transparent)" }} />

      {/* Scrolling track */}
      <div className="flex items-center" style={{ animation: "marquee 28s linear infinite" }}>
        {/* First set */}
        {brandNames.map((brand) => (
          <LogoItem key={brand.name} brand={brand} />
        ))}
        {/* Duplicate for seamless loop */}
        {brandNames.map((brand) => (
          <LogoItem key={`dup-${brand.name}`} brand={brand} />
        ))}
        {/* Triple for wider screens */}
        {brandNames.map((brand) => (
          <LogoItem key={`trip-${brand.name}`} brand={brand} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
