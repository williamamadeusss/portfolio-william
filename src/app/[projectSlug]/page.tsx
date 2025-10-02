import { projects } from "@/data/projects";
import React from "react";
import ViewAllProjectsButton from "./components/view-all-projects-button";
import Link from "next/link";
import ProjectsNavigationCTA from "./components/projects-navigation-cta";
import Image from "next/image";

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
        <p className="text-small lg:text-smallMedium">{label}</p>
        {link ? (
          <Link
            href={`https://${content}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-medium font-semibold text-primary hover:underline lg:text-mediumLarge"
          >
            {content}
          </Link>
        ) : (
          <p className="text-medium font-semibold text-primary lg:text-mediumLarge">
            {content}
          </p>
        )}
      </div>
    );
  }

  if (!project?.projectSlug || project.projectSlug === "")
    return <div>not found</div>;

  return (
    <div className="my-8 flex flex-col gap-14 px-4 lg:my-10 lg:gap-20 lg:px-10 xl:my-20 xl:px-20">
      <ViewAllProjectsButton />
      <div className="flex w-full flex-col justify-center gap-10 px-0 lg:px-14 xl:px-20">
        {/* header */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-montserrat text-mediumHeading font-bold uppercase text-primary lg:text-bigHeading">
            {project?.title}
          </h1>
          <h2 className="text-medium lg:text-large">
            {project?.shortDescription}
          </h2>
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
            <div className="relative aspect-video w-full rounded-md">
              <Image
                priority
                loading="eager"
                src={project?.thumbnail!}
                alt={project?.title!}
                fill
                className="rounded-md object-cover object-center"
              />
            </div>
          )}

          {/* project overview */}
          <div className="grid w-full grid-cols-2 justify-between gap-4 lg:grid-cols-4">
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
      <div className="flex flex-col gap-6 px-0 lg:gap-10 lg:px-10 xl:px-20">
        {/* Challenge and goal */}
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="font-montserrat text-title font-bold lg:text-smallHeading">
            The Challenge
          </h2>
          <p className="text-smallMedium lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus corrupti eum optio dolore commodi sequi quis, deleniti
            asperiores, quia, ratione sit id dolorem nemo dolor! Laborum aperiam
            ipsum fugit exercitationem.
          </p>
        </div>

        {/* Solutions n lessons learned */}
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="font-montserrat text-title font-bold lg:text-smallHeading">
            Solution & Lessons Learned
          </h2>
          <p className="text-smallMedium lg:text-base">
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
