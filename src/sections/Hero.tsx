"use client";

import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, CloudDownload } from "lucide-react";
import { useCallback, type MouseEvent } from "react";
import memoji_computer from "../assets/images/memoji-computer.png";
import grainImage from "../assets/images/grain.jpg";
import HeroOrbit from "../components/HeroOrbit";
import StartIcon from "../assets/icons/star.svg";
import SparkleIcons from "../assets/icons/sparkle.svg";
import { useLenis } from "../components/SmoothScroll";

function MagneticButton({
  children,
  className,
  onClick,
  href,
  download,
}: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  href?: string;
  download?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export const HeroSection = () => {
  const lenisRef = useLenis();
  const reduced = useReducedMotion();

  const scrollToServiceNow = useCallback(() => {
    const lenis = lenisRef?.current;
    lenis
      ? lenis.scrollTo("#servicenow-section")
      : document
          .querySelector("#servicenow-section")
          ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }, [lenisRef, reduced]);

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" },
        };

  return (
    <section
      className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative overflow-x-clip"
      id="hero-section"
    >
      {/* ── Background layers ── */}
      <div
        className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_72%,transparent)]"
        aria-hidden="true"
      >
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        {/* Fine dot grid */}
        <div className="absolute inset-0 dot-grid" />

        {/* Subtle aurora glow (secondary depth, behind rings) */}
        <div className="hero-aurora absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-emerald-400/[0.07] rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 w-[260px] h-[180px] bg-sky-400/[0.05] rounded-full blur-[100px]" />
        </div>

        {/* Concentric rings centred on section midpoint */}
        <div className="size-[620px] hero-section-ring" />
        <div className="size-[820px] hero-section-ring" />
        <div className="size-[1020px] hero-section-ring" />
        <div className="size-[1220px] hero-section-ring" />

        {/* Orbiting stars */}
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={32}
          shoutdSpin
          spinDuration={8}
        >
          <StartIcon className="size-24 text-emerald-300/70" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration={28}
          shoutdSpin
          spinDuration={6}
        >
          <StartIcon className="size-10 text-emerald-300/60" />
        </HeroOrbit>

        {/* Orbiting sparkles */}
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration={36}
          shoutdSpin
          spinDuration={3}
        >
          <SparkleIcons className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-40}
          shouldOrbit
          orbitDuration={40}
          shoutdSpin
          spinDuration={3}
        >
          <SparkleIcons className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        {/* Orbiting dots */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={44}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={46}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      {/* ── Content ── */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memoji_computer}
            alt="Shahab Ali Hassan working at a laptop"
            className="size-[100px]"
            priority
          />
          <div className="flex items-center py-1.5 px-4 border border-[var(--border)] gap-3 rounded-lg bg-[var(--surface)] mt-4">
            <div className="relative size-2.5 bg-emerald-400 rounded-full">
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping-large" />
            </div>
            <p className="text-sm font-semibold text-[var(--text)]">
              Available for new projects
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <motion.h1
            className="text-center font-serif text-3xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.15]"
            {...fadeUp(0)}
          >
            <span className="text-[var(--text-muted)]">I build and automate </span>
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              enterprise platforms
            </span>
            <span className="text-[var(--text-muted)]">
              {" "}on ServiceNow — and ship the full stack around them.
            </span>
          </motion.h1>

          <motion.p
            className="text-center mt-6 text-[var(--text-muted)] md:text-lg"
            {...fadeUp(0.15)}
          >
            ServiceNow developer (ITSM, HRSD, integrations) with full-stack roots
            in Next.js, FastAPI and Python.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row md:justify-center items-center mt-10 gap-4"
          {...fadeUp(0.3)}
        >
          <MagneticButton
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-gray-950 h-12 px-7 rounded-lg font-bold hover:bg-[var(--primary-soft)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            onClick={scrollToServiceNow}
          >
            View ServiceNow Work
            <ArrowRight className="size-4" aria-hidden="true" />
          </MagneticButton>

          <MagneticButton
            href="/Shahab_CV.pdf"
            download="Shahab_Ali_Hassan_CV"
            className="inline-flex items-center gap-2 border border-[var(--border)] h-12 px-6 rounded-lg font-semibold text-[var(--text)] hover:bg-white/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
          >
            Download CV
            <CloudDownload className="size-4" aria-hidden="true" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
