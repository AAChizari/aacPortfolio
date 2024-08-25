import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { LogoTicker } from "@/sections/LogoTicker";
import { CallToAction } from "@/sections/CallToAction";
import { Comments } from "@/sections/Comments";
import PageTransition from "@/sections/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Header />
      <Hero />
      <Footer />
    </PageTransition>
  );
}