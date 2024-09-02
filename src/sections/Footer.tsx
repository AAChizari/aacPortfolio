import Logo from "@/assets/logo2.svg";
import Xing from "@/assets/socials/social-xing.svg";
import Linkedin from "@/assets/socials/social-linkedin.svg";
import Github from "@/assets/socials/social-github.svg";

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r bg-orange-500/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col lg:flex-row md:flex-row md:justify-between item-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AAC portfolio</div>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              AA&AF Chizari
            </a>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <a
              href="https://www.linkedin.com/in/amir-chizari-2047192a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-white/70 hover:text-white transition" />
            </a>
            <a
              href="https://www.xing.com/profile/Amir_Chizari061776/web_profiles?expandNeffi=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Xing className="text-white/70 hover:text-white transition" />
            </a>
            <a
              href="https://github.com/AAChizari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-white/70 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
