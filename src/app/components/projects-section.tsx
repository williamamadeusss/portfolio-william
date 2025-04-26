import React from "react";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex h-screen flex-col gap-8 bg-backgroundBlack px-20 py-12 text-background"
    >
      <h2 className="text-center text-mediumHeading font-bold">PROJECTS</h2>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-mediumHeading font-bold">Project Name</h3>
    </div>
  );
}
