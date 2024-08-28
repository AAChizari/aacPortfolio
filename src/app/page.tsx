import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { LogoTicker } from "@/sections/LogoTicker";
import { CallToAction } from "@/sections/CallToAction";
import { Comments } from "@/sections/Comments";
import { Biography } from "@/sections/Biograpy";
import { AboutPage } from "@/sections/sectionsAbout/Hero";
import { Scroll } from "@/sections/Scroll";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Biography />
      <Scroll />
      <AboutPage />
      <Scroll />
      <Skills />
      <Scroll />
      <CallToAction />
      <Footer />

    </>
   );
}