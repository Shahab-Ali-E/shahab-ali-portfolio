import React, { Fragment } from "react";
import TechIcons from "./TechIcons";
import { twMerge } from "tailwind-merge";

export type ToolboxItem = {
    title: string;
    icon: React.ElementType;
};

function ToolBoxItem({items, className, itemWrapperClassName}:{items:ToolboxItem[], className?:string, itemWrapperClassName?:string}) {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_100%,transparent)]", className)}>
        <div className={twMerge("flex flex-none gap-6 py-0.5",itemWrapperClassName)}>
          {Array.from({length:2}).map((_,idx)=>(
            <Fragment key={idx}>
                {items.map((ele, index) => (
                    <div
                    key={index}
                    className="inline-flex items-center outline outline-1 outline-white/20 gap-3 px-3 py-3 rounded-lg"
                    >
                    <TechIcons component={ele.icon} />
                    <span>{ele.title}</span>
                    </div>
                ))}
            </Fragment>
          ))}
        </div>
    </div>
  );
}

export default ToolBoxItem;
