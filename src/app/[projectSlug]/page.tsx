import Image from "@/components/ui/image";
import { projects } from "@/data/projects";
import React from "react";
import ViewAllProjectsButton from "./components/view-all-projects-button";
import Link from "next/link";
import ProjectsNavigationCTA from "./components/projects-navigation-cta";

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

  function renderProjectOverviews({
    label,
    content,
    link,
  }: {
    label: string;
    content: string;
    link?: boolean;
  }) {
    return (
      <div className="flex flex-col gap-1">
        <p className="text-smallMedium">{label}</p>
        {link ? (
          <Link
            href={`https://${content}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mediumLarge font-semibold text-primary hover:underline"
          >
            {content}
          </Link>
        ) : (
          <p className="text-mediumLarge font-semibold text-primary">
            {content}
          </p>
        )}
      </div>
    );
  }

  if (!project?.projectSlug || project.projectSlug === "")
    return <div>not found</div>;

  return (
    <div className="my-20 flex flex-col gap-20 px-20">
      <ViewAllProjectsButton />
      <div className="flex w-full flex-col justify-center gap-10 px-20">
        {/* header */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-montserrat text-bigHeading font-bold uppercase text-primary">
            {project?.title}
          </h1>
          <h2 className="text-large">{project?.shortDescription}</h2>
        </div>

        {/* thumbnail and project overview */}
        <div className="flex flex-col items-center gap-4">
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

          {/* project overview */}
          <div className="flex w-full items-center justify-between gap-4">
            {renderProjectOverviews({
              label: "LIVE SITE",
              content: project.url,
              link: true,
            })}
            {renderProjectOverviews({
              label: "ROLE",
              content: project.role,
            })}
            {renderProjectOverviews({
              label: "TECH STACKS",
              content: project.techStacks,
            })}
            {renderProjectOverviews({
              label: "TIMELINE",
              content: project.timeline,
            })}
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-10 px-20">
        {/* Challenge and goal */}
        <div className="flex flex-col gap-4">
          <h2 className="font-montserrat text-smallHeading font-bold">
            The Challenge
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus corrupti eum optio dolore commodi sequi quis, deleniti
            asperiores, quia, ratione sit id dolorem nemo dolor! Laborum aperiam
            ipsum fugit exercitationem.
          </p>
        </div>

        {/* Solutions n lessons learned */}
        <div className="flex flex-col gap-4">
          <h2 className="font-montserrat text-smallHeading font-bold">
            Solution & Lessons Learned
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            eligendi totam quas quod iure accusantium exercitationem error ullam
            ipsa porro laboriosam iusto magnam vero quos nesciunt, sapiente
            reprehenderit, explicabo facere!
          </p>
        </div>
      </div>

      <ProjectsNavigationCTA projectSlug={projectSlug} />
    </div>
  );
}
