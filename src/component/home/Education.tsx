import React from "react";
import SectionDivider from "../SectionDivider";

type EducationData = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

const Education = () => {
  const education: EducationData[] = [
    {
      degree: "Master of Project Management",
      institution: "Rome Business School",
      duration: "2024 - Present",
      description:
        "Specialized in business management, entrepreneurship, marketing, and innovation, with a strong focus on international business, leadership development, and industry-aligned learning.",
    },
    {
      degree: "Bachelor's in Public Administration",
      institution: "Obafemi Awolowo University ",
      duration: "2012 — 2018",
      description:
        "Specialized in governance, policy analysis, public sector management, organizational development, and leadership, with a focus on effective decision-making and public service excellence.",
    },
  ];

  return (
    <>
      <SectionDivider page="Education" />

      <div className="grid lg:grid-cols-2 gap-10 py-16">
        {education.map((education, index) => (
          <div
            key={index}
            className="grid gap-1 text-[20px] pb-16 border-b border-b-[#444444]"
          >
            <h4>{education.degree}</h4>
            <h4 className="opacity-50">{education.institution}</h4>
            <h4 className="opacity-50">{education.duration}</h4>
            <p>{education.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
