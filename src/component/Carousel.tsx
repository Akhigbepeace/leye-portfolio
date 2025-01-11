import React from "react";
import Marquee from "react-fast-marquee";

type CarouselData = {
  carouselData: string[];
  direction?: "left" | "right" | "up" | "down";
};

const CarouselInfo = ({ carouselData, direction = "left" }: CarouselData) => {
  return (
    <Marquee
      direction={direction}
      autoFill={true}
      gradient={true}
      gradientColor="black"
      className="overflow-hidden"
    >
      {carouselData.map((data, index) => (
        <h1
          key={index}
          className="text-secondary font-big_shoulders_display font-extrabold text-[100px] lg:text-[200px] leading-[100px] lg:leading-[200px] uppercase mx-10"
        >
          {data}
        </h1>
      ))}
    </Marquee>
  );
};

export default CarouselInfo;
