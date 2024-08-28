"use client";

import { Text } from "@/components/Text";
import { FrameEffect } from "@/components/FrameEffect";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import IOAnalytica from "@/assets/logoIOanalytica.png";
import logoBHT from "@/assets/logoBHT.png";

export const AboutPage = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-16 md:gap-24 lg:gap-32">
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-8 justify-center pb-24" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-center font-serif text-4xl md:text-6xl md:leading-none tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text">
                LAUFBAHN
              </h1>
            </motion.div>

            {/* EXPERIENCE LIST */}
            <div className="flex flex-col gap-10">
              {/* EXPERIENCE LIST ITEM 1 */}
              <FrameEffect className="w-full mb-4">
                <div className="flex flex-col h-full">
                  <Text
                    colorTitle="WERKSTUDENT"
                    colorTitleSize="text-2xl"
                    colorTitleFont="font-bold"
                    colorTitlePosition="text-center"
                  />
                  <Text
                    normalText="IT-Sicherheit & Produktentwicklung: Modellierung und Implementierung von Sicherheitsprodukten für Penetrationstests, Hardwareauswahl, Endtests. FDM 3D-Druck: Erfahrung mit FDM-Verfahren, CAD-Tools für Gehäuseentwicklung. Technische Dokumentation: Erstellung und Pflege technischer Dokumentationen. Einblicke: Ansible, Cloud Engineering."
                    normalTextSize="text-lg"
                    normalTextFont="font-semibold"
                    normalTextPadding="p-4"
                  />
                  <Text
                    normalText="September 2021 - Februar 2023"
                    normalTextSize="text-lg"
                    normalTextFont="font-semibold"
                    normalTextPadding="p-4"
                    normalTextPosition="text-center"
                  />
                  <div className="flex justify-center">
                    <Image src={IOAnalytica} alt="IOAnalytica" width={100} height={100} />
                  </div>
                </div>
              </FrameEffect>

              {/* EXPERIENCE LIST ITEM 2 */}
              <FrameEffect className="w-full mb-4">
                <div className="flex flex-col h-full">
                  <Text
                    colorTitle="PRAKTIKANT"
                    colorTitleSize="text-2xl"
                    colorTitleFont="font-bold"
                    colorTitlePosition="text-center"
                  />
                  <Text
                    normalText="Systemadministration Entwurf und Modellierung von Bauteilen mit Autodesk Fusion 360 Bildungsweg"
                    normalTextSize="text-lg"
                    normalTextFont="font-semibold"
                    normalTextPadding="p-4"
                  />
                  <Text
                    normalText="April 2021 - August 2021"
                    normalTextSize="text-lg"
                    normalTextFont="font-semibold"
                    normalTextPadding="p-4"
                    normalTextPosition="text-center"
                  />
                  <div className="flex justify-center">
                    <Image src={IOAnalytica} alt="IOAnalytica" width={100} height={100} />
                  </div>
                </div>
              </FrameEffect>

              {/* EXPERIENCE LIST ITEM 3 */}
              <FrameEffect className="w-full mb-4">
                <div className="flex flex-col h-full">
                  <Text
                    colorTitle="BACHLOR OF ENGINEERING"
                    colorTitleSize="text-2xl"
                    colorTitleFont="font-bold"
                    colorTitlePosition="text-center"
                  />
                  <Text
                    normalText="Meine Abschlussarbeit konzentrierte sich auf die Entwicklung einer App als Reaktionsmessgerät für die Ermittlung motorisch-kognitiver Fähigkeiten"
                    normalTextSize="text-lg"
                    normalTextFont="font-semibold"
                    normalTextPadding="p-4"
                  />
                  <Text
                    normalText="2015 - 2024"
                    normalTextSize="text-lg"
                    normalTextFont="font-semibold"
                    normalTextPadding="p-4"
                    normalTextPosition="text-center"
                  />
                  <div className="flex justify-center">
                    <div className="inline-block bg-white rounded-full">
                      <Image src={logoBHT} alt="BHT-Berlin" width={200} height={200} />
                    </div>
                  </div>
                </div>
              </FrameEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;