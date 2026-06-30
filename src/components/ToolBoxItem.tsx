import React, { Fragment } from "react";
import TechIcons from "./TechIcons";
import { twMerge } from "tailwind-merge";

export type ToolboxItem = {
  title: string;
  icon: React.ElementType;
};

function ToolBoxItem({
  items,
  className,
  itemWrapperClassName,
}: {
  items: ToolboxItem[];
  className?: string;
  itemWrapperClassName?: string;
}) {
  return (
    // Symmetric fade mask — transparent → opaque at 12%, opaque until 88%, transparent
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      {/* Each chip carries its own right-margin so the gap at the copy boundary
          equals the gap between any two adjacent chips (seamless loop). */}
      <div className={twMerge("flex flex-none py-0.5", itemWrapperClassName)}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((ele, index) => (
              <div
                key={index}
                className="inline-flex items-center outline outline-1 outline-white/20 gap-3 px-3 py-2.5 rounded-lg mr-4"
              >
                <TechIcons component={ele.icon} />
                <span className="text-sm whitespace-nowrap">{ele.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ToolBoxItem;
