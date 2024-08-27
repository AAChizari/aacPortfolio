import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { LogoTicker } from "@/sections/LogoTicker";
import { CallToAction } from "@/sections/CallToAction";
import { Comments } from "@/sections/Comments";
import { AboutPage } from "@/sections/sectionsAbout/Hero";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section id="about">
        <AboutPage />
      </section>
      <Footer />
    </>
   );
}