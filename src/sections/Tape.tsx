import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

export const TapeSection = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];
  return (
    <section className="py-14 md:py-16 lg:py-28 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        {/* Masking applied correctly */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:exclude] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-tape-marquee">
            {[...new Array(2)].fill(0).map((_,idx) => (
              <Fragment key={idx}>
                {words.map((ele, index) => (
                  <div
                    key={`${idx}-${index}`}
                    className="inline-flex items-center gap-4 pr-4 text-gray-900 z-10"
                  >
                    <span className="font-extrabold text-sm uppercase">
                      {ele}
                    </span>
                    <StarIcon className="size-5 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
