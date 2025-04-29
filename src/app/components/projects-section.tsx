import React from "react";

interface Project {
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Indramas",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Personal Website",
    description: "Description 2",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Inventory Management System",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bimbel Hope",
    description: "Description 2",
    image: "https://via.placeholder.com/150",
  },
];

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex h-screen flex-col gap-12 bg-backgroundBlack px-20 py-16 text-background"
    >
      <h2 className="text-center font-montserrat text-mediumHeading font-extrabold tracking-wide">
        PROJECTS
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-4">
      <h3 className="text-smallHeading font-bold text-background">
        {project.name}
      </h3>
    </div>
  );
}
