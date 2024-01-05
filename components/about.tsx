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
        Skilled Web Developer, specialized in both front-end and back-end
        development, with particular expertise in{" "}
        <span className="font-medium">
          React, Next.js, MongoDB, and Node.js
        </span>
        .{" "}
        <span className="italic">
          Self-taught and adept in a broad spectrum of technologies, including
        </span>{" "}
        <span className="font-medium">
          HTML5, CSS3, JavaScript, TypeScript, Git, React, Next.js, Node.js,
          Bootstrap, Postgres, and Adobe Target.
        </span>
        <br></br>
        Experienced in collaborating with diverse, cross-functional teams to
        deliver secure, scalable, and innovative web applications.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing the
        piano and training crossfit.
      </p>
    </motion.section>
  );
}
