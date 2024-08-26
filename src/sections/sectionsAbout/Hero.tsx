"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { FrameEffect } from "@/components/FrameEffect";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ButtonSkill } from "@/components/ButtonSkill";
import ProfileImage from "@/assets/aac-profileMoji.png";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div>
      {/* CONTAINER */}
      <div className="h-full lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="h-full overflow-y-auto lg:w-2/3 xl:w-3/4">
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-16 md:gap-24 lg:gap-32">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col gap-2 justify-center">
              {/* BIOGRAPHY IMAGE */}
              <div className="relative w-60 h-60">
                <Image
                  src={ProfileImage}
                  alt="ProfileImage"
                  width={112}
                  height={112}
                  className="w-60 h-60 rounded-xl object-cover relative"
                />
              </div>
              {/* BIOGRAPHY TITLE */}
              <SectionHeader
                colorTitle="Biografie"
                colorTitleSize="text-3xl md:text-3xl "
                colorTitleFont="font-bold font-serif"
              />
              {/* BIOGRAPHY DESC */}
              <SectionHeader
                title="Ich bin ein Absolvent der Technischen Informatik mit einem
                Bachelor of Engineering im Bereich Embedded Systems. Als
                Werkstudent war ich für die Modellierung und Implementierung von
                IT-Sicherheitsprodukten sowie in der Erstellung technischer
                Dokumentationen verantwortlich. Meine Abschlussarbeit
                konzentrierte sich auf die Entwicklung einer
                Android-Applikation."
                titleSize="text-lg md:text-2xl"
              ></SectionHeader>
              {/* BIOGRAPHY QUOTE */}
              <SectionHeader
                description="Die Technologie ist das Werkzeug, mit dem wir die Zukunft
                gestalten."
                descriptionSize="text-lg md:text-2xl"
                descriptionFont="font-sans"
              ></SectionHeader>
              {/* BIOGRAPHY SIGN SVG*/}
              <div className="self-end">
                <svg
                  width="352"
                  height="177"
                  viewBox="0 0 352 177"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9747 140.036C17.4103 140.197 12.1484 146.301 11.0135 148.331C8.76688 152.348 13.2554 156.643 22.3029 158.836C40.5432 163.258 47.8371 154.124 56.0204 149.207C97.6686 124.182 140.233 98.1577 169.518 70.5126C188.047 53.0216 203.79 34.5912 215.42 16.215C223.22 3.89133 201.478 41.0124 194.217 53.3858C182.286 73.7201 174.944 94.0674 171.647 114.863C171.417 116.311 170.408 122.679 171.245 117.399C171.897 113.289 172.815 109.236 170.568 105.162C166.944 98.5916 159.396 91.3428 138.768 92.7897C87.5467 96.3827 46.7749 122.331 25.0142 138.432C15.5796 145.413 4.91587 153.451 2.26618 161.41C-0.71326 170.361 28.1708 170.534 43.2615 168.606C100.031 161.355 149.843 143.271 186.448 125.504C221.519 108.481 253.535 89.0278 274.743 68.7612C279.051 64.6452 331.027 7.27861 302.787 6.60077C290.44 6.30439 276.84 13.8969 270.415 16.8222C228.466 35.9213 192.804 57.5143 158.781 78.8092C137.238 92.2927 116.35 106.071 105.302 121.468C98.1845 131.388 86.4792 147.349 102.427 156.94C117.861 166.224 143.722 154.454 155.459 150.117C158.57 148.968 172.165 141.31 171.515 145.411C171.105 147.998 170.695 150.585 170.285 153.172C170.007 154.926 182.439 136.925 188.176 137.715C198.666 139.158 196.669 165.037 199.754 145.58C200.105 143.362 196.708 136.021 203.203 135.377C215.822 134.126 234.969 134.506 247.33 136.029C261.87 137.82 217.626 145.352 226.415 147.442C234.968 149.475 248.64 146.253 255.12 144.668C256.189 144.407 272.841 140.656 269.921 139.626C266.555 138.439 254.145 140.878 251.447 141.423C246.491 142.424 227.712 151.032 241.187 151.666C255.034 152.318 261.875 146.963 268.706 143.161C270.682 142.062 287.607 133.467 293.149 135.906C306.126 141.62 321.755 150.194 327.428 157.402"
                    stroke="#009999"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M347.225 149.146C339.378 151.107 329.382 153.469 328.156 157.271C327.676 158.762 328.632 154.272 328.702 153.827C329.631 147.968 330.312 142.146 334.422 136.442C337.888 131.632 344.758 127.32 345.556 122.286"
                    stroke="#009999"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M348.501 113C348.302 114.506 348.311 115.566 348.501 116.174"
                    stroke="#009999"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* BIOGRAPHY SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#009999"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#009999" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#009999"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{
                  delay: 0.2,
                }}
                className="font-serif text-3xl md:text-6xl md:leading-none tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text"
              >
                SKILLS
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap"
              >
                <ButtonSkill>Kotlin</ButtonSkill>
                <ButtonSkill>C</ButtonSkill>
                <ButtonSkill>JavaScript</ButtonSkill>
                <ButtonSkill>TypeScript</ButtonSkill>
                <ButtonSkill>CSS</ButtonSkill>

                <ButtonSkill>Windows</ButtonSkill>
                <ButtonSkill>Linux</ButtonSkill>

                <ButtonSkill>Firebase</ButtonSkill>
                <ButtonSkill>NOSQL</ButtonSkill>
                <ButtonSkill>SQL</ButtonSkill>

                <ButtonSkill>React.js</ButtonSkill>
                <ButtonSkill>Next.js</ButtonSkill>
                <ButtonSkill>SCSS</ButtonSkill>
                <ButtonSkill>Tailwind CSS</ButtonSkill>
                <ButtonSkill>Framer Motion</ButtonSkill>

                <ButtonSkill>Git</ButtonSkill>
                <ButtonSkill>Docker</ButtonSkill>
                <ButtonSkill>Ansible</ButtonSkill>
                <ButtonSkill>Cloud Engineering</ButtonSkill>

                <ButtonSkill>starUML</ButtonSkill>
                <ButtonSkill>Fusion 360</ButtonSkill>
                <ButtonSkill>stable diffusion</ButtonSkill>
                <ButtonSkill>Adobe Photoshop</ButtonSkill>
                <ButtonSkill>Adobe Premiere Pro</ButtonSkill>
                <ButtonSkill>Figma</ButtonSkill>

                <ButtonSkill>MS Office</ButtonSkill>
                <ButtonSkill>Latex</ButtonSkill>
                <ButtonSkill>Markdown</ButtonSkill>
              </motion.div>
              {/* SKILL SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#009999"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#009999" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#009999"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div
              className="flex flex-col gap-8 justify-center pb-24"
              ref={experienceRef}
            >
              {/* EXPERIENCE TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                transition={{ delay: 0.2 }}
                className=" py-2 font-serif text-3xl md:text-6xl md:leading-none tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text"
              >
                LAUFBAHN
              </motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                className="flex flex-col gap-10"
              >
                {/* EXPERIENCE LIST ITEM */}
                <div className="flex flex-col md:flex-row justify-between min-h-[20rem] md:h-auto">
                  {/* LEFT */}
                  <FrameEffect className="w-full md:w-2/5 mb-4 md:mb-0">
                    <div className="flex flex-col h-full">
                      {/* JOB TITLE */}
                      <div className="bg-[#009999] p-4 font-semibold font-serif rounded-t-lg text-2xl">
                        WERKSTUDENT
                      </div>
                      {/* JOB DATE */}
                      <div className="p-4 text-[#009999] text-2xl font-semibold">
                        September 2021 - Februar 2023
                      </div>
                      {/* JOB DESC */}
                      <div className="p-4 text-2xl flex-grow">
                        IT-Sicherheit & Produktentwicklung: Modellierung und
                        Implementierung von Sicherheitsprodukten für
                        Penetrationstests, Hardwareauswahl, Endtests. FDM
                        3D-Druck: Erfahrung mit FDM-Verfahren, CAD-Tools für
                        Gehäuseentwicklung. Technische Dokumentation: Erstellung
                        und Pflege technischer Dokumentationen. Einblicke:
                        Ansible, Cloud Engineering.
                      </div>
                      {/* JOB COMPANY */}
                      <ButtonSkill>IO-Analytica</ButtonSkill>
                    </div>
                  </FrameEffect>
                  {/* CENTER */}
                  <div className="hidden md:flex w-1/5 justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-[#009999] rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-6 h-6 rounded-full ring-4 ring-[#009999] bg-white -left-2.5"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-full md:w-2/5"></div>
                </div>

                {/* EXPERIENCE LIST ITEM */}
                <div className="flex flex-col md:flex-row justify-between min-h-[20rem] md:h-auto">
                  {/* LEFT */}
                  <div className="w-full md:w-2/5"></div>
                  {/* CENTER */}
                  <div className="hidden md:flex w-1/5 justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-[#009999] rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-6 h-6 rounded-full ring-4 ring-[#009999] bg-white -left-2.5"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <FrameEffect className="w-full md:w-2/5 mb-4 md:mb-0">
                    <div className="flex flex-col h-full">
                      {/* JOB TITLE */}
                      <div className="bg-[#009999] p-4 font-semibold font-serif rounded-t-lg text-2xl">
                        PRAKTIKANT
                      </div>
                      {/* JOB DATE */}
                      <div className="p-4 text-[#009999] text-2xl font-semibold">
                        April 2021 - August 2021
                      </div>
                      {/* JOB DESC */}
                      <div className="p-4 text-2xl flex-grow">
                        Systemadministration Entwurf und Modellierung von
                        Bauteilen mit Autodesk Fusion 360 Bildungsweg
                      </div>

                      {/* JOB COMPANY */}
                      <ButtonSkill>IO-Analytica</ButtonSkill>
                    </div>
                  </FrameEffect>
                </div>

                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                  transition={{ delay: 0.2 }}
                  className=" py-2 font-serif text-3xl md:text-6xl md:leading-none tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text"
                >
                  BILDUNGSWEG
                </motion.h1>

                {/* EXPERIENCE LIST ITEM */}
                <div className="flex flex-col md:flex-row justify-between min-h-[20rem] md:h-auto">
                  {/* LEFT */}
                  <FrameEffect className="w-full md:w-2/5 mb-4 md:mb-0">
                    <div className="flex flex-col h-full">
                      {/* JOB TITLE */}
                      <div className="bg-[#009999] p-4 font-semibold font-serif rounded-t-lg text-2xl">
                        BACHLOR OF ENGINEERING
                      </div>
                      {/* JOB DATE */}
                      <div className="p-4 text-[#009999] text-2xl font-semibold">
                        2015 - 2024
                      </div>
                      {/* JOB DESC */}
                      <div className="p-4 text-2xl flex-grow">
                        Meine Abschlussarbeit konzentrierte sich auf die
                        Entwicklung einer App als Reaktionsmessgerät für die
                        Ermittlung motorisch-kognitiver Fähigkeiten
                      </div>
                      <ButtonSkill>BHT-Berlin</ButtonSkill>
                    </div>
                  </FrameEffect>
                  {/* CENTER */}
                  <div className="hidden md:flex w-1/5 justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-[#009999] rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-6 h-6 rounded-full ring-4 ring-[#009999] bg-white -left-2.5"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-full md:w-2/5"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER  hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2*/}
        <div className="hidden lg:block lg:w-1/2 xl:w-1/2 h-screen sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
