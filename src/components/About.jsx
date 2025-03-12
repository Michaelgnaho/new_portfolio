import React, { useState } from "react";
import { services } from "../constants";
import AnimatedContent from "./UI/AnimatedContent";
import  ServiceCard  from "./UI/ServiceCard";



const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 sm:px-8 md:px-20">
      <AnimatedContent>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Overview</h2>

      <div className="text-gray-400 text-base sm:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]">
        <p>
          Hi, I am Michael Adeyemi Gnaho (MAG), a passionate full-stack
          developer with a strong focus on creating engaging and interactive web
          experiences. My expertise is balanced: 60% frontend and 40% backend,
          enabling me to seamlessly bridge design and functionality for
          impactful applications.
          {!isOpen && <span>...</span>}
        </p>

        {isOpen && (
          <div>
            <p className="mt-4">
              On the frontend, I excel in HTML, CSS, JavaScript, and frameworks
              like Next.js, React, TailwindCSS, and Bootstrap, crafting
              responsive, user-friendly interfaces. On the backend, I bring
              robust skills in Node.js, Django, Python, and C, empowering me to
              build scalable, efficient, and secure systems.
            </p>
            <p className="mt-4">
              I honed my technical prowess at ALX, where I majored in frontend
              development. The program's intensive training equipped me with the
              problem-solving abilities and technical expertise needed to tackle
              complex challenges. My portfolio includes diverse projects, from
              small business websites to large-scale web applications. Across
              every endeavor, I prioritize delivering clean, efficient, and
              maintainable code.
            </p>
            <p className="mt-4">
              Beyond development, I'm a stage-shaking Spoken Word poet, weaving
              creativity and storytelling into my craft. This artistic flair
              helps me think outside the box and bring a unique perspective to
              my projects. Let's collaborate to create something extraordinary!
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
      >
        {!isOpen ? "Read More" : "Read Less"}
      </button>

      <div className="mt-10 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
  {services.map((service) => (
    <div key={service.title} className="flex justify-center">
      <AnimatedContent>
        <ServiceCard {...service} />
      </AnimatedContent>
    </div>
  ))}
</div>
      </AnimatedContent>
    </div>
  );
};

export default About;
