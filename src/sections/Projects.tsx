"use client";

import AirHelpProjectImage1 from "../assets/images/air-help-image-1.png";
import AirHelpProjectImage2 from "../assets/images/air-help-image-2.png";

import SalahTrackerImage1 from "../assets/images/salah-tracker-image1.png";
import SalahTrackerImage2 from "../assets/images/salah-tracker-image2.png";

import AiCullShareImage1 from "../assets/images/AiCullShareImage1.png";
import AiCullShareImage2 from "../assets/images/AiCullShareImage2.png";

import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";

import Image from "next/image";
import CheckCircle from "../assets/icons/check-circle.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ProductFeatures from "../components/ProjectFeatureCard";

// icons
import Javascript from "../assets/icons/javascript.svg";
import ReactNative from "../assets/icons/expo-go-app.svg";
import Typescript from "../assets/icons/typescript.svg";
import NextJS from "../assets/icons/next-js.svg";
import Redux from "../assets/icons/redux.svg";
import Zustand from "../assets/icons/zustand.svg";
import Clerk from "../assets/icons/clerk.svg";
import GoolgePlaces from "../assets/icons/google-places.svg";

import Docker from "../assets/icons/docker.svg";
import Celery from "../assets/icons/celery-svgrepo-com.svg";
// import Github from "../assets/icons/github-icon.svg";
import FastAPI from "../assets/icons/fastapi.svg";
// import Python from "../assets/icons/python.svg";
import AWSS3 from "../assets/icons/amazon-s3.svg";
import PostgreSQL from "../assets/icons/postgresql.svg";
// import Jenkins from "../assets/icons/jenkins-1.svg";
// import RabbitMQ from "../assets/icons/rabbitmq.svg";
import GroqCloud from "../assets/icons/claude-color.svg";
import Llama from "../assets/icons/llamaindex-color.svg";
import Gemini from "../assets/icons/gemini-color.svg";
import HuggingFace from "../assets/icons/huggingface-color.svg";

import ToolUsedIcons from "../components/ToolUsedIcons";
import GSAPIcon from "../assets/icons/gsap-greensock.svg";
import FramerMotionIcon from "../assets/icons/framer-motion.svg";
import MongoDB from "../assets/icons/mongodb-icon-1.svg";

import ConnvoImg1 from "../assets/images/connvo_landing_page_img1.png";
import ConnvoImg2 from "../assets/images/connvo_landing_page_img2.png";

import FathSphereAIImg1 from "../assets/images/fath-shpere-ai1.png";
import FathSphereAIImg2 from "../assets/images/fath-shpere-ai2.png";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const portfolioProjects = [
  {
    company: "CONNVO",
    year: "2025",
    title: "CONNVO LANDING PAGE",
    results: [
      { title: "Built with Lennis & Framer Motion" },
      { title: "Minimalistic animated UI with GSAP" },
      { title: "Clean, responsive layout design" },
    ],
    tools: [NextJS, Typescript, GSAPIcon, FramerMotionIcon],
    link: "https://connvo-landing-page.vercel.app/",
    image1: ConnvoImg1,
    image2: ConnvoImg2,
  },
  {
    company: "Client Project",
    year: "2024",
    title: "Airhelp – Flight Delay Claims",
    results: [
      { title: "Built 8-step claim form for user input" },
      { title: "Integrated location tracking with Expo" },
      { title: "Enabled notifications in all app states" },
    ],
    tools: [ReactNative, Clerk, Zustand, FastAPI, Typescript, PostgreSQL],
    link: "https://www.linkedin.com/services/page/7163803345263770b4/",
    image1: AirHelpProjectImage1,
    image2: AirHelpProjectImage2,
  },
  {
    company: "Comsats University",
    year: "2024",
    title: "Salah Tracker",
    results: [
      { title: "Live prayer timings by location" },
      { title: "Monthly schedule & active prayer tracking" },
      { title: "Nearby mosques & timing switch (Hanfi/Shafi)" },
    ],
    tools: [
      ReactNative,
      Redux,
      Javascript,
      GoolgePlaces,
      // "Aladan API",
    ],
    link: "https://github.com/Shahab-Ali-E/mad-terminal-project",
    image1: SalahTrackerImage1,
    image2: SalahTrackerImage2,
  },
  {
    company: "Fath Sphere AI",
    year: "2024 - 2025",
    title: "Islamic AI-powered Mobile App",
    results: [
      { title: "9 AI-powered core modules" },
      { title: "Real-time similarity via Gemini Vision" },
      { title: "Live prayer time tracking with highlights" },
      { title: "OCR & Chatbot using Quran and Hadith data" },
      { title: "Nearby mosque locator with map popups" },
    ],
    tools: [
      ReactNative,
      FastAPI,
      Zustand,
      MongoDB,
      Gemini,
      GroqCloud,
      Llama,
      GoolgePlaces,
      HuggingFace,
    ],
    link: "https://github.com/faithsphareai/FaithSphareAI?tab=readme-ov-file#2%EF%B8%8F%E2%83%A3-ocr-scanner-",
    image1: FathSphereAIImg1,
    image2: FathSphereAIImg2,
  },
  {
    company: "FYP Project",
    year: "2024 - 2025",
    title: "AI Cull Share & Eventize",
    results: [
      { title: "Faster photos culling with AI filtering" },
      { title: "Detects duplicates, closedeye & blur images" },
      { title: "Share images via QR & face recognition" },
      { title: "Live event dashboard" },
      { title: "Fast S3 uploads via presigned URLs" },
      { title: "Async API with Celery & postgresql" },
    ],

    tools: [
      FastAPI,
      Zustand,
      NextJS,
      Clerk,
      Typescript,
      AWSS3,
      Celery,
      PostgreSQL,
      Docker,
    ],
    link: "https://ai-cull-share-eventize-frontend.vercel.app/",
    image1: AiCullShareImage1,
    image2: AiCullShareImage2,
  },
];

export const ProjectsSection = () => {
  const container = useRef(null); // Ref to track the section for scroll-based animations

  // Scroll progress tracking for animating cards based on section visibility
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="pb-16 lg:py-20" id="project-section">
      <div className="container">
        {/* section header */}
        <SectionHeader
          firstHeading="REAL-WORLD RESULTS"
          mainHeading="Featured Projects"
          paragraph="See how I transformed concepts into engaging digital experiences."
        />

        {/* projects */}
        <div className="flex flex-col items-center mt-20 md:mt-24">
          {portfolioProjects.map((ele, index) => {
            return (
              <ProjectCard
                key={index}
                index={index}
                scrollYProgress={scrollYProgress}
                project={ele}
                totalProjects={portfolioProjects.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  index,
  scrollYProgress,
  project,
  totalProjects,
}: {
  index: number;
  scrollYProgress: any;
  project: any;
  totalProjects: number;
}) => {
  const targetScale = 1 - (totalProjects - index) * 0.05;
  const scale = useTransform(
    scrollYProgress,
    [index * 0.25, 1],
    [1, targetScale]
  );

  return (
    <div className="h-screen flex items-center justify-center sticky top-20">
      <motion.div
        className="flex flex-col relative h-full w-full origin-top"
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
          scale,
        }}
      >
        <Card className="relative pt-8 md:pt-11 px-8 md:px-10 lg:pt-16 lg:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Left section */}
            <div className="lg:pb-16">
              <div className="md:mt-2 inline-flex gap-2 font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-widest uppercase text-sm">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif mt-2 text-2xl md:text-4xl md:mt-5">
                {project.title}
              </h3>
              <hr className="mt-4 border-t-2 border-white/5" />

              <ul className="flex flex-col space-y-4 justify-center mt-4 md:mt-6">
                {project.results.map((result: any, i: number) => (
                  <li
                    key={i}
                    className="text-sm md:text-base items-center inline-flex text-white/50 gap-2"
                  >
                    <CheckCircle className="size-5 md:size-6" />
                    {result.title}
                  </li>
                ))}
              </ul>

              <ul className="flex justify-start mt-4 md:mt-6 gap-4 flex-wrap">
                {project.tools?.map((Icon: any, i: number) => (
                  <li key={i} className="inline-flex">
                    <ToolUsedIcons Component={Icon} />
                  </li>
                ))}
              </ul>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex w-full sm:w-full md:w-auto sm:mx-auto px-6 items-center justify-center gap-2 bg-white text-gray-900 h-12 rounded-xl font-bold mt-8">
                  View <ArrowUpRight className="size-4 font-bold" />
                </button>
              </a>
            </div>

            {/* Right image section */}
            <div className="absolute sm:hidden md:hidden lg:block right-0 w-1/2">
              <ProductFeatures
                image1={project.image1}
                image2={project.image2}
              />
            </div>

            <div
              className={`sm:block md:block lg:hidden ${
                index === 0 ? "h-[191px] md:h-full" : "h-[198px] md:h-full"
              } overflow-hidden`}
            >
              <Image
                src={project.image1}
                alt={project.title}
                className="mt-8 lg:mt-0 lg:absolute lg:w-[67%] lg:h-full"
              />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
