"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import commonChest from "@/assets/commonChest.png";
import rareChest from "@/assets/rareChest.png";
import epicChest from "@/assets/epicChest.png";
import unknownChest from "@/assets/unknownChest.png";
import logoSB from "@/assets/logoSB.png";

const chestCycle =
  "CCRCRRCCRCRCCCRCRCECCRCCRRCCCECRCCCRCCCRCRCCCRCECRCCRCERCRCE";

const explanationText = `
Besonderheit im Truhen-Zyklus:

Im aktuellen Truhen-Zyklus gibt es eine interessante Besonderheit. Ein Teil des Zyklus wiederholt sich, was zu einer möglichen Mehrdeutigkeit bei der Vorhersage führen kann.

Die sich wiederholende Sequenz ist: CRCCCRCCCRCRCCCRCE

Diese Sequenz taucht zweimal im Zyklus auf:
1. Von Position 31 bis 49
2. Von Position 39 bis 57 (überlappt mit dem Ende des Zyklus und dem Anfang)

Was bedeutet das für dich?
Wenn deine letzten Truhen genau dieser Sequenz entsprechen, könnte sich deine aktuelle Position an zwei verschiedenen Stellen im Zyklus befinden. In solchen Fällen wählt unser Vorhersage-Tool standardmäßig die früheste mögliche Position.

Um eine genauere Vorhersage zu erhalten, ist es hilfreich, wenn du mehr als 18 Truhen eingibst. Dies ermöglicht es dem Tool, den genauen Kontext zu bestimmen und die korrekte Position im Zyklus zu identifizieren.

Beachte: Diese Besonderheit betrifft nur einen kleinen Teil des Zyklus. Für die meisten Sequenzen gibt es eine eindeutige Position im Zyklus.
`;

/* start ChestPredictor component */
export default function ChestPredictor() {
  const [lastChests, setLastChests] = useState<string[]>([]);
  const [nextChest, setNextChest] = useState<"C" | "R" | "E" | null>(null);
  const [cyclePosition, setCyclePosition] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const chestImages: Record<"C" | "R" | "E", StaticImageData> = {
    C: commonChest,
    R: rareChest,
    E: epicChest,
  };

  /* start addChest function */
  const addChest = (type: "C" | "R" | "E") => {
    const newChests = [...lastChests, type].slice(-10);
    setLastChests(newChests);
    predictNextChest(newChests);
  }; /* end addChest function */

  /* start removeChest function */
  const removeChest = (index: number) => {
    const newChests = lastChests.filter((_, i) => i !== index);
    setLastChests(newChests);
    predictNextChest(newChests);
  }; /* end removeChest function */

  /* start findPatternPosition function */
  const findPatternPosition = (cycle: string, input: string): number => {
    const cycleLength = cycle.length;
    const inputLength = input.length;

    for (let i = 0; i < cycleLength; i++) {
      let match = true;
      for (let j = 0; j < inputLength; j++) {
        if (cycle[(i + j) % cycleLength] !== input[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    }
    return -1;
  }; /* end findPatternPosition function */

  /* start predictNextChest function */
  const predictNextChest = (chests: string[]) => {
    if (chests.length === 0) {
      setNextChest(null);
      setCyclePosition(null);
      return;
    }

    const input = chests.join(""); // Alle Elemente verwenden
    console.log("Eingabe (alle):", input);

    const cycleIndex = findPatternPosition(chestCycle, input);
    console.log("Übereinstimmung gefunden bei Index:", cycleIndex);

    if (cycleIndex === -1) {
      console.log("Keine Übereinstimmung gefunden");
      setNextChest(null);
      setCyclePosition(null);
      return;
    }

    const nextIndex = (cycleIndex + input.length) % chestCycle.length;
    const nextChestType = chestCycle[nextIndex] as "C" | "R" | "E";
    console.log("Nächste Truhe bei Index:", nextIndex, "Typ:", nextChestType);

    setNextChest(nextChestType);
    setCyclePosition(cycleIndex);
  }; /* end predictNextChest function */

  /* start clearAllChests function */
  const clearAllChests = () => {
    setLastChests([]);
    setNextChest(null);
    setCyclePosition(null);
  }; /* end clearAllChests function */

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-5xl mx-auto">
        {/* LogoSB Container */}
        <div className="flex justify-center mb-8 mt-8">
          <Image
            src={logoSB}
            alt="Squad Busters Logo"
            width={400}
            height={200}
            className="mt-4"
          />
        </div>
        {/* LogoSB Container */}

        <div className="flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl font-serif text-center font-bold mb-4">
            Verfolge deine Truhen in Squad Busters
          </h1>
          <p className="mb-6 text-white/70 text-center max-w-2xl">
            Füge deine letzten 3 bis 5 Truhen in den Truhen-Tracker unten ein, und
            BusterTrack wird dir deine nächste Truhe und aktuelle Position im
            Truhen-Zyklus anzeigen.
          </p>
          {/* start text Besonderheit im Truhen-Zyklus */}
          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {showExplanation
                ? "Erklärung ausblenden"
                : "Besonderheit im Truhen-Zyklus"}
            </button>
            {showExplanation && (
              <div className="mt-4 bg-gray-800 p-4 rounded w-full max-w-3xl">
                <pre className="whitespace-pre-wrap">{explanationText}</pre>
              </div>
            )}
          </div>
          {/* end text Besonderheit im Truhen-Zyklus */}

        </div>

        {/* start next chest prediction */}
        <div className="mb-2">
          <h2 className="text-3xl lg:text-4xl font-serif text-center font-bold mt-2">
            Nächste Truhe!
          </h2>
          <div className="w-full h-64 flex items-center justify-center">
            {nextChest ? (
              <Image
                src={chestImages[nextChest]}
                alt={`${nextChest} Chest`}
                width={160}
                height={160}
                className="object-contain"
              />
            ) : (
              <Image
                src={unknownChest}
                alt="Unknown Chest"
                width={160}
                height={160}
                className="object-contain"
              />
            )}
          </div>
        </div>
        {/* end next chest prediction */}

        {/* start last chests display */}
        <div className="lg:container mb-8">
          <h2 className="text-2xl font-bold mb-4">Letzte Truhen</h2>
          <div className="grid grid-cols-5 gap-1">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="relative w-24 h-24">
                  <div className="w-full h-full flex items-center justify-center">
                    {lastChests[index] ? (
                      <Image
                        src={chestImages[lastChests[index] as "C" | "R" | "E"]}
                        alt={`${lastChests[index]} Chest`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={unknownChest}
                        alt="Unknown Chest"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    )}
                  </div>
                  {lastChests[index] && (
                    <button
                      onClick={() => removeChest(index)}
                      className="absolute top-0 left-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 text-xs"
                    >
                      X
                    </button>
                  )}
                </div>
              ))}
          </div>
          {/* start clear all button */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={clearAllChests}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Alle Truhen löschen
            </button>
          </div>
          {/* end clear all button */}
        </div>
        {/* end last chests display */}

        {/* start add chest buttons */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Truhe hinzufügen</h2>
          <div className="flex justify-center space-x-4">
            {[
              { type: "C" as const, label: "Common" },
              { type: "R" as const, label: "Rare" },
              { type: "E" as const, label: "Epic" },
            ].map((chest) => (
              <button
                key={chest.type}
                onClick={() => addChest(chest.type)}
                className="w-20 h-20 flex flex-col items-center justify-center"
              >
                <Image
                  src={chestImages[chest.type]}
                  alt={`${chest.label} Chest`}
                  width={80}
                  height={80}
                />
                <span className="text-xs mt-1">{chest.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* end add chest buttons */}

        {/* start chest cycle display */}
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">
            Truhen-Zyklus (August 2024)
          </h2>
          <div className="grid grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-1 min-w-max">
            {chestCycle.split("").map((chest, index) => (
              <div
                key={index}
                className={`w-15 h-15 flex flex-col items-center justify-center relative
                  ${cyclePosition !== null && index === (cyclePosition + lastChests.length - 1) % chestCycle.length ? "ring-2 ring-green-500" : ""}`}
              >
                <span className="absolute top-0 left-center text-xl font-bold text-shadow-glow-cyan">
                  {index + 1}
                </span>
                <Image
                  src={chestImages[chest as "C" | "R" | "E"]}
                  alt={`${chest} Chest`}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
        {/* end chest cycle display */}
      </div>
    </div>
  );
}
/* end ChestPredictor component */