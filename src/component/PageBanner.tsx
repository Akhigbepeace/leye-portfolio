import React from "react";
import { PiStarFourFill } from "react-icons/pi";

type PageBannerProp = {
  heading: string;
};

const PageBanner = ({ heading }: PageBannerProp) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-secondary font-big_shoulders_display font-extrabold text-[100px] lg:text-[160px] leading-[100px] lg:leading-[200px] uppercase">
        {heading}
      </h1>

      <div className="my-16">
        <PiStarFourFill size={48} color="#E0F11F" />
      </div>
    </div>
  );
};

export default PageBanner;
