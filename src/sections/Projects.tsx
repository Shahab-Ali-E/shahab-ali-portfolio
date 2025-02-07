import AirHelpProjectImage1 from "@/assets/images/air-help-image-1.png";
import AirHelpProjectImage2 from "@/assets/images/air-help-image-2.png";

import SalahTrackerImage1 from "@/assets/images/salah-tracker-image1.png";
import SalahTrackerImage2 from "@/assets/images/salah-tracker-image2.png";

import AiCullShareImage1 from "@/assets/images/AiCullShareImage1.png";
import AiCullShareImage2 from "@/assets/images/AiCullShareImage2.png";

import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

import Image from "next/image";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ProductFeatures from "@/components/ProjectFeatureCard";

// icons
import Javascript from "@/assets/icons/javascript.svg";
import ReactNative from "@/assets/icons/expo-go-app.svg";
import Typescript from "@/assets/icons/typescript.svg";
import NextJS from "@/assets/icons/next-js.svg";
import Redux from "@/assets/icons/redux.svg";
import Zustand from "@/assets/icons/zustand.svg";
import Clerk from "@/assets/icons/clerk.svg";
import GoolgePlaces from "@/assets/icons/google-places.svg";

import Docker from "@/assets/icons/docker.svg";
import Celery from "@/assets/icons/celery-svgrepo-com.svg";
import Redis from "@/assets/icons/redis.svg";
// import Github from "@/assets/icons/github-icon.svg";
import FastAPI from "@/assets/icons/fastapi.svg";
// import Python from "@/assets/icons/python.svg";
import AWSS3 from "@/assets/icons/amazon-s3.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
// import Jenkins from "@/assets/icons/jenkins-1.svg";
// import RabbitMQ from "@/assets/icons/rabbitmq.svg";
import ToolUsedIcons from "@/components/ToolUsedIcons";

const portfolioProjects = [
  {
    company: "FYP Project",
    year: "2024 - 2025",
    title: "AI Cull Share & Eventize",
    results: [
      { title: "40% faster AI tasks with Celery" },
      { title: "Scalable storage via S3" },
      { title: "Secure API calls on the server" },
    ],
    tools: [
      FastAPI,
      Zustand,
      NextJS,
      Clerk,
      Typescript,
      AWSS3,
      Celery,
      Redis,
      PostgreSQL,
    ],
    link: "https://www.linkedin.com/services/page/7163803345263770b4/",
    image1: AiCullShareImage1,
    image2: AiCullShareImage2,
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
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-20" id="project-section">
      <div className="container">
        {/* section header */}
        <SectionHeader
          firstHeading="REAL-WORLD RESULTS"
          mainHeading="Featured Projects"
          paragraph="See how I transformed concepts into engaging digital experiences."
        />

        {/* projects */}
        <div className="flex flex-col gap-20 mt-11 md:mt-20">
          {portfolioProjects.map((ele, index) => (
            <Card
              key={index}
              className="pt-8 md:pt-11 px-8 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 45}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="md:mt-2 inline-flex gap-2 font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-widest uppercase text-sm">
                    <span>{ele.company}</span>
                    <span>&bull;</span>
                    <span>{ele.year}</span>
                  </div>
                  <h3 className="font-serif mt-2 text-2xl md:text-4xl md:mt-5">
                    {ele.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5" />
                  <ul className="flex flex-col space-y-4 justify-center mt-4 md:mt-6">
                    {ele.results.map((ele, index) => (
                      <li
                        key={index}
                        className="text-sm md:text-base items-center inline-flex text-white/50 gap-2"
                      >
                        {" "}
                        <CheckCircle className="size-5 md:size-6" /> {ele.title}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex justify-start mt-4 md:mt-6 gap-4">
                    {ele.tools?.map((ele, index) => (
                      <li
                        key={index}
                        className="text-sm md:text-xs items-center inline-flex text-white/50 gap-2"
                      >
                        <ToolUsedIcons Component={ele} />
                      </li>
                    ))}
                  </ul>
                  <a href={ele.link} target="_blank">
                    <button className="inline-flex w-full sm:w-full md:w-auto sm:mx-auto px-6 items-center justify-center gap-2 bg-white text-gray-900 h-12 rounded-xl font-bold mt-8">
                      View{" "}
                      <ArrowUpRight className="size-4 font-bold" />
                    </button>
                  </a>
                </div>
                <div className="absolute sm:hidden md:hidden lg:block right-0 w-1/2">
                  <ProductFeatures
                    image1={ele.image1}
                    image2={ele.image2}
                  />
                </div>

                <div
                  className={`sm:block md:block lg:hidden   ${
                    index == 0 ? "h-[191px] md:h-full" : "h-[198px] md:h-full"
                  } overflow-hidden`}
                >
                  <Image
                    src={ele.image1}
                    alt={ele.title}
                    className="mt-8 lg:mt-0 lg:absolute lg:w-[67%] lg:h-full"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
