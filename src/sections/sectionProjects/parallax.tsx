"use client";

import { useRef } from "react";
import Image from "next/image";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import starsBg from "@/assets/stars2.png";
import mountainBg from "@/assets/mountains.png";
import sunBg from "@/assets/sun.png";
import planetBg from "@/assets/planets.png";

interface ParallaxProps {
  type: "services" | "portfolio";
}

const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #000000, rgba(0,153,153, 0.35))"
            : "linear-gradient(180deg, #000000, rgba(0,153,153, 0.35))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Projekte" : "In Arbeit"}
      </motion.h1>
      <motion.div className="mountains">
        <Image src={mountainBg} alt="Mountains" layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div className="planets" style={{ y: yBg }}>
        <Image
          src={type === "services" ? planetBg : sunBg}
          alt={type === "services" ? "Planets" : "Sun"}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div style={{ x: yBg }} className="stars">
        <Image src={starsBg} alt="Stars" layout="fill" objectFit="cover" />
      </motion.div>
    </div>
  );
};

export default Parallax;