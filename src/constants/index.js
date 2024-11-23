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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Frontend Developer",
    company_name: "HiTasks",
    icon: projImg0,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Developed a full front-end task management app with user authentication and dashboards.",
      "Implemented responsive design to enhance user experience.",
      "Collaborated with team members to improve application performance and usability.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Various Clients",
    icon: projImg3,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Built and deployed custom web and mobile applications for clients.",
      "Enhanced website performance using optimized code and modern technologies.",
      "Maintained project timelines and ensured client satisfaction.",
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
    description:
      "A demo of a website that offers web development services.",
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
    description:
      "A finance website for modern banking solutions.",
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
    description:
      "An app for buying and taking care of dogs.",
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
  {
    name: "Full Stack Todo App",
    description: "Allows users to manage their tasks easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: projImg3,
    source_code_link: "https://mydos-web-app.onrender.com",
  },
  {
    name: "Newsletter App",
    description:
      "A platform to design and manage newsletters.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projImg5,
    source_code_link: "https://news-letter-app-d357.onrender.com/",
  },
  {
    name: "Simple Form",
    description:
      "An app that features a simple form to add users and their ages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: projImg6,
    source_code_link: "https://simple-form-silk.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };
