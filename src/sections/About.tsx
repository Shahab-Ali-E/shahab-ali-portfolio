'use client';

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import CardHeader from "@/components/CardHeader";
import ToolBoxItem, { ToolboxItem } from "@/components/ToolBoxItem";
import {motion} from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import GameImage from "@/assets/images/photo-collage.png";
import MapAvatar from "@/assets/images/memoji-smile.png";
import MapImage from "@/assets/images/map.png";

// icons
import JavascriptIcon from "@/assets/icons/javascript.svg";
import ReactNativeIcon from "@/assets/icons/expo-go-app.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NextJsIcon from "@/assets/icons/next-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import ZustandIcon from "@/assets/icons/zustand.svg";
import ClerkIcon from "@/assets/icons/clerk.svg";

import DockerIcon from "@/assets/icons/docker.svg";
import GithubIcon from "@/assets/icons/github-icon.svg";
import FastApiIcon from "@/assets/icons/fastapi.svg";
import PythonIcon from "@/assets/icons/python.svg";
import AWSS3 from "@/assets/icons/amazon-s3.svg";
import PostgresSQLIcon from "@/assets/icons/postgresql.svg";
import JenkinsIcon from "@/assets/icons/jenkins-1.svg";
import RabbitMQIcon from "@/assets/icons/rabbitmq.svg"



type HobbiesItem = {
  title: string;
  emoji: string;
  top: string;
  left: string;
};

const firstToolBoxItem: ToolboxItem[] = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "Typescript",
    icon: TypescriptIcon,
  },
  {
    title: "React Native",
    icon: ReactNativeIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Redux",
    icon: ReduxIcon,
  },
  {
    title: "Zustand",
    icon: ZustandIcon,
  },
  {
    title: "NextJS",
    icon: NextJsIcon,
  },
  {
    title: "Clerk",
    icon: ClerkIcon,
  },
];

const secondToolItem: ToolboxItem[] = [
  {
    title: "FastAPI",
    icon: FastApiIcon,
  },
  {
    title: "Python",
    icon: PythonIcon,
  },
  {
    title: "PostgreSQL",
    icon: PostgresSQLIcon,
  },
  {
    title: "RabbitMQ",
    icon: RabbitMQIcon,
  },
  {
    title: "AWS S3",
    icon: AWSS3,
  },
  {
    title: "Jenkins",
    icon: JenkinsIcon,
  },
  {
    title: "Docker",
    icon: DockerIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  }
];
const hobbies: HobbiesItem[] = [
  { title: "Gaming", emoji: "🎮", top: "10%", left: "23%" },
  { title: "Gym", emoji: "🏋️", top: "40%", left: "27%" },
  { title: "Tourism", emoji: "🌍", top: "25%", left: "70%" },
  { title: "Music", emoji: "🎵", top: "70%", left: "23%" },
  { title: "Photography", emoji: "📷", top: "60%", left: "71%" },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-32" id="about-section">
      <div className="container">
        <SectionHeader
          firstHeading="About Me"
          mainHeading="A Glimpse Into My World"
          paragraph="Learn more about who I am, what I do, and what inspires me."
        />

        {/* other content */}
        <div className="mt-[85px] flex flex-col gap-9">
          {/* 1st grid */}
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-6 md:gap-8">
            {/* my games */}
            <Card className="p-6 lg:p-8 h-[320px] md:col-span-2 lg:col-span-2">
              <CardHeader
                title="My Games"
                description="Explore the games which makes me enjoy"
              />
              <div className="absolute w-[86%] md:w-[82%] lg:w-[78%] h-[60%] rounded-t-3xl mx-auto mt-7 overflow-hidden">
                <Image src={GameImage} alt="GOD of war game" className="object-cover h-full "/>
              </div>
            </Card>

            {/* my toolbox */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-4 ">
              <div className="px-6 pt-6">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                />
              </div>
              <ToolBoxItem items={firstToolBoxItem} className="mt-6" itemWrapperClassName="animate-tape-marquee [animation-duration:30s] pr-6 hover:[animation-play-state:paused]" />
              <ToolBoxItem items={secondToolItem} className="mt-6" itemWrapperClassName="animate-move-right [animation-duration:15s] pr-6 hover:[animation-play-state:paused]"/>
            </Card>
          </div>

          {/* second grid */}
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-6">
            {/* my hobbies */}
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-4">
              <div className="p-6">
                <CardHeader
                  title="Beyond The Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                />
              </div>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((ele, index) => (
                  <motion.div
                    key={index}
                    className="absolute flex items-center gap-2 bg-gradient-to-t from-emerald-300 to-sky-400 rounded-full py-1.5 px-4 shadow-lg"
                    style={{
                      top: ele.top,
                      left: ele.left,
                      transform: "translate(-50%, -50%)", // Centers items correctly
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="text-gray-900 font-extrabold">
                      {ele.title}
                    </span>
                    <span className="text-lg">{ele.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* map */}
            <Card className="relative z-0 md:col-span-2 lg:col-span-2">
              <Image
                src={MapImage}
                alt="my location here"
                className="-z-10 h-full w-full object-cover object-left-top"
                unoptimized
              />
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 h-20 w-20 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full">
              <div className="absolute animate-ping  bg-gradient-to-r from-emerald-300 to-sky-400 h-20 w-20 rounded-full -z-20"></div>
                <Image src={MapAvatar} alt="avatar here" className="size-20 z-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
