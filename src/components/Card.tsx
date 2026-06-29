import React, { ComponentPropsWithoutRef } from "react";
import grainImage from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

function Card({
  children,
  className,
  ...other
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "outline outline-1 outline-white/10 rounded-2xl bg-[var(--surface)] relative z-0 overflow-hidden",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{ backgroundImage: `url(${grainImage.src})` }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export default Card;
