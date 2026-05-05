import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.1);
      current.current.y = lerp(current.current.y, pos.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x - 20}px, ${current.current.y - 20}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor='hover'], input, textarea, select"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [visible]);

  return (
    <>
      {/* Ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-[width,height,opacity,border-color,background] duration-200 rounded-full border-2 will-change-transform
          ${hovered ? "w-12 h-12 border-accent bg-accent/10" : "w-10 h-10 border-foreground/40 bg-transparent"}
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{ willChange: "transform" }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full w-1.5 h-1.5 bg-accent will-change-transform
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
