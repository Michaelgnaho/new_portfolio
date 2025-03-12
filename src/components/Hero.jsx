import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full sm:h-[1000px] h-[650px] mx-auto`}>
  <div
    className={`absolute inset-0 top-[50px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
  >
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient' />
    </div>

    <div>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className='text-[#915EFF]'>Michael</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I am a Software Engineer,<br className='sm:block hidden' /> I major in Frontend. <br className='sm:block hidden' />I build impressive user <br className='sm:block hidden' />
        interfaces, mobile applications and <br className='sm:block hidden' />web applications.
      </p>
      
      
    </div>
  </div>

  <ComputersCanvas />

  <div className="absolute bottom-10 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[50px] h-[100px] rounded-full border-4 border-secondary flex justify-center items-center">
        <motion.div
          animate={{
            y: [0, 24, 0], // Moves the arrow up and down
          }}
          transition={{
            duration: 1.5, // Smooth animation duration
            repeat: Infinity, // Infinite loop
            repeatType: "loop", // Type of repeat
          }}
          className="text-secondary text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </a>
  </div>
</section>
  );
};

export default Hero;
