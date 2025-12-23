"use client";

import memoji_computer from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import HeroOrbit from "../components/HeroOrbit";
import StartIcon from "../assets/icons/star.svg";
import SparkleIcons from "../assets/icons/sparkle.svg";
import { CloudDownload } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 z-0 relative overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_70%,transparent)] -z-30">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* rings */}
        <div className="size-[620px] hero-section-ring"></div>
        <div className="size-[820px] hero-section-ring"></div>
        <div className="size-[1020px] hero-section-ring"></div>
        <div className="size-[1220px] hero-section-ring"></div>
        {/* green stars */}
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={30}
          shoutdSpin
          spinDuration={7}
        >
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration={32}
          shoutdSpin
          spinDuration={7}
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration={34}
          shoutdSpin
          spinDuration={7}
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* sparkle icons */}
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration={36}
          shoutdSpin
          spinDuration={3}
        >
          <SparkleIcons className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={533}
          rotation={178}
          shouldOrbit
          orbitDuration={38}
          shoutdSpin
          spinDuration={3}
        >
          <SparkleIcons className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration={40}
          shoutdSpin
          spinDuration={3}
        >
          <SparkleIcons className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration={42}
          shoutdSpin
          spinDuration={3}
        >
          <SparkleIcons className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        {/* dots */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={44}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={46}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={48}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        {/* for image and avaliable for work */}
        <div className="flex flex-col items-center z-20">
          <Image
            src={memoji_computer}
            alt="Person peeking into laptop"
            className="size-[100px]"
          />
          <div className="flex items-center py-1.5 px-4 border-gray-800 gap-[15px] rounded-lg bg-gray-950 ">
            {/* for dot */}
            <div className="relative size-2.5 bg-green-500 rounded-full">
              <div className="absolute inset-0 size-2.5 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            {/* for avaliable for work */}
            <p className="text-sm text-white/90 font-semibold">
              Avaliable for new projects
            </p>
          </div>
        </div>
        <div className="max-w-lg mx-auto z-20">
          <h1 className="mt-5 text-center font-serif text-3xl md:text-5xl tracking-wide">
            <span className="text-white/50">Hi, I am </span>
            <br />
            <span>Shahab Ali Hassan</span>
          </h1>
          <p className="text-center mt-6 text-white/60 md:text-lg">
            I specialize in developing both mobile apps and web apps,
            transforming designs into functional, high-performing applications.
            Let&apos;s discuss your next project.
          </p>
        </div>
        {/* buttons */}
        <div className="flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4 z-20">
          {/* Explore my work */}
          <button
            className="inline-flex items-center gap-2 border-emerald-300/40 h-12 px-6 border rounded-xl"
            onClick={() => {
              document.querySelector("#project-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <span className="text-white font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 bg-white h-12 px-7 rounded-xl border border-white">
            <a
              href="/Shahab_Ali_CV.pdf" 
              download="shahab_ali_ge_cv"
              className="flex items-center gap-2"
            >
              <span className="text-gray-950 font-semibold">Download CV</span>
              <span className="transition ease-in-out duration-300 text-xl">
                <CloudDownload className="w-5 h-5 text-black" />
              </span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
