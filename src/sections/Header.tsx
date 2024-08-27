"use client";

import Link from "next/link";
import LogoIcon from "@/assets/logo1.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition"
              >
                Startseite
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white transition"
              >
                Über mich
              </button>
              <Link
                href="/projects"
                className="text-white/70 hover:text-white transition"
              >
                Projekte
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="h-full w-full" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#000000]/70 rounded-b-2xl border-t border-white/15 py-2 md:hidden">
            <nav className="flex flex-col items-center">
              <Link
                href="/"
                className="py-2 text-xl font-bold text-white/70 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Startseite
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="py-2 text-xl font-bold text-white/70 hover:text-white transition"
              >
                Über mich
              </button>
              <Link
                href="/projects"
                className="py-2 text-xl font-bold text-white/70 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Projekte
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};