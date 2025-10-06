"use client";

import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Project, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/lib/media-query";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function ProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      id="projects"
      className="relative flex flex-col gap-6 overflow-hidden bg-backgroundBlack px-4 py-10 text-background lg:gap-10 lg:px-10 lg:py-20 xl:px-20"
    >
      <Spotlight />
      <h2 className="text-center font-montserrat text-smallHeading font-extrabold tracking-wide lg:text-bigHeading">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 512px)");

  return (
    <Link
      className={cn(
        "relative flex flex-col gap-2 rounded-md transition-all duration-300 ease-out md:rounded-lg",
        hoveredCard !== null &&
          hoveredCard !== project.projectSlug &&
          "scale-[0.99] blur-md",
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
          className="h-full w-full rounded-md object-cover md:rounded-lg"
          loop
        >
          <source src={project.thumbnail} />
        </video>
      ) : (
        <div className="relative aspect-video w-full rounded-md md:rounded-lg">
          <Image
            loading="lazy"
            src={project.thumbnail}
            alt={project.title}
            fill
            className="rounded-md object-cover md:rounded-lg"
          />
        </div>
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
          "flex h-full w-full flex-col justify-end gap-1 transition-opacity duration-300 lg:absolute lg:gap-2 lg:p-8",
          hoveredCard === project.projectSlug ? "opacity-100" : "lg:opacity-0",
        )}
      >
        <h3 className="font-montserrat text-title font-bold text-primary lg:text-smallHeading">
          {project.title}
        </h3>
        <p className="line-clamp-1 text-smallMedium lg:line-clamp-2 lg:text-medium">
          {project.shortDescription}
        </p>
        {/* <p>tech stacks</p> */}
        <Button
          intent={"secondary"}
          className="mt-3 lg:mt-4"
          size={isSmallDevice ? "small" : "default"}
        >
          LEARN MORE
        </Button>
      </div>
    </Link>
  );
}
