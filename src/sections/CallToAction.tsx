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
  }, []);
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
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-[#009999]/15 py-24 rounded-xl overflow-hidden relative group"
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
            className="absolute inset-0 bg-[#009999] bg-opacity-30 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[#009999] bg-opacity-30 bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              Page in progress.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-[#009999]/70 px-4 mt-5 tracking-tighter">
              Page in progress.
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={copyEmailToClipboard}
                className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0099996b] to-[#009999] shadow-[0px0px_12px#8c45ff]"
              >
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-[#009999] absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-[#009999] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_#009999_inset] rounded-lg"></div>
                </div>
                {isCopied ? "E-Mail kopiert!" : "Contact Me"}{" "}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
