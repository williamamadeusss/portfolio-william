"use client";

import Image from "@/components/ui/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Project, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      id="projects"
      className="flex flex-col gap-16 bg-backgroundBlack px-4 py-10 text-background lg:px-10 lg:py-20 xl:px-20"
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
      {/* image / video background */}
      {project.video ? (
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full rounded-lg object-cover"
          loop
        >
          <source src={project.thumbnail} />
        </video>
      ) : (
        <Image
          src={project.thumbnail}
          alt={project.title}
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}

      {/* dark overlay */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-black/85 transition-opacity duration-300",
          hoveredCard === project.projectSlug ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "absolute flex h-full w-full flex-col justify-end gap-2 p-8 transition-opacity duration-300",
          hoveredCard === project.projectSlug ? "opacity-100" : "opacity-0",
        )}
      >
        <h3 className="font-montserrat text-smallHeading font-bold text-primary">
          {project.title}
        </h3>
        <p className="text-medium">{project.shortDescription}</p>
        {/* <p>tech stacks</p> */}
        <Button className="mt-4">LEARN MORE</Button>
      </div>
    </Link>
  );
}
