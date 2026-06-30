"use client";

import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import CardHeader from "../components/CardHeader";
import ToolBoxItem, { ToolboxItem } from "../components/ToolBoxItem";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import MapAvatar from "../assets/images/memoji-smile.png";
import MapImage from "../assets/images/map.png";
import { MapPin, Building2 } from "lucide-react";

// lucide icons as ServiceNow tool proxies
import {
  Settings2,
  Users,
  Database,
  Search,
  GitMerge,
  Code2,
  Server,
  Globe,
  Monitor,
  Package,
  Webhook,
  FlaskConical,
} from "lucide-react";

// full-stack icons
import JavascriptIcon from "../assets/icons/javascript.svg";
import ReactNativeIcon from "../assets/icons/expo-go-app.svg";
import TypescriptIcon from "../assets/icons/typescript.svg";
import NextJsIcon from "../assets/icons/next-js.svg";
import ReactIcon from "../assets/icons/react.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import ZustandIcon from "../assets/icons/zustand.svg";
import DockerIcon from "../assets/icons/docker.svg";
import GithubIcon from "../assets/icons/github-icon.svg";
import FastApiIcon from "../assets/icons/fastapi.svg";
import PythonIcon from "../assets/icons/python.svg";
import AWSS3 from "../assets/icons/amazon-s3.svg";
import PostgresSQLIcon from "../assets/icons/postgresql.svg";
import JenkinsIcon from "../assets/icons/jenkins-1.svg";
import RabbitMQIcon from "../assets/icons/rabbitmq.svg";

type HobbiesItem = {
  title: string;
  emoji: string;
  top: string;
  left: string;
};

const serviceNowTools: ToolboxItem[] = [
  { title: "ITSM", icon: Settings2 },
  { title: "HRSD", icon: Users },
  { title: "CMDB", icon: Database },
  { title: "Discovery", icon: Search },
  { title: "Flow Designer", icon: GitMerge },
  { title: "Script Includes", icon: Code2 },
  { title: "MID Server", icon: Server },
  { title: "Service Portal", icon: Globe },
  { title: "Agent Workspace", icon: Monitor },
  { title: "Update Sets", icon: Package },
  { title: "REST / SOAP", icon: Webhook },
  { title: "ATF", icon: FlaskConical },
];

const frontendTools: ToolboxItem[] = [
  { title: "JavaScript", icon: JavascriptIcon },
  { title: "TypeScript", icon: TypescriptIcon },
  { title: "React", icon: ReactIcon },
  { title: "Next.js", icon: NextJsIcon },
  { title: "React Native", icon: ReactNativeIcon },
  { title: "Redux", icon: ReduxIcon },
  { title: "Zustand", icon: ZustandIcon },
];

const backendTools: ToolboxItem[] = [
  { title: "FastAPI", icon: FastApiIcon },
  { title: "Python", icon: PythonIcon },
  { title: "PostgreSQL", icon: PostgresSQLIcon },
  { title: "RabbitMQ", icon: RabbitMQIcon },
  { title: "AWS S3", icon: AWSS3 },
  { title: "Jenkins", icon: JenkinsIcon },
  { title: "Docker", icon: DockerIcon },
  { title: "GitHub", icon: GithubIcon },
];

const hobbies: HobbiesItem[] = [
  { title: "Gaming", emoji: "🎮", top: "15%", left: "20%" },
  { title: "Gym", emoji: "🏋️", top: "45%", left: "30%" },
  { title: "Tourism", emoji: "🌍", top: "20%", left: "65%" },
  { title: "Music", emoji: "🎵", top: "70%", left: "18%" },
  { title: "Photography", emoji: "📷", top: "65%", left: "68%" },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" },
          viewport: { once: true, margin: "-10%" },
        };

  return (
    <section className="py-16 md:py-24" id="about-section">
      <div className="container">
        <SectionHeader
          firstHeading="About Me"
          mainHeading="A Glimpse Into My World"
          paragraph="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-14 flex flex-col gap-8">
          {/* Row 1: Bio + Toolbox */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-6">
            {/* Bio card — auto height, never clips */}
            <motion.div className="md:col-span-2 lg:col-span-2" {...fadeUp(0)}>
              <Card className="p-6 lg:p-7 flex flex-col min-h-[260px] border border-[var(--border)] bg-[var(--surface)] rounded-xl outline-none">
                <CardHeader
                  title="Who I Am"
                  description="ServiceNow developer with full-stack roots"
                />
                <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--text-muted)] flex-1">
                  <p>
                    Building HRSD workflows, Discovery & CMDB automation at Tekdex.
                    Previously shipped production integrations at Techrystal connecting
                    ServiceNow to FreshService, Jira, Slack, and Salesforce.
                  </p>
                  <div className="flex items-start gap-2 mt-auto pt-3">
                    <MapPin className="size-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Rawalpindi, Pakistan · Open to NZ relocation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 className="size-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>BS Software Engineering · COMSATS 2021–2025</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Toolbox card — min-height accommodates 3 marquee rows */}
            <motion.div className="md:col-span-3 lg:col-span-4" {...fadeUp(0.1)}>
              <Card className="min-h-[260px] border border-[var(--border)] bg-[var(--surface)] rounded-xl outline-none overflow-hidden">
                <div className="px-6 pt-6 pb-2">
                  <CardHeader
                    title="My Toolbox"
                    description="Technologies I use across ServiceNow, frontend, and backend."
                  />
                </div>
                <ToolBoxItem
                  items={serviceNowTools}
                  className="mt-4"
                  itemWrapperClassName="animate-tape-marquee [animation-duration:30s] hover:[animation-play-state:paused]"
                />
                <ToolBoxItem
                  items={frontendTools}
                  className="mt-3"
                  itemWrapperClassName="animate-move-right [animation-duration:22s] hover:[animation-play-state:paused]"
                />
                <ToolBoxItem
                  items={backendTools}
                  className="mt-3 mb-5"
                  itemWrapperClassName="animate-tape-marquee [animation-duration:28s] hover:[animation-play-state:paused]"
                />
              </Card>
            </motion.div>
          </div>

          {/* Row 2: Hobbies + Map */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-6">
            {/* Hobbies — fixed height for drag area */}
            <motion.div className="md:col-span-3 lg:col-span-4" {...fadeUp(0.2)}>
              <Card className="h-[300px] flex flex-col border border-[var(--border)] bg-[var(--surface)] rounded-xl outline-none">
                <div className="p-6 pb-3">
                  <CardHeader
                    title="Beyond The Code"
                    description="Interests and hobbies beyond the digital realm"
                  />
                </div>
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((ele, index) => (
                    <motion.div
                      key={index}
                      className="absolute flex items-center gap-2 bg-gradient-to-t from-emerald-300 to-sky-400 rounded-full py-1.5 px-4 shadow-lg cursor-grab active:cursor-grabbing select-none"
                      style={{
                        top: ele.top,
                        left: ele.left,
                        transform: "translate(-50%, -50%)",
                      }}
                      drag={!reduced}
                      dragConstraints={constraintRef}
                      aria-label={`Hobby: ${ele.title}`}
                    >
                      <span className="text-gray-900 font-extrabold text-sm">
                        {ele.title}
                      </span>
                      <span className="text-base" aria-hidden="true">
                        {ele.emoji}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div className="md:col-span-2 lg:col-span-2" {...fadeUp(0.3)}>
              <Card className="relative z-0 h-[300px] md:h-full border border-[var(--border)] bg-[var(--surface)] rounded-xl outline-none overflow-hidden cursor-pointer">
                <a
                  href="https://www.google.com/maps?q=33.783220,72.352906"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View location on Google Maps — Rawalpindi, Pakistan"
                  className="block h-full"
                >
                  <Image
                    src={MapImage}
                    alt="Map showing Rawalpindi, Pakistan"
                    className="-z-10 h-full w-full object-cover object-left-top"
                  />
                  <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 h-20 w-20 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full">
                    <div className="absolute animate-ping bg-gradient-to-r from-emerald-300 to-sky-400 h-20 w-20 rounded-full -z-20" />
                    <Image
                      src={MapAvatar}
                      alt="Shahab Ali Hassan avatar"
                      className="size-20 z-20"
                    />
                  </div>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
