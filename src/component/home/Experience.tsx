import React from "react";
import SectionDivider from "../SectionDivider";

type Experiences = {
  designation: string;
  company: string;
  duration: string;
  description: string;
};

const Experience = () => {
  const experiences: Experiences[] = [
    {
      designation: "Senior UI/UX designs",
      company: "Krystal Digitals",
      duration: "July 2023 - Present",
      description:
        "Spearheaded the design and development of the MySkool Portal app, driving 10,000+ downloads and boosting user engagement.",
    },
    {
      designation: "Senior UI/UX designs",
      company: "Krystal Digitals",
      duration: "July 2023 - Present",
      description:
        "Spearheaded the design and development of the MySkool Portal app, driving 10,000+ downloads and boosting user engagement.",
    },
    {
      designation: "Senior UI/UX designs",
      company: "Krystal Digitals",
      duration: "July 2023 - Present",
      description:
        "Spearheaded the design and development of the MySkool Portal app, driving 10,000+ downloads and boosting user engagement.",
    },
    {
      designation: "Senior UI/UX designs",
      company: "Krystal Digitals",
      duration: "July 2023 - Present",
      description:
        "Spearheaded the design and development of the MySkool Portal app, driving 10,000+ downloads and boosting user engagement.",
    },
  ];

  return (
    <>
      <SectionDivider page="Experience" />

      <div className="grid lg:grid-cols-2 gap-10 py-6 lg:py-16">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="grid gap-1 text-[20px] pb-16 border-b border-b-[#444444]"
          >
            <h4>{experience.designation}</h4>
            <h4 className="opacity-50">{experience.company}</h4>
            <h4 className="opacity-50">{experience.duration}</h4>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
