import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const Showcase = () => {
  return (
    <div className="relative h-[878px]">
      <img
        src="/assets/images/portrait.png"
        alt="portrait"
        className="w-full h-[1000px] object-cover relative top-[-120px]"
      />

      <div className="flex flex-col items-center justify-center text-center absolute top-0 bg-primary bg-opacity-90 w-full lg:h-auto h-full">
        <h6 className="uppercase text-white opacity-50 font-medium text-sm mb-6">
          User Advocate…keeping it simple!
        </h6>

        <h1 className="text-secondary font-big_shoulders_display font-extrabold text-[100px] lg:text-[200px] leading-[100px] lg:leading-[220px]">
          LEYE <br /> OLADIPO
        </h1>

        <div className="my-16">
          <PiStarFourFill size={48} color="#E0F11F" />
        </div>

        <p className="text-[20px]">
          I&apos;m Leye Oladipo— I&apos;m a product designer from Nigeria making
          useful things <br /> for the internet and exploring the world.
        </p>

        <div className="flex flex-col items-center justify-center gap-2 my-16">
          <div className="w-1 h-10 bg-[#444444]">
            <div className="bg-secondary w-1 h-5" />
          </div>

          <span className="opacity-50">SCROLL</span>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
