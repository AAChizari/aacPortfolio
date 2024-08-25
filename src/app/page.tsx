import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { LogoTicker } from "@/sections/LogoTicker";
import { CallToAction } from "@/sections/CallToAction";
import { Comments } from "@/sections/Comments";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Comments/>
      <Footer />
    </>
  );
}