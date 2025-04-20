"use client";

import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";

export default function BiodataSection() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
      <div className="flex flex-col gap-12 pt-10 lg:w-3/5 lg:pt-20">
        <div className="flex h-fit flex-col gap-4 border-b-[6px] border-primary pb-5">
          <h1 className="text-6xl font-extrabold tracking-wide">
            WILLIAM AMADEUS
          </h1>
          <p className="text-3xl font-semibold">A Software Engineer</p>
        </div>

        <p className="text-xl font-medium tracking-wide">
          Hi! I’m William — a website developer at Sprout Digital Labs with a
          strong passion for building thoughtful, user-focused web experiences.
          I’m currently pursuing my Bachelor’s degree in Computer Science at
          Bina Nusantara University, where I’m constantly learning and
          sharpening my skills in front-end development and modern web
          technologies.
        </p>
      </div>

      <Image
        src="/images/will.jpg"
        alt="foto will"
        className="aspect-square rounded-lg object-cover lg:w-2/5 lg:rounded-full"
      />
    </div>
  );
}
