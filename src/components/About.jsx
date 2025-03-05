import React, { useState } from "react";
import { services } from "../constants";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-[300px] bg-gray-800 rounded-[20px] p-5 text-center">
    <img src={icon} alt={title} className="w-16 h-16 mx-auto object-contain" />
    <h3 className="text-white text-[20px] font-bold mt-4">{title}</h3>
  </div>
);

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-20">
      <h2 className="text-3xl font-bold mb-4">Overview</h2>
      <p className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]">
        Hi, I am Michael Adeyemi Gnaho (MAG), a passionate full-stack developer
        with a strong focus on creating engaging and interactive web
        experiences. My expertise is balanced: 60% frontend and 40% backend,
        enabling me to seamlessly bridge design and functionality for impactful
        applications.
        {!isOpen && <span>...</span>}
      </p>

      {isOpen && (
        <div className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]">
          <p>
            On the frontend, I excel in HTML, CSS, JavaScript, and frameworks
            like Next.js, React, TailwindCSS, and Bootstrap, crafting
            responsive, user-friendly interfaces. On the backend, I bring robust
            skills in Node.js, Django, Python, and C, empowering me to build
            scalable, efficient, and secure systems.
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
            creativity and storytelling into my craft. This artistic flair helps
            me think outside the box and bring a unique perspective to my
            projects. Let's collaborate to create something extraordinary!
          </p>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
      >
        {!isOpen ? "Read More" : "Read Less"}
      </button>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
