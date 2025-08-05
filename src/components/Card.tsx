import React, { ComponentPropsWithoutRef } from "react";
import grainImage from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

function Card({ children, className, ...other }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "outline outline-2 outline-white/20 rounded-3xl bg-gray-800 relative z-0 overflow-hidden",
        className
      )}
      {...other} // Spread the remaining props
    >
      {/* Background grain texture Image Layer */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
}

export default Card;
