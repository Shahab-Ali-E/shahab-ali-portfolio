"use client";

import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, CloudDownload } from "lucide-react";
import { useCallback, type MouseEvent } from "react";
import memoji_computer from "../assets/images/memoji-computer.png";
import grainImage from "../assets/images/grain.jpg";
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
          ?.scrollIntoView({ behavior: "smooth" });
  }, [lenisRef]);

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
      className="py-32 md:py-48 lg:py-60 relative overflow-x-clip"
      id="hero-section"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_72%,transparent)]">
        {/* Film grain at low opacity */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `url(${grainImage.src})` }}
          aria-hidden="true"
        />
        {/* Fine dot grid */}
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        {/* Aurora gradient blobs */}
        <div className="hero-aurora absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[30%] left-[15%] w-[560px] h-[380px] bg-emerald-400/[0.11] rounded-full blur-[130px]" />
          <div className="absolute top-[20%] right-[10%] w-[380px] h-[280px] bg-sky-400/[0.07] rounded-full blur-[110px]" />
          <div className="absolute bottom-[20%] left-[40%] w-[460px] h-[320px] bg-emerald-300/[0.07] rounded-full blur-[150px]" />
        </div>
        {/* Single slow-rotating accent ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full border border-emerald-300/[0.06] animate-spin"
          style={{ animationDuration: "70s" }}
          aria-hidden="true"
        />
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
            href="/shahab_ali_ge_cv.pdf"
            download="shahab_ali_hassan_cv"
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
