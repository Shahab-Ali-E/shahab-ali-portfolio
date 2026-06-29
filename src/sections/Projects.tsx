"use client";

// Full-stack & AI projects
import AiCullShareImage1 from "../assets/images/AiCullShareImage1.png";
import AiCullShareImage2 from "../assets/images/AiCullShareImage2.png";

import FathSphereAIImg1 from "../assets/images/fath-shpere-ai1.png";
import FathSphereAIImg2 from "../assets/images/fath-shpere-ai2.png";

import AirHelpProjectImage1 from "../assets/images/air-help-image-1.png";
import AirHelpProjectImage2 from "../assets/images/air-help-image-2.png";

// TODO: replace with real AI Lang Detect screenshots
import aiLangDetectImg1 from "../assets/images/ai-startup-landing-page.png";
import aiLangDetectImg2 from "../assets/images/dark-saas-landing-page.png";

import ConnvoImg1 from "../assets/images/connvo_landing_page_img1.png";
import ConnvoImg2 from "../assets/images/connvo_landing_page_img2.png";

import SalahTrackerImage1 from "../assets/images/salah-tracker-image1.png";
import SalahTrackerImage2 from "../assets/images/salah-tracker-image2.png";

import Image from "next/image";
import CheckCircle from "../assets/icons/check-circle.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ProductFeatures from "../components/ProjectFeatureCard";

// tech icons
import NextJS from "../assets/icons/next-js.svg";
import ReactNative from "../assets/icons/expo-go-app.svg";
import Typescript from "../assets/icons/typescript.svg";
import Zustand from "../assets/icons/zustand.svg";
import Clerk from "../assets/icons/clerk.svg";
import Docker from "../assets/icons/docker.svg";
import Celery from "../assets/icons/celery-svgrepo-com.svg";
import FastAPI from "../assets/icons/fastapi.svg";
import AWSS3 from "../assets/icons/amazon-s3.svg";
import PostgreSQL from "../assets/icons/postgresql.svg";
import Gemini from "../assets/icons/gemini-color.svg";
import GroqCloud from "../assets/icons/claude-color.svg";
import Llama from "../assets/icons/llamaindex-color.svg";
import HuggingFace from "../assets/icons/huggingface-color.svg";
import GooglePlaces from "../assets/icons/google-places.svg";
import GSAPIcon from "../assets/icons/gsap-greensock.svg";
import FramerMotionIcon from "../assets/icons/framer-motion.svg";
import PythonIcon from "../assets/icons/python.svg";

import ToolUsedIcons from "../components/ToolUsedIcons";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const portfolioProjects = [
  {
    company: "FYP · COMSATS",
    year: "2024–2025",
    title: "AI Cull Share & Eventize",
    results: [
      { title: "AI-powered photo culling — duplicate, blur & closed-eye detection" },
      { title: "Facial recognition for image sharing via QR code" },
      { title: "Async pipeline with Celery, RabbitMQ & presigned S3 uploads" },
      { title: "Docker + Jenkins CI/CD; role-based access control" },
    ],
    tools: [FastAPI, Zustand, NextJS, Clerk, Typescript, AWSS3, Celery, PostgreSQL, Docker],
    link: "https://ai-cull-share-eventize-frontend.vercel.app/",
    image1: AiCullShareImage1,
    image2: AiCullShareImage2,
  },
  {
    company: "Research Project",
    year: "2024–2025",
    title: "AI Language Detection Engine",
    results: [
      { title: "Detects 7 languages from audio using LSTM + Wav2Vec2" },
      { title: "Batch & micro-batch GPU inference pipeline" },
      { title: "Next.js frontend + FastAPI backend + PostgreSQL storage" },
      { title: "HuggingFace model integration with streaming results" },
    ],
    tools: [NextJS, FastAPI, PostgreSQL, HuggingFace, PythonIcon],
    // TODO: replace with actual AI Lang Detect repo URL
    link: "https://github.com/Shahab-Ali-E",
    image1: aiLangDetectImg1,
    image2: aiLangDetectImg2,
  },
  {
    company: "Fath Sphere AI",
    year: "2024–2025",
    title: "Islamic AI-Powered Mobile App",
    results: [
      { title: "9 AI-powered modules including Quran & Hadith chatbots" },
      { title: "Arabic OCR for text recognition" },
      { title: "Real-time prayer time tracking with location alerts" },
      { title: "Gemini Vision similarity + nearby mosque locator" },
    ],
    tools: [ReactNative, FastAPI, Zustand, Gemini, GroqCloud, Llama, GooglePlaces, HuggingFace],
    link: "https://github.com/faithsphareai/FaithSphareAI?tab=readme-ov-file",
    image1: FathSphereAIImg1,
    image2: FathSphereAIImg2,
  },
  {
    company: "Client Project",
    year: "2024",
    title: "Air Help — Flight Compensation App",
    results: [
      { title: "8-step multi-screen claim form with Clerk auth" },
      { title: "Expo location tracking & push notifications" },
      { title: "FastAPI backend + i18n for multiple locales" },
      { title: "PostgreSQL claim storage with status updates" },
    ],
    tools: [ReactNative, Clerk, Zustand, FastAPI, Typescript, PostgreSQL],
    link: "https://www.linkedin.com/services/page/7163803345263770b4/",
    image1: AirHelpProjectImage1,
    image2: AirHelpProjectImage2,
  },
  {
    company: "CONNVO",
    year: "2025",
    title: "Connvo Landing Page",
    results: [
      { title: "Smooth scroll with Lenis & Framer Motion" },
      { title: "Minimalistic animated UI with GSAP" },
      { title: "Clean, responsive editorial layout" },
    ],
    tools: [NextJS, Typescript, GSAPIcon, FramerMotionIcon],
    link: "https://connvo-landing-page.vercel.app/",
    image1: ConnvoImg1,
    image2: ConnvoImg2,
  },
  {
    company: "COMSATS University",
    year: "2024",
    title: "Salah Tracker",
    results: [
      { title: "Live prayer timings by GPS location" },
      { title: "Monthly schedule & active prayer highlight" },
      { title: "Nearby mosques & Hanfi / Shafi timing switch" },
    ],
    tools: [ReactNative, GooglePlaces],
    link: "https://github.com/Shahab-Ali-E/mad-terminal-project",
    image1: SalahTrackerImage1,
    image2: SalahTrackerImage2,
  },
];

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="pb-16 lg:py-20" id="project-section">
      <div className="container">
        <SectionHeader
          firstHeading="Projects"
          mainHeading="Featured Work"
          paragraph="Full-stack and AI projects — from enterprise data pipelines to AI-powered mobile apps."
        />

        <div className="flex flex-col items-center mt-20 md:mt-24">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
              project={project}
              totalProjects={portfolioProjects.length}
            />
          ))}
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
  const reduced = useReducedMotion();
  const targetScale = 1 - (totalProjects - index) * 0.05;
  const scale = useTransform(
    scrollYProgress,
    [index / totalProjects, 1],
    [1, targetScale]
  );

  return (
    <div className="h-screen flex items-center justify-center sticky top-20">
      <motion.div
        className="flex flex-col relative h-full w-full origin-top"
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
          scale: reduced ? 1 : scale,
        }}
      >
        <Card className="relative pt-8 md:pt-11 px-8 md:px-10 lg:pt-16 lg:px-20 border border-[var(--border)] bg-[var(--surface)] rounded-2xl outline-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Left section */}
            <div className="lg:pb-16">
              <div className="md:mt-2 inline-flex gap-2 font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-widest uppercase text-sm">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif mt-2 text-2xl md:text-4xl md:mt-5 text-[var(--text)]">
                {project.title}
              </h3>
              <hr className="mt-4 border-t border-[var(--border)]" />

              <ul className="flex flex-col space-y-4 justify-center mt-4 md:mt-6">
                {project.results.map((result: any, i: number) => (
                  <li
                    key={i}
                    className="text-sm md:text-base items-center inline-flex text-[var(--text-muted)] gap-2"
                  >
                    <CheckCircle className="size-5 md:size-6 shrink-0 text-emerald-400" />
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
                <button className="inline-flex w-full sm:w-full md:w-auto sm:mx-auto px-6 items-center justify-center gap-2 bg-[var(--primary)] text-gray-950 h-12 rounded-lg font-bold mt-8 hover:bg-[var(--primary-soft)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">
                  View <ArrowUpRight className="size-4" aria-hidden="true" />
                </button>
              </a>
            </div>

            {/* Right image — desktop */}
            <div className="absolute sm:hidden md:hidden lg:block right-0 w-1/2">
              <ProductFeatures image1={project.image1} image2={project.image2} />
            </div>

            {/* Right image — mobile/tablet */}
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
