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
    title: "Graduated bootcamp",
    location: "Online",
    description:
      "I graduated a web developer bootcamp where I learned HTML, CSS, JavaScript, React, Node.js, MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "I worked with individual clients and small businesses creating websites for their needs.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Frontend & CRO Engineer",
    location: "Remote",
    description:
      "I worked for an agency based in NYC. My main projects included working for such clients as Tommy Hilfiger, Wharton School, and Christie's auction house.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
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
