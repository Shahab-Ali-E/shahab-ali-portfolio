"use client";

import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { createContext, useCallback, useContext, useEffect, useRef } from "react";

type LenisRef = React.MutableRefObject<Lenis | null>;
const LenisContext = createContext<LenisRef | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--primary)] z-[60] pointer-events-none"
    />
  );
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;

    let rafId: number;
    function loop(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      <ScrollProgressBar />
      {children}
    </LenisContext.Provider>
  );
}
