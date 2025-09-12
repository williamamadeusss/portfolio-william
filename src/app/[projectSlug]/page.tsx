import { projects } from "@/data/projects";
import React from "react";

export async function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.projectSlug }));
}

export default async function ProjectSlug({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  return <div>{projectSlug}</div>;
}
