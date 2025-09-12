import Image from "@/components/ui/image";
import { projects } from "@/data/projects";
import React from "react";
import ViewAllProjectsButton from "./components/view-all-projects-button";
import { LinkIcon } from "@/components/icons";

export async function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.projectSlug }));
}

export default async function ProjectSlug({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = projects.find(
    (project) => project.projectSlug === projectSlug,
  );

  if (!project?.projectSlug || project.projectSlug === "")
    return <div>not found</div>;

  return (
    <div className="mt-20 flex flex-col gap-20 px-20">
      <ViewAllProjectsButton />
      <div className="flex w-full flex-col justify-center gap-10 px-20">
        {/* header */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-montserrat text-bigHeading font-bold uppercase text-primary">
            {project?.title}
          </h1>
          <h2 className="text-large">{project?.shortDescription}</h2>

          <div className="flex items-center gap-2">
            <LinkIcon />
          </div>
        </div>

        {/* thumbnail */}
        {project?.video ? (
          <video
            autoPlay
            muted
            playsInline
            className="aspect-video h-full w-full rounded-md object-cover"
            loop
          >
            <source src={project.thumbnail} />
          </video>
        ) : (
          <Image
            src={project?.thumbnail!}
            alt={project?.title!}
            className="aspect-video w-full rounded-md object-cover"
          />
        )}
      </div>
    </div>
  );
}
