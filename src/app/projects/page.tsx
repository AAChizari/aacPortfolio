import "./page.scss";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import PropTypes from 'prop-types';
import Parallax from "@/sections/sectionProjects/parallax";
import Cursor from "@/sections/BiblioAAC/cursor";
import Services from "@/sections/BiblioAAC/services";
import Portfolio from "@/sections/sectionProjects/portfolio";
import Contact from "@/sections/BiblioAAC/contact";

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