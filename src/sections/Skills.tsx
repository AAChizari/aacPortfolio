"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Text } from "@/components/Text";
import { FrameEffect } from "@/components/FrameEffect";

import androidStudioIcon from "@/assets/iconSkills/androidStudio.png";
import cLogoIcon from "@/assets/iconSkills/C_Logo.png";
import cPlusPlusIcon from "@/assets/iconSkills/c++.png";
import css3Icon from "@/assets/iconSkills/css3.png";
import dockerIcon from "@/assets/iconSkills/docker.png";
import firebaseIcon from "@/assets/iconSkills/firebase.png";
import framerMotionIcon from "@/assets/iconSkills/framerMotion.png";
import fusion360Icon from "@/assets/iconSkills/fusion360.png";
import gitIcon from "@/assets/iconSkills/Git.png";
import githubIcon from "@/assets/iconSkills/github.png";
import jsIcon from "@/assets/iconSkills/js.png";
import kotlinIcon from "@/assets/iconSkills/kotlin.png";
import linuxIcon from "@/assets/iconSkills/linux.png";
import macOSIcon from "@/assets/iconSkills/macOS.png";
import markdownIcon from "@/assets/iconSkills/markdown.png";
import msOfficeIcon from "@/assets/iconSkills/ms-office.png";
import nextIcon from "@/assets/iconSkills/next.png";
import overleafIcon from "@/assets/iconSkills/overleaf.png";
import photoshopIcon from "@/assets/iconSkills/photoshop.png";
import reactIcon from "@/assets/iconSkills/react.png";
import starUmlIcon from "@/assets/iconSkills/Staruml.png";
import tailwindIcon from "@/assets/iconSkills/Tailwind.png";
import tsIcon from "@/assets/iconSkills/ts.png";
import vsIcon from "@/assets/iconSkills/vs.png";
import windowsIcon from "@/assets/iconSkills/windows.png";

export const skillCategories = {
  entwicklungsumgebungen: [
    { name: "Android Studio", icon: androidStudioIcon, level: 70 },
    { name: "Visual Studio", icon: vsIcon, level: 80 },
  ],
  programmiersprachen: [
    { name: "Kotlin", icon: kotlinIcon, level: 60 },
    { name: "C", icon: cLogoIcon, level: 90 },
    { name: "C++", icon: cPlusPlusIcon, level: 70 },
    { name: "JavaScript", icon: jsIcon, level: 80 },
    { name: "TypeScript", icon: tsIcon, level: 70 },
  ],
  betriebssysteme: [
    { name: "Windows", icon: windowsIcon, level: 90 },
    { name: "Linux", icon: linuxIcon, level: 80 },
    { name: "macOS", icon: macOSIcon, level: 70 },
  ],
  webTechnologien: [
    { name: "CSS", icon: css3Icon, level: 90 },
    { name: "React.js", icon: reactIcon, level: 80 },
    { name: "Next.js", icon: nextIcon, level: 70 },
    { name: "Tailwind CSS", icon: tailwindIcon, level: 80 },
    { name: "Framer Motion", icon: framerMotionIcon, level: 70 },
  ],
  versionskontrolle: [
    { name: "GitHub", icon: githubIcon, level: 90 },
    { name: "Git", icon: gitIcon, level: 80 },
  ],
  cloudUndInfrastruktur: [
    { name: "Firebase", icon: firebaseIcon, level: 90 },
    { name: "Docker", icon: dockerIcon, level: 80 },
  ],
  designUndModellierung: [
    { name: "StarUML", icon: starUmlIcon, level: 80 },
    { name: "Fusion 360", icon: fusion360Icon, level: 80 },
    { name: "Adobe Photoshop", icon: photoshopIcon, level: 90 },
  ],
  produktivitaetstools: [
    { name: "MS Office", icon: msOfficeIcon, level: 90 },
    { name: "Overleaf", icon: overleafIcon, level: 80 },
    { name: "Markdown", icon: markdownIcon, level: 90 },
  ],
};

export const Skills = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const categories = Object.keys(skillCategories);

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const currentCategory = categories[
    currentCategoryIndex
  ] as keyof typeof skillCategories;
  const currentSkills = skillCategories[currentCategory];

  return (
    <div className="container mt-24">
      <div className="flex flex-col gap-8 justify-center mt-24">
        <h1 className="text-center font-serif text-4xl md:text-6xl md:leading-none tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text">
          SKILLS
        </h1>
        <Text
          description="Technologien und Tools, die ich bisher verwendet habe, um zu entwickeln."
          descriptionSize="text-lg"
          descriptionFont="font-semibold"
          descriptionPadding="p-4"
          descriptionPosition="text-center"
        />

        <FrameEffect
          className="relative w-full h-[500px]"
          borderColor="#009999"
          shadowColor="#009999"
          backgroundColor="#001f1f"
          padding="p-3"
          borderRadius="rounded-lg"
          shadowIntensity={5}
        >
          {/* Navigationspfeile */}
          <button
            onClick={prevCategory}
            className="absolute top-2 left-2 text-white text-2xl"
          >
            ←
          </button>
          <button
            onClick={nextCategory}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            →
          </button>

          {/* Kategorie-Titel */}
          <Text
            title={currentCategory.toUpperCase()}
            titleSize="text-2xl"
            titleFont="font-bold"
            titlePadding="p-4"
            titlePosition="text-center"
          />
          {/* Schwebende Logos */}
          {currentSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="absolute"
              initial={{ x: Math.random() * 400, y: Math.random() * 400 }}
              animate={{
                x: Math.random() * 400,
                y: Math.random() * 400,
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={skill.level}
                height={skill.level}
                className="hover:scale-110 transition-transform"
              />
            </motion.div>
          ))}
        </FrameEffect>
      </div>
    </div>
  );
};
