"use client";

import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Titeltext } from "@/components/Titeltext";
import { Button } from "@/components/Button";

/// Eine Liste von Portfolio-Elementen mit ID, Titel, Bild und Beschreibung.
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

/**
 * @ brief Komponente zur Darstellung eines einzelnen Portfolio-Elements.
 * 
 * @ param item Das Portfolio-Element, das angezeigt werden soll.
 * @ return Ein JSX-Element, das das Portfolio-Element darstellt.
 */
const Single = ({ item }: { item: typeof items[number] }) => { // Typisierung des Props
  const ref = useRef<HTMLDivElement>(null); ///< Referenz auf das Div-Element

  // Verwendet das useScroll-Hook, um den Scrollfortschritt zu verfolgen
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Transformiert den Scrollfortschritt in eine y-Position
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" /> {/* Verwendung von item */}
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2> {/* Verwendung von item */}
            <p>{item.desc}</p> {/* Verwendung von item */}
            <Button>See Demo</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * @ brief Die Portfolio-Komponente, die eine Liste von Portfolio-Elementen mit einem Fortschrittsbalken anzeigt.
 * 
 * @ return Ein JSX-Element, das die Portfolio-Übersicht darstellt.
 */
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null); ///< Referenz auf das Div-Element

  // Verwendet das useScroll-Hook, um den Scrollfortschritt zu verfolgen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Verwendet useSpring, um eine sanfte Skalierung des Fortschrittsbalkens zu erzeugen
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} /> /* item wird hier korrekt übergeben */
      ))}
    </div>
  );
};

export default Portfolio;