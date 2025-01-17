type ProjectImages = {
  image: string;
  alt: ProjectName;
  slug: ProjectName;
};

type ProjectName = "flexi" | "bims" | "metamo" | "vamcards" | "msp" | "cbs";

type ProjectDetails = {
  image: string;
  descriptions: string;
};

type Project = {
  title: string;
  industry: string;
  client: string;
  date: string;
  service: string;
  mainDesc: string;
  projectDetails: ProjectDetails[];
};

type Projects = {
  [key in ProjectName]: Project;
};

export type { Projects, ProjectImages, Project };
