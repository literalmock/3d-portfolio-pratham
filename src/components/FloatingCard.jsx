import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingCard = () => {
  const { scrollY } = useScroll();
  const [isMeasured, setIsMeasured] = useState(false);
  const [rects, setRects] = useState({
    hero: { x: 0, y: 0, width: 0, height: 0 },
    services: { x: 0, y: 0, width: 0, height: 0 },
    about: { x: 0, y: 0, width: 0, height: 0 },
  });

  const [scrollPoints, setScrollPoints] = useState({
    hero: 0,
    services: 0,
    about: 0,
  });

  // Measure placeholders on mount and resize
  useEffect(() => {
    const updateRects = () => {
      const heroEl = document.getElementById("hero-card-placeholder");
      const servicesEl = document.getElementById("services-card-placeholder");
      const aboutEl = document.getElementById("about-card-placeholder");

      if (heroEl && servicesEl && aboutEl) {
        // Get coordinates relative to the document (including scroll)
        const getRect = (el) => {
          const rect = el.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + window.scrollY,
            width: rect.width,
            height: rect.height,
          };
        };

        const heroRect = getRect(heroEl);
        const servicesRect = getRect(servicesEl);
        const aboutRect = getRect(aboutEl);

        setRects({
          hero: heroRect,
          services: servicesRect,
          about: aboutRect,
        });

        // Determine at what scrollY values the transitions should start/end
        // We transition when the element's top edge is around the center of the screen
        const offset = window.innerHeight / 3;
        setScrollPoints({
          hero: 0, // Starts at top
          services: Math.max(0, servicesRect.y - offset),
          about: Math.max(0, aboutRect.y - offset),
        });
        setIsMeasured(true);
      }
    };

    updateRects();
    // Use a small timeout to ensure DOM is fully laid out
    const timeout = setTimeout(updateRects, 100);
    window.addEventListener("resize", updateRects);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateRects);
    };
  }, []);

  // Map scrollY to coordinates
  const y = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [rects.hero.y, rects.services.y, rects.about.y]
  );

  const x = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [rects.hero.x, rects.services.x, rects.about.x]
  );

  const width = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [rects.hero.width, rects.services.width, rects.about.width]
  );

  const height = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [rects.hero.height, rects.services.height, rects.about.height]
  );

  // 3D rotations for the "flip"
  // Starts straight (0) -> flips to (-180) at services -> flips to (-360) at about
  const rotateY = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [0, -180, -360]
  );

  // Isometric tilts
  // Hero: straight (0)
  // Services: slightly tilted (-10deg X, 5deg Z) - wait, user requested smaller ratio/tilt
  // About: tilted (-15deg Y, 5deg X, -5deg Z)
  const rotateX = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [0, 5, 5]
  );

  const rotateZ = useTransform(
    scrollY,
    [0, scrollPoints.services, scrollPoints.about],
    [0, -2, -5]
  );

  // Image source opacity fading during flips
  // Snapping exactly at the 90deg and 270deg points to prevent "ghosting"
  const flip1 = scrollPoints.services / 2;
  const flip2 = scrollPoints.services + (scrollPoints.about - scrollPoints.services) / 2;

  const frontImageOpacity = useTransform(
    scrollY,
    [
      0,
      flip1 - 1, // Stay opaque until precisely 90deg
      flip1 + 1, // Hide exactly after 90deg
      flip2 - 1, // Stay hidden until precisely 270deg
      flip2 + 1, // Show exactly after 270deg
      scrollPoints.about,
    ],
    [1, 1, 0, 0, 1, 1] 
  );

  const backImageOpacity = useTransform(
    scrollY,
    [
      0,
      flip1 - 1, // Stay hidden until precisely 90deg
      flip1 + 1, // Show exactly after 90deg
      flip2 - 1, // Stay visible until precisely 270deg
      flip2 + 1, // Hide exactly after 270deg
      scrollPoints.about,
    ],
    [0, 0, 1, 1, 0, 0] 
  );

  if (!rects.hero) return null; // Wait for measurements before rendering the DOM

  // To prevent the card from overlapping normal scrolling text, we will set its position to absolute
  // and manually translate it across the entire document length.
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
        opacity: isMeasured ? 1 : 0,
        transformStyle: "preserve-3d",
      }}
      className="perspective-1000"
    >
      <div className="w-full h-full relative rounded-2xl shadow-2xl border border-white/10" style={{ transformStyle: "preserve-3d" }}>
        
        {/* Front Face: Portrait (Shows in Hero and About) */}
        <motion.img
          src="https://framerusercontent.com/images/ZOsXBqudWl7eZUxADVkX74xgU.png"
          alt="Pratham Portrait"
          style={{ 
            opacity: frontImageOpacity,
          }}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
        />

        {/* Back Face: Workspace (Shows in Services) */}
        <motion.div
          style={{ 
            opacity: backImageOpacity,
            rotateY: 180, // Counter-rotate the image so it's not backwards when the card is flipped 180!
          }}
          className="absolute inset-0 w-full h-full bg-[#121212] rounded-2xl overflow-hidden"
        >
          <img
            src="/computer.webp"
            alt="Workspace"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default FloatingCard;
