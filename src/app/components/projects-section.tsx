"use client";

import Image from "@/components/ui/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  projectSlug: string;
  shortDescription: string;
  url: string;
  techStacks: string[];
  thumbnail: string;
}

const projects = [
  {
    title: "Indramas",
    projectSlug: "indramas",
    shortDescription: "shortDescription 1",
    url: "https://indramas.flonkin.com/",
    techStacks: [],
    thumbnail: "",
  },
  {
    title: "Personal Website",
    projectSlug: "personal-website",
    shortDescription: "shortDescription 2",
    url: "https://indramas.flonkin.com/",
    techStacks: [],
    thumbnail: "",
  },
  {
    title: "Stokku",
    projectSlug: "stokku",
    shortDescription: "shortDescription 1",
    url: "https://stokku.netlify.app/",
    techStacks: [],
    thumbnail: "",
  },
  {
    title: "GAEA",
    projectSlug: "gaea",
    shortDescription: "shortDescription 2",
    url: "https://gaea.co.id/",
    techStacks: [],
    thumbnail: "/images/projects/homepage-gaea.png",
  },
];

export default function ProjectsSection() {
  let [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      id="projects"
      className="flex flex-col gap-20 bg-backgroundBlack px-20 py-16 text-background"
    >
      <h2 className="text-center font-montserrat text-mediumHeading font-extrabold tracking-wide">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  hoveredCard,
  setHoveredCard,
}: {
  project: Project;
  hoveredCard: string | null;
  setHoveredCard: (data: string | null) => void;
}) {
  return (
    <Link
      className={cn(
        "relative flex flex-col gap-4 rounded-lg transition-all duration-300 ease-out",
        hoveredCard !== null &&
          hoveredCard !== project.projectSlug &&
          "scale-[0.99] blur-sm",
      )}
      href={`/${project.projectSlug}`}
      onMouseEnter={() => setHoveredCard(project.projectSlug)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* image background */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        className="aspect-video w-full rounded-lg object-cover"
      />

      {/* dark overlay */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-black/80 transition-opacity duration-300",
          hoveredCard === project.projectSlug ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "absolute flex h-full w-full flex-col justify-end gap-3 p-8 transition-opacity duration-300",
          hoveredCard === project.projectSlug ? "opacity-100" : "opacity-0",
        )}
      >
        <h3 className="text-smallHeading font-bold text-background">
          {project.title}
        </h3>

        <p className="">{project.shortDescription}</p>
      </div>
    </Link>
  );
}
