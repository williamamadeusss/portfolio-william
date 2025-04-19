"use client";

import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";

export default function BiodataSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="flex flex-col gap-10">
        <div className="h-fit flex flex-col gap-4 pb-10 border-b-[6px] border-primary pt-20 ">
          <h1 className="text-5xl font-extrabold">William Amadeus</h1>
          <p className="text-2xl font-semibold">A Software Engineer</p>
        </div>

        <p className="text-xl">
          Hi! I’m William Amadeus — a website developer at Sprout Digital Labs
          with a strong passion for building thoughtful, user-focused web
          experiences. I’m currently pursuing my Bachelor’s degree in Computer
          Science at Bina Nusantara University, where I’m constantly learning
          and sharpening my skills in front-end development and modern web
          technologies.
        </p>
      </div>

      <Image
        src="/images/will-3.png"
        alt="foto will"
        className="rounded-sm lg:rounded-lg aspect-square"
      />
    </div>
  );
}
