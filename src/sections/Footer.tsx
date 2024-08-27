import Logo from "@/assets/logo1.svg";
import Xing from "@/assets/socials/social-xing.svg";
import Linkedin from "@/assets/socials/social-linkedin.svg";
import Github from "@/assets/socials/social-github.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AAC portfolio</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              AA&AF Chizari 
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
          <a href="https://www.linkedin.com/in/amir-chizari-2047192a7/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white/70 hover:text-white transition" />
            </a>
            <a href="https://www.xing.com/profile/Amir_Chizari061776/web_profiles?expandNeffi=true" target="_blank" rel="noopener noreferrer">
              <Xing className="text-white/70 hover:text-white transition" />
            </a>
            <a href="https://github.com/AAChizari" target="_blank" rel="noopener noreferrer">
              <Github className="text-white/70 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};