import React from "react";
import SectionDivider from "../SectionDivider";

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
    <div className="py-6 lg:py-16">
      <SectionDivider page="About" />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-16 py-6">
        <span className="opacity-50 font-medium text-[20px] mb-6">
          A little about me
        </span>

        <div>
          <p className="text-[20px]">
            I&apos;m a creative problem-solver who loves turning tricky
            challenges into smooth, enjoyable digital experiences. With a knack
            for designing beautiful, easy-to-use interfaces, I bring ideas to
            life in fun and meaningful ways.
          </p>

          <p className="text-[20px] my-20">
            My philosophy is centered around empathy, curiosity, and
            collaboration.
          </p>

          <div className="grid gap-6">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-secondary p-6 text-primary rounded-lg divide-x divide-[#121212]"
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
      </div>
    </div>
  );
};

export default About;
