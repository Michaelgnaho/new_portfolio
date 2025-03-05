import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
} from "../assets";
import projImg0 from "../assets/snapPRoject.PNG";
import projImg1 from "../assets/tindog_snapshot.PNG";
import projImg2 from "../assets/corprate_snaphot.PNG";
import projImg3 from "../assets/mydos_snapshot.PNG";
import projImg4 from "../assets/magbank.PNG";
import adunni from "../assets/adunni.png";
import ecss from "../assets/ecss.png";
import netrix from "../assets/nextrix.png";
import greenJanitor from "../assets/green.png";
import projImg5 from "../assets/news_letter_snapshot.PNG";
import projImg6 from "../assets/simple _form.PNG";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Software Engineer",
    icon: backend,
  },
  {
    title: "Spoken Word Artiste",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Enovalab",
    icon: projImg0,
    iconBg: "#383E56",
    date: "Sept 2024 - Present",
    location: "Lagos, Nigeria",
    points: [
      "Spearheaded digital transformation initiatives by developing sophisticated UI components using React.js for global trade platforms.",
      "Engineered robust backend solutions with Node.js, creating optimized data models to streamline complex trade processes.",
      "Collaborated with cross-functional teams to enhance application performance and user experience in digital trade ecosystems.",
      "Implemented advanced state management and responsive design techniques to create scalable web applications.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "ALX Africa",
    icon: projImg1,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - April 2024",
    location: "Lagos, Nigeria",
    points: [
      "Developed innovative UI components using React.js to digitize and simplify global trade processes.",
      "Designed and implemented comprehensive data models with Ruby on Rails to represent complex trade workflows.",
      "Participated in agile development methodologies, contributing to team productivity and project success.",
      "Created modular and reusable code components to improve development efficiency and application maintainability.",
    ],
  },
  {
    title: "Social Media Influencer",
    company_name: "ALX Africa",
    icon: projImg2,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    location: "Lagos, Nigeria",
    points: [
      "Developed and executed strategic social media content to enhance brand visibility and engagement.",
      "Created compelling narratives highlighting the institution's services and educational initiatives.",
      "Leveraged digital platforms to communicate organizational value propositions and reach target audiences.",
      "Analyzed social media metrics to optimize content strategy and audience interaction.",
    ],
  },
  {
    title: "Global Youth Ambassador",
    company_name: "Thierword",
    icon: projImg3,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    location: "London, UK",
    points: [
      "Represented global youth perspectives on Sustainable Development Goals (SDGs) at international forums.",
      "Focused on SDG 4 (Quality Education), developing innovative strategies to address educational challenges.",
      "Conducted in-depth research to propose actionable solutions for improving educational access and quality.",
      "Collaborated with United Nations representatives to advocate for youth-centric educational initiatives.",
      "Developed comprehensive research reports and presentations to support SDG 4 objectives.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Various Clients",
    icon: projImg4,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Delivered custom web and mobile applications tailored to diverse client requirements.",
      "Implemented cutting-edge technologies to enhance application performance and user experience.",
      "Managed end-to-end project lifecycles, ensuring timely delivery and exceeding client expectations.",
      "Provided technical consulting and solution design for startups and established businesses.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with this developer was an amazing experience. The delivery was on time, and the work exceeded expectations.",
    name: "Chinonso Okafor",
    designation: "CEO",
    company: "Enoverlab",
    image: "https://avatar.iran.liara.run/public/boy?username=Scott",
  },
  {
    testimonial:
      "Professional and dedicated, their work increased our website's traffic significantly.",
    name: "Adeola Adebayo",
    designation: "Manager",
    company: "Enoverlab",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    testimonial:
      "Highly recommend! Great communication and excellent technical skills.",
    name: "Fatimah Bello",
    designation: "Project Lead",
    company: "Enoverlab",
    image: "https://avatar.iran.liara.run/public/girl?username=Maria",
  },
];

const projects = [
  {
    name: "Next-Trix",
    description:
      "A full front-end app that craft innovative digital solutions that drive growth, engage customers, and elevate your brand in the digital landscape.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: netrix,
    source_code_link: "https://next-trix.vercel.app/",
  },
  {
    name: "green-janitors",
    description:
      "A full front-end app for Youth environmental allies standing guard for our planet's future. We show up wherever the environment faces danger, from protesting atomic testing to combating climate change and pollution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: greenJanitor,
    source_code_link: "https://green-janitor1.vercel.app/",
  },
  {
    name: "Adunni save a girl girl child",
    description:
      "A full front-end app for an NGO dedicated to nurturing and empowering young girls to achieve their dreams and build brighter futures..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: adunni,
    source_code_link: "https://www.adunni-save-a-girl-foundation.com.ng/",
  },
  {
    name: "ECSS",
    description:
      "A Personalized coaching website to help clients achieve their work-life balance",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: ecss,
    source_code_link: "https://ecss-nu.vercel.app/",
  },
  {
    name: "HiTask APP",
    description:
      "A full front-end app for tasks management with user authentication, dashboard, and several pages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: projImg0,
    source_code_link: "https://hi-tasks.com.ng/",
  },

  {
    name: "Front-end Corporate Website",
    description: "A demo of a website that offers web development services.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: projImg2,
    source_code_link: "https://corporate-website-doxw.vercel.app/",
  },
  {
    name: "MAG BANK",
    description: "A finance website for modern banking solutions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: projImg4,
    source_code_link: "https://mag-bank-1.vercel.app/",
  },
  {
    name: "Tindog App",
    description: "An app for buying and taking care of dogs.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: projImg1,
    source_code_link: "https://michaelgnaho.github.io/tindog_web/",
  },
  // {
  //   name: "Full Stack Todo App",
  //   description: "Allows users to manage their tasks easily.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "express",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: projImg3,
  //   source_code_link: "https://mydos-web-app.onrender.com",
  // },
  // {
  //   name: "Newsletter App",
  //   description:
  //     "A platform to design and manage newsletters.",
  //   tags: [
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "ejs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: projImg5,
  //   source_code_link: "https://news-letter-app-d357.onrender.com/",
  // },
  // {
  //   name: "Simple Form",
  //   description:
  //     "An app that features a simple form to add users and their ages.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "vite",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: projImg6,
  //   source_code_link: "https://simple-form-silk.vercel.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
