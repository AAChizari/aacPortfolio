"use client";

import { Text } from "@/components/Text";
import Image from "next/image";
import { motion } from "framer-motion";
import ProfileImage from "@/assets/aac-profileMoji.png";

export const Biography = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-2 justify-center">
        {/* BIOGRAPHY IMAGE */}
        <div className="relative w-60 h-60">
          <Image
            src={ProfileImage}
            alt="ProfileImage"
            width={112}
            height={112}
            className="w-60 h-60 rounded-xl object-cover relative"
          />
        </div>
        {/* BIOGRAPHY TITLE */}
        <Text
          colorTitle="Biografie"
          colorTitleSize="text-3xl md:text-3xl "
          colorTitleFont="font-bold font-serif"
        />
        {/* BIOGRAPHY DESC */}
        <Text
          title="Ich bin ein Absolvent der Technischen Informatik mit einem
        Bachelor of Engineering im Bereich Embedded Systems. Als
        Werkstudent war ich für die Modellierung und Implementierung von
        IT-Sicherheitsprodukten sowie in der Erstellung technischer
        Dokumentationen verantwortlich. Meine Abschlussarbeit
        konzentrierte sich auf die Entwicklung einer
        Android-Applikation."
          titleSize="text-lg md:text-2xl"
        ></Text>
        {/* BIOGRAPHY QUOTE */}
        <Text
          description="Die Technologie ist das Werkzeug, mit dem wir die Zukunft
        gestalten."
          descriptionSize="text-lg md:text-2xl"
          descriptionFont="font-sans"
        ></Text>
        {/* BIOGRAPHY SIGN SVG*/}
        <div className="self-end">
          <svg
            width="352"
            height="177"
            viewBox="0 0 352 177"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9747 140.036C17.4103 140.197 12.1484 146.301 11.0135 148.331C8.76688 152.348 13.2554 156.643 22.3029 158.836C40.5432 163.258 47.8371 154.124 56.0204 149.207C97.6686 124.182 140.233 98.1577 169.518 70.5126C188.047 53.0216 203.79 34.5912 215.42 16.215C223.22 3.89133 201.478 41.0124 194.217 53.3858C182.286 73.7201 174.944 94.0674 171.647 114.863C171.417 116.311 170.408 122.679 171.245 117.399C171.897 113.289 172.815 109.236 170.568 105.162C166.944 98.5916 159.396 91.3428 138.768 92.7897C87.5467 96.3827 46.7749 122.331 25.0142 138.432C15.5796 145.413 4.91587 153.451 2.26618 161.41C-0.71326 170.361 28.1708 170.534 43.2615 168.606C100.031 161.355 149.843 143.271 186.448 125.504C221.519 108.481 253.535 89.0278 274.743 68.7612C279.051 64.6452 331.027 7.27861 302.787 6.60077C290.44 6.30439 276.84 13.8969 270.415 16.8222C228.466 35.9213 192.804 57.5143 158.781 78.8092C137.238 92.2927 116.35 106.071 105.302 121.468C98.1845 131.388 86.4792 147.349 102.427 156.94C117.861 166.224 143.722 154.454 155.459 150.117C158.57 148.968 172.165 141.31 171.515 145.411C171.105 147.998 170.695 150.585 170.285 153.172C170.007 154.926 182.439 136.925 188.176 137.715C198.666 139.158 196.669 165.037 199.754 145.58C200.105 143.362 196.708 136.021 203.203 135.377C215.822 134.126 234.969 134.506 247.33 136.029C261.87 137.82 217.626 145.352 226.415 147.442C234.968 149.475 248.64 146.253 255.12 144.668C256.189 144.407 272.841 140.656 269.921 139.626C266.555 138.439 254.145 140.878 251.447 141.423C246.491 142.424 227.712 151.032 241.187 151.666C255.034 152.318 261.875 146.963 268.706 143.161C270.682 142.062 287.607 133.467 293.149 135.906C306.126 141.62 321.755 150.194 327.428 157.402"
              stroke="#009999"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M347.225 149.146C339.378 151.107 329.382 153.469 328.156 157.271C327.676 158.762 328.632 154.272 328.702 153.827C329.631 147.968 330.312 142.146 334.422 136.442C337.888 131.632 344.758 127.32 345.556 122.286"
              stroke="#009999"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M348.501 113C348.302 114.506 348.311 115.566 348.501 116.174"
              stroke="#009999"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
