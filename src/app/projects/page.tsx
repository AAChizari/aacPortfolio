import "./page.scss";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import PropTypes from 'prop-types';
import Parallax from "@/sections/sectionProjects/parallax";
import Portfolio from "@/sections/sectionProjects/portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="Services">
        <Parallax type="services" />
      </section>
      <Portfolio />
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
    </div>
  );
}