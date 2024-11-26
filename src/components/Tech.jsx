import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      <div className="flex animate-carousel-slide ">
        {/* First set of technologies */}
        {technologies.map((technology) => (
          <div 
            key={`first-${technology.name}`} 
            className="flex-shrink-0 w-28 h-28 mx-4 flex items-center justify-center"
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
        
        {/* Duplicate set for infinite scroll effect */}
        {technologies.map((technology) => (
          <div 
            key={`second-${technology.name}`} 
            className="flex-shrink-0 w-28 h-28 mx-4 flex items-center justify-center"
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-secondary text-[14px] uppercase tracking-wider">
          Technologies I Work With
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies.
        </h2>
      </div>
      
      <TechCarousel />
    </div>
  );
};

// Add to your Tailwind CSS file or inline styles
const styles = `
  @keyframes carousel-slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-carousel-slide {
    display: flex;
    animation: carousel-slide 30s linear infinite; /* Adjust duration as needed */
  }

  .animate-carousel-slide:hover {
    animation-play-state: paused;
  }
`;

export default SectionWrapper(Tech, "");