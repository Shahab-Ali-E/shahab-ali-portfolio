import React from "react";

function SectionHeader({
  firstHeading,
  mainHeading,
  paragraph,
}: {
  firstHeading: string;
  mainHeading: string;
  paragraph: string;
}) {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {firstHeading}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl font-serif mt-6 text-center text-[var(--text)]">
        {mainHeading}
      </h2>
      <div className="w-full md:max-w-md mx-auto">
        <p className="text-[var(--text-muted)] mt-4 text-center md:text-lg">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
