"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LeftArrowIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function ProjectsNavigationCTA({
  projectSlug,
}: {
  projectSlug: string;
}) {
  const router = useRouter();

  function viewNextProject() {
    projects.map((project, index) => {
      if (project.projectSlug === projectSlug) {
        if (index === projects.length - 1) {
          router.push(`/${projects[0].projectSlug}`);
        } else {
          router.push(`/${projects[index + 1].projectSlug}`);
        }
      }
    });
  }

  function viewPreviousProject() {
    projects.map((project, index) => {
      if (project.projectSlug === projectSlug) {
        if (index === 0) {
          router.push(`/${projects[projects.length - 1].projectSlug}`);
        } else {
          router.push(`/${projects[index - 1].projectSlug}`);
        }
      }
    });
  }

  return (
    <div className="flex w-full justify-center gap-10">
      <Button
        size={"large"}
        onClick={() => {
          viewPreviousProject();
        }}
      >
        <LeftArrowIcon />
        <p>Previous Project</p>
      </Button>

      <Button
        size={"large"}
        onClick={() => {
          viewNextProject();
        }}
      >
        <p>Next Project</p>
        <LeftArrowIcon className="rotate-180" />
      </Button>
    </div>
  );
}
