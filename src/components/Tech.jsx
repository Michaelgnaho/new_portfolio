import React from "react";
import { technologies } from "../constants/index";

const TechCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden bg-transparent py-8">
      <div className="inline-flex animate-slide-track">
        {/* First set of technologies */}
        <div className="flex gap-8 py-4">
          {technologies.map((technology, index) => (
            <div
              key={`tech-1-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-white/70 text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>

        {/* Duplicated set for seamless loop */}
        <div className="flex gap-8 py-4">
          {technologies.map((technology, index) => (
            <div
              key={`tech-2-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-white/70 text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Technologies I Work With
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Leveraging cutting-edge tools and frameworks to build robust
          solutions.
        </p>
        <TechCarousel />
      </div>
    </div>
  );
};

export default Tech;
