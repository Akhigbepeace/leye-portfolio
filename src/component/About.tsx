import React from "react";
import PageBanner from "./PageBanner";

type Stacks = {
  percentage: string;
  title: string;
  description: string;
};

const About = () => {
  const stacks: Stacks[] = [
    {
      percentage: "93%",
      title: "Figma",
      description: "User interface design tool",
    },
    {
      percentage: "74%",
      title: "Webflow",
      description: "No code website builder tool",
    },
    {
      percentage: "62%",
      title: "Photoshop",
      description: "Graphics design software",
    },
    {
      percentage: "93%",
      title: "Notion",
      description: "Product Documentation",
    },
  ];
  return (
    <div className="py-10">
      <PageBanner heading="About" />

      <div className="lg:flex block items-center mx-auto lg:w-max gap-10 p-6 lg:px-36 lg:py-32">
        <div className="relative mb-10 lg:mb-0">
          <img
            src="/assets/images/portrait.png"
            alt="Olaleye Oladipo"
            className="absolute lg:right-9 lg:bottom-16 right-4 bottom-10"
          />

          <div className="bg-secondary lg:w-[420px] lg:h-[540px] h-[450px] rounded-3xl" />
        </div>

        <div className="lg:text-xl text-lg w-full lg:mx-auto lg:leading-8 lg:w-[480px]">
          Hi, I&apos;m a product designer driven by a passion for turning
          complexity into clarity. At the intersection of design and technology,
          I specialize in crafting intuitive, visually striking interfaces that
          don&apos;t just look good—they feel right. With over four years of
          experience, I&apos;ve honed the art of transforming intricate systems
          into seamless, user-centered solutions that delight users and drive
          results. <br />
          <br />
          <span className="opacity-50">
            My journey started with a Bachelor&apos;s in Public Administration
            from Obafemi Awolowo University, where I developed a knack for
            understanding systems and people. Now, as I pursue my Master&apos;s
            in Project Management at the Rome Business School, I&apos;m
            sharpening my ability to bridge creativity with strategy—a skill
            that&apos;s pivotal in the fast-paced world of product design.
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-6 lg:px-36 lg:py-32">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-secondary p-6 text-primary rounded-lg divide-x divide-primary"
          >
            <div className="lg:w-[176px]">
              <h4 className="font-bold text-[24px] mb-2">{stack.title}</h4>
              <p className="font-light text-[18px]">{stack.description}</p>
            </div>
            <h1 className="font-bold text-[40px] lg:text-[50px] pl-10 lg:pl-16 opacity-50">
              {stack.percentage}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
