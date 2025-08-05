import React from "react";
import StarIcon from "../assets/icons/star.svg";

interface CardHeaderProps {
  title: string;
  description: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="inline-flex gap-2 items-center">
      <StarIcon className="size-10 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-white/60 text-sm lg:text-base mt-1 lg:w-3/4">{description}</p>
    </div>
  );
};

export default CardHeader;
