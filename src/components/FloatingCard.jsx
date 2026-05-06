import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * FloatingCard — scroll-driven card: Hero (portrait) → Services (flips to workspace).
 * Stays at Services position after the flip. No further movement to About.
 *
 * Fix for back face visibility:
 *  • Card shell does NOT use overflow:hidden (that clips the back face)
 *  • backfaceVisibility is set per-face, not on the shell
 *  • Front: rotateY(0), backfaceVisibility hidden
 *  • Back:  rotateY(180deg), backfaceVisibility hidden
 *  • Shell rotates via rotateY and preserve-3d exposes the right face
 */
const FloatingCard = () => {
  const { scrollY } = useScroll();
  const [isMeasured, setIsMeasured] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ── Mobile detection ───────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Placeholder rects (hero + services only) ───────────────────────────────
  const [rects, setRects] = useState({
    hero:     { x: 0, y: 0, width: 0, height: 0 },
    services: { x: 0, y: 0, width: 0, height: 0 },
  });

  const [scrollPoints, setScrollPoints] = useState({
    hero: 0,
    services: 0,
  });

  useEffect(() => {
    const updateRects = () => {
      const heroEl     = document.getElementById("hero-card-placeholder");
      const servicesEl = document.getElementById("services-card-placeholder");

      if (!heroEl || !servicesEl) return;

      const getRect = (el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left, y: r.top + window.scrollY, width: r.width, height: r.height };
      };

      const heroRect     = getRect(heroEl);
      const servicesRect = getRect(servicesEl);

      setRects({ hero: heroRect, services: servicesRect });

      const offset = window.innerHeight / 3;
      setScrollPoints({
        hero:     0,
        services: Math.max(0, servicesRect.y - offset),
      });
      setIsMeasured(true);
    };

    updateRects();
    const t = setTimeout(updateRects, 120);
    window.addEventListener("resize", updateRects);
    return () => { clearTimeout(t); window.removeEventListener("resize", updateRects); };
  }, []);

  // ── Raw position / size motion values ─────────────────────────────────────
  const rawY = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [rects.hero.y, rects.services.y]
  );
  const rawX = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [rects.hero.x, rects.services.x]
  );
  const rawW = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [rects.hero.width, rects.services.width]
  );
  const rawH = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [rects.hero.height, rects.services.height]
  );

  // Flip: 0 → -180  (front shows → back shows)
  const rawRotateY = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [0, -180]
  );

  // Subtle isometric tilt
  const rawRotateX = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [0, 4]
  );
  const rawRotateZ = useTransform(
    scrollY,
    [0, scrollPoints.services],
    [0, -1.5]
  );

  // ── Spring smoothing ──────────────────────────────────────────────────────
  const springCfg = { stiffness: 80, damping: 15, mass: 0.8 };

  const y       = useSpring(rawY,       springCfg);
  const x       = useSpring(rawX,       springCfg);
  const width   = useSpring(rawW,       springCfg);
  const height  = useSpring(rawH,       springCfg);
  const rotateY = useSpring(rawRotateY, springCfg);
  const rotateX = useSpring(rawRotateX, springCfg);
  const rotateZ = useSpring(rawRotateZ, springCfg);

  // ── Snap to hero position instantly on first measurement ──────────────────
  // Springs start at 0 because FloatingCard mounts before sections exist in
  // the DOM. Without this snap, the card drifts slowly from (0,0) to the hero
  // placeholder — making it invisible on initial load.
  useEffect(() => {
    if (!isMeasured) return;
    y.set(rects.hero.y);
    x.set(rects.hero.x);
    width.set(rects.hero.width);
    height.set(rects.hero.height);
    rotateY.set(0);
    rotateX.set(0);
    rotateZ.set(0);
  }, [isMeasured]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Guards ────────────────────────────────────────────────────────────────
  if (isMobile) return null;

  const faceBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    borderRadius: "16px",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        x,
        y,
        width,
        height,
        rotateY,
        rotateX,
        rotateZ,
        zIndex: 50,
        transformStyle: "preserve-3d",
        perspective: 1200,
        willChange: "transform",
        opacity: isMeasured ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Card shell — preserve-3d so both faces render correctly */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.08)",
          transformStyle: "preserve-3d",
          // NO overflow:hidden here — it clips the back face
        }}
      >
        {/* ── Front face: Portrait ────────────────────────────────────────── */}
        <div
          style={{
            ...faceBase,
            overflow: "hidden",
            // rotateY(0) — faces the viewer normally
          }}
        >
          <img
            src="https://framerusercontent.com/images/ZOsXBqudWl7eZUxADVkX74xgU.png"
            alt="Pratham Portrait"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Gloss */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%, rgba(0,0,0,0.25) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ── Back face: Workspace ────────────────────────────────────────── */}
        <div
          style={{
            ...faceBase,
            overflow: "hidden",
            transform: "rotateY(180deg)",
            background: "#121212",
          }}
        >
          <img
            src="/computer.jpeg"
            alt="Workspace"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Gloss */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%, rgba(0,0,0,0.25) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;
