import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 md:p-10 rounded-3xl w-full h-full mx-2 my-4'
  >
    <p className='text-white font-black text-[36px] md:text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[16px] md:text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-2'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px] md:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[10px] md:text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-8 h-8 md:w-10 md:h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  // Slider settings with improved responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10px',
    className: 'center',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center md:text-left`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 px-4 md:px-8 pb-14 ${styles.paddingX}`}>
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="px-2 py-2">
                <FeedbackCard index={index} {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");