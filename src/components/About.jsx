import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {useState} from "react"
import { Button, Collapse } from "react-bootstrap";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[250px] w-[300px]'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  Hi, I'm Michael Adeyemi Gnaho (MAG), 
  a passionate full-stack developer with a strong focus on creating engaging and 
  interactive web experiences. My expertise is balanced: 60% frontend and 40% backend, 
  enabling me to seamlessly bridge design and functionality for impactful applications.
  {!isOpen && <span className="size-10 text-white text-[20px]">...</span>}
</motion.p>

{/* Conditionally render the additional content */}
{isOpen && (
  <div className="block mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    <>
      On the frontend, I excel in HTML, CSS, JavaScript, and frameworks like React, TailwindCSS, and Bootstrap, crafting responsive, user-friendly interfaces. On the backend, I bring robust skills in Node.js, Django, Python, and C, empowering me to build scalable, efficient, and secure systems.
    </>
    <br />
    <>
      I honed my technical prowess at ALX, where I majored in frontend development. The program’s intensive training equipped me with the problem-solving abilities and technical expertise needed to tackle complex challenges.
      My portfolio includes diverse projects, from small business websites to large-scale web applications. 
      Across every endeavor, I prioritize delivering clean, efficient, and maintainable code.
    </>
    <br />
    <>
      Beyond development, I’m a stage-shaking Spoken Word poet, weaving creativity and storytelling into my craft. This artistic flair helps me think outside the box and bring a unique perspective to my projects.
      Let’s collaborate to create something extraordinary!
    </>
  </div>
)}

<Button 
  variant="text-secondary w-30 h-10" 
  onClick={() => setIsOpen(!isOpen)}
>
  {!isOpen ? "Read More" : "Read Less"}
</Button>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
