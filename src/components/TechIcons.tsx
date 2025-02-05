import React from "react";

function TechIcons({ component: Component }: { component: React.ElementType }) {
  return (
    // <svg className="size-9">
    //   <defs>
    //     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    //       <stop offset="0%" stopColor="#34d399" /> {/* Emerald-300 */}
    //       <stop offset="100%" stopColor="#38bdf8" /> {/* Sky-400 */}
    //     </linearGradient>
    //   </defs>
      <Component className="size-8 rounded-md" />
    // </svg>
  );
}

export default TechIcons;
