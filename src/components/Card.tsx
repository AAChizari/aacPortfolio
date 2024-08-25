import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import grain from "@/assets/grain.jpg";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:outline-2-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ;p-6',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
