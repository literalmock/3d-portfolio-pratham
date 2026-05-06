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
  <div
    style={{
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      padding: "0 28px",
      opacity: 0.42,
      transition: "opacity 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.42")}
  >
    <img
      src={`/images/logos/${brand.name.toLowerCase()}.png`}
      alt={brand.name}
      style={{ height: "28px", width: "auto", objectFit: "contain", filter: "grayscale(100%) brightness(200%)" }}
      onError={(e) => {
        e.target.replaceWith(
          Object.assign(document.createElement("span"), {
            textContent: brand.name,
            style: `font-size:13px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:${brand.color};opacity:1`,
          })
        );
      }}
    />
  </div>
);

const LogoShowcase = () => (
  // Full-width section — background goes edge-to-edge
  <section
    style={{
      background: "#111111",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      padding: "56px 0",
    }}
  >
    {/* Label — contained */}
    <div className="container-base" style={{ marginBottom: "32px" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.68rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "#6b7280",
        }}
      >
        Trusted by Brands &amp; Creators
      </p>
    </div>

    {/* Marquee — full width with edge fades */}
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Edge fades */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "96px",
          zIndex: 1,
          pointerEvents: "none",
          background: "linear-gradient(to right, #111111, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "96px",
          zIndex: 1,
          pointerEvents: "none",
          background: "linear-gradient(to left, #111111, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 28s linear infinite",
        }}
      >
        {brandNames.map((brand) => <LogoItem key={brand.name} brand={brand} />)}
        {brandNames.map((brand) => <LogoItem key={`dup-${brand.name}`} brand={brand} />)}
        {brandNames.map((brand) => <LogoItem key={`tri-${brand.name}`} brand={brand} />)}
      </div>
    </div>
  </section>
);

export default LogoShowcase;
