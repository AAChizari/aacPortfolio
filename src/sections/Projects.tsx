import { Card } from "@/components/Card";
import { Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/arrow-up-right.svg";

import acaReactDisplay from "@/assets/projektImages/acaReactDisplay.png";
import sbDisplay from "@/assets/projektImages/sbDisplay.png";
import sultanMarketWeb from "@/assets/projektImages/sultanDisplay.png";
import portfolioDisplay from "@/assets/projektImages/portfolioDisplay.png";

const portfolioProjects = [
  {
    company: "Amir A. Chizari",
    year: "2024",
    title: "acaReact B.Eng",
    results: [
      { title: "Entwicklung einer Android Applikation." },
      { title: "Ermittlung motorisch-kognitiver Fähigkeiten." },
      { title: "Entwickel für Fachliche Zwecke." },
    ],
    link: "",
    image: acaReactDisplay,
  },
  {
    company: "Amir A. Chizari",
    year: "2024",
    title: "SquadTracker",
    results: [
      { title: "Entwicklung einer Web Applikation." },
      { title: "Ermittlung der fortlaufenden chestcycle." },
    ],
    link: "/squadTracker",
    image: sbDisplay,
  },
  {
    company: "Amir A. Chizari",
    year: "2024",
    title: "SultanMarket Web",
    results: [
      { title: "Entwicklung einer Web Applikation." },
      { title: "Lokales-Lebensmittel Geschäft im Herzen Spandaus" },
    ],
    link: "https://aachizari.github.io/sultanMarketWeb/",
    image: sultanMarketWeb,
  },
  {
    company: "Amir A. Chizari",
    year: "2024",
    title: "Portfolio",
    results: [
      { title: "Entwicklung meiner persönlichen Webseite." },
      { title: "erlernen von Next.js, Tailwind, Framer Motion" },
      { title: "Presentation meiner Projekte" },
    ],
    link: "/portfolio",
    image: portfolioDisplay,
  },
];

export const Projects = () => {
  return (
    <div className="py-20 lg:py-28 md:px-4 lg:px-12">
      <div className="container">
        <Text
          colorTitle="Projekte"
          className="text-center font-semibold uppercase"
        />
        <Text
          title="Meine Arbeiten"
          className="text-center font-serif"
        />
        <Text
          description="Hier sind einige meiner Projekte"
          className="text-center"
        />
        <div className="mt-10 md:mt-20 space-y-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-zinc-800 px-8 pt-9 pb-0 md:px-12 md:pt-12 lg:px-16 lg:pt-16 rounded-3xl overflow-hidden sticky top-24"
              style={{ top: `calc(84px + ${index * 40}px)` }}
            >
              <div className="lg:flex lg:items-start lg:gap-12">
                <div className="lg:flex-1 lg:pr-8">
                  <div className="uppercase tracking-wide bg-gradient-to-r from-[#FFB16D] to-[#EC6F00] bg-clip-text text-transparent text-sm font-semibold mb-4 md:mb-4 lg:mb-6">
                    {project.company} • {project.year}
                  </div>
                  <h3 className="text-xl md:text-3xl lg:text-3xl font-serif font-extrabold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="h-px bg-white/10 mb-4"></div>
                  <ul className="space-y-3 mb-8">
                    {project.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-white/50 text-sm md:text-base lg:text-lg"
                      >
                        <span className="w-1.5 h-1.5 bg-[#EC6F00] rounded-full mr-3"></span>
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-8 lg:mb-16">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center w-full px-6 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors "
                    >
                      Visit Live Site
                      <ArrowIcon className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:flex-1 lg:-mr-6 lg:-mb-6 mt-8 lg:mt-0">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover object-left-top lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
