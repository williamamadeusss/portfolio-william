import Image from "@/components/ui/image";
import React from "react";

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Indramas",
    description: "Description 1",
    url: "https://indramas.flonkin.com/",
    image: "",
  },
  {
    name: "Personal Website",
    description: "Description 2",
    url: "https://indramas.flonkin.com/",
    image: "",
  },
  {
    name: "Stokku",
    description: "Description 1",
    url: "https://stokku.netlify.app/",
    image: "",
  },
  {
    name: "GAEA",
    description: "Description 2",
    url: "https://gaea.co.id/",
    image: "/images/projects/homepage-gaea.png",
  },
];

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex flex-col gap-20 bg-backgroundBlack px-20 py-16 text-background"
    >
      <h2 className="text-center font-montserrat text-mediumHeading font-extrabold tracking-wide">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-smallHeading font-bold text-background">
        {project.name}
      </h3>

      <Image
        src={project.image}
        alt={project.name}
        className="aspect-video w-full rounded-lg object-cover"
      />
      <p className="">{project.description}</p>
    </div>
  );
}
