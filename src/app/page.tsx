import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { CallToAction } from "@/sections/CallToAction";
import { Comments } from "@/sections/Comments";
import { Biography } from "@/sections/Biograpy";
import { AboutPage } from "@/sections/AboutPage";
import { Scroll } from "@/sections/Scroll";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/sectionsAbout/Contact";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Scroll />
      <Projects />
      <Tape />
      <Skills />
      <AboutPage />
      <CallToAction />
      <Footer />
    </>
  );
}
