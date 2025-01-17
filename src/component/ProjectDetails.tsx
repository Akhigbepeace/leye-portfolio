import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/project";
import { Projects } from "../types/projects";
import { projectImages } from "./Project";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects[slug as keyof Projects];

  const { client, date, industry, mainDesc, projectDetails, service, title } =
    project;

  const data = [
    {
      heading: "Industry",
      content: industry,
    },
    {
      heading: "Client",
      content: client,
    },
    {
      heading: "Service",
      content: service,
    },
    {
      heading: "Date",
      content: date,
    },
  ];

  const otherProjects = projectImages.filter(
    (project) => project.slug !== slug
  );

  return (
    <div className="px-6 lg:px-36">
      <h1 className="mt-16 mb-10 font-medium text-4xl font-dm_sans text-center">
        {title}
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 py-10 items-start font-light">
        <div className="grid grid-cols-2 gap-3 lg:text-xl text-md lg:mb-0 mb-5">
          {data.map((item, index) => (
            <div key={index}>
              <h4 className="opacity-50">{item.heading}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>

        <p className="text-[#F0F0F0] lg:text-2xl text-md">{mainDesc}</p>
      </div>
      <div>
        {projectDetails.map((detail, index) => (
          <div key={index} className="lg:py-10 py-5 grid gap-10">
            <img src={detail.image} alt={detail.image} />
            <span>{detail.descriptions}</span>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center border-b border-b-[#444444] lg:p-10 lg:pb-0 pb-5 opacity-50 font-light text-md lg:text-xl">
          <Link to="#">MORE PROJECTS</Link>
          <Link to="#">VIEW ALL PROJECTS</Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 py-6 lg:py-0 lg:px-36 px-6">
          {otherProjects.slice(0, 2).map((project) => (
            <Link key={project.slug} to={`/project/${project.slug}`}>
              <img src={project.image} alt={project.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
