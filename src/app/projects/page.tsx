import "./page.scss";
import { Header } from "@/sections/Header";
import Parallax from "@/sections/sectionProjects/parallax";
import Portfolio from "@/sections/sectionProjects/portfolio";
import PageTransition from "@/sections/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Header />
      <section id="Services">
        <Parallax type="services" />
      </section>
      <Portfolio />
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
    </PageTransition>
  );
}
