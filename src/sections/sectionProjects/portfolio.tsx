"use client";

import { useRef } from "react";
import "./portfolio.scss";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Titeltext } from "@/components/Titeltext";
import { Button } from "@/components/Button";
import logoSB from "@/assets/logoSB.png";
import logoAcaReact from "@/assets/logoAcaReact.png";
import logoSultanM from "@/assets/logoSultanM.png";
import Link from 'next/link'; // {{ edit_1 }} Importiere Link von Next.js

/// Eine Liste von Portfolio-Elementen mit ID, Titel, Bild und Beschreibung.
const items = [
  {
    id: 1,
    title: "SquadTracker",
    img: logoSB,
    desc: "Verfolge deine Truhen in Squad Busters.",
    link: "/squadTracker",
    name: "squadTracker"
  },
  {
    id: 2,
    title: "acaReact B.Eng-Abschlussarbeit",
    img: logoAcaReact,
    desc: "Entwicklung einer Android Applikation für die Ermittlung motorisch-kognitiver Fähigkeiten.",
    link: "",
    name: "inProgress"
  },
  {
    id: 3,
    title: "SultanMarket Website",
    img: logoSultanM,
    desc: "Entwicklung einer Website für ein Lokales-Lebensmittel Geschäft im Herzen Spandaus",
    link: "https://aachizari.github.io/sultanMarketWeb/",
    name: "Link"
  },
];

const Single = ({ item }: { item: (typeof items)[number] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Image src={item.img} alt={item.title} layout="responsive" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link href={item.link}>
              <Button>{item.name}</Button>
            </Link>
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
        <Single
          item={item}
          key={item.id}
        /> /* item wird hier korrekt übergeben */
      ))}
    </div>
  );
};

export default Portfolio;