import React from 'react';
import PixelTransition from './PixelTransition';

const ServiceCard = ({ title, icon }) => {
  // Generate a short description based on the title
  const generateDescription = (title) => {
    const descriptions = {
      "Web Developer": "Building modern, responsive websites and web applications with the latest technologies.",
      "Mobile Developer": "Creating native and cross-platform mobile applications for iOS and Android.",
      "Frontend Software Engineer": "Crafting beautiful user interfaces and seamless user experiences.",
      "Backend Software Engineer": "Developing robust server-side applications and APIs to power your digital solutions.",
      "Spoken Word Artiste": "Expressing powerful ideas through the art of spoken word performance and poetry."
    };
    
    return descriptions[title] || `Specialized expertise in ${title} services.`;
  };

  // First content - regular service card
  const firstContent = (
    <div className="w-full h-full flex flex-col items-center justify-center bg-purple-800 p-5">
      <img src={icon} alt={title} className="w-16 h-16 mx-auto object-contain" />
      <h3 className="text-white text-lg sm:text-xl md:text-[20px] font-bold mt-4">
        {title}
      </h3>
    </div>
  );

  // Second content - description that appears on hover/touch
  const secondContent = (
    <div className="w-full h-full flex items-center justify-center bg-purple-900 p-5">
      <p className="text-white text-md font-medium text-center">
        {generateDescription(title)}
      </p>
    </div>
  );

  return (
    <div className="w-full sm:w-[250px] md:w-[300px] rounded-[20px] overflow-hidden">
      <PixelTransition
        firstContent={firstContent}
        secondContent={secondContent}
        gridSize={10}
        pixelColor="#a855f7" // Purple color for the pixels
        animationStepDuration={0.4}
        aspectRatio="75%" // Creates a nice card height
        className="service-card-transition"
      />
    </div>
  );
};

export default ServiceCard;