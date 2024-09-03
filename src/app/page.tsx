import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { CallToAction } from "@/sections/CallToAction";
import { Comments } from "@/sections/Comments";
import { Biography } from "@/sections/Biograpy";
import { AboutPage } from "@/sections/AboutPage";
import { Scroll } from "@/sections/Scroll";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/sectionsAbout/Contact";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <Scroll />
      <section id="projects">
        <Projects />
      </section>
      <Tape />
      <Skills />
      <section id="about">
        <AboutPage />
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}
