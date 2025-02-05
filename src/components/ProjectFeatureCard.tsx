"use client";

import {
  HTMLMotionProps,
  motion,
  useSpring,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    imageUrl: StaticImageData;
  };
  zIndexOffset?: number;
  rotationAfterHover:number;
}

function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  rotationAfterHover,
  ...props
}: FeatureCardProps) {
  const { imageUrl } = feature;
  const springValue = useSpring(0, { bounce: 0.1 });
  const width = useSpring(400, {
    stiffness: 150,
    damping: 25,
  });
  const scale = useSpring(1, {
    stiffness: 100,
    damping: 25,
  });
  const rotation = useSpring(0, { stiffness: 100, damping: 25 });

  return (
    <>
      <motion.div
        onMouseEnter={() => {
          springValue.set(1);
          width.set(2500); // Animate width to 2000px on hover
          scale.set(1.1); // Scale slightly up for smooth zoom effect
          rotation.set(0); // Apply rotation on hover
        }}
        onMouseLeave={() => {
          springValue.set(0);
          width.set(400); // Reset width to 400px when not hovered
          scale.set(1); // Reset scale to 1
          rotation.set(rotationAfterHover); // Reset rotation to 6
        }}
        style={{
          zIndex: springValue,
          scale,
          width, // Use spring value for width animation
          rotate: rotation, // Apply rotation smoothly
        }}
        className={twMerge("relative flex h-96 w-96 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl", className)}
        {...props}
      >
        <Image
          src={imageUrl}
          alt="image-here"
          height={100}
          width={100}
          className="-z-1 absolute inset-0 h-full w-full object-cover"
          unoptimized
        />
      </motion.div>
    </>
  );
}


export default function ProductFeatures({
  image1,
  image2,
}: {
  image1: StaticImageData;
  image2: StaticImageData;
}) {
  const cardWidth = 48 * 4; // w-48 x 4
  const angle = 6;
  const yOffset = 30;

  return (
    <section className="flex w-full flex-col items-center gap-4">
      <div className="relative flex w-full justify-center sm:flex-row sm:gap-0">
        <FeatureCard
          feature={{
            imageUrl: image1,
          }}
          initial={{
            x: cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: yOffset,
            y: 10,
            opacity: 1,
            scale: 0.95,
            rotate: -angle,
            transition: {
              type: "spring",
              delay: 0.8,
            },
          }}
          rotationAfterHover={-angle}
        />

        <FeatureCard
          feature={{
            imageUrl: image2,
          }}
          initial={{
            x: -cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: -yOffset,
            y: 10,
            opacity: 1,
            rotate: angle,
            scale: 0.95,
            transition: {
              type: "spring",
              delay: 0.6,
            },
          }}
          rotationAfterHover={angle}
        />
      </div>
    </section>
  );
}
