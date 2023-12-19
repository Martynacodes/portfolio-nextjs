"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After living my life emerged in classical music since the age of six, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">What fascinates me about programming</span> is
        the never-ending amount of knowledge to posses. I{" "}
        <span className="underline">love</span> learning the newest technologies
        and applying the knowledge in my projects. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span>
        I also work with TypeScript and PostgreSQL.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing the
        piano and training crossfit.
      </p>
    </motion.section>
  );
}
