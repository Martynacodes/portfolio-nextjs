import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AdminAppImg from "@/public/ADMINAPP.png";
import NomadDeskImg from "@/public/nomaddesk.png";
import AiAppImg from "@/public/AiApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Bootcamp",
    location: "Online",
    description:
      "Successfully completed a web developer bootcamp, where I honed my skills in HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Web Developer",
    location: "Freelance",
    description:
      "Responsible for creating efficient design and developing user-friendly screens using HTML, CSS3, React, Next.js,TypeScript, and Node JS. Used AJAX, JSON to send request to the server to check the functionality of the websites and for storing and exchanging information between browsers and servers. Worked on GIT as a version control. Utilized NPM scripts for build and test environments in a Node.js application. Worked with NoSQL databases, such as MongoDB, as well as with SQL databases - Postgres. Extensively used SASS (Syntactically awesome style sheets) while styling with CSS3. Involved in API development and integration.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Frontend & CRO Engineer",
    location: "Acronym Media",
    description:
      "Crafted fully-responsive web applications, meticulously translating designs from Figma into robust markup, ensuring exceptional UX. Engineered test experiences in Adobe Target and InteractionStudio/Salesforce, tailored to national and international luxury sector clients. Implemented substantial improvements to enhance the UX of client landing pages, utilizing JavaScript, TypeScript, and React.Developed various screens for the front end using React JS and used various predefined components from NPM (Node Package Manager) and Redux library. Extensively worked on ES6 new features such as Arrow functions, Classes, Iterators and Generators. Developed the UI responsible for creating efficient design and developing User Interaction screens using ReactJS, Redux-form, HTML5, CSS3, JavaScript, jQuery and JSON. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Web Developer",
    location: "Freelance",
    description:
      "Created responsive websites for individual clients and small businesses using JavaScript, TypeScript,React, Next.js, and Lit.js. Executed testing procedures, employing Jest and Mocha as the primary tools to strengthen the application's dependability and efficiency. Executed the deployment of web apps, leveraging platforms such as Netlify, Heroku, and Vercel, ensuring accessibility and optimal performance. Integrated third-party APIs to enhance application functionality and feature sets. Created responsive front-end user interfaces utilizing a range of tools including SCSS, TailwindCSS, Material UI, and Bootstrap to ensure an engaging and seamless user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Software Engineer",
    location: "XLR8 Development",
    description:
      "Developed full-stack applications for diverse clients, leveraging HTML5, CSS3, JavaScript, and TypeScript. Engineered client-facing application front ends using React, Angular, and Next.js. Implemented responsive user interfaces, utilizing frameworks such as SASS, TailwindCSS, and Material UI. Integrated and managed RESTful APIs, primarily focusing on Node.js and Python environments. Managed and manipulated data across various database systems, with PostgreSQL, MySQL, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - current",
  },
] as const;

export const projectsData = [
  {
    title: "NomadDesk",
    description:
      "I created a full-stack Next 13 app for booking coworking spaces around the world. CRUD functionality, authorization and authentication, booking.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    demoUrl: "https://coworking-booking-fullstack-app.vercel.app/",
    codeUrl: "https://github.com/Martynacodes/coworking-booking-fullstack-app",
    imageUrl: NomadDeskImg,
  },
  {
    title: "Admin Dashboard",
    description:
      "I build this Admin Dashboard app. It features various charts, data tables page and calendar integration. Built with React, Data Grid, Material UI.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    demoUrl:
      "https://admin-dashboard-react-lp8ec8st5-martynacodes-projects.vercel.app/",
    codeUrl: "https://github.com/Martynacodes/admin-dashboard-react-app",
    imageUrl: AdminAppImg,
  },
  {
    title: "AI Image Generator",
    description:
      "Fully responsive image creating app. App generate four image variations based on a text prompt. Built with OpenAI DALL-E API.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    demoUrl:
      "https://64ad73cd22f2e807e100b1b2--cozy-starlight-9eb433.netlify.app/",
    codeUrl: "https://github.com/Martynacodes/ai-image-generating-app",
    imageUrl: AiAppImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "jQuery",
  "Express",
  "AB Testing",
  "Adobe Target",
  "PostgreSQL",
  "Framer Motion",
] as const;
