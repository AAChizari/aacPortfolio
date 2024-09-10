"use client";

import Image from "next/image";
import { Text } from "@/components/Text";
import { SkillItem } from "@/components/techImages";

import IOAnalytica from "@/assets/logoIOanalytica.png";
import logoBHT from "@/assets/logoBHT.png";

import { useRef } from "react";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export const AboutPage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const borderedDivRef = useRef<HTMLDivElement>(null);
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const cvData = [
    {
      image: IOAnalytica,
      date: "September 2021 - Februar 2023",
      title: "Werkstudent",
      description: "IT-Sicherheit & Produktentwicklung: Modellierung und Implementierung von Sicherheitsprodukten für Penetrationstests, Hardwareauswahl, Endtests. FDM 3D-Druck: Erfahrung mit FDM-Verfahren, CAD-Tools für Gehäuseentwicklung. Technische Dokumentation: Erstellung und Pflege technischer Dokumentationen. Einblicke: Ansible, Cloud Engineering.",
      techStack: ["Windows", "Linux", "macOS", "GitHub", "Git", "Docker", "StarUML", "Fusion 360", "Adobe Photoshop", "MS Office", "Overleaf", "Markdown"],
    },
    {
      image: IOAnalytica,
      date: "April 2021 - August 2021",
      title: "Praktikant",
      description: "Systemadministration Entwurf und Modellierung von Bauteilen mit Autodesk Fusion 360",
      techStack: ["Windows", "Linux", "macOS", "GitHub", "Git", "Docker", "StarUML", "Fusion 360", "Adobe Photoshop", "MS Office", "Overleaf", "Markdown"],
    },
    {
      image: logoBHT,
      date: "2015-2024",
      title: "Bachelor of Engineering",
      description: "Meine Abschlussarbeit konzentrierte sich auf die Entwicklung einer App als Reaktionsmessgerät für die Ermittlung motorisch-kognitiver Fähigkeiten",
      techStack: ["Android Studio", "Visual Studio", "Kotlin", "C", "C++", "Linux", "macOS", "GitHub", "Git", "Firebase", "StarUML", "Overleaf", "Markdown"],
    },
  ];

  const filterSkills = (skillNames: string[]) => {
    return SkillItem.skills.filter((skill) => skillNames.includes(skill.name));
  };

  return (
    <section className="py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-[#EC6F00]/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <Text colorTitle="Lebenslauf" className="text-center" />
          <Text title="Werdegang" className="text-center font-semibold" />
          <Text description="Schaue dir meinen Lebenslauf an" className="text-center mb-12" />

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {cvData.map((item, index) => (
              <li key={index}>
                {index > 0 && <hr className="bg-[#EC6F00]" />}
                <div className="timeline-middle">
                  <div className="w-12 h-12 rounded-full border-2 border-[#EC6F00] bg-zinc-700 flex items-center justify-center">
                    <Image src={item.image} alt={item.title} width={32} height={32} className="rounded-full" />
                  </div>
                </div>
                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 mt-5 md:${index % 2 === 0 ? 'text-end' : 'text-start'}`}>
                  <time className="font-mono italic text-[#FFB16D]">{item.date}</time>
                  <div className="text-lg md:text-xl font-black ">{item.title}</div>
                  <p className="text-zinc-300 mt-2 text-left">{item.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {filterSkills(item.techStack).map((skill) => (
                      <Image
                        key={skill.name}
                        src={skill.iconType}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                    ))}
                  </div>
                </div>
                {index < cvData.length - 1 && <hr className="bg-[#EC6F00]" />}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;