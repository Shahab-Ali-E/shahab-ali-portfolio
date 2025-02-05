import React from "react";

function SectionHeader({firstHeading, mainHeading, paragraph}:{firstHeading:string; mainHeading:string; paragraph:string}) {
  return (
    <div>
      <div className="flex justify-center mt-px">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {firstHeading}
        </p>
      </div>

      <p className="text-3xl md:text-5xl font-serif mt-6 text-center">
        {mainHeading}
      </p>
      <div className="w-full md:max-w-md mx-auto">
        <p className="text-white/60 mt-4 text-center md:text-lg lg:text-xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
