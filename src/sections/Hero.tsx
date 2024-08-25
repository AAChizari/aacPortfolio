"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import memojiImage from "@/assets/aacEmoji.png";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ButtonSkill } from "@/components/ButtonSkill";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(0,153,153,0.08)_15%,rgba(0,153,153,0.2)_78%,transparent)]"></div>

      {/* start ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className=" absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className=" absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className=" absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className=" h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* end ring 1 */}

      {/* start ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className=" absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/* end ring 2 */}

      {/* start ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className=" absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <div className=" absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className=" absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      </motion.div>
      {/* end ring 3 */}

      <div className=" py-36 container relative mt-16">
        {/* start image */}
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px] md:size-auto"
            alt="Person on Laptop"
            width={200}
            height={200}
          />
        </div>
        {/* end image */}
        <h1 className=" font-serif text-3xl md:text-6xl md:leading-none tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text text-center">
        Amir Aschkan Chizari
        </h1>
        <p className=" text-lg md:text-xl text-white/70 mt-4 text-center max-w-lg mx-auto">
        Absolvent der Technischen Informatik im Bereich Embedded Systems.
        </p>
        <div className="flex justify-center mt-5">
          <Link href="/projects">
            <ButtonSkill>👋 Projekte erkunden</ButtonSkill>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};