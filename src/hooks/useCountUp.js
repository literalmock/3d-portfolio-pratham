import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 → target with easeOut cubic
 * @param {number} target   — final value
 * @param {number} duration — animation duration in ms (default 1800)
 * @param {number} delay    — start delay in ms (default 0)
 * @returns {{ count: number, ref: React.Ref }}
 */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function useCountUp(target, duration = 1800, delay = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;

          let startTime = null;
          let rafId;

          const tick = (timestamp) => {
            if (startTime === null) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            setCount(Math.round(eased * target));

            if (progress < 1) {
              rafId = requestAnimationFrame(tick);
            }
          };

          const timeoutId = setTimeout(() => {
            rafId = requestAnimationFrame(tick);
          }, delay);

          // Cleanup stored so the observer callback can access it
          el._cleanup = () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(rafId);
          };
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (el._cleanup) el._cleanup();
    };
  }, [target, duration, delay]);

  return { count, ref };
}
