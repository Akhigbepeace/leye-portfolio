import React from "react";
import PageBanner from "./PageBanner";
import { ProjectImages } from "../types/projects";
import { Link } from "react-router-dom";

export const projectImages: ProjectImages[] = [
  { image: "/assets/images/bims.png", alt: "bims", slug: "bims" },
  { image: "/assets/images/msp.png", alt: "msp", slug: "msp" },
  { image: "/assets/images/metamo.png", alt: "metamo", slug: "metamo" },
  { image: "/assets/images/cbs.png", alt: "cbs", slug: "cbs" },
  { image: "/assets/images/bims.png", alt: "flexi", slug: "flexi" },
  { image: "/assets/images/vamcards.png", alt: "vamcards", slug: "vamcards" },
];
const Project = () => {
  return (
    <div className="py-10">
      <PageBanner heading="Project" />

      <div className="grid lg:grid-cols-2 gap-10 py-6 lg:py-0 lg:px-36 px-6">
        {projectImages.map((project) => (
          <Link key={project.slug} to={`/project/${project.slug}`}>
            <img src={project.image} alt={project.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
