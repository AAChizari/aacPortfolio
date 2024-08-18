import { ReactNode } from "react";

interface ButtonSkillProps {
  children: ReactNode;
  className?: string;
}

export const ButtonSkill: React.FC<ButtonSkillProps> = ({ children, className = '' }) => {
  return (
    <button className={`relative py-2 px-3 font-medium rounded-lg p-2 text-sm cursor-default overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-black group-hover:bg-white transition-colors duration-300 ease-in-out"></div>
      <div className="absolute inset-0">
        <div className="rounded-lg border border-[#009999] absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-[#009999] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_#009999_inset] rounded-lg"></div>
      </div>
      <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 ease-in-out">{children}</span>
    </button>
  );
};