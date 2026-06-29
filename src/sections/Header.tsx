"use client";

import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useReducedMotion } from "framer-motion";
import { useLenis } from "../components/SmoothScroll";

const navItems = [
  { label: "Home", target: "top" },
  { label: "ServiceNow", target: "#servicenow-section" },
  { label: "Projects", target: "#project-section" },
  { label: "About", target: "#about-section" },
  { label: "Contact", target: "#contact-section" },
];

export const Header = () => {
  const lenisRef = useLenis();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionTargets = navItems
      .filter((n) => n.target !== "top")
      .map((n) => n.target.replace("#", ""));

    const observers: IntersectionObserver[] = [];

    sectionTargets.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(`#${id}`);
          });
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const heroObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection("top");
        });
      },
      { threshold: 0.4 }
    );
    const heroEl = document.getElementById("hero-section");
    if (heroEl) heroObs.observe(heroEl);

    return () => {
      observers.forEach((o) => o.disconnect());
      heroObs.disconnect();
    };
  }, []);

  const scrollTo = useCallback(
    (target: string) => {
      const lenis = lenisRef?.current;
      const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
      if (target === "top") {
        lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior });
      } else {
        lenis
          ? lenis.scrollTo(target)
          : document.querySelector(target)?.scrollIntoView({ behavior });
      }
    },
    [lenisRef, reduced]
  );

  return (
    <header
      className="flex justify-center items-center fixed w-full top-3 z-50"
      role="banner"
    >
      <nav
        className={twMerge(
          "flex gap-1 p-0.5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300",
          scrolled
            ? "bg-[var(--surface)]/90 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-white/[0.06]"
        )}
        aria-label="Main navigation"
      >
        {navItems.map(({ label, target }) => {
          const isActive = activeSection === target;
          return (
            <button
              key={label}
              className={twMerge(
                "nav-item",
                isActive && "bg-white !text-gray-900 hover:bg-white/90"
              )}
              onClick={() => scrollTo(target)}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
