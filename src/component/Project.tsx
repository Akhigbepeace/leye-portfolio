import React from "react";
import PageBanner from "./PageBanner";

const Project = () => {
  const projects: string[] = [
    "/assets/images/bims.png",
    "/assets/images/msp.png",
    "/assets/images/metamo.png",
    "/assets/images/cbs.png",
    "/assets/images/metamo.png",
    "/assets/images/cbs.png",
  ];

  return (
    <div className="py-10">
      <PageBanner heading="Project" />

      <div className="grid lg:grid-cols-2 gap-10 py-6 lg:py-0 lg:px-36 px-6">
        {projects.map((project, index) => (
          <img key={index} src={project} alt="project" />
        ))}
      </div>
    </div>
  );
};

export default Project;
