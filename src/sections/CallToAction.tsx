"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridlines from "@/assets/grid-lines.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef, RefObject, useEffect, useState } from "react";
import { ButtonSkill } from "@/components/ButtonSkill";
import { Text } from "@/components/Text";

const useRelativeMousePos = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]); // Fügen Sie updateMousePosition hier hinzu
  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePos(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  const copyEmailToClipboard = () => {
    const email = "amir.chizari.ac@gmail.com"; // Ersetzen Sie dies durch Ihre tatsächliche E-Mail-Adresse
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Setzt den Status nach 2 Sekunden zurück
    });
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
          <div
            className="absolute inset-0 bg-[#EC6F00] bg-opacity-30 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[#EC6F00] bg-opacity-30 bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <Text 
            title="Contact Me"
            className="text-center"
            />
            <Text
            colorTitle="Page in Progress"
            className="text-center"
            />

            <div className="flex justify-center mt-8">
              <ButtonSkill    
                onClick={copyEmailToClipboard}
                className="font-extrabold "
              >
                {isCopied ? "E-Mail kopiert!" : "Contact Me"}{" "}
              </ButtonSkill>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
