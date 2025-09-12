"use client";

import { LeftArrowIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";

export default function ViewAllProjectsButton() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("pendingScrollSection", "projects");
        }
      }}
    >
      <LeftArrowIcon className="duration-200 group-hover:text-primary" />
      <p className="text-medium duration-200 group-hover:text-primary">
        VIEW ALL PROJECTS
      </p>
    </Link>
  );
}
