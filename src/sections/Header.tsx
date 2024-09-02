"use client";

import Link from "next/link";
import LogoIcon from "@/assets/logo2.svg";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur md:hidden"></div>
      <div className="container">
        <div className="flex justify-center items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-sm mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 md:block"></div>
          <div className="md:mr-6 lg:mr-6">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/70 hover:text-white transition"
              >
                Startseite
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white transition"
              >
                Über mich
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/70 hover:text-white transition"
              >
                Projekte
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};