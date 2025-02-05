import React from "react";

function HeroOrbit({
  children,
  size,
  rotation,
  shouldOrbit,
  orbitDuration,
  shoutdSpin,
  spinDuration
}: {
  children: React.ReactNode;
  size: number;
  rotation:number;
  shouldOrbit?:boolean;
  orbitDuration?:number;
  shoutdSpin?:boolean;
  spinDuration?:number;
  
}) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={`${shouldOrbit && "animate-spin"} `} style={{animationDuration:`${orbitDuration}s`}}>
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            rotate: `${rotation}deg`,
          }}
        >
          <div className={`inline-flex ${shoutdSpin && "animate-spin"} `} style={{ rotate: `${rotation * -1}deg`, animationDuration:`${spinDuration}s` }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroOrbit;
