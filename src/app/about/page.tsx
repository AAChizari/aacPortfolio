import { Header } from "@/sections/Header";
import Hero from "@/sections/sectionsAbout/Hero";
import { Footer } from "@/sections/Footer";
import PageTransition from "@/sections/PageTransition";



export default function Home() {
  return (
    <PageTransition>
      <Header />
      <Hero />
      <Footer/>
    </PageTransition>
  );
}
