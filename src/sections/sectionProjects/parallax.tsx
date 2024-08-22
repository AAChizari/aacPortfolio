"use client";

import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * @ brief Definiert die möglichen Werte für das `type`-Prop.
 */
interface ParallaxProps {
  type: "services" | "portfolio"; ///< Mögliche Werte für den Typ
}

/**
 * @ brief Die Parallax-Komponente, die einen Parallax-Effekt basierend auf dem Scrollfortschritt erzeugt.
 * 
 * @ param type Der Typ der Parallax-Darstellung, entweder "services" oder "portfolio".
 * @ return Ein JSX-Element, das den Parallax-Effekt darstellt.
 */
const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null); ///< Referenz auf das Div-Element

  // Verwendet das useScroll-Hook, um den Scrollfortschritt zu verfolgen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transformiert den Scrollfortschritt in y-Positionen für Text und Hintergrund
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #000000, rgb(0,153,153, 0.35)"
            : "linear-gradient(180deg, #000000, rgb(0,153,153, 0.35)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Projekte" : "In Arbeit"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;