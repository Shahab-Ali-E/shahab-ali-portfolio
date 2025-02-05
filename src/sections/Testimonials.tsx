import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";

import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Abdullah Ishfaq",
    position: "Video editor @ Upwork",
    text: "Shahab's design boosted our app's performance and user engagement. His focus on smooth animations and user-friendly features made a huge impact.",
    avatar: memojiAvatar1,
  },
  {
    name: "Muhammad Kamran",
    position: "Associate Professor @ Comsats University Islamabad",
    text: "Working with Shahab's was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The application has exceeded our expectations.",
    avatar: memojiAvatar5,
  },
  {
    name: "Muhammad Umer",
    position: "Video editor @ Upwork",
    text: "Shahab's app is fantastic! Its user-friendly design has streamlined data management for my video editing agency. Smooth, well-designed, and highly effective—I highly recommend it!",
    avatar: memojiAvatar3,
  }
  
  
  // {
  //   name: "Emily Carter",
  //   position: "Product Manager @ GlobalTech",
  //   text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
  //   avatar: memojiAvatar4,
  // },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <SectionHeader
          firstHeading="Happy Clients"
          mainHeading="What Clients Say About Me"
          paragraph="Don't just take my word for it. See what my clients have to say about my work."
        />
      
      {/* cards */}
      <div className="mt-14 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-6 -my-6">
        <div className="flex flex-none gap-14 pr-14 md:gap-9 animate-tape-marquee [animation-duration:40s] hover:[animation-play-state:paused]">
          {[Array.from({length:2})].map((_,idx)=>(
            <Fragment key={idx}>
                {testimonials.map((ele, index) => (
                  <Card key={index} className="max-w-xs p-6 md:max-w-md md:p-8 border-2 border-white/20 outline-none hover:scale-110 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 inline-flex rounded-full bg-gray-700 justify-center items-center flex-shrink-0">
                        <Image
                          src={ele.avatar}
                          alt={ele.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">{ele.name}</div>
                        <div className="text-white/40 text-sm">{ele.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base ">{ele.text}</p>
                  </Card>
                ))}
            </Fragment>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
