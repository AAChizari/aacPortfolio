import ArrowUpRightIcon from "@/assets/arrow-up-right.svg";
import { FrameEffect } from "@/components/FrameEffect";

export const Contact = () => {
  return (
    <div className="py-16 pt-12 lg:pt-20 lg:py-24">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="flex flex-col md:flex-row md:text-left items-center gap-8 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif">
                Ipsum dolor sit amet.
              </h2>
              <p className="text-sm md:base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
            <div className="max-content">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white/20 hover:border-white/40">
                <span className="font-semibold">Contact me</span>
                <ArrowUpRightIcon className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
