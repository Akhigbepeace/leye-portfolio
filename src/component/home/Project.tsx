import React from "react";
import SectionDivider from "../SectionDivider";

const Project = () => {
  const projects: string[] = [
    "/assets/images/bims.png",
    "/assets/images/msp.png",
    "/assets/images/metamo.png",
    "/assets/images/cbs.png",
  ];

  return (
    <>
      <SectionDivider page="Project" />

      <div className="grid lg:grid-cols-2 gap-10 py-6 lg:py-16">
        {projects.map((project, index) => (
          <img key={index} src={project} alt="project" />
        ))}
      </div>
    </>
  );
};

export default Project;
